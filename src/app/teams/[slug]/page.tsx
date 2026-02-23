import { notFound } from "next/navigation";
import Link from "next/link";
import { teams } from "@/data/teams";
import { getTeamBySlug, getPlayerEpisodeBreakdown } from "@/lib/scoring";
import PlayerCard from "@/components/PlayerCard";
import EpisodeScoring from "@/components/EpisodeScoring";

export function generateStaticParams() {
  return teams.map((team) => ({ slug: team.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const team = teams.find((t) => t.slug === slug);
    return {
      title: team ? `${team.drafter}'s Team | Survivor 50 Fantasy` : "Team Not Found",
    };
  });
}

export default async function TeamDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  if (!team) notFound();

  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Leaderboard
      </Link>

      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-sm font-medium tracking-widest text-[#F5C518] uppercase mb-2">
            Team
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {team.drafter}
          </h1>
        </div>
        <div className="text-right">
          <div className="text-4xl font-extrabold text-white tabular-nums">{team.total}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">total pts</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
        {team.players.map((player) => (
          <PlayerCard key={player.playerId} player={player} />
        ))}
      </div>

      <div className="border-t border-white/[0.06] pt-8">
        <h2 className="text-lg font-semibold text-white mb-5">Episode Breakdown</h2>
        <div className="space-y-8">
          {team.players.map((player) => {
            const epScores = getPlayerEpisodeBreakdown(player.playerId);
            if (epScores.length === 0) return null;
            return (
              <div key={player.playerId}>
                <h3 className="text-sm font-semibold text-[#F5C518] mb-3">
                  {player.name}
                </h3>
                <EpisodeScoring episodes={epScores} />
              </div>
            );
          })}
          {team.players.every(
            (p) => getPlayerEpisodeBreakdown(p.playerId).length === 0
          ) && (
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-8 text-center">
              <p className="text-gray-500">
                No scoring events yet. Check back after the season premiere!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
