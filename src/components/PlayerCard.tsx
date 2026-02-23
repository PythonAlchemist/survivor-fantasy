import Link from "next/link";
import Image from "next/image";
import { PlayerScore } from "@/lib/scoring";
import { players } from "@/data/players";

interface PlayerCardProps {
  player: PlayerScore;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  const playerData = players[player.playerId];

  return (
    <Link href={`/cast/${player.playerId}`} className="block group">
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/[0.1]">
            <Image
              src={playerData?.imageUrl ?? ""}
              alt={player.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-medium text-sm truncate group-hover:text-[#F5C518] transition-colors">
              {player.name}
            </h4>
          </div>
          <div
            className={`text-lg font-bold tabular-nums ${
              player.total > 0
                ? "text-emerald-400"
                : player.total < 0
                ? "text-red-400"
                : "text-gray-600"
            }`}
          >
            {player.total}
          </div>
        </div>
        {Object.keys(player.breakdown).length > 0 ? (
          <div className="space-y-1.5 pt-3 border-t border-white/[0.06]">
            {Object.entries(player.breakdown).map(([type, pts]) => (
              <div key={type} className="flex justify-between text-xs">
                <span className="text-gray-500">{formatEventType(type)}</span>
                <span
                  className={`font-medium tabular-nums ${
                    pts > 0 ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {pts > 0 ? "+" : ""}
                  {pts}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-600 pt-3 border-t border-white/[0.06]">
            No events yet
          </p>
        )}
      </div>
    </Link>
  );
}

function formatEventType(type: string): string {
  return type
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
