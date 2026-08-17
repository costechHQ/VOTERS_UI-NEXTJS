import type { TVoter } from "@/types/voting";

type VoterSelectProps = {
  voters: TVoter[];
  selectedVoter: TVoter | "";
  votedUsers: Set<TVoter>;
  onChange: (voter: TVoter) => void;
};

export default function VoterSelect({
  voters,
  selectedVoter,
  votedUsers,
  onChange,
}: VoterSelectProps) {
  return (
    <div className="mt-6 align-center flex flex-col items-center justify-center gap-2">
      <label
        htmlFor="option-list"
        className="block text-sm/6 font-medium text-white"
      >
        VERIFIED VOTERS
      </label>

      <div className="mt-2 block w-full max-w-xs">
        <select
          id="option-list"
          value={selectedVoter}
          onChange={(event) => onChange(event.target.value as TVoter)}
          className="w-full appearance-none rounded-md bg-gray-800 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
        >
          {voters.map((voter) => (
            <option
              key={voter}
              value={voter}
              disabled={votedUsers.has(voter)}
              className="bg-gray-800 text-white"
            >
              {voter}
              {votedUsers.has(voter) ? " ✓" : ""}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}