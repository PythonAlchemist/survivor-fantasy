"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Leaderboard" },
  { href: "/cast", label: "Cast" },
  { href: "/episodes", label: "Episodes" },
  { href: "/rules", label: "Rules" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0e17]/80 border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/images/logo.webp"
            alt="Survivor 50"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-white font-semibold text-base tracking-tight group-hover:text-[#F5C518] transition-colors hidden sm:inline">
            Fantasy Draft
          </span>
        </Link>
        <div className="flex gap-1 bg-white/[0.04] rounded-full p-1">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
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
      </div>
    </nav>
  );
}
