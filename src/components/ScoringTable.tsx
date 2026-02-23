import { scoringRules } from "@/data/scoring";

const categoryStyles: Record<string, { badge: string; accent: string }> = {
  Challenges: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    accent: "text-blue-400",
  },
  Survival: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accent: "text-emerald-400",
  },
  Voting: {
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    accent: "text-violet-400",
  },
  "Idols/Advantages": {
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    accent: "text-amber-400",
  },
  Penalties: {
    badge: "bg-red-500/10 text-red-400 border-red-500/20",
    accent: "text-red-400",
  },
  "End of Season": {
    badge: "bg-[#E8590C]/10 text-[#E8590C] border-[#E8590C]/20",
    accent: "text-[#E8590C]",
  },
};

export default function ScoringTable() {
  const categories = [...new Set(scoringRules.map((r) => r.category))];

  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const rules = scoringRules.filter((r) => r.category === category);
        const style = categoryStyles[category] ?? {
          badge: "bg-gray-500/10 text-gray-400 border-gray-500/20",
          accent: "text-gray-400",
        };

        return (
          <div key={category}>
            <div
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${style.badge}`}
            >
              {category}
            </div>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl overflow-hidden">
              {rules.map((rule, i) => (
                <div
                  key={rule.type}
                  className={`flex justify-between items-center px-5 py-3.5 ${
                    i < rules.length - 1 ? "border-b border-white/[0.04]" : ""
                  }`}
                >
                  <span className="text-sm text-gray-300">{rule.label}</span>
                  <span
                    className={`text-sm font-bold tabular-nums ${
                      rule.points > 0 ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {rule.points > 0 ? "+" : ""}
                    {rule.points}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
