import React, { FC } from "react";

import "./captcha.scss";

interface CaptchaProps {
  src: string;
}

export const Captcha: FC<CaptchaProps> = ({ src }) => {
  return (
    <div className="captcha">
      <img src={src} alt="captcha" />
    </div>
  );
};
