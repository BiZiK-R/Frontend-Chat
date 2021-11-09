export interface IFile {
  name: string;
  size: string;
}

export interface IDialogue {
  text?: string;
  your?: boolean;
}
export interface IContact {
  name: string;
  gender: string;
  id: string;
  dialogue: IDialogue[];
}
