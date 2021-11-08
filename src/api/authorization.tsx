import axios from "axios";

export class Authorization {
  _apiBase: string;

  constructor() {
    this._apiBase = "http://109.194.37.212:93/api";
  }

  postRequest = async (url: string, data: any) => {
    const response = await fetch(`${this._apiBase}${url}`, {
      method: "POST",
      body: data,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "same-origin",
    });
    if (response.ok) {
      console.log(response);
      const json = await response.json();
      console.log("Успех: ", json);
      return json;
    }
    console.log(`Ошибка: ${response.status} ${response.statusText}`);
    return false;
  };

  postSignUp = async (data: {
    login: string;
    password: string;
    password_confirm: string;
    name: string;
    gender_id: number;
    captcha: string;
  }) => {
    const signupData = new FormData();
    signupData.append("login", data.login);
    signupData.append("password", data.password);
    signupData.append("password_confirm", data.password_confirm);
    signupData.append("name", data.name);
    signupData.append("gender_id", `${data.gender_id}`);
    signupData.append("captcha", data.captcha);
    const res = await this.postRequest("/auth/register", signupData);
    console.log(res);
    return res;
  };

  postLogin = async (data: {
    login: string;
    password: string;
    captcha: string;
  }) => {
    const loginData = new FormData();
    //console.log(data.login)
    loginData.append("login", data.login);
    loginData.append("password", data.password);
    loginData.append("captcha", data.captcha);
    const res = await this.postRequest("/auth/login", loginData);
    if (res) {
      localStorage.setItem("connect_key", res);
    }
    return res;
  };
}
