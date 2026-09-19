import { pointValues, EventType } from "@/data/scoring";
import { getSeason, type Season } from "@/data/seasons";

/** Every scoring function is scoped to one season. */
function season(key: string): Season {
  const s = getSeason(key);
  if (!s) throw new Error(`Unknown season: ${key}`);
  return s;
}

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

export function getPlayerScores(seasonKey: string): Record<string, PlayerScore> {
  const { players, episodes } = season(seasonKey);
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

export function getTeamScores(seasonKey: string): TeamScore[] {
  const { teams } = season(seasonKey);
  const playerScores = getPlayerScores(seasonKey);

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

export function getTeamBySlug(seasonKey: string, slug: string): TeamScore | undefined {
  const allTeams = getTeamScores(seasonKey);
  return allTeams.find((t) => t.slug === slug);
}

export interface PlayerEpisodeScore {
  episode: number;
  title: string;
  points: number;
  events: { type: EventType; points: number }[];
}

const ELIMINATION_EVENTS: EventType[] = ["voted_out", "medevac", "quit"];

export function getEliminatedPlayerIds(seasonKey: string): Set<string> {
  const { episodes } = season(seasonKey);
  const eliminated = new Set<string>();
  for (const episode of episodes) {
    for (const event of episode.events) {
      if (ELIMINATION_EVENTS.includes(event.type)) {
        eliminated.add(event.player);
      }
    }
  }
  return eliminated;
}

export function getPlayerEpisodeBreakdown(seasonKey: string, playerId: string): PlayerEpisodeScore[] {
  return season(seasonKey).episodes
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
