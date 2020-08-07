import React from "react";
import Login from "./Login";
import Register from "./Register";
import Heading from "./Heading";
import { Route, Switch } from "react-router-dom";

const Landing = () => {
  return (
    <header>
      <div className="overlay"></div>
      <div className="content padding-top">
        <Switch>
          <Route exact path="/" component={Heading} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </header>
  );
};

export default Landing;
