import Link from "next/link";
import Image from "next/image";
import { TeamScore } from "@/lib/scoring";
import { players } from "@/data/players";

interface LeaderboardCardProps {
  team: TeamScore;
  rank: number;
  eliminatedIds: Set<string>;
}

export default function LeaderboardCard({ team, rank, eliminatedIds }: LeaderboardCardProps) {
  const isFirst = rank === 1;

  return (
    <Link href={`/teams/${team.slug}`} className="block group">
      <div
        className={`relative rounded-xl p-5 sm:p-6 transition-all duration-200 border ${
          isFirst
            ? "bg-gradient-to-br from-[#F5C518]/[0.06] to-transparent border-[#F5C518]/20 hover:border-[#F5C518]/40 shadow-lg shadow-[#F5C518]/[0.04]"
            : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1]"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold ${
                isFirst
                  ? "bg-gradient-to-br from-[#F5C518] to-[#d4a800] text-black shadow-md shadow-[#F5C518]/30"
                  : "bg-white/[0.06] text-gray-400"
              }`}
            >
              {rank}
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-[#F5C518] transition-colors">
              {team.drafter}
            </h3>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white tabular-nums">{team.total}</div>
            <div className="text-[11px] text-gray-500 uppercase tracking-wider">pts</div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
          {team.players.map((player) => {
            const playerData = players[player.playerId];
            const isEliminated = eliminatedIds.has(player.playerId);
            return (
              <div
                key={player.playerId}
                className={`bg-white/[0.03] rounded-lg px-3 py-2 flex items-center gap-2 ${
                  isEliminated ? "opacity-40" : ""
                }`}
              >
                <Image
                  src={playerData?.imageUrl ?? ""}
                  alt={player.name}
                  width={24}
                  height={24}
                  className={`w-6 h-6 rounded-full object-cover flex-shrink-0 ${
                    isEliminated ? "grayscale" : ""
                  }`}
                />
                <span className={`text-[13px] truncate flex-1 ${
                  isEliminated ? "line-through text-gray-600" : "text-gray-400"
                }`}>
                  {player.name}
                </span>
                <span
                  className={`text-[13px] font-semibold tabular-nums flex-shrink-0 ${
                    isEliminated
                      ? "text-gray-600"
                      : player.total > 0
                      ? "text-emerald-400"
                      : player.total < 0
                      ? "text-red-400"
                      : "text-gray-600"
                  }`}
                >
                  {player.total}
                </span>
              </div>
            );
          })}
        </div>
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-700 group-hover:text-gray-500 transition-colors hidden sm:block">
          <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
