import React, { FC } from "react";
import { ChatContactItem } from "../../molecules/chatContactItem";
import { IContact } from "../../../types/types";
import { contacts } from "../../../store/contacts";
import { Loading } from "../../molecules/loading";
import { toJS } from "mobx";

import "./chatContactList.scss";

interface ChatContactListProps {
  //data: IContact[] | undefined;
  loading: boolean;
  onClick?: () => void;
}

export const ChatContactList: FC<ChatContactListProps> = ({
  // data,
  onClick,
  loading,
}) => {
  const createListContact = (data: IContact[] | undefined) => {
    if (typeof data !== "undefined" && data.length > 0) {
      return data.map((item) => {
        //const lastMsg = dialogue ? dialogue[0] : undefined;
        const { name, gender, id, dialogue } = item;
        const lastMsg = dialogue.length > 0 ? dialogue[0] : "";
        if (item.name && item.gender) {
          //setDataFiling(true);
          return (
            <ChatContactItem
              onClick={onClick}
              key={id}
              id={id}
              name={name}
              gender={gender}
              lastMsg={lastMsg ? lastMsg.text : ""}
              lastMsgYou={lastMsg ? lastMsg.your : false}
            />
          );
        }
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
  const contactList = toJS(contacts.allUsers);
  const listContactItem = createListContact(contactList);

  return (
    <div className="chat-list-contact">
      {loading ? <Loading /> : listContactItem}
    </div>
  );
};
