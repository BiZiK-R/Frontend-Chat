import React, { FC, useState } from "react";
import { InputForm } from "../../molecules/inputForm";
import { Button } from "../../atoms/Button";

import "./formLogin.scss";

export const FormLogin: FC = () => {
  const [valueInputUsername, setValueInputUsername] = useState("");
  const [valueInputPassword, setValueInputPassword] = useState("");
  const [valideInputUsername, setValideInputUsername] = useState(true);
  const [valideInputPassword, setValideInputPassword] = useState(true);

  const minName = 4,
    minPassword = 6;

  const onChangeUsername = (value: string) => {
    setValueInputUsername(value);
    setValideInputUsername(true);
  };

  const onChangePassword = (value: string) => {
    setValueInputPassword(value);
    setValideInputPassword(true);
  };

  const onBlurUsername = () => {
    if (valueInputUsername === "" || valueInputUsername.length < minName) {
      setValideInputUsername(false);
    } else {
      setValideInputUsername(true);
    }
  };

  const onBlurPassword = () => {
    if (valueInputPassword === "" || valueInputPassword.length < minPassword) {
      setValideInputPassword(false);
    } else {
      setValideInputPassword(true);
    }
  };
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(window.location.href.slice(0, -6));
    window.location.assign(window.location.href.slice(0, -6) + "/chat");
  };

  const checkValid = () => {
    return (
      !valueInputUsername ||
      !valueInputPassword ||
      !valideInputUsername ||
      !valideInputPassword ||
      !(valueInputUsername.length >= minName) ||
      !(valueInputPassword.length >= minPassword)
    );
  };

  const checkError = (valueInput: string, minLength: number) => {
    if (valueInput === "") return "Please fill in this field";
    if (valueInput.length < minLength) return "Need MORE characters!";
    return "";
  };

  return (
    <div className="form-login">
      <form className="form-login__form">
        <div className="form-login__inputs">
          <InputForm
            onBlur={onBlurUsername}
            onChange={onChangeUsername}
            validInput={valideInputUsername}
            value={valueInputUsername}
            theme="username"
            description="User name"
            placeholder="Input user name"
            type="text"
            errorText={checkError(valueInputUsername, minName)}
          />
          <InputForm
            onBlur={onBlurPassword}
            onChange={onChangePassword}
            validInput={valideInputPassword}
            value={valueInputPassword}
            theme="password"
            description="Password"
            placeholder="Input password"
            type="password"
            errorText={checkError(valueInputPassword, minPassword)}
          />
        </div>
        <Button
          theme="submit-auth"
          onClick={onSubmitForm}
          disabled={checkValid()}
          type="submit"
        >
          Log in
        </Button>
      </form>
    </div>
  );
};
