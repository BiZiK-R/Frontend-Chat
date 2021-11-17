import React, { FC, useState, useEffect } from "react";
import { ChatHeader } from "../../molecules/chatHeader";
import { ChatContactList } from "../../organisms/chatContactList";
import { ChatMessage } from "../../organisms/chatMessage";
import { useParams } from "react-router-dom";
import { DATA, DATAUNDF } from "../../../data/data";
import cn from "classnames";
import { messageInput } from "../../../store/messageInput";
import { contacts } from "../../../store/contacts";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { uploadFile } from "../../../api/upload";
import { storeFile } from "../../../store/storeFile";

import "./chat.scss";

interface ParamTypes {
  idContact: string;
}

interface IFocusChat {
  focusChat: boolean;
}

let ws: WebSocket;

export const Chat: FC = observer(() => {
  const [loadingContact, setLoadingContact] = useState(false);
  const [focusChat, setFocusChat] = useState(false);
  const [fileLoaded, setFileLoaded] = useState(false);
  const { idContact } = useParams<ParamTypes>();

  useEffect(() => {
    ws = new WebSocket(
      `ws://109.194.37.212:2346/?type=test&ws_id=${localStorage.getItem(
        "connect_key"
      )}`
    );
    console.log("Connect ");

    console.log("mount");
    //setLoadingContact(true);
    ws.onopen = () => {
      console.log("WS: Соединение установленно");
      createContcatLsit();
      //setLoadingContact(false);
    };

    ws.onclose = (event) => {
      if (event.wasClean) {
        console.log(
          `WS: [close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
        );
      } else {
        // например, сервер убил процесс или сеть недоступна
        // обычно в этом случае event.code 1006
        console.log("WS: [close] Соединение прервано");
        alert("Lost connection");
      }
    };

    ws.onerror = (error) => {
      console.log(`WS: [error] ${error}`);
    };
    ws.onmessage = function (event) {
      console.log("Получены данные " + event.data);
      setLoadingContact(false);
      try {
        const data = JSON.parse(event.data);
        switch (data.type) {
          case "user_data":
            //contacts.initialMe(data.data);
            break;
          case "users_list":
            contacts.initialAllUsers(data.data);
            break;
          case "user_joined_info":
            getAllUsers();
            break;
          default:
            console.log(data);
            break;
        }
      } catch (error) {
        if (typeof event.data === "string") {
          console.log(event.data);
        }
      }
    };
  }, []);

  const getAllUsers = () => {
    const allUsers = JSON.stringify({ type: "users_list" });
    try {
      ws.send(allUsers);
      console.log("send: ", allUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const createContcatLsit = () => {
    setLoadingContact(true);
    getAllUsers();
  };

  const onFocusChat = () => {
    setFocusChat(!focusChat);
  };

  const onSendMsg = async () => {
    if (fileLoaded) {
      setFileLoaded(false);
      const urlFile = await uploadFile.postFile(storeFile.file);
      storeFile.resetStore();
      if (urlFile) {
        contacts.sendMessage(
          { text: `http://109.194.37.212:93${urlFile}`, your: true },
          idContact
        );
      }
    } else {
      const value = toJS(messageInput.value);
      if (value) {
        const message = messageInput.value;
        contacts.sendMessage({ text: message, your: true }, idContact);
        ws.send(message);
        messageInput.resetInput();
      }
    }
  };

  const onLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      if (!fileLoaded) {
        const fileType = files[0].type;
        if (
          fileType === "video/mp4" ||
          fileType === "video/ogg" ||
          fileType === "video/webm" ||
          fileType === "audio/mpeg" ||
          fileType === "audio/ogg" ||
          fileType === "image/jpeg" ||
          fileType === "image/gif" ||
          fileType === "image/png" ||
          fileType === "image/svg+xml"
        ) {
          console.log(files[0]);
          storeFile.addFile(files[0]);
          setFileLoaded(true);
        } else {
          alert("Invalid file format");
        }
      } else {
        alert(
          "The file has already been uploaded. Send the selected file first so that before uploading the next one."
        );
      }
    }
  };

  const getDialogue = (idContact: string | undefined) => {
    const data = toJS(contacts.allUsers);
    if (loadingContact) return <ChatMessage loading />;
    if (!(data.length && data[0].name && data[0].gender))
      return <ChatMessage noContact />;

    if (typeof idContact !== "undefined" && idContact !== "") {
      const selectContact = data.find((contact) => contact.id === idContact);
      const { name, dialogue, gender } = selectContact!;
      return (
        <ChatMessage
          onBack={onFocusChat}
          name={name}
          gender={gender}
          dialogue={dialogue}
          loading={loadingContact}
          onSendMsg={onSendMsg}
          onLoadFile={onLoadFile}
          fileLoaded={fileLoaded}
        />
      );
    } else return <ChatMessage />;
  };

  const displayDialogue = getDialogue(idContact);

  return (
    <div className="chat">
      <ChatHeader focusChat={focusChat} />
      <div
        className={cn(
          "chat__content",
          focusChat ? "chat__content_focus-chat" : ""
        )}
      >
        <ChatContactList
          onClick={onFocusChat}
          loading={loadingContact}
          //data={DATA}
        />
        {displayDialogue}
      </div>
    </div>
  );
});
