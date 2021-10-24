import React, { FC } from "react";
import IconProfile from "../../atoms/iconProfile";

import "./chatContactItem.scss";

interface ChatContactItemProps {
  name: string;
  lastMsg: string;
  lastMsgYou: boolean;
}

const ChatContactItem: FC<ChatContactItemProps> = ({
  name,
  lastMsg,
  lastMsgYou,
}) => {
  return (
    <div className="chat-contact-item">
      <IconProfile sex="Male" />
      <div className="chat-contact-item__description">
        <h3 className="chat-contact-item__description__name">{name}</h3>
        <p className="chat-contact-item__description__lastMsg">
          {lastMsgYou ? (
            <span className="chat-contact-item__description__lastMsg__you">
              You:{" "}
            </span>
          ) : (
            ""
          )}
          {lastMsg}
        </p>
      </div>
    </div>
  );
};

export default ChatContactItem;
