import ScoringTable from "@/components/ScoringTable";

export const metadata = {
  title: "Scoring Rules | Survivor 50 Fantasy",
};

export default function RulesPage() {
  return (
    <div>
      <div className="mb-10 pt-4">
        <p className="text-sm font-medium tracking-widest text-[#F5C518] uppercase mb-2">
          How it works
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Scoring Rules
        </h1>
        <p className="text-gray-500 mt-2 max-w-lg">
          Points are tallied after each episode. Here&apos;s what every action is worth.
        </p>
      </div>
      <ScoringTable />
    </div>
  );
}
