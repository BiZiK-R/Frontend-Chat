import React, { FC } from "react";
import { InputForm } from "../inputForm";
import { Captcha } from "../captcha";
import { Button } from "../../atoms/Button";

import "./securityCode.scss";
import resetCaptcha from "../../../assets/reset.svg";

interface SecurityCodeProps {
  src: string;
  placeholder: string;
  description: string;
  name?: string;
  value: string;
  required?: boolean;
  type: "text" | "password" | "email";
  inValidInput?: boolean;
  errorText?: string | undefined;
  theme?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onClick?: () => void;
}

export const SecurityCode: FC<SecurityCodeProps> = ({
  src,
  onClick,
  ...props
}) => {
  return (
    <div className="security-code">
      <InputForm {...props} />
      <Captcha src={src} />
      <Button type="button" onClick={onClick}>
        <img className="security-code__reset" src={resetCaptcha} />
      </Button>
    </div>
  );
};
