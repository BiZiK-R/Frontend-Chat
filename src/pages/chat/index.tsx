import React, { FC } from "react";
import { Route } from "react-router";
import { ChatHeader } from "../../molecules/chatHeader";
import { ChatContactList } from "../../organisms/chatContactList";
import { ChatMessage } from "../../organisms/chatMessage";
import { SCREENS } from "../../routes/endpoints";

import "./chat.scss";

const Chat: FC = () => {
  const data = [
    {
      id: 1,
      name: "Konstantin Konstantinopolski",
      gender: "Male",
      lastSeen: "3 minutes ago",
      dialogue: [
        {
          your: false,
          message: "Hey!",
          id: 1,
        },
      ],
    },
    {
      id: 2,
      name: "Marina Joe",
      gender: "Male",
      lastSeen: "5 minutes ago",
      dialogue: [
        {
          your: true,
          message:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti",
          id: 1,
        },
        {
          your: false,
          message:
            "SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          id: 2,
        },
        {
          your: true,
          message:
            "SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  accusantium doloremque laudantium, totam re",
          id: 3,
        },
        {
          your: false,
          message:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
          id: 4,
        },
      ],
    },
    {
      id: 3,
      name: "Ernest Gillroy",
      gender: "Male",
      lastSeen: "1 hour ago",
      dialogue: [
        {
          your: true,
          message: "How are you doing?",
          id: 1,
        },
        {
          your: false,
          message:
            "SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          id: 2,
        },
        {
          your: true,
          message:
            "SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  accusantium doloremque laudantium, totam re",
          id: 3,
        },
        {
          your: true,
          message:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
          id: 4,
        },
      ],
    },
    {
      id: 4,
      name: "Konstantin Konstantinopolski",
      gender: "Male",
      lastSeen: "10 minutes ago",
      dialogue: [
        {
          your: true,
          message: "Не тот кто Волк - Волк, а тот кто Волк! Ауф!",
          id: 1,
        },
        {
          your: false,
          message: "Hey!",
          id: 2,
        },
      ],
    },
  ];
  const dataNull = [{}];

  const listChatMessage = data.map((contact) => {
    const { id, name, lastSeen } = contact;
    const dialogue = contact.dialogue;
    //setDataFiling(true);
    return (
      <Route key={id} path={SCREENS.SCREEN_CHAT + `/${id}`}>
        <ChatMessage
          key={id}
          name={name}
          lastSeen={lastSeen}
          dialogue={dialogue}
        />
      </Route>
    );
  });
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__content">
        <ChatContactList data={data} />
        {listChatMessage}
      </div>
    </div>
  );
};

export { Chat };
