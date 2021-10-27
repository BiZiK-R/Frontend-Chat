import React, { FC, useState } from "react";
import { ChatContactItem } from "../../molecules/chatContactItem";
import { IContact } from "../../types/types";

import "./chatContactList.scss";

interface ChatContactListProps {
  data: IContact[];
}

const ChatContactList: FC<ChatContactListProps> = ({ data }) => {
  // const [dataFiling, setDataFiling] = useState(false);

  // if (data === null) {
  //   setDataFiling(false);
  // } else {
  //   const listContactItem = data.map((contact) => {
  //   const {id, name} = contact;
  //   const lastMsg = contact.dialogue[contact.dialogue.length - 1];
  //   setDataFiling(true);
  //   return (
  //     <ChatContactItem
  //       key = {id}
  //       name = {name}
  //       lastMsg = {lastMsg.message}
  //       lastMsgYou = {lastMsg.your}
  //     />
  //   )
  //  })

  const listContactItem = data.map((contact) => {
    const { id, name } = contact;
    const lastMsg = contact.dialogue[0];
    //setDataFiling(true);
    return (
      <ChatContactItem
        key={id}
        id={id}
        name={name}
        lastMsg={lastMsg.message}
        lastMsgYou={lastMsg.your}
      />
    );
  });

  return (
    <div className="chat-list-contact">
      {/* <div className="chat-contact__no-contact">
            <img className="chat-contact__no-contact__img" src="/image/noContact.svg"/>
            <p className="chat-contact__no-contact__text">There is no other users yet</p>
          </div> */}
      {listContactItem}
    </div>
  );
};

export { ChatContactList };
