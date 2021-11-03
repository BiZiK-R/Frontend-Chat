import React, { FC } from "react";
import cn from "classnames";

import "./message.scss";

interface MessageProps {
  children: React.ReactNode;
  yourMsg: boolean;
}

export const Message: FC<MessageProps> = ({ children, yourMsg }) => {
  return (
    <div
      className={cn(
        "message",
        yourMsg ? "message_your-msg" : "message_some-else-msg"
      )}
    >
      <div className="message__text">{children}</div>
    </div>
  );
};
