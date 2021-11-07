import { makeAutoObservable } from "mobx";
import { IContact, IDialogue } from "../types/types";

export class SignUp {
  constructor() {
    makeAutoObservable(this);
  }

  postSignUp(message: string) {
    //
  }
}
