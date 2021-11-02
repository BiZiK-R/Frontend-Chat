export interface IFile {
  name: string;
  size: string;
}

export interface IDialogue {
  your: boolean;
  message?: string;
  id: number;
  file?: IFile;
}
export interface IContact {
  id: number;
  name: string;
  gender: string;
  lastSeen: string;
  dialogue: IDialogue[] | [];
}
