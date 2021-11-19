import React, { FC } from "react";
import { useParams } from "react-router-dom";
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
  gender?: string;
  dialogue?: IDialogue[];
  loading?: boolean;
  noContact?: boolean;
  fileLoaded?: boolean;
  onBack?: () => void;
  onSendMsg?: () => void;
  onLoadFile?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ParamTypes {
  idContact: string;
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
  onLoadFile,
  fileLoaded,
}) => {
  const { idContact } = useParams<ParamTypes>();

  const createDialogue = (dialogue: IDialogue[]) => {
    if (idContact) {
      return dialogue.map((dialogue, index) => {
        const { text, your, fileData } = dialogue;
        console.log(!!fileData);
        if (fileData) {
          return (
            <Message key={index} yourMsg={your}>
              {text}
              <FileMsg file={fileData.file} url={fileData.url} />
            </Message>
          );
        }
        return (
          <Message key={index} yourMsg={!!your}>
            {text}
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

  const listMessage = createDialogue(dialogue ? dialogue : []);

  const chatMsgHeader = idContact && !loading && (
    <ChatMsgHeader
      gender={gender}
      onBack={onBack}
      name={name}
      lastSeen={lastSeen}
    />
  );
  const inputMsg = idContact && !loading && (
    <InputMsg
      placeholder="Write something..."
      onSendMsg={onSendMsg}
      onLoadFile={onLoadFile}
      fileLoaded={fileLoaded}
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
