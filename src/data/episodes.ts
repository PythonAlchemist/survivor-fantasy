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
      // --- Reward Challenge "Maroon 50" (Vatu 1st, Kalo 2nd, Cila 3rd) ---
      // Vatu tribe (1st)
      { player: "colby", type: "tribal_win" },
      { player: "genevieve", type: "tribal_win" },
      { player: "rizo", type: "tribal_win" },
      { player: "angelina", type: "tribal_win" },
      { player: "q", type: "tribal_win" },
      { player: "stephenie", type: "tribal_win" },
      { player: "kyle", type: "tribal_win" },
      { player: "aubry", type: "tribal_win" },
      // Kalo tribe (2nd)
      { player: "jonathan", type: "tribal_second" },
      { player: "dee", type: "tribal_second" },
      { player: "mike", type: "tribal_second" },
      { player: "kamilla", type: "tribal_second" },
      { player: "charlie", type: "tribal_second" },
      { player: "tiffany", type: "tribal_second" },
      { player: "coach", type: "tribal_second" },
      { player: "chrissy", type: "tribal_second" },

      // --- Journey: Fight for Supplies (Coach won) ---
      { player: "coach", type: "journey_win" },

      // --- Immunity Challenge "Highway 50" (Kalo 1st, Vatu 2nd, Cila 3rd) ---
      // Kalo tribe (1st)
      { player: "jonathan", type: "tribal_win" },
      { player: "dee", type: "tribal_win" },
      { player: "mike", type: "tribal_win" },
      { player: "kamilla", type: "tribal_win" },
      { player: "charlie", type: "tribal_win" },
      { player: "tiffany", type: "tribal_win" },
      { player: "coach", type: "tribal_win" },
      { player: "chrissy", type: "tribal_win" },
      // Vatu tribe (2nd)
      { player: "colby", type: "tribal_second" },
      { player: "genevieve", type: "tribal_second" },
      { player: "rizo", type: "tribal_second" },
      { player: "angelina", type: "tribal_second" },
      { player: "q", type: "tribal_second" },
      { player: "stephenie", type: "tribal_second" },
      { player: "kyle", type: "tribal_second" },
      { player: "aubry", type: "tribal_second" },

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
  {
    episode: 2,
    title: "Therapy Carousel",
    airDate: "2026-03-04",
    events: [
      // --- Reward Challenge (Cila 1st, Kalo 2nd, Vatu 3rd) ---
      // Cila tribe (1st)
      { player: "ozzy", type: "tribal_win" },
      { player: "savannah", type: "tribal_win" },
      { player: "cirie", type: "tribal_win" },
      { player: "joe", type: "tribal_win" },
      { player: "emily", type: "tribal_win" },
      { player: "rick", type: "tribal_win" },
      { player: "christian", type: "tribal_win" },
      // Kalo tribe (2nd)
      { player: "jonathan", type: "tribal_second" },
      { player: "dee", type: "tribal_second" },
      { player: "mike", type: "tribal_second" },
      { player: "kamilla", type: "tribal_second" },
      { player: "charlie", type: "tribal_second" },
      { player: "tiffany", type: "tribal_second" },
      { player: "coach", type: "tribal_second" },
      { player: "chrissy", type: "tribal_second" },

      // --- Immunity Challenge (Vatu 1st, Kalo 2nd, Cila 3rd) ---
      // Vatu tribe (1st)
      { player: "colby", type: "tribal_win" },
      { player: "genevieve", type: "tribal_win" },
      { player: "rizo", type: "tribal_win" },
      { player: "angelina", type: "tribal_win" },
      { player: "q", type: "tribal_win" },
      { player: "stephenie", type: "tribal_win" },
      { player: "aubry", type: "tribal_win" },
      // Kalo tribe (2nd)
      { player: "jonathan", type: "tribal_second" },
      { player: "dee", type: "tribal_second" },
      { player: "mike", type: "tribal_second" },
      { player: "kamilla", type: "tribal_second" },
      { player: "charlie", type: "tribal_second" },
      { player: "tiffany", type: "tribal_second" },
      { player: "coach", type: "tribal_second" },
      { player: "chrissy", type: "tribal_second" },

      // --- Survive Tribal Council (Cila tribe minus Savannah) ---
      { player: "ozzy", type: "survive_tribal" },
      { player: "cirie", type: "survive_tribal" },
      { player: "joe", type: "survive_tribal" },
      { player: "emily", type: "survive_tribal" },
      { player: "rick", type: "survive_tribal" },
      { player: "christian", type: "survive_tribal" },

      // --- Correct Vote (6 Cila members voted for Savannah) ---
      { player: "ozzy", type: "correct_vote" },
      { player: "cirie", type: "correct_vote" },
      { player: "joe", type: "correct_vote" },
      { player: "emily", type: "correct_vote" },
      { player: "rick", type: "correct_vote" },
      { player: "christian", type: "correct_vote" },

      // --- Zero Votes Received at Tribal (Cila minus Savannah and Ozzy who got 1 vote) ---
      { player: "cirie", type: "zero_votes_received" },
      { player: "joe", type: "zero_votes_received" },
      { player: "emily", type: "zero_votes_received" },
      { player: "rick", type: "zero_votes_received" },
      { player: "christian", type: "zero_votes_received" },

      // --- Idols & Advantages ---
      { player: "christian", type: "find_idol" },

      // --- Voted Out ---
      { player: "savannah", type: "voted_out" },

      // --- Survive Episode (all 21 remaining players) ---
      { player: "ozzy", type: "survive_episode" },
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
  {
    episode: 3,
    title: "Did You Vote for a Swap?",
    airDate: "2026-03-11",
    events: [
      // --- Tribe Swap ---
      // New Cila: Charlie, Dee, Rizo, Kamilla, Jonathan, Cirie, Rick
      // New Kalo: Aubry, Joe, Genevieve, Coach, Chrissy, Colby, Tiffany
      // New Vatu: Christian, Mike, Emily, Ozzy, Stephenie, Q, Angelina

      // --- Immunity Challenge (Cila 1st, Kalo 2nd, Vatu 3rd) ---
      // Cila tribe (1st)
      { player: "charlie", type: "tribal_win" },
      { player: "dee", type: "tribal_win" },
      { player: "rizo", type: "tribal_win" },
      { player: "kamilla", type: "tribal_win" },
      { player: "jonathan", type: "tribal_win" },
      { player: "cirie", type: "tribal_win" },
      { player: "rick", type: "tribal_win" },
      // Kalo tribe (2nd)
      { player: "aubry", type: "tribal_second" },
      { player: "joe", type: "tribal_second" },
      { player: "genevieve", type: "tribal_second" },
      { player: "coach", type: "tribal_second" },
      { player: "chrissy", type: "tribal_second" },
      { player: "colby", type: "tribal_second" },
      { player: "tiffany", type: "tribal_second" },

      // --- Survive Tribal Council (Vatu minus Q) ---
      { player: "christian", type: "survive_tribal" },
      { player: "mike", type: "survive_tribal" },
      { player: "emily", type: "survive_tribal" },
      { player: "ozzy", type: "survive_tribal" },
      { player: "stephenie", type: "survive_tribal" },
      { player: "angelina", type: "survive_tribal" },

      // --- Correct Vote (5 voted for Q — Q had lost his vote) ---
      { player: "mike", type: "correct_vote" },
      { player: "christian", type: "correct_vote" },
      { player: "angelina", type: "correct_vote" },
      { player: "emily", type: "correct_vote" },
      { player: "ozzy", type: "correct_vote" },

      // --- Zero Votes Received at Tribal (Vatu minus Q and Angelina who got 1 vote) ---
      { player: "christian", type: "zero_votes_received" },
      { player: "mike", type: "zero_votes_received" },
      { player: "emily", type: "zero_votes_received" },
      { player: "ozzy", type: "zero_votes_received" },
      { player: "stephenie", type: "zero_votes_received" },

      // --- Voted Out ---
      { player: "q", type: "voted_out" },

      // --- Survive Episode (all 20 remaining players) ---
      { player: "charlie", type: "survive_episode" },
      { player: "dee", type: "survive_episode" },
      { player: "rizo", type: "survive_episode" },
      { player: "kamilla", type: "survive_episode" },
      { player: "jonathan", type: "survive_episode" },
      { player: "cirie", type: "survive_episode" },
      { player: "rick", type: "survive_episode" },
      { player: "aubry", type: "survive_episode" },
      { player: "joe", type: "survive_episode" },
      { player: "genevieve", type: "survive_episode" },
      { player: "coach", type: "survive_episode" },
      { player: "chrissy", type: "survive_episode" },
      { player: "colby", type: "survive_episode" },
      { player: "tiffany", type: "survive_episode" },
      { player: "christian", type: "survive_episode" },
      { player: "mike", type: "survive_episode" },
      { player: "emily", type: "survive_episode" },
      { player: "ozzy", type: "survive_episode" },
      { player: "stephenie", type: "survive_episode" },
      { player: "angelina", type: "survive_episode" },
    ],
  },
  {
    episode: 4,
    title: "Knife to the Heart",
    airDate: "2026-03-18",
    events: [
      // --- Tribes (post-swap, same as Ep 3) ---
      // Cila: Charlie, Dee, Rizo, Kamilla, Jonathan, Cirie, Rick
      // Kalo: Aubry, Joe, Genevieve, Coach, Chrissy, Colby, Tiffany
      // Vatu: Christian, Emily, Ozzy, Stephenie, Angelina (Q voted out Ep 3)

      // --- Combined Reward/Immunity Challenge (Kalo 1st, Cila 2nd, Vatu 3rd) ---
      // Kalo tribe (1st — won reward with Zac Brown + immunity)
      { player: "aubry", type: "tribal_win" },
      { player: "joe", type: "tribal_win" },
      { player: "genevieve", type: "tribal_win" },
      { player: "coach", type: "tribal_win" },
      { player: "chrissy", type: "tribal_win" },
      { player: "colby", type: "tribal_win" },
      { player: "tiffany", type: "tribal_win" },
      // Cila tribe (2nd — immunity only)
      { player: "charlie", type: "tribal_second" },
      { player: "dee", type: "tribal_second" },
      { player: "rizo", type: "tribal_second" },
      { player: "kamilla", type: "tribal_second" },
      { player: "jonathan", type: "tribal_second" },
      { player: "cirie", type: "tribal_second" },
      { player: "rick", type: "tribal_second" },

      // --- Survive Tribal Council (Vatu minus Mike) ---
      { player: "christian", type: "survive_tribal" },
      { player: "emily", type: "survive_tribal" },
      { player: "ozzy", type: "survive_tribal" },
      { player: "stephenie", type: "survive_tribal" },
      { player: "angelina", type: "survive_tribal" },

      // --- Correct Vote (3 voted for Mike: Christian, Emily, Stephenie) ---
      { player: "christian", type: "correct_vote" },
      { player: "emily", type: "correct_vote" },
      { player: "stephenie", type: "correct_vote" },

      // --- Zero Votes Received at Tribal (Vatu minus Mike, Emily, Angelina) ---
      // Mike got 3 votes, Emily got 2 votes, Angelina got 1 vote
      { player: "christian", type: "zero_votes_received" },
      { player: "ozzy", type: "zero_votes_received" },
      { player: "stephenie", type: "zero_votes_received" },

      // --- Idols & Advantages ---
      // Genevieve found Billie Eilish Boomerang Idol, sent to Rizo
      { player: "genevieve", type: "find_idol" },

      // --- Voted Out ---
      { player: "mike", type: "voted_out" },

      // --- Survive Episode (all 19 remaining players) ---
      { player: "charlie", type: "survive_episode" },
      { player: "dee", type: "survive_episode" },
      { player: "rizo", type: "survive_episode" },
      { player: "kamilla", type: "survive_episode" },
      { player: "jonathan", type: "survive_episode" },
      { player: "cirie", type: "survive_episode" },
      { player: "rick", type: "survive_episode" },
      { player: "aubry", type: "survive_episode" },
      { player: "joe", type: "survive_episode" },
      { player: "genevieve", type: "survive_episode" },
      { player: "coach", type: "survive_episode" },
      { player: "chrissy", type: "survive_episode" },
      { player: "colby", type: "survive_episode" },
      { player: "tiffany", type: "survive_episode" },
      { player: "christian", type: "survive_episode" },
      { player: "emily", type: "survive_episode" },
      { player: "ozzy", type: "survive_episode" },
      { player: "stephenie", type: "survive_episode" },
      { player: "angelina", type: "survive_episode" },
    ],
  },
  {
    episode: 5,
    title: "Open Wounds",
    airDate: "2026-03-25",
    events: [
      // --- Double Elimination Episode ---
      // Tribes (same as Ep 3/4 post-swap):
      // Cila: Charlie, Dee, Rizo, Kamilla, Jonathan, Cirie, Rick
      // Kalo: Aubry, Joe, Genevieve, Coach, Chrissy, Colby, Tiffany
      // Vatu: Christian, Emily, Ozzy, Stephenie, Angelina

      // --- Immunity Challenge (Kalo wins; Vatu & Cila both go to tribal) ---
      { player: "aubry", type: "tribal_win" },
      { player: "joe", type: "tribal_win" },
      { player: "genevieve", type: "tribal_win" },
      { player: "coach", type: "tribal_win" },
      { player: "chrissy", type: "tribal_win" },
      { player: "colby", type: "tribal_win" },
      { player: "tiffany", type: "tribal_win" },

      // --- Vatu Tribal Council (Angelina voted out 4-1) ---
      // Voted for Angelina: Ozzy, Christian, Emily, Stephenie
      // Angelina voted for Stephenie
      { player: "ozzy", type: "survive_tribal" },
      { player: "christian", type: "survive_tribal" },
      { player: "emily", type: "survive_tribal" },
      { player: "stephenie", type: "survive_tribal" },

      { player: "ozzy", type: "correct_vote" },
      { player: "christian", type: "correct_vote" },
      { player: "emily", type: "correct_vote" },
      { player: "stephenie", type: "correct_vote" },

      // Zero votes received (Stephenie got 1 from Angelina)
      { player: "ozzy", type: "zero_votes_received" },
      { player: "christian", type: "zero_votes_received" },
      { player: "emily", type: "zero_votes_received" },

      // --- Cila Tribal Council (Charlie voted out 4-3) ---
      // Voted for Charlie: Cirie, Dee, Kamilla, Rizo
      // Voted for Rizo: Jonathan, Rick, Charlie
      { player: "jonathan", type: "survive_tribal" },
      { player: "dee", type: "survive_tribal" },
      { player: "rizo", type: "survive_tribal" },
      { player: "kamilla", type: "survive_tribal" },
      { player: "cirie", type: "survive_tribal" },
      { player: "rick", type: "survive_tribal" },

      { player: "cirie", type: "correct_vote" },
      { player: "dee", type: "correct_vote" },
      { player: "kamilla", type: "correct_vote" },
      { player: "rizo", type: "correct_vote" },

      // Zero votes received (Rizo got 3, Charlie got 4)
      { player: "cirie", type: "zero_votes_received" },
      { player: "dee", type: "zero_votes_received" },
      { player: "kamilla", type: "zero_votes_received" },
      { player: "jonathan", type: "zero_votes_received" },
      { player: "rick", type: "zero_votes_received" },

      // --- Voted Out ---
      { player: "angelina", type: "voted_out" },
      { player: "charlie", type: "voted_out" },

      // --- Survive Episode (17 remaining players) ---
      { player: "ozzy", type: "survive_episode" },
      { player: "christian", type: "survive_episode" },
      { player: "emily", type: "survive_episode" },
      { player: "stephenie", type: "survive_episode" },
      { player: "jonathan", type: "survive_episode" },
      { player: "dee", type: "survive_episode" },
      { player: "rizo", type: "survive_episode" },
      { player: "kamilla", type: "survive_episode" },
      { player: "cirie", type: "survive_episode" },
      { player: "rick", type: "survive_episode" },
      { player: "aubry", type: "survive_episode" },
      { player: "joe", type: "survive_episode" },
      { player: "genevieve", type: "survive_episode" },
      { player: "coach", type: "survive_episode" },
      { player: "chrissy", type: "survive_episode" },
      { player: "colby", type: "survive_episode" },
      { player: "tiffany", type: "survive_episode" },
    ],
  },
];
