import { makeAutoObservable } from "mobx";
import { IContact, IDialogue } from "../types/types";

export class Data {
  constructor() {
    makeAutoObservable(this);
  }

  sendMessage(message: string) {
    // const lastId = this.contacts.dialogue.id[this.contacts.dialogue.lenght]
    // this.contacts.dialogue.push({
    //     your: true,
    //     message: message,
    //     id: lastId + 1,
    // })
  }
}
