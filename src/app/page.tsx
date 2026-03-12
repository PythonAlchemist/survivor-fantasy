import Image from "next/image";
import { getTeamScores, getEliminatedPlayerIds } from "@/lib/scoring";
import { episodes } from "@/data/episodes";
import LeaderboardCard from "@/components/LeaderboardCard";

const PREMIERE_DATE = new Date("2026-02-25T20:00:00-05:00");

export default function Home() {
  const teamScores = getTeamScores();
  const eliminatedIds = getEliminatedPlayerIds();
  const hasEpisodes = episodes.length > 0;
  const now = new Date();
  const isPrePremiere = now < PREMIERE_DATE && !hasEpisodes;

  return (
    <div>
      {/* Hero */}
      <div className="text-center mb-12 pt-4">
        <Image
          src="/images/logo.webp"
          alt="Survivor 50"
          width={160}
          height={160}
          className="mx-auto mb-5"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Fantasy Draft
        </h1>
        <p className="text-base text-gray-500 mt-2 max-w-md mx-auto">
          4 drafters. 24 contestants. One leaderboard.
        </p>
        {isPrePremiere && (
          <div className="mt-8 inline-flex items-center gap-3 bg-white/[0.04] backdrop-blur border border-white/[0.08] rounded-full pl-4 pr-5 py-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C518] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5C518]" />
            </span>
            <span className="text-sm text-gray-300">
              Premieres <span className="text-white font-medium">February 25, 2026</span>
            </span>
          </div>
        )}
        {hasEpisodes && (
          <div className="mt-6 inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Through Episode {episodes[episodes.length - 1].episode}
          </div>
        )}
      </div>

      {/* Leaderboard */}
      <div className="space-y-3">
        {teamScores.map((team, i) => (
          <LeaderboardCard key={team.slug} team={team} rank={i + 1} eliminatedIds={eliminatedIds} />
        ))}
      </div>
    </div>
  );
}
