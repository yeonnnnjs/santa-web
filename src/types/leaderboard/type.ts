export type CreateLeaderBoard = {
  name: string;
  isSuccess: boolean;
  lengthOfPrompt: number;
  gift: string;
};

export type LeaderBoard = {
  rank: number;
  name: string;
  timestamp: string;
  isSuccess: boolean;
  lengthOfPrompt: number;
  gift: string;
};
