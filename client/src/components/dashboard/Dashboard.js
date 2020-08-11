import React, { Fragment, useEffect, useState } from "react";
import PrivateRoute from "./../PrivateRoute";
import Profile from "./Profile";
import Followers from "./Followers";
import Followings from "./Followings";
import Github from "./Github";
import Backdrop from "./../Backdrop";
import Posts from "./Posts";
import Education from "./Education";
import Experience from "./Experience";
import Settings from "./Settings";
import SideDrawer from "./../SideDrawer";
import Aside from "./../Aside";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { showMenuBar } from "./../../actions/utils";
import { hideMenuBar } from "./../../actions/utils";

const Dashboard = ({ showMenuBar, utils, hideMenuBar }) => {
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
      {utils.backdrop && utils.backdropType === "sideNav" && (
        <Backdrop index={10} />
      )}

      <Switch>
        <PrivateRoute exact path="/dashboard/profile" component={Profile} />
        <PrivateRoute exact path="/dashboard/posts" component={Posts} />
        <PrivateRoute exact path="/dashboard/followers" component={Followers} />
        <PrivateRoute
          exact
          path="/dashboard/followings"
          component={Followings}
        />
        <PrivateRoute exact path="/dashboard/education" component={Education} />
        <PrivateRoute
          exact
          path="/dashboard/experience"
          component={Experience}
        />
        <PrivateRoute exact path="/dashboard/github" component={Github} />
        <PrivateRoute exact path="/dashboard/settings" component={Settings} />
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
