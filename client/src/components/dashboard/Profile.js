import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Preloader from "./../Preloader";
import spinner from "./../../images/25C.gif";

const Profile = ({ auth: { user }, myprofile, myLoadingprofile }) => {
  return myLoadingprofile === true ? (
    <Fragment>
      <div className="container padding-top text-center">
        <div className="my-3">
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
    <div className=" mid-container bg-teal padding-top">
      <div className="profile">
        <div className="image my-2">
          <img src={`./../../uploads/${user.image}`} alt="" />
        </div>
        <div className="pro-content">
          <p>
            <i className="fas fa-user-tie"></i> {user.name && user.name}
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
                } at{" "}
                {myprofile.experience[myprofile.experience.length - 1].company}
              </p>
            </Fragment>
          )}
          {myprofile.education && myprofile.education.length > 0 && (
            <Fragment>
              <p>
                <i className="fas fa-graduation-cap"></i>
                {
                  myprofile.education[myprofile.education.length - 1].degree
                } at{" "}
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
                  <a className="mx follow-links" href={`${myprofile.facebook}`}>
                    <i className="fab fa-facebook"></i>
                  </a>
                )}{" "}
                {myprofile.linkedin && (
                  <a className="mx follow-links" href={`${myprofile.linkedin}`}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}{" "}
                {myprofile.twitter && (
                  <a className="mx follow-links" href={`${myprofile.twitter}`}>
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
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Profile);
