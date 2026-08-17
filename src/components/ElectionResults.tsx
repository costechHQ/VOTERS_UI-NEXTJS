import type { ElectionResult } from "@/types/voting";

type ElectionResultsProps = {
  result: ElectionResult;
};

export default function ElectionResults({
  result,
}: ElectionResultsProps) {
  return (
    <div className="w-full md:w-96 bg-slate-900/60 backdrop-blur-xl p-5 rounded-2xl border border-slate-800/80 shadow-2xl flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
          </span>

          <h2 className="text-[11px] font-black tracking-widest text-indigo-400 uppercase">
            Election Results
          </h2>
        </div>

        <div className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-950 rounded-full border border-slate-800 text-slate-400">
          TOTALS:{" "}
          <span>{result.total}</span>
        </div>
      </div>

      <div className="flex justify-between items-baseline">
        <span className="text-xs font-bold text-slate-300">
          AUGUSTINE
        </span>

        <span className="text-xs font-bold text-slate-300">
          {result.poll.Augustine}
        </span>
      </div>

      <div className="flex justify-between items-baseline">
        <span className="text-xs font-bold text-slate-300">
          KOSISOCHUKWU
        </span>

        <span className="text-xs font-bold text-slate-300">
          {result.poll.Kosisochukwu}
        </span>
      </div>

      <div className="border-t border-slate-800/60 pt-3">
        <p className="text-[10px] uppercase tracking-widest text-slate-500">
          Current Leader
        </p>

        <p className="mt-1 text-sm font-bold text-white">
          {result.winner || "No winner yet"}
        </p>
      </div>
    </div>
  );
}