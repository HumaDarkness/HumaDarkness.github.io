
export interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
  options?: ChatOption[];
  isOption?: boolean;
}

export interface ChatOption {
  text: string;
  nextNode: string;
  link?: string;
}

export interface ChatNode {
  text: string;
  options?: ChatOption[];
}

export type ConversationTree = {
  [key: string]: ChatNode;
};
