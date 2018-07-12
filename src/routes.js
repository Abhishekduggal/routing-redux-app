import React from "react";

import { Route, Switch } from "react-router-dom";

import Todos from "./components/Todos/Todos";
import Home from "./components/Home/Home";
import Compose from "./components/Compose/Compose";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/todos" component={Todos} />
    <Route path="/compose" component={Compose} />
  </Switch>
);
