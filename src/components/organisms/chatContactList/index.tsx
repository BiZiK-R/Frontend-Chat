import React, { FC } from "react";
import { ChatContactItem } from "../../molecules/chatContactItem";
import { IContact } from "../../../types/types";

import "./chatContactList.scss";

interface ChatContactListProps {
  data: IContact[] | undefined;
}

export const ChatContactList: FC<ChatContactListProps> = ({ data }) => {
  const createListContact = (data: IContact[] | undefined) => {
    if (typeof data !== "undefined" && data.length > 0) {
      return data.map(({ id, name, gender, dialogue }) => {
        const lastMsg = dialogue ? dialogue[0] : undefined;
        //setDataFiling(true);
        return (
          <ChatContactItem
            key={id}
            id={id}
            name={name}
            gender={gender}
            lastMsg={
              lastMsg ? (lastMsg.message ? lastMsg.message : "file") : ""
            }
            lastMsgYou={lastMsg ? lastMsg.your : false}
          />
        );
      });
    }
    return (
      <div className="chat-list-contact__no-contact">
        <img
          className="chat-list-contact__no-contact-img"
          src="/image/noContact.svg"
        />
        <p className="chat-list-contact__no-contact-text">
          There is no other users yet
        </p>
      </div>
    );
  };

  const listContactItem = createListContact(data);

  return <div className="chat-list-contact">{listContactItem}</div>;
};
