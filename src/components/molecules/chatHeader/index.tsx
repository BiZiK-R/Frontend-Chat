import React, { FC } from "react";

import "./chatHeader.scss";
import { Logo } from "../../atoms/logo";

export const ChatHeader: FC = () => {
  return (
    <div className="chat-header">
      <Logo theme="chatHeader" />
      <div className="chat-header__icon">
        <img
          className="chat-header__icon-img"
          src="/image/icon/iconChatHeader.svg"
        />
      </div>
    </div>
  );
};
