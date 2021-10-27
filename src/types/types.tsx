export interface IDialogue {
  your: boolean;
  message: string;
  id: number;
}

export interface IContact {
  id: number;
  name: string;
  gender: string;
  lastSeen: string;
  dialogue: IDialogue[];
}
