export type TCandidate = "Augustine" | "Kosisochukwu";

export type TVoter =
  | "Stephanie"
  | "Rita"
  | "James"
  | "Peter"
  | "Victor"
  | "Anthony"
  | "Charles"
  | "Augustine"
  | "Lillian"
  | "Gabriel"
  | "Christopher"
  | "Kosisochukwu"
  | "Bonaventure"
  | "Abigail"
  | "David"
  | "Amarachi"
  | "Loveth"
  | "Chidimma"
  | "Ifeanyi"
  | "Majesty";

export type Poll = Record<TCandidate, number>;

export type VotingRecord = Record<TVoter, TCandidate>;

export type ElectionResult = {
  total: number;
  winner: TCandidate | "";
  poll: Poll;
};