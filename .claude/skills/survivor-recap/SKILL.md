---
name: survivor-recap
description: Score a new Survivor 51 episode and produce its weekly points-breakdown recap for this fantasy league. Use when asked to "score this episode," "run the recap," "do the weekly recap," or similar, for this repo.
---

# Survivor Recap

End-to-end workflow for turning a newly-aired Survivor 51 episode into scored
data and a weekly recap, in this repo's established format and convention.

## 0. Check what's already scored

```bash
npm run recap            # prints the breakdown for the latest scored episode
```

Compare against `src/data/s51/episodes.ts` to find the next unscored episode
number and its air date.

## 1. Research the episode — cross-checked, not single-sourced

Gather, from at least **two independent sources**:

- Which tribe won immunity/reward and which went to Tribal
- Exact per-person vote tally at Tribal Council — not just the final count
- Any idol or advantage found, by whom, and any conditions on it
- The exact boot (voted out / medevac / quit)
- Any Shot in the Dark plays and their outcome

**The Survivor Fandom wiki's rendered voting-history table is the strongest
single source for exact vote tallies** — it is official, structured, and
per-person. Fetch it as *rendered HTML*, not wikitext, because the season
page's wikitext only contains a `{{S51votetable}}` template call that never
expands:

```python
# action=parse&prop=text (NOT prop=wikitext) on the season page, then find
# the <table> that follows the "Voting History" heading. See how this was
# done for episodes 1–2 earlier in this project's history for the working
# pattern (fetch rendered HTML, locate id="Voting_History", grab the next
# <table>...</table>, strip tags to read the per-person vote columns).
```

Corroborate with 1–2 recap articles (TVLine, Inside Survivor, Parade,
etc.) for narrative color and to catch anything the vote table alone
doesn't show (injuries, in-game schemes, exile mechanics). If sources
disagree on a fact that affects scoring, don't guess — find a third
source or flag the uncertainty to the user before scoring it.

## 2. Map facts to the existing EventType categories

The scoring schema lives in `src/data/scoring.ts`. **Never invent a new
EventType to fit something you saw on screen** (e.g. Shot in the Dark has no
matching category) — note it in a code comment instead and ask the user if
they want a new category added. This has come up before; the precedent is to
leave it uncategorized rather than force-fit it.

The standard pre-merge episode pattern, established in episodes 1–2:

| Situation | Event(s) |
|---|---|
| Tribe wins immunity, avoids Tribal | `tribal_win` for every member of that tribe |
| Tribe goes to Tribal, player X voted out | `survive_tribal` for every member except X |
| Player voted for whoever was actually eliminated | `correct_vote` |
| Player received zero votes against them at that Tribal | `zero_votes_received` |
| Player found an idol/advantage this episode | `find_idol` / `find_advantage` |
| Player was voted out / medevac'd / quit | `voted_out` / `medevac` / `quit` |
| Every player still in the game after the episode | `survive_episode` |

Edge cases seen so far, worth checking for every episode:
- A player on Exile (or otherwise not yet rostered to a tribe) is not part
  of that tribe's `tribal_win`/`survive_tribal` — they only get
  `survive_episode` if they're still in the game.
- A player can receive votes and still survive (e.g. Eric, episode 2) —
  they get `survive_tribal` but **not** `zero_votes_received`, and only get
  `correct_vote` if they actually voted for the person who went home.
- Once the season merges, add `individual_immunity`, `individual_reward`,
  `make_merge`, and eventually `reach_ftc`/`jury_vote`/`sole_survivor` per
  `src/data/scoring.ts`.

## 3. Write the episode data

Append to `src/data/s51/episodes.ts`, following the exact structure and
comment style already used for episodes 1–2: a `// --- Section Name ---`
comment above each group of events, in the same category order as the table
in step 2, with a one-line comment explaining anything non-obvious (who
voted which way and why the tally came out that way, any idol/advantage
subplot that did or didn't matter to scoring).

## 4. Verify before trusting any of it

```bash
npx tsc --noEmit
rm -rf .next && npm run build
vercel deploy --prod --yes
```

Then run `npm run recap -- <N>` and hand-check **at least one team's**
running total by summing its roster's points from the table yourself. The
script reads straight from `src/data/s51/episodes.ts` and
`src/data/s51/teams.ts`, so it can't drift from what's deployed — but a
roster-ID typo in the data file would still produce a wrong-but-consistent
number, so the hand check is the one thing that catches that class of bug.

## 5. Commit and push

Follow the existing commit message convention from prior episode commits:
a one-line summary, a factual paragraph of what happened (who won, who was
voted out and by what tally, any idol finds), a sourcing note (which wiki
table / articles were cross-checked), and the verified team totals.

## 6. Produce the recap

Run the generator and build the final deliverable around its output:

```bash
npm run recap -- <N>
```

The script's table and standings line are the source of truth — **use them
verbatim, do not retype the numbers by hand.** Wrap them with:

1. A `## Episode N Points Breakdown: "<Title>"` header (the script already
   emits this plus the table).
2. A 2–3 sentence factual paragraph above the table covering the episode's
   key beats — challenge result, idol/advantage finds, the vote.
3. Under "Team deltas," keep the script's bracketed per-player breakdown
   but add a short, factual parenthetical for *why* a team's number looks
   the way it does when there's a real story behind it (an idol find, a
   lost roster spot, a vote-split survival) — pull this from your research
   in step 1, never invent it.

This is a **data recap**, not a comedy bit — match the tone of the episode
1–2 recaps already produced in this project (structured, factual, dry wit
only where a real game event earns it), not freeform prose commentary.
