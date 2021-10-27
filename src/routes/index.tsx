import React, { FC } from "react";
import { SCREENS } from "./endpoints";
import { Route, Switch, Redirect } from "react-router-dom";
import { Login } from "../pages/login";
import { Chat } from "../pages/chat";

export const Routes: FC = () => {
  return (
    <Switch>
      <Route path={SCREENS.SCREEN_LOGIN} exact>
        <Login />
      </Route>
      <Route path={SCREENS.SCREEN_CHAT}>
        <Chat />
      </Route>
      <Redirect to={SCREENS.SCREEN_LOGIN} />
    </Switch>
  );
};
