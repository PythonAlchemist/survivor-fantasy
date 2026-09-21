import { players as s50Players, type Player } from "./players";
import { teams as s50Teams, type Team } from "./teams";
import { episodes as s50Episodes, type Episode } from "./episodes";
import { s51Players } from "./s51/players";
import { s51Teams } from "./s51/teams";
import { s51Episodes } from "./s51/episodes";

export interface Season {
  key: string;
  number: number;
  title: string;
  subtitle: string;
  premiere: string;
  logo: { src: string; width: number; height: number };
  players: Record<string, Player>;
  teams: Team[];
  episodes: Episode[];
}

export const seasons: Record<string, Season> = {
  s50: {
    key: "s50",
    number: 50,
    title: "Survivor 50",
    subtitle: "In the Hands of the Fans",
    premiere: "2026-02-25T20:00:00-05:00",
    logo: { src: "/images/logo.webp", width: 1000, height: 621 },
    players: s50Players,
    teams: s50Teams,
    episodes: s50Episodes,
  },
  s51: {
    key: "s51",
    number: 51,
    title: "Survivor 51",
    subtitle: "The Open Era",
    premiere: "2026-09-23T20:00:00-04:00",
    logo: { src: "/images/s51-logo.png", width: 640, height: 415 },
    players: s51Players,
    teams: s51Teams,
    episodes: s51Episodes,
  },
};

/** The season shown at the site root. */
export const CURRENT_SEASON = "s51";

export const seasonKeys = Object.keys(seasons);
export const getSeason = (key: string): Season | undefined => seasons[key];

/** Scale a season logo to a target height, preserving its aspect ratio. */
export function logoAt(season: Season, height: number) {
  const { src, width, height: h } = season.logo;
  return { src, height, width: Math.round((width / h) * height) };
}
