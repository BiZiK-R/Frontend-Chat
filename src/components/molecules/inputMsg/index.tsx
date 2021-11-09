import React, { FC } from "react";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { observer } from "mobx-react-lite";
import { messageInput } from "../../../store/messageInput";

import "./inputMsg.scss";

interface LogoProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMsg?: () => void;
}

export const InputMsg: FC<LogoProps> = observer(
  ({ value, onChange, placeholder, onSendMsg }) => {
    return (
      <div className="input-msg">
        <Button>
          <img
            className="input-msg__clip-icon"
            src="/image/icon/clipIcon.svg"
          />
        </Button>
        <Input
          value={messageInput.value}
          type="text"
          onChange={(e) => messageInput.onChange(e)}
          placeholder={placeholder}
          theme="chat"
        />
        <Button onClick={onSendMsg}>
          <img
            className="input-msg__send-icon"
            src="/image/icon/sendIcon.svg"
          />
        </Button>
      </div>
    );
  }
);
