import React, { FC } from "react";
import { ChatHeader } from "../../components/molecules/chatHeader";
import { ChatContactList } from "../../components/organisms/chatContactList";
import { ListChatMessage } from "../../components/organisms/listChatMessage";
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
