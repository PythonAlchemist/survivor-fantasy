import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { players } from "@/data/players";
import { teams } from "@/data/teams";
import { getPlayerScores, getPlayerEpisodeBreakdown } from "@/lib/scoring";
import EpisodeScoring from "@/components/EpisodeScoring";

export function generateStaticParams() {
  return Object.keys(players).map((id) => ({ id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const player = players[id];
    return {
      title: player ? `${player.name} | Survivor 50 Fantasy` : "Player Not Found",
    };
  });
}

export default async function CastDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const player = players[id];
  if (!player) notFound();

  const scores = getPlayerScores();
  const playerScore = scores[id];
  const epBreakdown = getPlayerEpisodeBreakdown(id);
  const team = teams.find((t) => t.playerIds.includes(id));

  return (
    <div>
      <Link
        href="/cast"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Cast
      </Link>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-10">
        {/* Photo */}
        <div className="w-40 sm:w-48 flex-shrink-0">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/[0.08]">
            <Image
              src={player.imageUrl}
              alt={player.name}
              fill
              className="object-cover"
              sizes="192px"
              priority
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium tracking-widest text-[#F5C518] uppercase mb-1">
            Contestant
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {player.name}
          </h1>

          <div className="space-y-3 mb-6">
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Seasons</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {player.seasons.map((s) => (
                  <span
                    key={s}
                    className="bg-[#1E5B8A]/20 text-[#5ba3d9] text-xs px-2.5 py-0.5 rounded-full border border-[#1E5B8A]/30"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Notable</span>
              <p className="text-gray-300 text-sm mt-0.5">{player.notableStats}</p>
            </div>
            {team && (
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Drafted by</span>
                <p className="mt-0.5">
                  <Link
                    href={`/teams/${team.slug}`}
                    className="text-[#F5C518] text-sm font-medium hover:underline"
                  >
                    {team.drafter}
                  </Link>
                </p>
              </div>
            )}
          </div>

          {/* S50 Score */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 inline-flex items-center gap-4">
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider">S50 Points</span>
              <div
                className={`text-3xl font-extrabold tabular-nums ${
                  playerScore.total > 0
                    ? "text-emerald-400"
                    : playerScore.total < 0
                    ? "text-red-400"
                    : "text-gray-600"
                }`}
              >
                {playerScore.total}
              </div>
            </div>
            {Object.keys(playerScore.breakdown).length > 0 && (
              <div className="border-l border-white/[0.06] pl-4 space-y-1">
                {Object.entries(playerScore.breakdown).map(([type, pts]) => (
                  <div key={type} className="flex justify-between gap-4 text-xs">
                    <span className="text-gray-500">{formatEventType(type)}</span>
                    <span className={`font-medium tabular-nums ${pts > 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {pts > 0 ? "+" : ""}{pts}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Episode Breakdown */}
      <div className="border-t border-white/[0.06] pt-8">
        <h2 className="text-lg font-semibold text-white mb-4">Episode Breakdown</h2>
        {epBreakdown.length > 0 ? (
          <EpisodeScoring episodes={epBreakdown} />
        ) : (
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-8 text-center">
            <p className="text-gray-500">
              No scoring events yet. Check back after the season premiere!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function formatEventType(type: string): string {
  return type
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
