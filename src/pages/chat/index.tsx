import React, { FC } from "react";
import { ChatHeader } from "../../components/molecules/chatHeader";
import { ChatContactList } from "../../components/organisms/chatContactList";
import { ListChatMessage } from "../../components/organisms/listChatMessage";
import { DATA, DATAUNDF } from "../../data/data";

import "./chat.scss";

export const Chat: FC = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__content">
        <ChatContactList data={DATA} />
        <ListChatMessage data={DATA} />
      </div>
    </div>
  );
};
