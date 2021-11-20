class Captcha {
  _apiCaptcha: string;

  constructor() {
    this._apiCaptcha = "http://109.194.37.212:93//api/auth/captcha";
  }

  update = async () => {
    const response = await fetch(this._apiCaptcha);
    return response.url;
  };
}

export const captcha = new Captcha();
