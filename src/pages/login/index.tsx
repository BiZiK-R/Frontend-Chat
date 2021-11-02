import React, { FC } from "react";
import { Logo } from "../../components/atoms/logo";
import { FormLogin } from "../../components/organisms/formLogin";

import "./login.scss";

export const Login: FC = () => {
  return (
    <div className="login">
      <div className="login__left">
        <div className="login__left-content">
          <div className="login__header">
            <Logo theme="login" />
            <h1 className="login__header-title">
              Wellcome to <span className="_color-blue">Chatty</span>
              <span className="_color-light-blue">!</span>
            </h1>
            <h2 className="login__header-description">
              Please, autorize yourself
            </h2>
          </div>
          <FormLogin />
        </div>
      </div>
      <div className="login__right"></div>
    </div>
  );
};
