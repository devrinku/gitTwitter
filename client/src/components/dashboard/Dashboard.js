import React, { Fragment, useEffect, useState } from "react";
import Post from "./Post";
import Profile from "./Profile";
import SideDrawer from "./../SideDrawer";
import Aside from "./../Aside";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { showMenuBar } from "./../../actions/utils";
import { hideMenuBar } from "./../../actions/utils";

const Dashboard = ({
  showMenuBar,

  hideMenuBar,
}) => {
  const [aside, asideHandler] = useState(false);
  useEffect(() => {
    showMenuBar();
    asideHandler(true);
    return () => {
      hideMenuBar();
      asideHandler(false);
    };
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <SideDrawer />
      {aside && <Aside />}
      <Switch>
        <Route exact path="/dashboard/profile" component={Profile} />
        <Route exact path="/dashboard/post" component={Post} />
      </Switch>
    </Fragment>
  );
};
const mapStatetoProps = (state) => ({
  utils: state.utils,
});
export default connect(mapStatetoProps, {
  showMenuBar,

  hideMenuBar,
})(Dashboard);
