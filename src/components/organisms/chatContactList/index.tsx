import React, { FC, useEffect } from "react";
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
  const contactList = toJS(contacts.contactList);

  useEffect(() => {
    console.log("mount contact list");
  }, []);

  const createListContact = (
    data: IContact[] | undefined | { name: string; gender: string }[]
  ) => {
    if (typeof data !== "undefined" && data.length > 0) {
      return data.map((item, index) => {
        //const lastMsg = dialogue ? dialogue[0] : undefined;
        const { name, gender } = item;
        if (item.name && item.gender) {
          //setDataFiling(true);
          return (
            <ChatContactItem
              onClick={onClick}
              key={index}
              id={index}
              name={name}
              gender={gender}
              // lastMsg={
              //   lastMsg ? (lastMsg.message ? lastMsg.message : "file") : ""
              // }
              // lastMsgYou={lastMsg ? lastMsg.your : false}
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

  const listContactItem = createListContact(contactList);

  return (
    <div className="chat-list-contact">
      {loading ? <Loading /> : listContactItem}
    </div>
  );
};
