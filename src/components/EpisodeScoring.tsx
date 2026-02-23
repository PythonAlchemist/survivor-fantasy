import { PlayerEpisodeScore } from "@/lib/scoring";
import { scoringRules } from "@/data/scoring";

interface EpisodeScoringProps {
  episodes: PlayerEpisodeScore[];
}

export default function EpisodeScoring({ episodes }: EpisodeScoringProps) {
  if (episodes.length === 0) {
    return (
      <p className="text-gray-600 text-sm">No scoring events yet.</p>
    );
  }

  return (
    <div className="space-y-2">
      {episodes.map((ep) => (
        <div
          key={ep.episode}
          className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4"
        >
          <div className="flex justify-between items-center mb-2.5">
            <h4 className="text-white text-sm font-medium">
              Ep. {ep.episode}
              <span className="text-gray-500 font-normal ml-1.5">{ep.title}</span>
            </h4>
            <span
              className={`text-sm font-bold tabular-nums ${
                ep.points > 0
                  ? "text-emerald-400"
                  : ep.points < 0
                  ? "text-red-400"
                  : "text-gray-600"
              }`}
            >
              {ep.points > 0 ? "+" : ""}
              {ep.points}
            </span>
          </div>
          <div className="space-y-1.5">
            {ep.events.map((event, i) => {
              const rule = scoringRules.find((r) => r.type === event.type);
              return (
                <div key={i} className="flex justify-between text-xs">
                  <span className="text-gray-500">
                    {rule?.label ?? event.type}
                  </span>
                  <span
                    className={`font-medium tabular-nums ${
                      event.points > 0 ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {event.points > 0 ? "+" : ""}
                    {event.points}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
