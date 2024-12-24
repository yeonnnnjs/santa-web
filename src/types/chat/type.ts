export type Author = "USER" | "SANTA";

export type Message = {
  author: Author;
  content: string;
  timestamp: Date;
  gift: string;
  isSuccess: boolean;
};

export type CreateMessage = {
  gift: string;
  prompt: string;
  name: string;
};
