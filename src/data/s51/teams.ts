import type { Team } from "../teams";

/**
 * Season 51 rosters, taken from the live draft on 19 September 2026.
 * Snake order over 4 rounds; Cristian Chavez went undrafted.
 * Raw draft record: docs/draft-archive/s51-draft-raw.json
 */
export const s51Teams: Team[] = [
  {
    slug: "chris-s",
    drafter: "Chris S",
    playerIds: ["mike", "eric", "kristin", "sharonda"],
  },
  {
    slug: "sam",
    drafter: "Sam",
    playerIds: ["jelly", "linnea", "jenna", "ana"],
  },
  {
    slug: "lauren",
    drafter: "Lauren",
    playerIds: ["maggie", "lewis", "carter", "rob"],
  },
  {
    slug: "chris-l",
    drafter: "Chris L",
    playerIds: ["brady", "alexis", "kilby", "ori"],
  },
  {
    slug: "mikayla",
    drafter: "Mikayla",
    playerIds: ["thienan", "devin", "aaliyah", "patt"],
  },
];
