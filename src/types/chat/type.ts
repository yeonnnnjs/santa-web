export type Author = "USER" | "SANTA";

export type Message = {
  author: Author;
  content: string;
  timestamp: Date;
  isSuccess: boolean;
  lengthOfPrompt?: number;
};

export type CreateMessage = {
  gift: string;
  prompt: string;
  name: string;
};
