import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { unsetProgress } from "./../../actions/profile";
import { followAUser } from "./../../actions/profile";
import Preloader from "./../Preloader";
import spinner from "./../../images/25C.gif";

const Profile = ({
  auth: { user },
  myprofile,
  loggedUser,
  myLoadingprofile,
  followAUser,
  profile: { progress, loggedProfile },
  unsetProgress,
}) => {
  useEffect(() => {
    unsetProgress();
    return () => {
      unsetProgress();
    };
  }, []);
  const showFollowBtn = (resource) => {
    const user = resource.find(
      (elem) => elem.toString() === loggedProfile._id.toString()
    );
    if (user) {
      return false;
    } else {
      return true;
    }
  };

  return myLoadingprofile === true ? (
    <Fragment>
      <div className="mid-container padding-top ">
        <div className="my-1 text-center">
          <Preloader spinner={spinner} />
        </div>
      </div>
    </Fragment>
  ) : myprofile === null ? (
    <div className="container">
      <div className="my-2">
        <p className="padding-top fw-500 small">
          <i className="fas fa-user teal mx"></i>Welcome{" "}
          {user.name && user.name}
        </p>

        <p className="my px">
          <Link to="/create/profileform" className="btn ">
            Create A profile
          </Link>
        </p>
      </div>
    </div>
  ) : (
    <Fragment>
      <div className="bg-teal padding-top  mid-container">
        <div className="profile">
          <div className="image my-2">
            <img
              src={
                loggedUser === true
                  ? `./../../uploads/${user.image}`
                  : `./../../uploads/${myprofile.user.image}`
              }
              alt=""
            />
          </div>
          <div className="pro-content">
            <p>
              <i className="fas fa-user-tie"></i>
              {loggedUser === true ? user.name : myprofile.user.name}
            </p>
            {myprofile.status && (
              <Fragment>
                <p>
                  <i className="fas fa-laptop"></i>
                  {myprofile.status}
                </p>
              </Fragment>
            )}
            {myprofile.experience && myprofile.experience.length > 0 && (
              <Fragment>
                <p>
                  <i className="fas fa-briefcase"></i>
                  {
                    myprofile.experience[myprofile.experience.length - 1].title
                  }{" "}
                  at{" "}
                  {
                    myprofile.experience[myprofile.experience.length - 1]
                      .company
                  }
                </p>
              </Fragment>
            )}
            {myprofile.education && myprofile.education.length > 0 && (
              <Fragment>
                <p>
                  <i className="fas fa-graduation-cap"></i>
                  {
                    myprofile.education[myprofile.education.length - 1].degree
                  }{" "}
                  at{" "}
                  {myprofile.education[myprofile.education.length - 1].school}
                </p>
              </Fragment>
            )}
            {myprofile.hometown && (
              <Fragment>
                <p>
                  <i className="fas fa-home"></i>From {myprofile.hometown}
                </p>
              </Fragment>
            )}
            {myprofile.currentCity && (
              <Fragment>
                <p>
                  <i className="fas fa-map-marker-alt"></i>Lives in ,{" "}
                  {myprofile.currentCity}
                </p>
              </Fragment>
            )}
            {myprofile.website && (
              <Fragment>
                <p>
                  <i className="fas fa-blog"></i>Personal Website :{" "}
                  {myprofile.website}
                </p>
              </Fragment>
            )}
            {(myprofile.github ||
              myprofile.twitter ||
              myprofile.facebook ||
              myprofile.instagram ||
              myprofile.linkedin) && (
              <Fragment>
                <p>
                  <i className="fas fa-link"></i> Follow me :
                  {myprofile.github && (
                    <a className="mx follow-links" href={`${myprofile.github}`}>
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {myprofile.facebook && (
                    <a
                      className="mx follow-links"
                      href={`${myprofile.facebook}`}>
                      <i className="fab fa-facebook"></i>
                    </a>
                  )}{" "}
                  {myprofile.linkedin && (
                    <a
                      className="mx follow-links"
                      href={`${myprofile.linkedin}`}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}{" "}
                  {myprofile.twitter && (
                    <a
                      className="mx follow-links"
                      href={`${myprofile.twitter}`}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}{" "}
                  {myprofile.instagram && (
                    <a
                      className="mx follow-links"
                      href={`${myprofile.instagarm}`}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                </p>
              </Fragment>
            )}
          </div>{" "}
          {loggedUser === false && (
            <Fragment>
              <div className="py-1">
                <div className="px-1">
                  {showFollowBtn(myprofile.followers) ? (
                    <a
                      style={progress === true ? { background: "red" } : {}}
                      onClick={() => followAUser(myprofile._id)}
                      className="btn text-center my block"
                      href="#!">
                      {progress === true ? "Following..." : "Follow"}
                    </a>
                  ) : (
                    <input
                      className="block btn my"
                      disabled={true}
                      style={{ background: "grey" }}
                      value="Followed"
                      type="submit"
                    />
                  )}
                  <Link
                    className="btn text-center my block "
                    to={{
                      pathname: `/dashboard/profile/${myprofile._id}/followers`,
                      state: {
                        from: "otherProfile",
                      },
                    }}>
                    Followers : {myprofile.followers.length}
                  </Link>
                  <Link
                    className="btn text-center my block"
                    to={{
                      pathname: `/dashboard/profile/${myprofile._id}/followings`,
                      state: {
                        from: "otherProfile",
                      },
                    }}>
                    Followings : {myprofile.followings.length}
                  </Link>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { followAUser, unsetProgress })(
  Profile
);
