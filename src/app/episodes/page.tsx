import { episodes } from "@/data/episodes";
import { players } from "@/data/players";
import { teams } from "@/data/teams";
import { scoringRules, pointValues } from "@/data/scoring";
import type { EventType } from "@/data/scoring";

export const metadata = {
  title: "Episodes | Survivor 50 Fantasy",
};

function getEventLabel(type: EventType): string {
  return scoringRules.find((r) => r.type === type)?.label ?? type;
}

function getDrafterForPlayer(playerId: string): string | null {
  const team = teams.find((t) => t.playerIds.includes(playerId));
  return team?.drafter ?? null;
}

export default function EpisodesPage() {
  return (
    <div>
      <div className="mb-10 pt-4">
        <p className="text-sm font-medium tracking-widest text-[#F5C518] uppercase mb-2">
          Week by week
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Episodes
        </h1>
        <p className="text-gray-500 mt-2 max-w-lg">
          Full scoring breakdown for every episode of Survivor 50.
        </p>
      </div>

      <div className="space-y-8">
        {episodes.map((ep) => {
          // Group events by player and calculate per-player totals
          const playerMap: Record<
            string,
            { events: { type: EventType; label: string; points: number }[]; total: number }
          > = {};

          for (const event of ep.events) {
            if (!playerMap[event.player]) {
              playerMap[event.player] = { events: [], total: 0 };
            }
            const pts = pointValues[event.type];
            playerMap[event.player].events.push({
              type: event.type,
              label: getEventLabel(event.type),
              points: pts,
            });
            playerMap[event.player].total += pts;
          }

          // Sort players by points descending
          const sortedPlayers = Object.entries(playerMap).sort(
            ([, a], [, b]) => b.total - a.total
          );

          const episodeTotal = sortedPlayers.reduce(
            (sum, [, data]) => sum + data.total,
            0
          );

          return (
            <div
              key={ep.episode}
              className="bg-white/[0.02] border border-white/[0.06] rounded-xl overflow-hidden"
            >
              {/* Episode header */}
              <div className="px-5 py-4 border-b border-white/[0.06]">
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-[#F5C518] font-bold text-sm tabular-nums">
                      Episode {ep.episode}
                    </span>
                    <h2 className="text-white font-semibold text-lg mt-0.5">
                      {ep.title}
                    </h2>
                  </div>
                  <div className="text-right">
                    {ep.airDate && (
                      <p className="text-gray-500 text-xs">{ep.airDate}</p>
                    )}
                    <p className="text-gray-400 text-sm mt-0.5">
                      Total points:{" "}
                      <span className="font-bold text-white tabular-nums">
                        {episodeTotal}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Player breakdown */}
              <div className="divide-y divide-white/[0.04]">
                {sortedPlayers.map(([playerId, data]) => {
                  const player = players[playerId];
                  const drafter = getDrafterForPlayer(playerId);
                  const name = player?.name ?? playerId;

                  return (
                    <div
                      key={playerId}
                      className="px-5 py-3 flex items-start justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-white font-medium text-sm">
                            {name}
                          </span>
                          {drafter && (
                            <span className="text-[10px] font-semibold text-[#F5C518] bg-[#F5C518]/10 px-1.5 py-0.5 rounded-full border border-[#F5C518]/20">
                              {drafter}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {data.events.map((evt, i) => (
                            <span
                              key={i}
                              className={`inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full border ${
                                evt.points > 0
                                  ? "text-emerald-400 border-emerald-400/20 bg-emerald-400/5"
                                  : evt.points < 0
                                  ? "text-red-400 border-red-400/20 bg-red-400/5"
                                  : "text-gray-500 border-white/10 bg-white/[0.02]"
                              }`}
                            >
                              {evt.label}
                              <span className="font-bold tabular-nums">
                                {evt.points > 0 ? `+${evt.points}` : evt.points}
                              </span>
                            </span>
                          ))}
                        </div>
                      </div>
                      <span
                        className={`text-sm font-bold tabular-nums shrink-0 pt-0.5 ${
                          data.total > 0
                            ? "text-emerald-400"
                            : data.total < 0
                            ? "text-red-400"
                            : "text-gray-600"
                        }`}
                      >
                        {data.total > 0 ? `+${data.total}` : data.total}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
