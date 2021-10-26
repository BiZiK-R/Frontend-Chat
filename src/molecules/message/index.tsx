import React, { FC } from "react";
import cn from "classnames";

import "./message.scss";

interface MessageProps {
  children: React.ReactNode;
  yourMsg: boolean;
}

const Message: FC<MessageProps> = ({ children, yourMsg }) => {
  return (
    <div
      className={cn(
        "message",
        yourMsg ? "message_your-msg" : "message_some-else-msg"
      )}
    >
      <p className="message__text">{children}</p>
    </div>
  );
};

export default Message;
