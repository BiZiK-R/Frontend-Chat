import { makeAutoObservable } from "mobx";
import { data } from "../data/data";
import { IContact, IDialogue } from "../types/types";

export class Data {
  contacts = data;

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
