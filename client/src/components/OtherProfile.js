import React, { useEffect, Fragment } from "react";
import { getAProfile } from "./../actions/profile";
import { clearSingleProfile } from "./../actions/profile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Preloader from "./Preloader";
import Profile from "./dashboard/Profile";
import Experience from "./dashboard/Experience";
import Education from "./dashboard/Education";
import Github from "./dashboard/Github";
import Posts from "./dashboard/MyPosts";

import spinner from "./../images/25C.gif";

const OtherProfile = ({
  getAProfile,
  profile: { otherProfile },
  clearSingleProfile,
}) => {
  const { id } = useParams();
  useEffect(() => {
    getAProfile(id);
    return () => {
      clearSingleProfile();
    };
  }, [id]);

  return otherProfile === null ? (
    <div className="padding-top">
      <div className="container text-center">
        <Preloader spinner={spinner} />
      </div>
    </div>
  ) : (
    <Fragment>
      <Profile loggedUser={false} myprofile={otherProfile} />
      <main className="my-3"></main>
      <div className="px">
        <Experience loggedUser={false} myprofile={otherProfile} />
        <main className="my-3"></main>
        <Education loggedUser={false} myprofile={otherProfile} />
        <main className="my-3"></main>
        <Github loggedUser={false} myprofile={otherProfile} />
        <main className="my-3"></main>
        <Posts loggedUser={false} myprofile={otherProfile} />
      </div>
    </Fragment>
  );
};

const mapStatetoProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStatetoProps, { getAProfile, clearSingleProfile })(
  OtherProfile
);
