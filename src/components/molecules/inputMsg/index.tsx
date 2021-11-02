import React, { FC } from "react";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";

import "./inputMsg.scss";

interface LogoProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const InputMsg: FC<LogoProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="input-msg">
      <Button>
        <img className="input-msg__clip-icon" src="/image/icon/clipIcon.svg" />
      </Button>
      <Input
        value={value}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        theme="chat"
      />
      <Button>
        <img className="input-msg__send-icon" src="/image/icon/sendIcon.svg" />
      </Button>
    </div>
  );
};
