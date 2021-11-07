import React, { FC } from "react";
import resetCaptcha from "../../../assets/reset.svg";
import { Button } from "../../atoms/Button";

import "./captcha.scss";

interface CaptchaProps {
  src: string;
  onClick?: () => void;
}

export const Captcha: FC<CaptchaProps> = ({ src, onClick }) => {
  return (
    <div className="captcha">
      <img className="captcha__img" src={src} alt="captcha" />
      <Button theme="reset-captcha" type="button" onClick={onClick}>
        <img className="captcha__resetImg" src={resetCaptcha} />
      </Button>
    </div>
  );
};
