import React, { Fragment, useEffect, useState } from "react";
import PrivateRoute from "./../PrivateRoute";
import Profile from "./Profile";
import Followers from "./Followers";
import Followings from "./Followings";
import Github from "./Github";
import Backdrop from "./../Backdrop";
import MyPosts from "./MyPosts";
import Home from "./Home";
import Education from "./Education";
import Experience from "./Experience";
import Settings from "./Settings";
import SideDrawer from "./../SideDrawer";
import Aside from "./../Aside";
import { Switch } from "react-router-dom";
import { getMyProfile } from "./../../actions/profile";
import { connect } from "react-redux";
import { showMenuBar } from "./../../actions/utils";
import { hideMenuBar } from "./../../actions/utils";

const Dashboard = ({
  showMenuBar,
  utils,
  hideMenuBar,

  getMyProfile,
  profile: { loggedProfile, loadingProfile, progress },
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
  useEffect(() => {
    getMyProfile();

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
        <PrivateRoute
          myprofile={loggedProfile}
          myLoadingprofile={loadingProfile}
          exact
          path="/dashboard/profile"
          component={Profile}
        />
        <PrivateRoute
          myprofile={loggedProfile}
          exact
          path="/dashboard/posts"
          component={MyPosts}
        />
        <PrivateRoute
          myprofile={loggedProfile}
          exact
          path="/dashboard/followers"
          component={Followers}
        />
        <PrivateRoute
          myprofile={loggedProfile}
          exact
          path="/dashboard/followings"
          component={Followings}
        />
        <PrivateRoute
          myprofile={loggedProfile}
          exact
          path="/dashboard/education"
          component={Education}
        />
        <PrivateRoute
          myprofile={loggedProfile}
          exact
          path="/dashboard/experience"
          component={Experience}
        />
        <PrivateRoute
          myprofile={loggedProfile}
          exact
          path="/dashboard/github"
          component={Github}
        />
        <PrivateRoute exact path="/dashboard/home" component={Home} />
        <PrivateRoute exact path="/dashboard/settings" component={Settings} />
      </Switch>
    </Fragment>
  );
};
const mapStatetoProps = (state) => ({
  utils: state.utils,
  profile: state.profile,
});
export default connect(mapStatetoProps, {
  showMenuBar,
  getMyProfile,
  hideMenuBar,
})(Dashboard);
