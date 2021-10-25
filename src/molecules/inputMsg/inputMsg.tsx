import React, { FC } from "react";
import Input from "../../atoms/Input";

import "./inputMsg.scss";

interface LogoProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => string;
}

const InputMsg: FC<LogoProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="input-msg">
      <img className="input-msg__clip-icon" src="/image/icon/clipIcon.svg" />
      <Input
        value={value}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
      <img className="input-msg__send-icon" src="/image/icon/sendIcon.svg" />
    </div>
  );
};

export default InputMsg;
