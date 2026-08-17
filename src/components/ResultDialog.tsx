import { useState } from "react";
import type { ElectionResult } from "@/types/voting";

type ResultDialogProps = {
  result: ElectionResult;
};

export default function ResultDialog({ result }: ResultDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getTitle = () => {
    if (result.total === 0) {
      return "Next Head of House";
    }

    if (result.winner === "") {
      return "Election Tie";
    }

    return `${result.winner} is Leading`;
  };

  const getMessage = () => {
    if (result.total === 0) {
      return "No votes counted yet.";
    }

    if (result.winner === "") {
      return "Both candidates currently have the same number of votes.";
    }

    return `${result.winner} currently has the highest number of verified votes.`;
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-6 rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
      >
        Check Result
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-lg bg-gray-800 p-6 shadow-xl">
            <h3 className="text-base font-semibold text-white">
              Live Election Results
            </h3>

            <div className="mt-2">
              <p className="text-sm font-medium text-gray-200">
                {getTitle()}
              </p>

              <p className="mt-1 text-sm text-gray-400">
                {getMessage()}
              </p>
            </div>

            <div className="mt-4 border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-400">
                Total Votes:{" "}
                <span className="font-bold text-white">
                  {result.total}
                </span>
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Augustine:{" "}
                <span className="font-bold text-white">
                  {result.poll.Augustine}
                </span>
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Kosisochukwu:{" "}
                <span className="font-bold text-white">
                  {result.poll.Kosisochukwu}
                </span>
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}