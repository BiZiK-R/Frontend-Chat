import { makeAutoObservable, toJS } from "mobx";
import { IContact, IFile } from "../types/types";

class Contacts {
  allUsers: IContact[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  saveMessage(
    message: {
      text: string;
      your: boolean;
      fileData?: { file: File; url: string };
    },
    personId: string
  ) {
    this.allUsers = this.allUsers.map((contact) => {
      if (contact.id === personId) {
        contact.dialogue.unshift(message);
      }
      return contact;
    });
    console.log(toJS(this.allUsers));
  }

  initialAllUsers(data: { name: string; gender: string }[]) {
    this.allUsers = data.map((item, index) => ({
      name: item.name,
      gender: item.gender,
      id: String(index),
      dialogue: [],
    }));
  }
}

export const contacts = new Contacts();
