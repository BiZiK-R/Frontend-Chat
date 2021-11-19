export interface IFile {
  name: string;
  size: number;
  type: string;
  url: string;
}

export interface IDialogue {
  text?: string;
  your: boolean;
  fileData?: {
    file: File;
    url?: string;
  };
}
export interface IContact {
  name: string;
  gender: string;
  id: string;
  dialogue: IDialogue[];
}
