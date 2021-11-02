import React, { FC } from "react";
import { Route } from "react-router";
import { ChatMessage } from "../../organisms/chatMessage";
import { IContact } from "../../../types/types";
import { SCREENS } from "../../../routes/endpoints";

interface ListChatMessageProps {
  data: IContact[] | undefined;
}

export const ListChatMessage: FC<ListChatMessageProps> = ({ data }) => {
  const createListChatMessage = (data: IContact[] | undefined) => {
    if (typeof data !== "undefined") {
      return data.map((contact) => {
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
    }
    return (
      <Route path={SCREENS.SCREEN_CHAT} exact>
        <ChatMessage noContact />
      </Route>
    );
  };

  const listChatMessage = createListChatMessage(data);

  return (
    <>
      {listChatMessage}
      {data && (
        <Route path={SCREENS.SCREEN_CHAT} exact>
          <ChatMessage />
        </Route>
      )}
    </>
  );
};
