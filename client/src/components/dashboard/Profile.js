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
          <img src={user.image} alt="" />
        </div>
        <div className="pro-content">
          <p>
            <i className="fas fa-user-tie"></i> John Doe
          </p>
          <p>
            <i className="fas fa-laptop"></i>Senior Developer
          </p>
          <p>
            <i className="fas fa-briefcase"></i>Web Devloper at Microsoft
          </p>
          <p>
            <i className="fas fa-graduation-cap"></i>Masters from MIT
          </p>
          <p>
            <i className="fas fa-home"></i>From Dehradoon
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>Lives in , Yamunanagar
          </p>
          <p>
            <i className="fas fa-blog"></i>Personal Website
          </p>
          <p>
            <i className="fas fa-link"></i>Web Developer at Microsoft
          </p>
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
