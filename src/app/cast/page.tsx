import Image from "next/image";
import Link from "next/link";
import { players } from "@/data/players";
import { teams } from "@/data/teams";
import { getPlayerScores } from "@/lib/scoring";

export const metadata = {
  title: "Cast | Survivor 50 Fantasy",
};

function getDrafterForPlayer(playerId: string): string | null {
  const team = teams.find((t) => t.playerIds.includes(playerId));
  return team?.drafter ?? null;
}

export default function CastPage() {
  const playerScores = getPlayerScores();
  const allPlayers = Object.values(players);

  return (
    <div>
      <div className="mb-10 pt-4">
        <p className="text-sm font-medium tracking-widest text-[#F5C518] uppercase mb-2">
          Season 50
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          The Cast
        </h1>
        <p className="text-gray-500 mt-2 max-w-lg">
          24 returning players competing for the title of Sole Survivor.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {allPlayers.map((player) => {
          const score = playerScores[player.id];
          const drafter = getDrafterForPlayer(player.id);

          return (
            <Link
              key={player.id}
              href={`/cast/${player.id}`}
              className="group block"
            >
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.12] transition-all">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={player.imageUrl}
                    alt={player.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {drafter && (
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-[10px] font-semibold text-[#F5C518] px-2 py-0.5 rounded-full border border-[#F5C518]/20">
                      {drafter}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-[#F5C518] transition-colors">
                      {player.name}
                    </h3>
                    <p className="text-gray-400 text-[11px] mt-0.5">
                      {player.seasons.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="px-3 py-2.5 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider">
                    S50 pts
                  </span>
                  <span
                    className={`text-sm font-bold tabular-nums ${
                      score.total > 0
                        ? "text-emerald-400"
                        : score.total < 0
                        ? "text-red-400"
                        : "text-gray-600"
                    }`}
                  >
                    {score.total}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
