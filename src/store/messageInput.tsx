import { makeAutoObservable } from "mobx";

class MessageInput {
  value = "";

  constructor() {
    makeAutoObservable(this);
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.value = e.target.value;
  }

  resetInput() {
    this.value = "";
  }
}

export const messageInput = new MessageInput();
