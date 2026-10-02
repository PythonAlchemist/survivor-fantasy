/**
 * Generates the "Episode N Points Breakdown" report for a given Survivor 51
 * episode, computed directly from src/data/s51/episodes.ts — no hand
 * transcription, no risk of the numbers drifting from what's actually
 * scored and deployed.
 *
 * Usage:
 *   npx tsx scripts/episode-recap.ts          # latest episode
 *   npx tsx scripts/episode-recap.ts 2         # a specific episode number
 *
 * This prints the event table, per-team deltas (sorted biggest swing
 * first), and the overall standings line. It does NOT write the prose
 * recap paragraph or the "why" behind each team's swing — that's
 * research-derived color commentary that belongs in the skill's workflow,
 * not in this script. Treat this output as the verified numbers to wrap
 * narrative around, not as the finished recap.
 */
import { s51Episodes } from "../src/data/s51/episodes";
import { s51Teams } from "../src/data/s51/teams";
import { s51Cast } from "../src/data/s51Cast";
import { scoringRules, pointValues, type EventType } from "../src/data/scoring";

// A couple of castaways go by something other than their first name
// (Kilby by surname). s51Cast has no "display name" field, so this is a
// small explicit override rather than guessing from name.split(" ")[0].
const DISPLAY_NAME: Record<string, string> = { kilby: "Kilby", thienan: "Thien An" };
const nameOf: Record<string, string> = Object.fromEntries(
  s51Cast.map((c) => [c.id, DISPLAY_NAME[c.id] ?? c.name.split(" ")[0]]),
);
const labelOf: Record<string, string> = Object.fromEntries(
  scoringRules.map((r) => [r.type, r.label]),
);

const EPISODE_ROW_ORDER: EventType[] = [
  "tribal_win", "tribal_second", "journey_win",
  "individual_immunity", "individual_reward",
  "survive_tribal", "correct_vote", "zero_votes_received",
  "find_idol", "play_idol_correctly", "find_advantage", "use_advantage_successfully",
  "voted_out", "medevac", "quit",
  "survive_episode", "make_merge", "reach_ftc", "jury_vote", "sole_survivor",
];

function fmtPts(n: number): string {
  return (n > 0 ? "+" : "") + n;
}

function main() {
  const arg = process.argv[2];
  const epNum = arg ? parseInt(arg, 10) : s51Episodes[s51Episodes.length - 1]?.episode;
  const upTo = s51Episodes.filter((e) => e.episode <= epNum);
  const episode = upTo.find((e) => e.episode === epNum);
  if (!episode) {
    console.error(`No episode ${epNum} found in src/data/s51/episodes.ts`);
    process.exit(1);
  }

  // --- Event table for this episode ---
  // A player can legitimately earn the same EventType twice in one episode
  // (e.g. a tribe sweeping both reward and immunity each log as a separate
  // tribal_win). Count occurrences per player rather than listing the name
  // twice, so a double-win reads as "Name x2" instead of looking like a
  // duplicate-data bug.
  const byType = new Map<EventType, Map<string, number>>();
  for (const ev of episode.events) {
    const counts = byType.get(ev.type) ?? new Map<string, number>();
    const name = nameOf[ev.player] ?? ev.player;
    counts.set(name, (counts.get(name) ?? 0) + 1);
    byType.set(ev.type, counts);
  }

  console.log(`## Episode ${episode.episode} Points Breakdown: "${episode.title}"\n`);
  console.log("| Event | Players | Pts Each |");
  console.log("|---|---|---|");
  for (const type of EPISODE_ROW_ORDER) {
    const counts = byType.get(type);
    if (!counts) continue;
    const players = [...counts.entries()]
      .map(([name, n]) => (n > 1 ? `${name} x${n}` : name))
      .join(", ");
    console.log(`| ${labelOf[type] ?? type} | ${players} | ${fmtPts(pointValues[type])} |`);
  }

  // --- Running totals through this episode, and this-episode delta ---
  const running: Record<string, number> = {};
  const delta: Record<string, number> = {};
  for (const ep of upTo) {
    for (const ev of ep.events) {
      const pts = pointValues[ev.type] ?? 0;
      running[ev.player] = (running[ev.player] ?? 0) + pts;
      if (ep.episode === epNum) delta[ev.player] = (delta[ev.player] ?? 0) + pts;
    }
  }

  // --- Per-team deltas, sorted by this-episode swing (biggest first) ---
  const teamRows = s51Teams.map((team) => {
    const d = team.playerIds.reduce((s, id) => s + (delta[id] ?? 0), 0);
    const r = team.playerIds.reduce((s, id) => s + (running[id] ?? 0), 0);
    const players = team.playerIds
      .map((id) => `${nameOf[id] ?? id} ${fmtPts(delta[id] ?? 0)}`)
      .join(", ");
    return { drafter: team.drafter, delta: d, running: r, players };
  });

  console.log("\n**Team deltas this episode, sorted by swing:**\n");
  for (const t of [...teamRows].sort((a, b) => b.delta - a.delta)) {
    console.log(`- **${t.drafter}** ${fmtPts(t.delta)} -> ${t.running} total  [${t.players}]`);
  }

  console.log("\n**Overall Standings:**");
  const standings = [...teamRows].sort((a, b) => b.running - a.running);
  console.log(
    standings
      .map((t, i) => (i > 0 && t.running === standings[i - 1].running ? `= ${t.drafter} (${t.running})` : `${t.drafter} (${t.running})`))
      .join(" > ")
      .replace(/ > = /g, " = "),
  );
}

main();
