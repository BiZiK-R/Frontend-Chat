import React, { FC } from "react";
import Loading from "../../molecules/loading";

import "./chatMessage.scss";

const ChatMessage: FC = () => {
  return (
    <div className="chat-message">
      <Loading />
    </div>
  );
};

export default ChatMessage;
