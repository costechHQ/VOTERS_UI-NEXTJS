import { useState } from "react";

import CandidateCard from "@/components/CandidateCard";
import ElectionResults from "@/components/ElectionResults";
import ResultDialog from "@/components/ResultDialog";
import VoterSelect from "@/components/VoterSelect";
import { useVoting } from "@/hooks/useVoting";
import type { TCandidate, TVoter } from "@/types/voting";

export default function Home() {
  const { data, isLoading, castVote, isVoting } = useVoting();

  const [selectedVoter, setSelectedVoter] = useState<TVoter | "">("");
  const [votedUsers, setVotedUsers] = useState<Set<TVoter>>(new Set());

  if (isLoading || !data) {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Loading...
      </main>
    );
  }

  const handleVote = (candidate: TCandidate) => {
    if (!selectedVoter) {
      alert("Please select a voter.");
      return;
    }

    if (votedUsers.has(selectedVoter)) {
      alert(`${selectedVoter} has already voted.`);
      return;
    }

    castVote(selectedVoter, candidate);

    setVotedUsers((current) => {
      const updated = new Set(current);
      updated.add(selectedVoter);
      return updated;
    });

    const currentIndex = data.voters.indexOf(selectedVoter);

    const nextVoter =
      data.voters.find(
        (voter, index) =>
          index > currentIndex && !votedUsers.has(voter),
      ) ?? "";

    setSelectedVoter(nextVoter);
  };

  const result = {
    total: data.total,
    winner:
      data.poll.Augustine > data.poll.Kosisochukwu
        ? "Augustine"
        : data.poll.Kosisochukwu > data.poll.Augustine
          ? "Kosisochukwu"
          : "",
    poll: data.poll,
  } as const;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-6 text-slate-100">

      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-800/80 bg-slate-900/60 p-8 shadow-2xl">

        <h1 className="mb-2 text-center text-3xl font-black">
          APF Voting System
        </h1>

        <p className="mb-8 text-center text-xs text-slate-400">
          This voting system is for educational purposes. (our class work)
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {data.candidates.map((candidate) => (
            <CandidateCard
              key={candidate}
              candidate={candidate}
              votes={data.poll[candidate]}
              onVote={handleVote}
            />
          ))}
        </div>

        <VoterSelect
          voters={data.voters}
          selectedVoter={selectedVoter}
          votedUsers={votedUsers}
          onChange={setSelectedVoter}
        />

        {isVoting && (
          <p className="mt-3 text-center text-sm text-indigo-400">
            Recording vote...
          </p>
        )}

      </div>

      <div className="mx-auto mt-6 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
     
        <div className="lg:mr-80 flex items-center justify-center">
          <ResultDialog result={result} />
        </div>

        <div className="flex items-center justify-center lg:ml-20">
          <ElectionResults result={result} />
        </div>

      </div>

    </main>
  );
}