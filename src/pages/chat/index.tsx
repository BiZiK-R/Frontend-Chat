import React, { FC } from "react";
import cn from "classnames";
import { ChatHeader } from "../../molecules/chatHeader";
import { ChatContactList } from "../../organisms/chatContactList";
import { ChatMessage } from "../../organisms/chatMessage";

import "./chat.scss";

const Chat: FC = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__content">
        <ChatContactList />
        <ChatMessage />
      </div>
    </div>
  );
};

export { Chat };
