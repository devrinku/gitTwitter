import React, { Fragment, useEffect, useState } from "react";
import Post from "./Posts";
import Profile from "./Profile";
import Followers from "./Followers";
import Followings from "./Followings";
import Github from "./Github";
import Posts from "./Posts";
import Education from "./Education";
import Experience from "./Experience";
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
        <Route exact path="/dashboard/posts" component={Posts} />
        <Route exact path="/dashboard/followers" component={Followers} />
        <Route exact path="/dashboard/followings" component={Followings} />
        <Route exact path="/dashboard/education" component={Education} />
        <Route exact path="/dashboard/experience" component={Experience} />
        <Route exact path="/dashboard/github" component={Github} />
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
