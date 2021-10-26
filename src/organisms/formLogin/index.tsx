import React, { FC, useState } from "react";
import { InputForm } from "../../molecules/inputForm";
import { Button } from "../../atoms/Button";

import "./formLogin.scss";

const FormLogin: FC = () => {
  const [valueInputUsername, setValueInputUsername] = useState("");
  const [valueInputPassword, setValueInputPassword] = useState("");
  const [valideInputUsername, setValideInputUsername] = useState(true);
  const [valideInputPassword, setValideInputPassword] = useState(true);

  const onChangeUsername = (value: string) => {
    setValueInputUsername(value);
    setValideInputUsername(true);
  };

  const onChangePassword = (value: string) => {
    setValueInputPassword(value);
    setValideInputPassword(true);
  };

  const onBlurUsername = () => {
    if (valueInputUsername === "") {
      setValideInputUsername(false);
    } else {
      setValideInputUsername(true);
    }
  };

  const onBlurPassword = () => {
    if (valueInputPassword === "") {
      setValideInputPassword(false);
    } else {
      setValideInputPassword(true);
    }
  };
  const onSubmitForm = (e: Event) => {
    e.preventDefault();
  };

  const checkValid = () => {
    return (
      !valueInputUsername ||
      !valueInputPassword ||
      !valideInputUsername ||
      !valideInputPassword
    );
  };

  return (
    <div className="form-login">
      <form className="form-login__form">
        <InputForm
          onBlur={onBlurUsername}
          onChange={onChangeUsername}
          validInput={valideInputUsername}
          value={valueInputUsername}
          theme="username"
          description="User name"
          placeholder="Input user name"
          type="text"
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
        />
        <Button onClick={onSubmitForm} disabled={checkValid()} type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};

export { FormLogin };
