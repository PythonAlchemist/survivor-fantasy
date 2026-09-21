import Image from "next/image";
import { notFound } from "next/navigation";
import { getTeamScores, getEliminatedPlayerIds } from "@/lib/scoring";
import { getSeason, seasonKeys, logoAt } from "@/data/seasons";
import LeaderboardCard from "@/components/LeaderboardCard";

export function generateStaticParams() {
  return seasonKeys.map((season) => ({ season }));
}

export async function generateMetadata({ params }: { params: Promise<{ season: string }> }) {
  const meta = getSeason((await params).season);
  return { title: meta ? meta.title : "Leaderboard" };
}

export default async function Home({ params }: { params: Promise<{ season: string }> }) {
  const { season } = await params;
  const meta = getSeason(season);
  if (!meta) notFound();

  const teamScores = getTeamScores(season);
  const eliminatedIds = getEliminatedPlayerIds(season);
  const episodes = meta.episodes;
  const hasEpisodes = episodes.length > 0;
  const isPrePremiere = new Date() < new Date(meta.premiere) && !hasEpisodes;
  const hero = logoAt(meta, 150);

  return (
    <div>
      {/* Hero */}
      <div className="text-center mb-12 pt-4">
        <Image
          src={hero.src}
          alt={meta.title}
          width={hero.width}
          height={hero.height}
          className="mx-auto mb-5"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Fantasy Draft
        </h1>
        <p className="text-base text-gray-500 mt-2 max-w-md mx-auto">
          {meta.title} · {meta.subtitle} — {meta.teams.length} drafters,{" "}
          {Object.keys(meta.players).length} castaways, one leaderboard.
        </p>
        {isPrePremiere && (
          <div className="mt-8 inline-flex items-center gap-3 bg-white/[0.04] backdrop-blur border border-white/[0.08] rounded-full pl-4 pr-5 py-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C518] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5C518]" />
            </span>
            <span className="text-sm text-gray-300">
              Premieres{" "}
              <span className="text-white font-medium">
                {new Date(meta.premiere).toLocaleDateString("en-US", {
                  month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
                })}
              </span>
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
          <LeaderboardCard key={team.slug} season={season} team={team} rank={i + 1} eliminatedIds={eliminatedIds} />
        ))}
      </div>
    </div>
  );
}
