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
  {
    episode: 6,
    title: "The Blood Moon",
    airDate: "2026-04-01",
    events: [
      // --- Merge (all 17 remaining players) ---
      { player: "ozzy", type: "make_merge" },
      { player: "christian", type: "make_merge" },
      { player: "emily", type: "make_merge" },
      { player: "stephenie", type: "make_merge" },
      { player: "jonathan", type: "make_merge" },
      { player: "dee", type: "make_merge" },
      { player: "rizo", type: "make_merge" },
      { player: "kamilla", type: "make_merge" },
      { player: "cirie", type: "make_merge" },
      { player: "rick", type: "make_merge" },
      { player: "aubry", type: "make_merge" },
      { player: "joe", type: "make_merge" },
      { player: "genevieve", type: "make_merge" },
      { player: "coach", type: "make_merge" },
      { player: "chrissy", type: "make_merge" },
      { player: "colby", type: "make_merge" },
      { player: "tiffany", type: "make_merge" },

      // --- Ozzy & Rizo sent to Exile Island (safe from tribal) ---
      // Ozzy found advantage to go to exile
      { player: "ozzy", type: "find_advantage" },

      // --- Blood Moon: Individual Immunity Challenge (3 groups) ---
      // Stephenie wins immunity (Orange), Christian wins (Purple), Dee wins (Teal)
      { player: "stephenie", type: "individual_immunity" },
      { player: "christian", type: "individual_immunity" },
      { player: "dee", type: "individual_immunity" },

      // --- Orange Tribal Council (Kamilla voted out 3-2) ---
      // Group: Stephenie (immune), Chrissy, Jonathan, Kamilla, Tiffany
      // Voted for Kamilla: Jonathan, Chrissy, Stephenie
      // Voted for Chrissy: Kamilla, Tiffany
      { player: "stephenie", type: "survive_tribal" },
      { player: "chrissy", type: "survive_tribal" },
      { player: "jonathan", type: "survive_tribal" },
      { player: "tiffany", type: "survive_tribal" },

      { player: "jonathan", type: "correct_vote" },
      { player: "chrissy", type: "correct_vote" },
      { player: "stephenie", type: "correct_vote" },

      // Zero votes received (Chrissy got 2, Kamilla got 3)
      { player: "stephenie", type: "zero_votes_received" },
      { player: "jonathan", type: "zero_votes_received" },
      { player: "tiffany", type: "zero_votes_received" },

      // --- Purple Tribal Council (Genevieve voted out 4-0) ---
      // Group: Christian (immune), Aubry, Rick, Genevieve, Joe
      // Genevieve played Shot in the Dark (not safe, didn't cast a vote)
      // Voted for Genevieve: Aubry, Christian, Rick, Joe
      { player: "aubry", type: "survive_tribal" },
      { player: "christian", type: "survive_tribal" },
      { player: "rick", type: "survive_tribal" },
      { player: "joe", type: "survive_tribal" },

      { player: "aubry", type: "correct_vote" },
      { player: "christian", type: "correct_vote" },
      { player: "rick", type: "correct_vote" },
      { player: "joe", type: "correct_vote" },

      // Zero votes received (all 4 survivors)
      { player: "aubry", type: "zero_votes_received" },
      { player: "christian", type: "zero_votes_received" },
      { player: "rick", type: "zero_votes_received" },
      { player: "joe", type: "zero_votes_received" },

      // --- Teal Tribal Council (Colby voted out 4-0) ---
      // Group: Dee (immune), Emily, Cirie, Coach, Colby
      // Colby had no vote and no Shot in the Dark
      // Voted for Colby: Dee, Emily, Cirie, Coach
      { player: "dee", type: "survive_tribal" },
      { player: "emily", type: "survive_tribal" },
      { player: "cirie", type: "survive_tribal" },
      { player: "coach", type: "survive_tribal" },

      { player: "dee", type: "correct_vote" },
      { player: "emily", type: "correct_vote" },
      { player: "cirie", type: "correct_vote" },
      { player: "coach", type: "correct_vote" },

      // Zero votes received (all 4 survivors)
      { player: "dee", type: "zero_votes_received" },
      { player: "emily", type: "zero_votes_received" },
      { player: "cirie", type: "zero_votes_received" },
      { player: "coach", type: "zero_votes_received" },

      // --- Voted Out ---
      { player: "kamilla", type: "voted_out" },
      { player: "genevieve", type: "voted_out" },
      { player: "colby", type: "voted_out" },

      // --- Survive Episode (14 remaining players) ---
      { player: "ozzy", type: "survive_episode" },
      { player: "rizo", type: "survive_episode" },
      { player: "stephenie", type: "survive_episode" },
      { player: "chrissy", type: "survive_episode" },
      { player: "jonathan", type: "survive_episode" },
      { player: "tiffany", type: "survive_episode" },
      { player: "aubry", type: "survive_episode" },
      { player: "christian", type: "survive_episode" },
      { player: "rick", type: "survive_episode" },
      { player: "joe", type: "survive_episode" },
      { player: "dee", type: "survive_episode" },
      { player: "emily", type: "survive_episode" },
      { player: "cirie", type: "survive_episode" },
      { player: "coach", type: "survive_episode" },
    ],
  },
  {
    episode: 7,
    title: "That's Not How I Play Survivor",
    airDate: "2026-04-08",
    events: [
      // --- Post-merge, 14 players remaining ---
      // Ozzy, Rizo, Stephenie, Chrissy, Jonathan, Tiffany, Aubry,
      // Christian, Rick, Joe, Dee, Emily, Cirie, Coach

      // --- Reward Challenge "Rolling Stones" (team, schoolyard pick) ---
      // Blue team wins: Christian, Ozzy, Rick, Emily, Dee, Stephenie, Joe
      // Purple team loses: Jonathan, Cirie, Chrissy, Rizo, Tiffany, Coach, Aubry
      { player: "christian", type: "individual_reward" },
      { player: "ozzy", type: "individual_reward" },
      { player: "rick", type: "individual_reward" },
      { player: "emily", type: "individual_reward" },
      { player: "dee", type: "individual_reward" },
      { player: "stephenie", type: "individual_reward" },
      { player: "joe", type: "individual_reward" },

      // --- Journey: Stephenie wins steal-a-vote advantage ---
      { player: "stephenie", type: "find_advantage" },

      // --- Individual Immunity Challenge "Audio Slave" ---
      // Ozzy wins (8th career individual immunity win)
      { player: "ozzy", type: "individual_immunity" },

      // --- Tribal Council (8-4-1: Dee voted out, first jury member) ---
      // Dee played Shot in the Dark (not safe — no vote cast by Dee)
      // Aubry played idol on herself (negated 0 votes — idol flushed)
      // Votes: 8 for Dee, 4 for Tiffany, 1 for Coach

      // --- Survive Tribal Council (everyone except Dee) ---
      { player: "ozzy", type: "survive_tribal" },
      { player: "rizo", type: "survive_tribal" },
      { player: "stephenie", type: "survive_tribal" },
      { player: "chrissy", type: "survive_tribal" },
      { player: "jonathan", type: "survive_tribal" },
      { player: "tiffany", type: "survive_tribal" },
      { player: "aubry", type: "survive_tribal" },
      { player: "christian", type: "survive_tribal" },
      { player: "rick", type: "survive_tribal" },
      { player: "joe", type: "survive_tribal" },
      { player: "emily", type: "survive_tribal" },
      { player: "cirie", type: "survive_tribal" },
      { player: "coach", type: "survive_tribal" },

      // --- Correct Vote (8 voted for Dee) ---
      // Coach voted Tiffany (confirmed), Tiffany voted Coach (confirmed)
      // Coach's split vote plan: 8 on Dee, 4 on Tiffany (backup if SITD worked)
      // Voted Dee: Jonathan, Ozzy, Christian, Rick, Emily, Stephenie, Joe, Aubry
      // Voted Tiffany: Coach, Chrissy, Cirie, Rizo
      { player: "jonathan", type: "correct_vote" },
      { player: "ozzy", type: "correct_vote" },
      { player: "christian", type: "correct_vote" },
      { player: "rick", type: "correct_vote" },
      { player: "emily", type: "correct_vote" },
      { player: "stephenie", type: "correct_vote" },
      { player: "joe", type: "correct_vote" },
      { player: "aubry", type: "correct_vote" },

      // --- Zero Votes Received (everyone except Dee, Tiffany, Coach) ---
      { player: "ozzy", type: "zero_votes_received" },
      { player: "rizo", type: "zero_votes_received" },
      { player: "stephenie", type: "zero_votes_received" },
      { player: "chrissy", type: "zero_votes_received" },
      { player: "jonathan", type: "zero_votes_received" },
      { player: "aubry", type: "zero_votes_received" },
      { player: "christian", type: "zero_votes_received" },
      { player: "rick", type: "zero_votes_received" },
      { player: "joe", type: "zero_votes_received" },
      { player: "emily", type: "zero_votes_received" },
      { player: "cirie", type: "zero_votes_received" },

      // --- Voted Out ---
      { player: "dee", type: "voted_out" },

      // --- Survive Episode (13 remaining players) ---
      { player: "ozzy", type: "survive_episode" },
      { player: "rizo", type: "survive_episode" },
      { player: "stephenie", type: "survive_episode" },
      { player: "chrissy", type: "survive_episode" },
      { player: "jonathan", type: "survive_episode" },
      { player: "tiffany", type: "survive_episode" },
      { player: "aubry", type: "survive_episode" },
      { player: "christian", type: "survive_episode" },
      { player: "rick", type: "survive_episode" },
      { player: "joe", type: "survive_episode" },
      { player: "emily", type: "survive_episode" },
      { player: "cirie", type: "survive_episode" },
      { player: "coach", type: "survive_episode" },
    ],
  },
];
