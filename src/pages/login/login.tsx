import React, { FC } from "react";
import Logo from "../../atoms/logo";
import FormLogin from "../../organisms/formLogin";

import "./login.scss";

const Login: FC = () => {
  return (
    <div className="Login">
      <div className="Login__content">
        <div className="Login__content__header">
          <Logo theme="login" />
          <h1 className="Login__content__header__title">
            Wellcome to <span className="_color__blue">Chatty</span>
            <span className="_color__light-blue">!</span>
          </h1>
          <h2 className="Login__content__header__description">
            Please, autorize yourself
          </h2>
        </div>
        <FormLogin />
      </div>
      <div className="Login__backgraund"></div>
    </div>
  );
};

export default Login;
