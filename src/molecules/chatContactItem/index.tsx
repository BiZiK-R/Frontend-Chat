import React, { FC } from "react";
import { IconProfile } from "../../atoms/iconProfile";
import cn from "classnames";

import "./chatContactItem.scss";

interface ChatContactItemProps {
  name: string;
  lastMsg: string;
  lastMsgYou: boolean;
  select?: boolean;
}

const ChatContactItem: FC<ChatContactItemProps> = ({
  name,
  lastMsg,
  lastMsgYou,
  select,
}) => {
  return (
    <div
      className={cn(
        "chat-contact-item",
        select ? "chat-contact-item_select" : ""
      )}
    >
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

export { ChatContactItem };
