export class Authorization {
  _apiBase: string;

  constructor() {
    this._apiBase = "http://109.194.37.212:93/api";
  }

  postRequest = async (url: string, data: any) => {
    try {
      console.log(JSON.stringify(data));
      const response = await fetch(`${this._apiBase}${url}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "applacation/json",
        },
      });
      const json = await response.json();
      console.log("Успех: ", JSON.stringify(json));
      return json;
    } catch (error) {
      console.log("Ошибка: ", error);
      return error;
    }
  };

  postSignUp = async (data: any) => {
    const res = await this.postRequest("/auth/register", data);
    return res;
  };

  postLogin = async (data: any) => {
    const res = await this.postRequest("/auth/login", data);
    return res;
  };
}
