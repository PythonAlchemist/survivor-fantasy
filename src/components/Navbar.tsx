"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { seasons, CURRENT_SEASON, logoAt } from "@/data/seasons";

const sections = [
  { path: "", label: "Leaderboard" },
  { path: "/cast", label: "Cast" },
  { path: "/episodes", label: "Episodes" },
];

export default function Navbar() {
  const pathname = usePathname();
  const active = Object.keys(seasons).find((k) => pathname.startsWith(`/${k}`)) ?? CURRENT_SEASON;
  const mark = logoAt(seasons[active], 34);
  const links = [
    ...sections.map((s) => ({ href: `/${active}${s.path}`, label: s.label })),
    { href: "/rules", label: "Rules" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0e17]/80 border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href={`/${active}`} className="flex items-center gap-2.5 group">
          <Image
            src={mark.src}
            alt={seasons[active].title}
            width={mark.width}
            height={mark.height}
            className="rounded-md"
            priority
          />
          <span className="text-white font-semibold text-base tracking-tight group-hover:text-[#F5C518] transition-colors hidden sm:inline">
            Fantasy Draft
          </span>
        </Link>
        <div className="flex gap-1 bg-white/[0.04] rounded-full p-1">
          {links.map((link) => {
            const isActive =
              link.href === `/${active}`
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#F5C518] text-black shadow-lg shadow-[#F5C518]/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-1 bg-white/[0.04] rounded-full p-1">
          {Object.values(seasons).map((s) => (
            <Link
              key={s.key}
              href={`/${s.key}`}
              title={s.title}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold tabular-nums transition-all ${
                s.key === active
                  ? "bg-white/[0.12] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              S{s.number}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
