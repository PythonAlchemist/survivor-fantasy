import type { Episode } from "../episodes";

export const s51Episodes: Episode[] = [
  {
    episode: 1,
    title: "Permanent Uncertainty",
    airDate: "2026-09-23",
    events: [
      // --- Marooning: Lewis volunteers for Exile Island (joins the losing
      // tribe after the episode; not part of either tribe's roster yet, so
      // he scores no tribal_win/survive_tribal this episode) ---

      // --- Reward Challenge: Captains' negotiation/thumb war for starting
      // supplies (Kristin beat Kilby; Savu wins pot/flint/machete + fishing
      // gear, Toka gets shelter supplies only) ---
      { player: "alexis", type: "tribal_win" },
      { player: "ana", type: "tribal_win" },
      { player: "carter", type: "tribal_win" },
      { player: "cristian", type: "tribal_win" },
      { player: "eric", type: "tribal_win" },
      { player: "kristin", type: "tribal_win" },
      { player: "linnea", type: "tribal_win" },
      { player: "ori", type: "tribal_win" },
      { player: "rob", type: "tribal_win" },
      { player: "sharonda", type: "tribal_win" },

      // --- Immunity Challenge (Savu 1st, Toka to Tribal) ---
      { player: "alexis", type: "tribal_win" },
      { player: "ana", type: "tribal_win" },
      { player: "carter", type: "tribal_win" },
      { player: "cristian", type: "tribal_win" },
      { player: "eric", type: "tribal_win" },
      { player: "kristin", type: "tribal_win" },
      { player: "linnea", type: "tribal_win" },
      { player: "ori", type: "tribal_win" },
      { player: "rob", type: "tribal_win" },
      { player: "sharonda", type: "tribal_win" },

      // --- Survive Tribal Council (Toka minus Aaliyah) ---
      { player: "brady", type: "survive_tribal" },
      { player: "devin", type: "survive_tribal" },
      { player: "jelly", type: "survive_tribal" },
      { player: "jenna", type: "survive_tribal" },
      { player: "kilby", type: "survive_tribal" },
      { player: "maggie", type: "survive_tribal" },
      { player: "mike", type: "survive_tribal" },
      { player: "patt", type: "survive_tribal" },
      { player: "thienan", type: "survive_tribal" },

      // --- Correct Vote (6 Toka members voted for Aaliyah) ---
      { player: "brady", type: "correct_vote" },
      { player: "kilby", type: "correct_vote" },
      { player: "maggie", type: "correct_vote" },
      { player: "mike", type: "correct_vote" },
      { player: "patt", type: "correct_vote" },
      { player: "thienan", type: "correct_vote" },

      // --- Zero Votes Received at Tribal (the 6 above, plus Devin and
      // Jelly, who voted for Jenna and received none themselves) ---
      { player: "brady", type: "zero_votes_received" },
      { player: "devin", type: "zero_votes_received" },
      { player: "jelly", type: "zero_votes_received" },
      { player: "kilby", type: "zero_votes_received" },
      { player: "maggie", type: "zero_votes_received" },
      { player: "mike", type: "zero_votes_received" },
      { player: "patt", type: "zero_votes_received" },
      { player: "thienan", type: "zero_votes_received" },

      // --- Idols & Advantages ---
      { player: "rob", type: "find_idol" },

      // --- Voted Out (6-2 over Jenna; both played Shot in the Dark,
      // which has no matching scoring category — not otherwise logged) ---
      { player: "aaliyah", type: "voted_out" },

      // --- Survive Episode (all 20 remaining players, incl. Lewis on Exile) ---
      { player: "alexis", type: "survive_episode" },
      { player: "ana", type: "survive_episode" },
      { player: "brady", type: "survive_episode" },
      { player: "carter", type: "survive_episode" },
      { player: "cristian", type: "survive_episode" },
      { player: "devin", type: "survive_episode" },
      { player: "eric", type: "survive_episode" },
      { player: "jelly", type: "survive_episode" },
      { player: "jenna", type: "survive_episode" },
      { player: "kilby", type: "survive_episode" },
      { player: "kristin", type: "survive_episode" },
      { player: "lewis", type: "survive_episode" },
      { player: "linnea", type: "survive_episode" },
      { player: "maggie", type: "survive_episode" },
      { player: "mike", type: "survive_episode" },
      { player: "ori", type: "survive_episode" },
      { player: "patt", type: "survive_episode" },
      { player: "rob", type: "survive_episode" },
      { player: "sharonda", type: "survive_episode" },
      { player: "thienan", type: "survive_episode" },
    ],
  },
  {
    episode: 2,
    title: "Weaponized Honesty",
    airDate: "2026-09-30",
    events: [
      // --- Reward Challenge: pairs drag a 500lb whale apparatus through
      // water and over a roller; Savu fell behind and lost. Toka wins ---
      { player: "brady", type: "tribal_win" },
      { player: "devin", type: "tribal_win" },
      { player: "jelly", type: "tribal_win" },
      { player: "jenna", type: "tribal_win" },
      { player: "kilby", type: "tribal_win" },
      { player: "lewis", type: "tribal_win" },
      { player: "maggie", type: "tribal_win" },
      { player: "mike", type: "tribal_win" },
      { player: "patt", type: "tribal_win" },
      { player: "thienan", type: "tribal_win" },

      // --- Immunity Challenge (Toka 1st, Savu to Tribal) ---
      { player: "brady", type: "tribal_win" },
      { player: "devin", type: "tribal_win" },
      { player: "jelly", type: "tribal_win" },
      { player: "jenna", type: "tribal_win" },
      { player: "kilby", type: "tribal_win" },
      { player: "lewis", type: "tribal_win" },
      { player: "maggie", type: "tribal_win" },
      { player: "mike", type: "tribal_win" },
      { player: "patt", type: "tribal_win" },
      { player: "thienan", type: "tribal_win" },

      // --- Survive Tribal Council (Savu minus Ana) ---
      { player: "alexis", type: "survive_tribal" },
      { player: "carter", type: "survive_tribal" },
      { player: "cristian", type: "survive_tribal" },
      { player: "eric", type: "survive_tribal" },
      { player: "kristin", type: "survive_tribal" },
      { player: "linnea", type: "survive_tribal" },
      { player: "ori", type: "survive_tribal" },
      { player: "rob", type: "survive_tribal" },
      { player: "sharonda", type: "survive_tribal" },

      // --- Correct Vote (6 Savu members voted for Ana; Rob, Carter, Ori
      // and Ana herself voted Eric instead, 4 votes, not enough) ---
      { player: "alexis", type: "correct_vote" },
      { player: "cristian", type: "correct_vote" },
      { player: "eric", type: "correct_vote" },
      { player: "kristin", type: "correct_vote" },
      { player: "linnea", type: "correct_vote" },
      { player: "sharonda", type: "correct_vote" },

      // --- Zero Votes Received at Tribal (Eric took 4 votes and does not
      // qualify; everyone else who survived took none) ---
      { player: "alexis", type: "zero_votes_received" },
      { player: "carter", type: "zero_votes_received" },
      { player: "cristian", type: "zero_votes_received" },
      { player: "kristin", type: "zero_votes_received" },
      { player: "linnea", type: "zero_votes_received" },
      { player: "ori", type: "zero_votes_received" },
      { player: "rob", type: "zero_votes_received" },
      { player: "sharonda", type: "zero_votes_received" },

      // --- Idols & Advantages ---
      { player: "jelly", type: "find_idol" },

      // --- Voted Out (6-4 over Eric; Rob's plan to cover Eric with his
      // own idol never came into play — neither idol nor Eric's unused
      // Shot in the Dark was needed) ---
      { player: "ana", type: "voted_out" },

      // --- Survive Episode (all 19 remaining players) ---
      { player: "alexis", type: "survive_episode" },
      { player: "brady", type: "survive_episode" },
      { player: "carter", type: "survive_episode" },
      { player: "cristian", type: "survive_episode" },
      { player: "devin", type: "survive_episode" },
      { player: "eric", type: "survive_episode" },
      { player: "jelly", type: "survive_episode" },
      { player: "jenna", type: "survive_episode" },
      { player: "kilby", type: "survive_episode" },
      { player: "kristin", type: "survive_episode" },
      { player: "lewis", type: "survive_episode" },
      { player: "linnea", type: "survive_episode" },
      { player: "maggie", type: "survive_episode" },
      { player: "mike", type: "survive_episode" },
      { player: "ori", type: "survive_episode" },
      { player: "patt", type: "survive_episode" },
      { player: "rob", type: "survive_episode" },
      { player: "sharonda", type: "survive_episode" },
      { player: "thienan", type: "survive_episode" },
    ],
  },
  {
    episode: 3,
    title: "What I'm Smellin' Is Stinky",
    airDate: "2026-10-07",
    events: [
      // --- Mutiny/journey twist: Carter (Savu) and Devin (Toka) each visit
      // the other tribe's camp with the option to switch permanently. Toka
      // intercepts Carter's advantage clue and he misses his ride back,
      // mutinying onto Toka for good. Devin finds an extra vote at Savu's
      // well (with Sharonda's help) but returns to Toka. Net effect: Savu
      // drops to 7, Toka grows to 11 for this episode's challenge/Tribal. ---

      // --- Rob quits before the challenge, citing a foot injury; he gives
      // his episode-1 idol to Carter on his way out. No event category
      // fits a mid-episode idol handoff (not a new find), so it's not
      // otherwise logged. ---

      // --- Combined Reward/Immunity Challenge: one challenge, not two.
      // Savu wins immunity + a reward of egg-laying hens despite competing
      // down a man (7 vs. Toka's 11, with Carter now on their side) ---
      { player: "alexis", type: "tribal_win" },
      { player: "cristian", type: "tribal_win" },
      { player: "eric", type: "tribal_win" },
      { player: "kristin", type: "tribal_win" },
      { player: "linnea", type: "tribal_win" },
      { player: "ori", type: "tribal_win" },
      { player: "sharonda", type: "tribal_win" },

      // --- Survive Tribal Council (Toka, 11 attendees incl. mutineer
      // Carter, minus Patt) ---
      { player: "brady", type: "survive_tribal" },
      { player: "carter", type: "survive_tribal" },
      { player: "devin", type: "survive_tribal" },
      { player: "jelly", type: "survive_tribal" },
      { player: "jenna", type: "survive_tribal" },
      { player: "kilby", type: "survive_tribal" },
      { player: "lewis", type: "survive_tribal" },
      { player: "maggie", type: "survive_tribal" },
      { player: "mike", type: "survive_tribal" },
      { player: "thienan", type: "survive_tribal" },

      // --- Correct Vote (6-5: Carter, Jenna, Kilby, Lewis, Maggie, and
      // Thien An blindside Patt; Maggie's flip broke a vote-trade promise
      // to Brady for his extra-vote advantage. Brady, Devin, Jelly, Mike,
      // and Patt voted for Kilby instead and came up one vote short) ---
      { player: "carter", type: "correct_vote" },
      { player: "jenna", type: "correct_vote" },
      { player: "kilby", type: "correct_vote" },
      { player: "lewis", type: "correct_vote" },
      { player: "maggie", type: "correct_vote" },
      { player: "thienan", type: "correct_vote" },

      // --- Zero Votes Received at Tribal (Kilby took 5 votes and does not
      // qualify; everyone else who survived took none) ---
      { player: "brady", type: "zero_votes_received" },
      { player: "carter", type: "zero_votes_received" },
      { player: "devin", type: "zero_votes_received" },
      { player: "jelly", type: "zero_votes_received" },
      { player: "jenna", type: "zero_votes_received" },
      { player: "lewis", type: "zero_votes_received" },
      { player: "maggie", type: "zero_votes_received" },
      { player: "mike", type: "zero_votes_received" },
      { player: "thienan", type: "zero_votes_received" },

      // --- Idols & Advantages: both extra-vote advantages planted for the
      // journey twist were found this episode (Brady at Toka's oar, Devin
      // at Savu's well) ---
      { player: "brady", type: "find_advantage" },
      { player: "devin", type: "find_advantage" },

      // --- Voted Out (6-5 over Kilby's planned "kill shot") ---
      { player: "patt", type: "voted_out" },

      // --- Quit ---
      { player: "rob", type: "quit" },

      // --- Survive Episode (all 17 remaining players) ---
      { player: "alexis", type: "survive_episode" },
      { player: "brady", type: "survive_episode" },
      { player: "carter", type: "survive_episode" },
      { player: "cristian", type: "survive_episode" },
      { player: "devin", type: "survive_episode" },
      { player: "eric", type: "survive_episode" },
      { player: "jelly", type: "survive_episode" },
      { player: "jenna", type: "survive_episode" },
      { player: "kilby", type: "survive_episode" },
      { player: "kristin", type: "survive_episode" },
      { player: "lewis", type: "survive_episode" },
      { player: "linnea", type: "survive_episode" },
      { player: "maggie", type: "survive_episode" },
      { player: "mike", type: "survive_episode" },
      { player: "ori", type: "survive_episode" },
      { player: "sharonda", type: "survive_episode" },
      { player: "thienan", type: "survive_episode" },
    ],
  },
];
