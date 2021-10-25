import React, { FC } from "react";

import "./chatMsgHeader.scss";

interface ChatMsgHeaderProps {
  name: string;
  lastSeen: string;
}

const ChatMsgHeader: FC<ChatMsgHeaderProps> = ({ name, lastSeen }) => {
  return (
    <div className="chat-msg-header">
      <h3 className="chat-msg-header__name">{name}</h3>
      <div className="chat-msg-header__description">
        <p className="chat-msg-header__description__last-seen">Last seen</p>
        <span className="chat-msg-header__description__time-last-seen">
          {lastSeen}
        </span>
      </div>
    </div>
  );
};

export default ChatMsgHeader;
