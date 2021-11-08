import { makeAutoObservable } from "mobx";

export class Genders {
  gender = [
    { gender: "Male", gender_id: 1 },
    { gender: "Female", gender_id: 2 },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  async getGender() {
    const response = await fetch("http://109.194.37.212:93/api/auth");
    if (response.ok) {
      const res = await response.json();
      this.gender = res.genders.map((item: { id: number; gender: string }) => ({
        gender: item.gender,
        gender_id: item.id,
      }));
    }
  }
}
