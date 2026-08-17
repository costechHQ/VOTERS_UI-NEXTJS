import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getVotingData, submitVote } from "@/lib/votingAPI";
import type { TCandidate, TVoter } from "@/types/voting";

export function useVoting() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["voting-data"],
    queryFn: getVotingData,
  });

  const voteMutation = useMutation({
    mutationFn: ({
      voter,
      candidate,
    }: {
      voter: TVoter;
      candidate: TCandidate;
    }) => submitVote(voter, candidate),

    onSuccess: (updatedData) => {
      queryClient.setQueryData(["voting-data"], updatedData);
    },
  });

  const castVote = (voter: TVoter, candidate: TCandidate) => {
    if (voteMutation.isPending) {
      return false;
    }

    voteMutation.mutate({
      voter,
      candidate,
    });

    return true;
  };

  return {
    data,
    isLoading,
    castVote,
    isVoting: voteMutation.isPending,
  };
}