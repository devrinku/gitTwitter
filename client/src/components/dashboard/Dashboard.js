import React, { Fragment, useEffect } from "react";
import Post from "./Post";
import Profile from "./Profile";
import SideDrawer from "./../SideDrawer";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { showMenuBar } from "./../../actions/utils";
import { hideMenuBar } from "./../../actions/utils";

const Dashboard = ({
  showMenuBar,

  hideMenuBar,
}) => {
  useEffect(() => {
    showMenuBar();
    return () => {
      hideMenuBar();
    };
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <SideDrawer />
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
