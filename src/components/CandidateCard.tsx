import type { TCandidate } from "@/types/voting";

type CandidateCardProps = {
  candidate: TCandidate;
  votes: number;
  onVote: (candidate: TCandidate) => void;
};

export default function CandidateCard({
  candidate,
  votes,
  onVote,
}: CandidateCardProps) {
  const isAugustine = candidate === "Augustine";

  return (
    <div className="border border-slate-800/80 bg-slate-950/40 rounded-xl p-5 transition-all duration-200 hover:border-slate-700/60 shadow-md flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-extrabold text-white tracking-wide text-center">
          {candidate}
        </h2>

        <p className="text-center text-xs font-mono text-slate-400 mt-1">
          Current Votes:{" "}
          <span
            className={`font-bold ${
              isAugustine ? "text-indigo-400" : "text-emerald-400"
            }`}
          >
            {votes}
          </span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => onVote(candidate)}
        className={`w-full mt-5 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg active:scale-[0.98] transition-all shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 ${
          isAugustine
            ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
            : "bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500"
        }`}
      >
        Vote {candidate}
      </button>
    </div>
  );
}