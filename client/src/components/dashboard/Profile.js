import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMyProfile } from "./../../actions/profile";
import Preloader from "./../Preloader";
import spinner from "./../../images/25C.gif";

const Profile = ({
  getMyProfile,
  auth: { user },
  profile: { loggedProfile, loadingProfile },
}) => {
  useEffect(() => {
    getMyProfile();
    //eslint-disable-next-line
  }, []);
  return loadingProfile === true ? (
    <Fragment>
      <div className="container padding-top text-center">
        <div className="my-3">
          <Preloader spinner={spinner} />
        </div>
      </div>
    </Fragment>
  ) : loggedProfile === null ? (
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
    <div className=" mid-container bg-teal padding-top">
      <div className="profile">
        <div className="image my-2">
          <img src={`./../../uploads/${user.image}`} alt="" />
        </div>
        <div className="pro-content">
          <p>
            <i className="fas fa-user-tie"></i> {user.name && user.name}
          </p>
          {loggedProfile.status && (
            <Fragment>
              <p>
                <i className="fas fa-laptop"></i>
                {loggedProfile.status}
              </p>
            </Fragment>
          )}
          {loggedProfile.experience && loggedProfile.experience.length > 0 && (
            <Fragment>
              <p>
                <i className="fas fa-briefcase"></i>
                {
                  loggedProfile.experience[loggedProfile.experience.length - 1]
                    .title
                }{" "}
                at{" "}
                {
                  loggedProfile.experience[loggedProfile.experience.length - 1]
                    .company
                }
              </p>
            </Fragment>
          )}
          {loggedProfile.education && loggedProfile.education.length > 0 && (
            <Fragment>
              <p>
                <i className="fas fa-graduation-cap"></i>
                {
                  loggedProfile.education[loggedProfile.education.length - 1]
                    .degree
                }{" "}
                at{" "}
                {
                  loggedProfile.education[loggedProfile.education.length - 1]
                    .school
                }
              </p>
            </Fragment>
          )}
          {loggedProfile.hometown && (
            <Fragment>
              <p>
                <i className="fas fa-home"></i>From {loggedProfile.hometown}
              </p>
            </Fragment>
          )}
          {loggedProfile.currentCity && (
            <Fragment>
              <p>
                <i className="fas fa-map-marker-alt"></i>Lives in ,{" "}
                {loggedProfile.currentCity}
              </p>
            </Fragment>
          )}
          {loggedProfile.website && (
            <Fragment>
              <p>
                <i className="fas fa-blog"></i>Personal Website :{" "}
                {loggedProfile.website}
              </p>
            </Fragment>
          )}
          {(loggedProfile.github ||
            loggedProfile.twitter ||
            loggedProfile.facebook ||
            loggedProfile.instagram ||
            loggedProfile.linkedin) && (
            <Fragment>
              <p>
                <i className="fas fa-link"></i> Follow me :
                {loggedProfile.github && (
                  <a
                    className="mx follow-links"
                    href={`${loggedProfile.github}`}>
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {loggedProfile.facebook && (
                  <a
                    className="mx follow-links"
                    href={`${loggedProfile.facebook}`}>
                    <i className="fab fa-facebook"></i>
                  </a>
                )}{" "}
                {loggedProfile.linkedin && (
                  <a
                    className="mx follow-links"
                    href={`${loggedProfile.linkedin}`}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}{" "}
                {loggedProfile.twitter && (
                  <a
                    className="mx follow-links"
                    href={`${loggedProfile.twitter}`}>
                    <i className="fab fa-twitter"></i>
                  </a>
                )}{" "}
                {loggedProfile.instagram && (
                  <a
                    className="mx follow-links"
                    href={`${loggedProfile.instagarm}`}>
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
              </p>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { getMyProfile })(Profile);
