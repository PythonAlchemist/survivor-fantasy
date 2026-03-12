"use client";

import { useState } from "react";

interface EpisodeAccordionProps {
  episodeNumber: number;
  title: string;
  airDate?: string;
  totalPoints: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function EpisodeAccordion({
  episodeNumber,
  title,
  airDate,
  totalPoints,
  defaultOpen = false,
  children,
}: EpisodeAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-4 flex items-center justify-between gap-2 cursor-pointer hover:bg-white/[0.02] transition-colors"
      >
        <div className="text-left">
          <span className="text-[#F5C518] font-bold text-sm tabular-nums">
            Episode {episodeNumber}
          </span>
          <h2 className="text-white font-semibold text-lg mt-0.5">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            {airDate && (
              <p className="text-gray-500 text-xs">{airDate}</p>
            )}
            <p className="text-gray-400 text-sm mt-0.5">
              Total points:{" "}
              <span className="font-bold text-white tabular-nums">
                {totalPoints}
              </span>
            </p>
          </div>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="border-t border-white/[0.06]">
          {children}
        </div>
      )}
    </div>
  );
}
