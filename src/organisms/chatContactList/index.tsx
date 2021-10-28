import React, { FC } from "react";
import { ChatContactItem } from "../../molecules/chatContactItem";
import { IContact } from "../../types/types";

import "./chatContactList.scss";

interface ChatContactListProps {
  data: IContact[] | undefined;
}

const ChatContactList: FC<ChatContactListProps> = ({ data }) => {
  const createListContact = (data: IContact[] | undefined) => {
    if (typeof data !== "undefined") {
      return data.map((contact) => {
        const { id, name } = contact;
        const lastMsg = contact.dialogue[0];
        //setDataFiling(true);
        return (
          <ChatContactItem
            key={id}
            id={id}
            name={name}
            lastMsg={lastMsg.message ? lastMsg.message : "file"}
            lastMsgYou={lastMsg.your}
          />
        );
      });
    }
    return (
      <div className="chat-list-contact__no-contact">
        <img
          className="chat-list-contact__no-contact__img"
          src="/image/noContact.svg"
        />
        <p className="chat-list-contact__no-contact__text">
          There is no other users yet
        </p>
      </div>
    );
  };

  const listContactItem = createListContact(data);

  return <div className="chat-list-contact">{listContactItem}</div>;
};

export { ChatContactList };
