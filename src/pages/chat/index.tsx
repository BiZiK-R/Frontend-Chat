import React, { FC } from "react";
import { ChatHeader } from "../../molecules/chatHeader";
import { ChatContactList } from "../../organisms/chatContactList";
import { ListChatMessage } from "../../organisms/listChatMessage";
import { data, dataUndf } from "../../data/data";

import "./chat.scss";

const Chat: FC = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__content">
        <ChatContactList data={data} />
        <ListChatMessage data={data} />
      </div>
    </div>
  );
};

export { Chat };
