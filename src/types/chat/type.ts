export type Author = "USER" | "SANTA";

export type Message = {
  author: Author;
  content: string;
  gift: string;
  timestamp: Date;
  isSuccess: boolean;
};

export type CreateMessage = {
  gift: string;
  prompt: string;
  name: string;
};
