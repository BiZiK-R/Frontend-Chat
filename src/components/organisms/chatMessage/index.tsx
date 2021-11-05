import React, { FC, useState } from "react";
import { Loading } from "../../molecules/loading";
import { Message } from "../../molecules/message";
import { InputMsg } from "../../molecules/inputMsg";
import { ChatMsgHeader } from "../../molecules/chatMsgHeader";
import { FileMsg } from "../../molecules/fileMsg";

import "./chatMessage.scss";
import { IDialogue } from "../../../types/types";

interface ChatMessageProps {
  name?: string;
  lastSeen?: string;
  dialogue?: IDialogue[];
  loading?: boolean;
  noContact?: boolean;
}

export const ChatMessage: FC<ChatMessageProps> = ({
  name,
  lastSeen,
  dialogue,
  loading,
  noContact = false,
}) => {
  const [valueInput, setValueInput] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  const createDialogue = (dialogue: IDialogue[] | undefined) => {
    if (typeof dialogue !== "undefined") {
      return dialogue.map((dialogue) => {
        const { id, message, your, file } = dialogue;
        return file ? (
          <Message key={id} yourMsg={your}>
            <FileMsg file={file} />
          </Message>
        ) : (
          <Message key={id} yourMsg={your}>
            {message}
          </Message>
        );
      });
    }
    return (
      <div className="chat-message__dialogue-no-selected">
        <p className="chat-message__dialogue-no-selected-text">
          Select a chat to stary messaging
        </p>
      </div>
    );
  };

  const listMessage = createDialogue(dialogue);

  const chatMsgHeader = typeof name == "string" &&
    typeof lastSeen === "string" &&
    !loading && <ChatMsgHeader name={name} lastSeen={lastSeen} />;
  const inputMsg = typeof name == "string" &&
    typeof lastSeen === "string" &&
    !loading && (
      <InputMsg
        value={valueInput}
        onChange={onChange}
        placeholder="Write something..."
      />
    );

  return (
    <div className="chat-message">
      {chatMsgHeader}
      {!noContact && (
        <div className="chat-message__messages">
          {loading && <Loading />}
          {!loading && listMessage}
        </div>
      )}
      {inputMsg}
    </div>
  );
};
