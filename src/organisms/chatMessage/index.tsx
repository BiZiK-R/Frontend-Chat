import React, { FC, useState } from "react";
import { Loading } from "../../molecules/loading";
import { Message } from "../../molecules/message";
import { Input } from "../../atoms/Input";
import { InputMsg } from "../../molecules/inputMsg";
import { ChatMsgHeader } from "../../molecules/chatMsgHeader";

import "./chatMessage.scss";
import { IDialogue } from "../../types/types";

interface ChatMessageProps {
  name: string;
  lastSeen: string;
  dialogue: IDialogue[];
}

const ChatMessage: FC<ChatMessageProps> = ({ name, lastSeen, dialogue }) => {
  const [valueInput, setValueInput] = useState("");

  const onChange = (value: string) => {
    setValueInput(value);
  };

  const listMessage = dialogue.map((dialogue) => {
    const { id, message, your } = dialogue;
    return (
      <Message key={id} yourMsg={your}>
        {message}
      </Message>
    );
  });

  return (
    <div className="chat-message">
      <ChatMsgHeader name={name} lastSeen={lastSeen} />
      <div className="chat-message__messages">
        {/* <Loading /> */}
        {/* <div className="chat-message__dialogue-no-selected">
          <p className="chat-message__dialogue-no-selected__text">Select a chat to stary messaging</p>
        </div> */}
        {listMessage}
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
