import { candidates, voters } from "@/data/voting";
import type { TCandidate } from "@/types/voting";

export type VotingData = {
  candidates: TCandidate[];
  voters: typeof voters;
  poll: {
    Augustine: number;
    Kosisochukwu: number;
  };
  total: number;
};

let votingData: VotingData = {
  candidates,
  voters,
  poll: {
    Augustine: 0,
    Kosisochukwu: 0,
  },
  total: 0,
};

export async function getVotingData(): Promise<VotingData> {
  return votingData;
}

export async function submitVote(
  voter: string,
  candidate: TCandidate,
) {
  console.log(`Vote cast by ${voter} for ${candidate}`);

  votingData = {
    ...votingData,
    poll: {
      ...votingData.poll,
      [candidate]: votingData.poll[candidate] + 1,
    },
    total: votingData.total + 1,
  };

  return votingData;
}