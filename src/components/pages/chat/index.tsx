import React, { FC, useState, useEffect } from "react";
import { ChatHeader } from "../../molecules/chatHeader";
import { ChatContactList } from "../../organisms/chatContactList";
import { ChatMessage } from "../../organisms/chatMessage";
import { useLocation } from "react-router-dom";
import { DATA, DATAUNDF } from "../../../data/data";
import cn from "classnames";
import { messageInput } from "../../../store/messageInput";
import { contacts } from "../../../store/contacts";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import "./chat.scss";

export const Chat: FC = observer(() => {
  const [loadingContact, setLoadingContact] = useState(false);
  const [focusChat, setFocusChat] = useState(false);
  const idContact = useLocation().pathname.slice(6);

  const ws = new WebSocket(
    `ws://109.194.37.212:2346/?type=test&ws_id=${localStorage.getItem(
      "connect_key"
    )}`
  );

  ws.onmessage = function (event) {
    console.log("Получены данные " + event.data);
    //setLoadingContact(false);
    try {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case "user_data":
          contacts.initialMe(data.data);
          break;
        case "users_list":
          contacts.initialAllUsers(data.data);
          break;
        default:
          console.log(data);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFocusChat = () => {
    setFocusChat(!focusChat);
  };

  const onSendMsg = () => {
    if (messageInput.value) {
      const message = JSON.stringify({
        type: "send_message",
        data: messageInput.value,
      });
      ws.send(message);
      messageInput.resetInput();
    }
  };

  useEffect(() => {
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
      }
    };

    ws.onerror = (error) => {
      console.log(`WS: [error] ${error}`);
    };
  }, []);

  const getMe = () => {
    const meRequest = JSON.stringify({ type: "user_data" });
    try {
      ws.send(meRequest);
      console.log("send: ", meRequest);
    } catch (error) {
      console.log(error);
    }
  };

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
    //setLoadingContact(true);
    getMe();
    getAllUsers();
  };

  const getDialogue = (idContact: number | string) => {
    const data = toJS(contacts.contactList);
    if (!loadingContact) {
      if (data.length && data[0].name && data[0].gender) {
        if (idContact) {
          const selectContact = data.find(
            (contact, index) => String(index) === idContact
          );
          const name = selectContact!.name;
          return (
            <ChatMessage
              onBack={onFocusChat}
              name={name}
              //loading={loadingContact}
              onSendMsg={onSendMsg}
            />
          );
        } else return <ChatMessage />;
      }
      return <ChatMessage noContact />;
    }
    return <ChatMessage loading />;
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
