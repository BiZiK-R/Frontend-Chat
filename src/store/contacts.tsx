import { makeAutoObservable } from "mobx";

class Contacts {
  allUsers = [
    {
      name: "",
      gender: "",
    },
  ];
  me = {
    name: "",
    gender: "",
  };
  contactList = [
    {
      name: "",
      gender: "",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  createContactList(
    allUsers: { name: string; gender: string }[],
    me: { name: string; gender: string }
  ) {
    const contactList = allUsers.filter(
      (item) => JSON.stringify(me) !== JSON.stringify(item)
    );
    this.contactList = contactList;
    console.log(contactList);
  }

  initialMe(data: { name: string; gender: string }) {
    this.me = data;
    if (this.allUsers.length > 0) {
      this.createContactList(this.allUsers, this.me);
    }
  }

  initialAllUsers(data: { name: string; gender: string }[]) {
    this.allUsers = data;
    if (this.me.name && this.me.gender) {
      this.createContactList(this.allUsers, this.me);
    }
  }

  getContactList() {
    return this.contactList;
  }
}

export const contacts = new Contacts();
