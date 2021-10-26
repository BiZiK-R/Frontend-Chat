import React, { FC } from "react";
import { ChatContactItem } from "../../molecules/chatContactItem";

import "./chatContactList.scss";

const ChatContactList: FC = () => {
  return (
    <div className="chat-list-contact">
      {/* <div className="chat-contact__no-contact">
            <img className="chat-contact__no-contact__img" src="/image/noContact.svg"/>
            <p className="chat-contact__no-contact__text">There is no other users yet</p>
          </div> */}
      <ChatContactItem
        name="Konstantin Konstantinopolski"
        lastMsg="Hey!"
        lastMsgYou={false}
      />
      <ChatContactItem
        name="Marina Joe"
        lastMsg="Sed ut per..."
        lastMsgYou={true}
        select
      />
      <ChatContactItem
        name="Ernest Gillroy"
        lastMsg="How are you doing?"
        lastMsgYou={true}
      />
      <ChatContactItem
        name="Konstantin Konstantinopolski"
        lastMsg="Hey!"
        lastMsgYou={false}
      />
    </div>
  );
};

export { ChatContactList };
