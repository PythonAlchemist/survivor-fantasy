import type { S51Research } from "@/data/s51/research";

const TIER_STYLE: Record<S51Research["tier"], string> = {
  A: "bg-[#F5C518] text-black",
  B: "border border-[#F5C518]/50 text-[#F5C518]",
  C: "border border-white/20 text-gray-400",
  D: "border border-[#E8590C]/60 text-[#E8590C]",
};

const FLAG_LABEL: Record<string, string> = {
  athlete: "Verified athlete",
  target: "Target risk",
  superfan: "Deep superfan",
  camp: "Camp utility",
};

function Bar({ label, value, accent = "#F5C518" }: { label: string; value: number; accent?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 flex-shrink-0 text-[10px] uppercase tracking-widest text-gray-500">
        {label}
      </span>
      <div className="flex-1 flex gap-[3px]">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className="h-1.5 flex-1 rounded-sm"
            style={{ backgroundColor: i < value ? accent : "rgba(255,255,255,0.08)" }}
          />
        ))}
      </div>
      <span className="w-5 text-right text-[11px] tabular-nums text-gray-500">{value}</span>
    </div>
  );
}

function EvidenceList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-[13px] leading-relaxed text-gray-400"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </ul>
  );
}

export default function ScoutingReport({ r }: { r: S51Research }) {
  return (
    <div className="border-t border-white/[0.06] pt-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Scouting Report</h2>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-md tracking-wide ${TIER_STYLE[r.tier]}`}>
          TIER {r.tier}
        </span>
      </div>

      {/* Projection strip */}
      <div className="grid grid-cols-4 divide-x divide-white/[0.06] bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden">
        {[
          { label: "Proj. points", value: r.projection.points, hero: true },
          { label: "Make merge", value: `${r.projection.pMerge}%` },
          { label: "Reach jury", value: `${r.projection.pJury}%` },
          { label: "Win equity", value: `${r.projection.pWin}%` },
        ].map((c) => (
          <div key={c.label} className="px-3 py-3 text-center">
            <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{c.label}</div>
            <div className={`text-xl font-extrabold tabular-nums ${c.hero ? "text-[#F5C518]" : "text-white"}`}>
              {c.value}
            </div>
          </div>
        ))}
      </div>

      {/* Their own words */}
      {r.quote && (
        <blockquote className="border-l-2 border-white/15 pl-4 text-[15px] italic text-gray-300 leading-relaxed">
          &ldquo;{r.quote}&rdquo;
        </blockquote>
      )}

      {/* Tags */}
      {r.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {r.tags.map((t, i) => (
            <span
              key={i}
              className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border ${
                t.asset
                  ? "border-[#2D6B3F]/50 bg-[#2D6B3F]/10 text-[#5fb37c]"
                  : "border-[#E8590C]/40 bg-[#E8590C]/10 text-[#f0895a]"
              }`}
            >
              {t.label}
            </span>
          ))}
          {r.flags.map((f) => (
            <span
              key={f}
              className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border border-[#1E5B8A]/50 bg-[#1E5B8A]/10 text-[#5ba3d9]"
            >
              {FLAG_LABEL[f] ?? f}
            </span>
          ))}
        </div>
      )}

      {/* Analysis */}
      <p className="text-sm leading-relaxed text-gray-300" dangerouslySetInnerHTML={{ __html: r.read }} />
      {r.comps && <p className="text-xs text-gray-500 font-mono">Self-comparison: {r.comps}</p>}

      {/* Athletic / social ratings with sourced evidence */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Pre-merge (tribal)</h3>
          <div className="space-y-2 mb-3">
            <Bar label="Overall" value={r.phase.pre} />
            <Bar label="Power" value={r.phase.sub.power} accent="#5ba3d9" />
            <Bar label="Swim" value={r.phase.sub.swim} accent="#5ba3d9" />
            <Bar label="Camp" value={r.phase.sub.camp} accent="#5ba3d9" />
          </div>
          <EvidenceList items={r.preMergeEvidence} />
        </div>
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Post-merge (immunity)</h3>
          <div className="space-y-2 mb-3">
            <Bar label="Overall" value={r.phase.post} accent="#E8590C" />
            <Bar label="Balance" value={r.phase.sub.balance} accent="#E8590C" />
            <Bar label="Endurance" value={r.phase.sub.endur} accent="#E8590C" />
            <Bar label="Precision" value={r.phase.sub.precision} accent="#E8590C" />
          </div>
          <EvidenceList items={r.postMergeEvidence} />
        </div>
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Social — alliance durability</h3>
          <div className="mb-3">
            <Bar label="Overall" value={r.phase.social} accent="#2D6B3F" />
          </div>
          <EvidenceList items={r.socialEvidence} />
        </div>
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Athletic record</h3>
          <EvidenceList items={r.athleticEvidence} />
        </div>
      </div>

      {/* Family */}
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs uppercase tracking-widest text-gray-500">
            Family &amp; story — {r.family.status}
            {r.family.kids > 0 ? ` (${r.family.kids} kid${r.family.kids > 1 ? "s" : ""})` : ""}
          </h3>
          <span className="text-[11px] tabular-nums text-gray-500">Bond {r.family.bond}/5</span>
        </div>
        <p className="text-[13px] leading-relaxed text-gray-400" dangerouslySetInnerHTML={{ __html: r.family.detail }} />
      </div>

      {/* Tribe intel */}
      {r.tribeIntel && (
        <div
          className={`rounded-xl p-4 border ${
            r.tribeIntel.confidence === "conflict"
              ? "border-[#E8590C]/50 bg-[#E8590C]/5"
              : "border-white/[0.08] bg-white/[0.02]"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: r.tribeIntel.color === "yellow" ? "#C9A21A" : "#6B4E9E" }}
            />
            <h3 className="text-xs uppercase tracking-widest text-gray-500">
              Tribe intel — {r.tribeIntel.tribe} ({r.tribeIntel.color}) · unconfirmed, {r.tribeIntel.confidence === "conflict" ? "sources disagree" : `${r.tribeIntel.confidence} confidence`}
            </h3>
          </div>
          <p className="text-[13px] leading-relaxed text-gray-400" dangerouslySetInnerHTML={{ __html: r.tribeIntel.note }} />
        </div>
      )}

      {/* Background facts */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Background</h3>
        <EvidenceList items={r.facts} />
      </div>

      <p className="text-[11px] text-gray-600 pt-2 border-t border-white/[0.04]">
        Compiled from the official CBS/EW bio questionnaire, verified athletic records, and public
        professional background. CBS blocked pre-game press interviews this season, so no strategy
        interview exists for anyone. Tribe intel is unconfirmed fan analysis, graded by confidence.
      </p>
    </div>
  );
}
