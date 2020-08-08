import React from "react";
import Post from "./Post";
import Profile from "./Profile";
import { Switch, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="padding-top">
      <Switch>
        <Route exact path="/dashboard/profile" component={Profile} />
        <Route exact path="/dashboard/post" component={Post} />
      </Switch>
    </div>
  );
};

export default Dashboard;
