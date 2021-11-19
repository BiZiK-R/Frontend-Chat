import React, { FC } from "react";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { observer } from "mobx-react-lite";
import { messageInput } from "../../../store/messageInput";
import { FileMsg } from "../fileMsg";
import { storeFile } from "../../../store/storeFile";
import cn from "classnames";

import "./inputMsg.scss";

interface LogoProps {
  placeholder: string;
  fileLoaded?: boolean;
  onSendMsg?: () => void;
  onLoadFile?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputMsg: FC<LogoProps> = observer(
  ({ placeholder, onSendMsg, onLoadFile, fileLoaded }) => {
    return (
      <div className={cn("input-msg", fileLoaded ? "input-msg_with-file" : "")}>
        {/* <div className="input-msg__interface"> */}
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
        <div
          className={cn(
            "input-msg__input",
            fileLoaded ? "input-msg__input_with-file" : ""
          )}
        >
          <Input
            value={messageInput.value}
            type="text"
            onChange={(e) => messageInput.onChange(e)}
            placeholder={placeholder}
            theme="chat"
          />
          {fileLoaded ? <FileMsg file={storeFile.file} /> : ""}
        </div>
        <Button onClick={onSendMsg}>
          <img
            className="input-msg__send-icon"
            src="/image/icon/sendIcon.svg"
          />
        </Button>
        {/* </div> */}
      </div>
    );
  }
);
