import React, { FC } from "react";
import { Button } from "../../atoms/Button";
import arrowBack from "../../../assets/arrowChatHeader.svg";

import "./chatMsgHeader.scss";
import { IconProfile } from "../../atoms/iconProfile";

interface ChatMsgHeaderProps {
  name?: string;
  gender?: string;
  lastSeen?: string;
  onBack?: () => void;
}

export const ChatMsgHeader: FC<ChatMsgHeaderProps> = ({
  name,
  lastSeen,
  onBack,
  gender,
}) => {
  return (
    <div className="chat-msg-header">
      <Button onClick={onBack} theme="arrow-chat-header-mobile">
        <img src={arrowBack} alt="back" />
      </Button>
      <IconProfile
        theme="chat-header-mobile"
        gender={gender ? gender : "male"}
      />
      <div className="chat-msg-header__contact">
        <h3 className="chat-msg-header__name">{name}</h3>
        <div className="chat-msg-header__description">
          <p className="chat-msg-header__last-seen">Last seen</p>
          <span className="chat-msg-header__time-last-seen">{lastSeen}</span>
        </div>
      </div>
    </div>
  );
};
