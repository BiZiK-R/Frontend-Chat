import React, { FC, useState } from "react";
import InputForm from "../../molecules/inputForm";
import Button from "../../atoms/Button";

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
    <div className="FormLogin">
      <div className="FormLogin__header">
        <img className="FormLogin__header__logo" src="/image/logo.svg" />
        <h1 className="FormLogin__header__title">
          Wellcome to <span className="_color__blue">Chatty</span>
          <span className="_color__light__blue">!</span>
        </h1>
        <h2 className="FormLogin__header__desciption">
          Please, autorize yourself
        </h2>
      </div>
      <form className="FormLogin__form">
        <InputForm
          onBlur={onBlurUsername}
          onChange={onChangeUsername}
          validInput={valideInputUsername}
          value={valueInputUsername}
          theme="_username"
          description="User name"
          placeholder="Input user name"
          type="text"
        />
        <InputForm
          onBlur={onBlurPassword}
          onChange={onChangePassword}
          validInput={valideInputPassword}
          value={valueInputPassword}
          theme="_password"
          description="Password"
          placeholder="Input password"
          type="password"
        />
        <Button
          onClick={onSubmitForm}
          disabled={checkValid()}
          className="FormLogin__form__button"
          type="submit"
        >
          Log in
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
