import React, { FC } from "react";
import { IconProfile } from "../../atoms/iconProfile";
import cn from "classnames";
import { SCREENS } from "../../../routes/endpoints";

import "./chatContactItem.scss";
import { NavLink } from "react-router-dom";

interface ChatContactItemProps {
  name: string;
  gender: string;
  lastMsg: string;
  lastMsgYou: boolean;
  select?: boolean;
  id: number;
}

export const ChatContactItem: FC<ChatContactItemProps> = ({
  name,
  gender,
  lastMsg,
  lastMsgYou,
  select,
  id,
}) => {
  const lastMsgShort = (lastMsg: string) => {
    if (lastMsg.length > 20) {
      return lastMsg.substr(0, 10) + "...";
    }
    return lastMsg;
  };

  return (
    <NavLink to={SCREENS.SCREEN_CHAT + `/${id}`} activeClassName="_select">
      <div
        className={cn(
          "chat-contact-item",
          select ? "chat-contact-item_select" : ""
        )}
      >
        <IconProfile gender={gender} />
        <div className="chat-contact-item__description">
          <h3 className="chat-contact-item__name">{name}</h3>
          <p className="chat-contact-item__lastMsg">
            {lastMsgYou ? (
              <span className="chat-contact-item__lastMsg_you">You: </span>
            ) : (
              ""
            )}
            {lastMsgShort(lastMsg)}
          </p>
        </div>
      </div>
    </NavLink>
  );
};
