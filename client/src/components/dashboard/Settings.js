import React, { Fragment } from "react";

import { connect } from "react-redux";

import { setCurrentProfile } from "./../../actions/profile";

import { Link } from "react-router-dom";

const Settings = ({
  profile: { loggedProfile },

  setCurrentProfile,
}) => {
  return (
    <Fragment>
      <div className="mid-container padding-top">
        <div className="my teal ">
          <span className="pencil fw-500 ">
            <i className="fas fa-cogs mx"></i>Settings
          </span>
        </div>
        <ul className="settings ">
          <li>
            <Link
              className="btn block "
              to={{
                pathname: "/create/uploadimage",
                state: {
                  from: "root",
                },
              }}>
              Change/Delete/Upload Profile Image
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setCurrentProfile(loggedProfile)}
              className="btn block "
              to="/create/profileform">
              Edit Profile
            </Link>
          </li>
          <li>
            <Link className="btn block " to="/create/changepassword">
              Change Password
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, {
  setCurrentProfile,
})(Settings);
