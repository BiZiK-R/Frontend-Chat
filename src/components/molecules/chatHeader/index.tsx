import React, { FC } from "react";
import cn from "classnames";

import "./chatHeader.scss";
import { Logo } from "../../atoms/logo";

interface ChatHeaderProps {
  focusChat: boolean;
}

export const ChatHeader: FC<ChatHeaderProps> = ({ focusChat }) => {
  return (
    <div
      className={cn("chat-header", focusChat ? "chat-header_focus-chat" : "")}
    >
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
