import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Thread from "./components/Thread";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/thread/:id" exact component={Thread} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
