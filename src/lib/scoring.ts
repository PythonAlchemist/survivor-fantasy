import { episodes } from "@/data/episodes";
import { pointValues, EventType } from "@/data/scoring";
import { teams } from "@/data/teams";
import { players } from "@/data/players";

export interface PlayerScore {
  playerId: string;
  name: string;
  total: number;
  breakdown: Partial<Record<EventType, number>>;
}

export interface TeamScore {
  slug: string;
  drafter: string;
  total: number;
  players: PlayerScore[];
}

export function getPlayerScores(): Record<string, PlayerScore> {
  const scores: Record<string, PlayerScore> = {};

  // Initialize all players
  for (const [id, player] of Object.entries(players)) {
    scores[id] = {
      playerId: id,
      name: player.name,
      total: 0,
      breakdown: {},
    };
  }

  // Tally events from all episodes
  for (const episode of episodes) {
    for (const event of episode.events) {
      const score = scores[event.player];
      if (!score) continue;
      const pts = pointValues[event.type] ?? 0;
      score.total += pts;
      score.breakdown[event.type] = (score.breakdown[event.type] ?? 0) + pts;
    }
  }

  return scores;
}

export function getTeamScores(): TeamScore[] {
  const playerScores = getPlayerScores();

  return teams
    .map((team) => {
      const teamPlayers = team.playerIds.map((id) => playerScores[id]);
      const total = teamPlayers.reduce((sum, p) => sum + p.total, 0);
      return {
        slug: team.slug,
        drafter: team.drafter,
        total,
        players: teamPlayers,
      };
    })
    .sort((a, b) => b.total - a.total);
}

export function getTeamBySlug(slug: string): TeamScore | undefined {
  const allTeams = getTeamScores();
  return allTeams.find((t) => t.slug === slug);
}

export interface PlayerEpisodeScore {
  episode: number;
  title: string;
  points: number;
  events: { type: EventType; points: number }[];
}

export function getPlayerEpisodeBreakdown(playerId: string): PlayerEpisodeScore[] {
  return episodes
    .filter((ep) => ep.events.some((e) => e.player === playerId))
    .map((ep) => {
      const playerEvents = ep.events.filter((e) => e.player === playerId);
      const events = playerEvents.map((e) => ({
        type: e.type,
        points: pointValues[e.type] ?? 0,
      }));
      const points = events.reduce((sum, e) => sum + e.points, 0);
      return { episode: ep.episode, title: ep.title, points, events };
    });
}
