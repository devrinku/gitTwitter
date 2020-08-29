import React, { Fragment, useEffect } from "react";
import Modal from "./../Modal";
import { connect } from "react-redux";
import { showBackDrop } from "./../../actions/utils";
import { setBackdropType } from "./../../actions/utils";
import { setCurrentProfile } from "./../../actions/profile";

import { deleteAccount } from "./../../actions/auth";
import { unsetFetch } from "./../../actions/auth";

import { showModal } from "./../../actions/utils";

import { Link } from "react-router-dom";

const Settings = ({
  profile: { loggedProfile },
  utils,
  deleteAccount,
  unsetFetch,
  showBackDrop,
  auth: { fetch, user },
  showModal,
  setBackdropType,
  setCurrentProfile,
}) => {
  useEffect(() => {
    return () => {
      unsetFetch();
    };
    //eslint-disable-next-line
  }, []);
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
          <li>
            <a
              href="#!"
              onClick={() => {
                setBackdropType("delete-account");
                showBackDrop();
                showModal();
              }}
              style={fetch === true ? { background: "red" } : {}}
              className="btn block "
              to="/create/profileform">
              {fetch === true ? "Deleting Account..." : "Delete Account"}
            </a>
          </li>
        </ul>
        {utils.backdrop &&
          utils.modal &&
          utils.backdropType === `delete-account` && (
            <Modal
              warn={true}
              index={90}
              action="delete your account ? this can't be undone ! ">
              <a
                href="#!"
                onClick={() => {
                  if (user.image === "no-image.png") {
                    deleteAccount(true, loggedProfile._id);
                  } else {
                    deleteAccount(false, loggedProfile._id);
                  }
                }}
                style={{ color: "white" }}
                className="btn orange">
                Confirm
              </a>
            </Modal>
          )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  utils: state.utils,
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, {
  setCurrentProfile,
  showBackDrop,
  showModal,
  setBackdropType,
  deleteAccount,
  unsetFetch,
})(Settings);
