import { EventType } from "./scoring";

export interface GameEvent {
  player: string;
  type: EventType;
}

export interface Episode {
  episode: number;
  title: string;
  airDate?: string;
  events: GameEvent[];
}

export const episodes: Episode[] = [
  {
    episode: 1,
    title: "Epic Party",
    airDate: "2026-02-25",
    events: [
      // --- Tribal Challenge Win (Kalo won 1st, Vatu won 2nd; Cila lost) ---
      // Kalo tribe
      { player: "jonathan", type: "tribal_win" },
      { player: "dee", type: "tribal_win" },
      { player: "mike", type: "tribal_win" },
      { player: "kamilla", type: "tribal_win" },
      { player: "charlie", type: "tribal_win" },
      { player: "tiffany", type: "tribal_win" },
      { player: "coach", type: "tribal_win" },
      { player: "chrissy", type: "tribal_win" },
      // Vatu tribe
      { player: "colby", type: "tribal_win" },
      { player: "genevieve", type: "tribal_win" },
      { player: "rizo", type: "tribal_win" },
      { player: "angelina", type: "tribal_win" },
      { player: "q", type: "tribal_win" },
      { player: "stephenie", type: "tribal_win" },
      { player: "kyle", type: "tribal_win" },
      { player: "aubry", type: "tribal_win" },

      // --- Survive Tribal Council (Cila tribe minus Jenna) ---
      { player: "ozzy", type: "survive_tribal" },
      { player: "savannah", type: "survive_tribal" },
      { player: "cirie", type: "survive_tribal" },
      { player: "joe", type: "survive_tribal" },
      { player: "emily", type: "survive_tribal" },
      { player: "rick", type: "survive_tribal" },
      { player: "christian", type: "survive_tribal" },

      // --- Correct Vote (7 Cila members voted for Jenna) ---
      { player: "ozzy", type: "correct_vote" },
      { player: "savannah", type: "correct_vote" },
      { player: "cirie", type: "correct_vote" },
      { player: "joe", type: "correct_vote" },
      { player: "emily", type: "correct_vote" },
      { player: "rick", type: "correct_vote" },
      { player: "christian", type: "correct_vote" },

      // --- Zero Votes Received at Tribal (Cila minus Jenna and Cirie who got 1 vote) ---
      { player: "ozzy", type: "zero_votes_received" },
      { player: "savannah", type: "zero_votes_received" },
      { player: "joe", type: "zero_votes_received" },
      { player: "emily", type: "zero_votes_received" },
      { player: "rick", type: "zero_votes_received" },
      { player: "christian", type: "zero_votes_received" },

      // --- Idols & Advantages ---
      { player: "genevieve", type: "find_idol" },
      { player: "ozzy", type: "find_advantage" },
      { player: "savannah", type: "find_advantage" },

      // --- Voted Out ---
      { player: "jenna", type: "voted_out" },

      // --- Medevac ---
      { player: "kyle", type: "medevac" },

      // --- Survive Episode (all 22 remaining players) ---
      { player: "ozzy", type: "survive_episode" },
      { player: "savannah", type: "survive_episode" },
      { player: "cirie", type: "survive_episode" },
      { player: "joe", type: "survive_episode" },
      { player: "emily", type: "survive_episode" },
      { player: "rick", type: "survive_episode" },
      { player: "christian", type: "survive_episode" },
      { player: "jonathan", type: "survive_episode" },
      { player: "dee", type: "survive_episode" },
      { player: "mike", type: "survive_episode" },
      { player: "kamilla", type: "survive_episode" },
      { player: "charlie", type: "survive_episode" },
      { player: "tiffany", type: "survive_episode" },
      { player: "coach", type: "survive_episode" },
      { player: "chrissy", type: "survive_episode" },
      { player: "colby", type: "survive_episode" },
      { player: "genevieve", type: "survive_episode" },
      { player: "rizo", type: "survive_episode" },
      { player: "angelina", type: "survive_episode" },
      { player: "q", type: "survive_episode" },
      { player: "stephenie", type: "survive_episode" },
      { player: "aubry", type: "survive_episode" },
    ],
  },
];
