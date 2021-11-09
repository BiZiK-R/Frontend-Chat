import { makeAutoObservable, toJS } from "mobx";
import { IContact } from "../types/types";

// export interface IContacts {
//   name: string;
//   gender: string;
//   id: string;
//   dialogue: {
//     message?: string;
//     your?: boolean;
//   }[]
// }

class Contacts {
  allUsers: IContact[] = [];
  // me = {
  //   name: "",
  //   gender: "",
  // };
  // contactList = [
  //   {
  //     name: "",
  //     gender: "",
  //   },
  // ];

  constructor() {
    makeAutoObservable(this);
  }

  // createContactList(
  //   allUsers: { name: string; gender: string }[],
  //   me: { name: string; gender: string }
  // ) {
  //   const contactList = allUsers.filter(
  //     (item) => JSON.stringify(me) !== JSON.stringify(item)
  //   );
  //   this.contactList = contactList;
  //   console.log(contactList);
  // }

  // initialMe(data: { name: string; gender: string }) {
  //   this.me = data;
  //   if (this.allUsers.length > 0) {
  //     this.createContactList(this.allUsers, this.me);
  //   }
  // }

  sendMessage(message: { text: string; your: boolean }, personId: string) {
    this.allUsers = this.allUsers.map((contact) => {
      if (contact.id === personId) {
        contact.dialogue.push(message);
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
    // if (this.me.name && this.me.gender) {
    //   this.createContactList(this.allUsers, this.me);
    // }
  }

  // getContactList() {
  //   return this.contactList;
  // }
}

export const contacts = new Contacts();
