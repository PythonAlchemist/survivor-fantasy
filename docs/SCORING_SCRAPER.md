# Automated Scoring Scraper

## Overview

Scrape episode results from public sources the day after each episode airs (Wednesdays, since episodes air Tuesday 8pm ET). Generate the `episodes.ts` entry automatically and either open a PR or commit directly.

## Data Sources

### Primary: Survivor Wiki (Fandom)

**URL pattern:** `https://survivor.fandom.com/wiki/EPISODE_TITLE`

The wiki is the best structured source. Updated by fans within hours of airing. Each episode page contains:

| Section | What we extract | Scoring events |
|---------|----------------|----------------|
| Challenge Results table | Winning tribe(s), individual winners | `tribal_win`, `individual_immunity`, `individual_reward` |
| Tribal Council vote table | Who voted for whom, final tally | `correct_vote`, `voted_out` |
| Vote tally | Who received votes | `zero_votes_received` (anyone at tribal who got 0 votes) |
| Idol/Advantage plays | Who played, whether it was successful | `find_idol`, `play_idol_correctly`, `find_advantage`, `use_advantage_successfully` |
| Episode outcome | Who was eliminated, how | `voted_out`, `quit_medevac` |

**Season page (episode list):** `https://survivor.fandom.com/wiki/Survivor_50:_In_the_Hands_of_the_Fans`

This page has a table of all episodes with links. Use this to discover new episode pages.

**Voting history page:** `https://survivor.fandom.com/wiki/Survivor_50:_In_the_Hands_of_the_Fans/Voting_History`

Complete vote table for the season. Each column is an episode's tribal council. Rows are players. Cells show who they voted for. This is the cleanest source for `correct_vote` and `zero_votes_received`.

### Secondary: Entertainment press recaps

Use as cross-reference if wiki data is ambiguous.

- **EW (Dalton Ross):** `https://ew.com/recap/survivor-season-50-episode-N/`
- **Parade (Mike Bloom):** `https://parade.com/tv/survivor-season-50-episode-N-recap`
- **Reality Blurred:** `https://www.realityblurred.com/realitytv/`

## Scoring Event Extraction Logic

### Survive Episode (`survive_episode`, +1)
Every player not eliminated this episode gets this. Compare the active player list before and after.

### Survive Tribal Council (`survive_tribal`, +2)
Every player who **attended** tribal council and was **not** voted out. Requires knowing which tribe went to tribal (from challenge results) and who was eliminated.

### Tribal Challenge Win (`tribal_win`, +2)
All members of the winning tribe(s) in the immunity challenge. Pre-merge only.

### Individual Immunity Win (`individual_immunity`, +5)
The winner of the individual immunity challenge. Post-merge only.

### Individual Reward Win (`individual_reward`, +2)
The winner of any individual reward challenge. Sometimes includes people chosen to share the reward — **only the challenge winner gets points**, not tag-alongs.

### Correct Vote (`correct_vote`, +2)
A player voted for the person who was ultimately eliminated. Look at the vote table: if a player's vote matches the person voted out, they get this. **Does not apply** if a player was idoled out (the votes against them didn't count, but the person who went home was determined by the remaining votes — check carefully). Does not apply to unanimous re-votes where the original vote was different.

### Zero Votes Received (`zero_votes_received`, +1)
A player attended tribal council and received **zero** votes against them. Check the vote tally column for each player present at tribal.

### Find Idol (`find_idol`, +3)
Shown finding a hidden immunity idol during the episode. Usually mentioned explicitly in recaps.

### Play Idol Correctly (`play_idol_correctly`, +5)
Played an idol and it negated at least one vote. If they played it and received zero votes, it was **not** a correct play (wasted idol — no points).

### Find Advantage (`find_advantage`, +2)
Found any advantage (steal-a-vote, extra vote, Shot in the Dark amulet, etc.). Not idols (those have their own category).

### Use Advantage Successfully (`use_advantage_successfully`, +3)
Used an advantage and it had a material impact (e.g., steal-a-vote changed the outcome, extra vote was cast). Requires judgment — flag for manual review if ambiguous.

### Voted Out (`voted_out`, -3)
Eliminated via vote at tribal council.

### Quit/Medevac (`quit_medevac`, -5)
Left the game by quitting or medical evacuation.

### Make Merge (`make_merge`, +5)
One-time event when the merge happens. All players still in the game at the merge get this.

### Reach FTC (`reach_ftc`, +10)
One-time event. Players who make it to Final Tribal Council.

### Sole Survivor (`sole_survivor`, +15)
One-time event. The winner of the season.

### Jury Vote Received (`jury_vote`, +3 each)
End of season only. Each jury vote a finalist receives = +3. E.g., winner gets 8 votes × 3 = +24.

## Scraper Architecture

```
src/
  scraper/
    index.ts            — Main entry point, orchestrates the pipeline
    wiki.ts             — Fetch + parse Survivor Wiki pages
    parser.ts           — Extract scoring events from parsed HTML
    reconcile.ts        — Match wiki player names to our player IDs
    validate.ts         — Sanity checks (player count, no duplicate events)
    output.ts           — Generate episodes.ts entry or JSON
```

### Pipeline

1. **Discover** — Check the season wiki page for new episode entries
2. **Fetch** — Download the episode page + voting history page
3. **Parse** — Extract structured data from HTML tables
   - Challenge results (winning tribe, individual winner)
   - Tribal council attendees
   - Vote table (who voted for whom)
   - Idol/advantage plays
   - Elimination
4. **Map** — Convert parsed data to scoring events using our player ID slugs
5. **Validate** — Sanity checks:
   - Every player still in the game gets `survive_episode`
   - Tribal attendees either get `survive_tribal` or `voted_out`
   - Vote counts match (correct votes + incorrect votes = total votes cast)
   - No player gets both `voted_out` and `survive_tribal`
6. **Output** — Generate the episode entry for `episodes.ts`
7. **Review** — Output a diff/summary for manual review before committing

### Player Name Reconciliation

The wiki uses full names that may differ from our IDs. Maintain a mapping:

```ts
const wikiNameToId: Record<string, string> = {
  "Ozzy Lusth": "ozzy",
  "Oscar \"Ozzy\" Lusth": "ozzy",
  "Benjamin \"Coach\" Wade": "coach",
  "Coach Wade": "coach",
  "Q Burdette": "q",
  "Quintavius Burdette": "q",
  "Stephenie LaGrossa Kendrick": "stephenie",
  // ... etc
};
```

Build fuzzy matching as fallback (Levenshtein distance against our player list).

## Automation

### Option A: GitHub Action (recommended)

Cron schedule: every Wednesday at 12pm ET (day after episode airs, gives wiki time to update).

```yaml
name: Scrape Episode Scores
on:
  schedule:
    - cron: '0 17 * * 3'  # 5pm UTC = 12pm ET, Wednesdays
  workflow_dispatch: {}    # Manual trigger

jobs:
  scrape:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npx tsx src/scraper/index.ts
      - name: Create PR if changes
        uses: peter-evans/create-pull-request@v5
        with:
          title: "scores: Episode N"
          branch: scores/episode-N
          commit-message: "Add scoring for Episode N"
```

### Option B: Vercel Cron

Add to `vercel.json`:
```json
{
  "crons": [{ "path": "/api/scrape", "schedule": "0 17 * * 3" }]
}
```

Route handler at `src/app/api/scrape/route.ts` runs the scraper and commits via GitHub API.

### Option C: Manual trigger

Run `npx tsx src/scraper/index.ts` locally, review output, paste into `episodes.ts`.

## Edge Cases to Handle

- **Double eliminations** — Two tribals in one episode. Two `voted_out` events, two sets of tribal attendees.
- **No tribal council** — Recap/clip episodes. Only `survive_episode` for everyone.
- **Rock draw** — The person who draws the rock gets `voted_out`. Others get `survive_tribal`. Nobody gets `correct_vote`.
- **Fire-making challenge** — Loser gets `voted_out`. Winner gets `survive_tribal` (and implicitly `reach_ftc`).
- **Tribe swap** — Update tribe assignments. Doesn't generate scoring events itself.
- **Idol played on someone else** — The person who played it gets `play_idol_correctly`. The recipient just gets `survive_tribal`.
- **Split tribal (post-merge)** — Only players on the losing side attend tribal. Track who was on which side.
- **Shot in the Dark** — If successful, counts as `use_advantage_successfully`.
- **Revote** — Only the final vote determines `correct_vote`. Revotes due to ties use the re-vote, not the original.

## State Tracking

The scraper needs to know the current game state to compute `survive_episode`:

```ts
interface GameState {
  activePlayers: string[];     // Players still in the game
  eliminatedPlayers: string[]; // Players voted out / quit / medevac
  merged: boolean;             // Has the merge happened?
  episode: number;             // Current episode number
}
```

Derive this from all previous episodes' data. On each run, load existing `episodes.ts`, compute state, then process the new episode.

## Output Format

The scraper produces an entry matching our `Episode` type:

```ts
{
  episode: 3,
  title: "The Dragonslayer Returns",
  airDate: "2026-03-11",
  events: [
    // Challenge
    { player: "ozzy", type: "tribal_win" },
    { player: "savannah", type: "tribal_win" },
    // ... all winning tribe members

    // Tribal Council
    { player: "ozzy", type: "survive_tribal" },
    { player: "ozzy", type: "correct_vote" },
    { player: "ozzy", type: "zero_votes_received" },
    // ...

    // Elimination
    { player: "colby", type: "voted_out" },

    // Survival (everyone still in)
    { player: "ozzy", type: "survive_episode" },
    { player: "savannah", type: "survive_episode" },
    // ... all non-eliminated players
  ],
}
```

## Manual Review Checklist

Before merging scraped data, verify:

- [ ] Correct number of `survive_episode` events (should = active players - eliminated this ep)
- [ ] Tribal attendees are correct (check tribe assignments)
- [ ] Vote counts add up
- [ ] No idol/advantage events missed (cross-ref with recap)
- [ ] Merge episode flagged correctly (`make_merge` for all active players)
- [ ] Player name mapping resolved (no "unknown player" warnings)
