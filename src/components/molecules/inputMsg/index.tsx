import React, { FC } from "react";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { observer } from "mobx-react-lite";
import { messageInput } from "../../../store/messageInput";
import { FileMsg } from "../fileMsg";
import { storeFile } from "../../../store/storeFile";

import "./inputMsg.scss";

interface LogoProps {
  value: string;
  placeholder: string;
  fileLoaded?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMsg?: () => void;
  onLoadFile?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputMsg: FC<LogoProps> = observer(
  ({ value, onChange, placeholder, onSendMsg, onLoadFile, fileLoaded }) => {
    return (
      <div className="input-msg">
        <Button>
          <label className="input-msg__clip-label">
            <input
              onChange={onLoadFile}
              className="input-msg__clip-input-file"
              type="file"
            />
            <img
              className="input-msg__clip-icon"
              src="/image/icon/clipIcon.svg"
            />
          </label>
        </Button>
        {fileLoaded ? (
          <FileMsg file={storeFile.file} />
        ) : (
          <Input
            value={messageInput.value}
            type="text"
            onChange={(e) => messageInput.onChange(e)}
            placeholder={placeholder}
            theme="chat"
          />
        )}
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
