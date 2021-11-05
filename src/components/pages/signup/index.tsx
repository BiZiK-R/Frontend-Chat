import React, { FC } from "react";
import { Logo } from "../../atoms/logo";
import { FormSignup } from "../../organisms/formSignup";

import "./signup.scss";

export const Signup: FC = () => {
  return (
    <div className="signup">
      <div className="signup__left">
        <div className="signup__left-content">
          <div className="signup__header">
            <Logo theme="signup" />
            <h1 className="signup__header-title">
              Sign Up to <span className="_color-blue">Chatty</span>
              <span className="_color-light-blue">!</span>
            </h1>
            <h2 className="signup__header-description">Registration</h2>
          </div>
          <FormSignup />
        </div>
      </div>
      <div className="signup__right"></div>
    </div>
  );
};
