import { makeAutoObservable } from "mobx";

class StoreFile {
  file: any = {};

  constructor() {
    makeAutoObservable(this);
  }

  addFile(file: File) {
    this.file = file;
  }

  resetStore() {
    this.file = {};
  }
}

export const storeFile = new StoreFile();
