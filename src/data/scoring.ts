export type EventType =
  | "tribal_win"
  | "tribal_second"
  | "journey_win"
  | "individual_immunity"
  | "individual_reward"
  | "survive_tribal"
  | "survive_episode"
  | "make_merge"
  | "reach_ftc"
  | "sole_survivor"
  | "correct_vote"
  | "zero_votes_received"
  | "find_idol"
  | "play_idol_correctly"
  | "find_advantage"
  | "use_advantage_successfully"
  | "voted_out"
  | "medevac"
  | "quit"
  | "jury_vote";

export interface ScoringRule {
  type: EventType;
  label: string;
  points: number;
  category: string;
}

export const scoringRules: ScoringRule[] = [
  // Challenges
  { type: "tribal_win", label: "Tribal Challenge Win (1st)", points: 2, category: "Challenges" },
  { type: "tribal_second", label: "Tribal Challenge (2nd)", points: 1, category: "Challenges" },
  { type: "journey_win", label: "Journey Win", points: 1, category: "Challenges" },
  { type: "individual_immunity", label: "Individual Immunity Win", points: 5, category: "Challenges" },
  { type: "individual_reward", label: "Individual Reward Win", points: 2, category: "Challenges" },
  // Survival
  { type: "survive_tribal", label: "Survive Tribal Council", points: 2, category: "Survival" },
  { type: "survive_episode", label: "Survive Episode", points: 1, category: "Survival" },
  { type: "make_merge", label: "Make Merge", points: 5, category: "Survival" },
  { type: "reach_ftc", label: "Reach FTC", points: 10, category: "Survival" },
  { type: "sole_survivor", label: "Sole Survivor", points: 15, category: "Survival" },
  // Voting
  { type: "correct_vote", label: "Correct Vote", points: 2, category: "Voting" },
  { type: "zero_votes_received", label: "Zero Votes Received at Tribal", points: 1, category: "Voting" },
  // Idols/Advantages
  { type: "find_idol", label: "Find Idol", points: 3, category: "Idols/Advantages" },
  { type: "play_idol_correctly", label: "Play Idol Correctly", points: 5, category: "Idols/Advantages" },
  { type: "find_advantage", label: "Find Advantage", points: 2, category: "Idols/Advantages" },
  { type: "use_advantage_successfully", label: "Use Advantage Successfully", points: 3, category: "Idols/Advantages" },
  // Penalties
  { type: "voted_out", label: "Voted Out", points: -3, category: "Penalties" },
  { type: "medevac", label: "Medevac", points: 0, category: "Penalties" },
  { type: "quit", label: "Quit", points: -5, category: "Penalties" },
  // End of Season
  { type: "jury_vote", label: "Jury Vote Received", points: 3, category: "End of Season" },
];

export const pointValues: Record<EventType, number> = Object.fromEntries(
  scoringRules.map((r) => [r.type, r.points])
) as Record<EventType, number>;
