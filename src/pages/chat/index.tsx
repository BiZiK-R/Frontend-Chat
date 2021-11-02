import React, { FC, useState } from "react";
import { ChatHeader } from "../../components/molecules/chatHeader";
import { ChatContactList } from "../../components/organisms/chatContactList";
import { ChatMessage } from "../../components/organisms/chatMessage";
import { useLocation } from "react-router-dom";
import { DATA, DATAUNDF } from "../../data/data";

import "./chat.scss";

export const Chat: FC = () => {
  const [loading, setLoading] = useState(false);
  const idContact = +useLocation().pathname.slice(6);

  const getDialogue = (idContact: number) => {
    if (DATA.length) {
      if (idContact) {
        const selectContact = DATA.find((contact) => contact.id === idContact);
        const name = selectContact!.name,
          lastSeen = selectContact!.lastSeen,
          dialogue = selectContact?.dialogue;
        return (
          <ChatMessage
            name={name}
            lastSeen={lastSeen}
            dialogue={dialogue}
            loading={loading}
          />
        );
      } else return <ChatMessage />;
    }
    return <ChatMessage noContact />;
  };

  const displayDialogue = getDialogue(idContact);

  //setTimeout(() => setLoading(false), 2000);

  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__content">
        <ChatContactList data={DATA} />
        {displayDialogue}
      </div>
    </div>
  );
};
