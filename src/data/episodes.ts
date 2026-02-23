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

// Add episode data here after each episode airs.
// Example:
// {
//   episode: 1,
//   title: "Premiere",
//   airDate: "2026-02-25",
//   events: [
//     { player: "ozzy", type: "tribal_win" },
//     { player: "ozzy", type: "survive_tribal" },
//     { player: "ozzy", type: "survive_episode" },
//     { player: "aubry", type: "find_idol" },
//   ],
// },

export const episodes: Episode[] = [];
