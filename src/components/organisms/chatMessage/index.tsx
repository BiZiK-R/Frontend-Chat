import React, { FC, useState } from "react";
import { Loading } from "../../molecules/loading";
import { Message } from "../../molecules/message";
import { InputMsg } from "../../molecules/inputMsg";
import { ChatMsgHeader } from "../../molecules/chatMsgHeader";
import { FileMsg } from "../../molecules/fileMsg";
import { useLocation } from "react-router-dom";
import { SCREENS } from "../../../routes/endpoints";
import "./chatMessage.scss";
import { IDialogue } from "../../../types/types";

interface ChatMessageProps {
  name?: string;
  lastSeen?: string;
  gender?: string;
  dialogue?: IDialogue[];
  loading?: boolean;
  noContact?: boolean;
  onBack?: () => void;
  onSendMsg?: () => void;
}

export const ChatMessage: FC<ChatMessageProps> = ({
  name,
  lastSeen,
  gender,
  dialogue,
  loading,
  noContact = false,
  onBack,
  onSendMsg,
}) => {
  const [valueInput, setValueInput] = useState("");
  const location = useLocation().pathname;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  const checkSelectChat = () => {
    return location !== SCREENS.SCREEN_CHAT;
  };

  const createDialogue = (dialogue: IDialogue[]) => {
    if (checkSelectChat()) {
      return dialogue.map((dialogue, index) => {
        const { text, your } = dialogue;
        return (
          <Message key={index} yourMsg={!!your}>
            {text}
          </Message>
        );
      });
      // return (
      //   <Message key={location.slice(6)} yourMsg={true}>
      //     {name}
      //   </Message>
      // );
    }
    return (
      <div className="chat-message__dialogue-no-selected">
        <p className="chat-message__dialogue-no-selected-text">
          Select a chat to stary messaging
        </p>
      </div>
    );
  };

  const listMessage = createDialogue(dialogue ? dialogue : []);

  const chatMsgHeader = checkSelectChat() && !loading && (
    <ChatMsgHeader
      gender={gender}
      onBack={onBack}
      name={name}
      lastSeen={lastSeen}
    />
  );
  const inputMsg = checkSelectChat() && !loading && (
    <InputMsg
      value={valueInput}
      onChange={onChange}
      placeholder="Write something..."
      onSendMsg={onSendMsg}
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
