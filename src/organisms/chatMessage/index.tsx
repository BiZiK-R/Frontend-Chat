import React, { FC, useState } from "react";
import { Loading } from "../../molecules/loading";
import { Message } from "../../molecules/message";
import { Input } from "../../atoms/Input";
import { InputMsg } from "../../molecules/inputMsg";
import { ChatMsgHeader } from "../../molecules/chatMsgHeader";

import "./chatMessage.scss";

const ChatMessage: FC = () => {
  const [valueInput, setValueInput] = useState("");

  const onChange = (value: string) => {
    setValueInput(value);
  };

  return (
    <div className="chat-message">
      <ChatMsgHeader name="Marina Joe" lastSeen="3 minutes ago" />
      <div className="chat-message__messages">
        {/* <Loading /> */}
        {/* <div className="chat-message__dialogue-no-selected">
          <p className="chat-message__dialogue-no-selected__text">Select a chat to stary messaging</p>
        </div> */}
        <Message yourMsg={true}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusanti
        </Message>
        <Message yourMsg={false}>
          perspiciatis unde omnis iste natus error sit voluptatem accusanti
        </Message>
        <Message yourMsg={true}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusanti
        </Message>
        <Message yourMsg={false}>
          perspiciatis unde omnis iste natus error sit voluptatem accusanti
        </Message>
        <Message yourMsg={true}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusanti
        </Message>
        <Message yourMsg={false}>
          perspiciatis unde omnis iste natus error sit voluptatem accusanti
        </Message>
        <Message yourMsg={true}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusanti
        </Message>
        <Message yourMsg={false}>
          perspiciatis unde omnis iste natus error sit voluptatem accusanti
        </Message>
      </div>
      <InputMsg
        value={valueInput}
        onChange={onChange}
        placeholder="Write something..."
      />
    </div>
  );
};

export { ChatMessage };
