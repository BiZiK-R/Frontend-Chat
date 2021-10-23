import React, { FC } from "react";
import cn from "classnames";

import "./chatHeader.scss";
import Logo from "../../atoms/logo";

const ChatHeader: FC = () => {
  return (
    <div className="chat-header">
      <Logo theme="chatHeader" />
      <div className="chat-header__icon">
        <img
          className="ChatHeader__icon__img"
          src="/image/icon/iconChatHeader.svg"
        />
      </div>
    </div>
  );
};

export default ChatHeader;
