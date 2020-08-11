import React, { Fragment } from "react";
import Modal from "./../Modal";
import { connect } from "react-redux";
import { showBackDrop } from "./../../actions/utils";
import { showModal } from "./../../actions/utils";
import { setBackdropType } from "./../../actions/utils";

const Settings = ({ utils, showBackDrop, showModal, setBackdropType }) => {
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
            <a className="btn block " href="#!">
              Change/Delete/Upload Profile Image
            </a>
          </li>
          <li>
            <a className="btn block " href="#!">
              Edit Profile
            </a>
          </li>
          <li>
            <a className="btn block " href="#!">
              Change Password
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setBackdropType("deleteAccount");
                showBackDrop();
                showModal();
              }}
              className="btn orange block "
              href="#!">
              Delete Account
            </a>
          </li>
        </ul>
      </div>
      {utils.backdrop && utils.modal && utils.backdropType === "deleteAccount" && (
        <Modal index={90} action="delete your account ,this can't be undone !!">
          <a style={{ color: "white" }} href="#!" className="btn orange">
            Confirm
          </a>
        </Modal>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  utils: state.utils,
});
export default connect(mapStateToProps, {
  showBackDrop,
  showModal,
  setBackdropType,
})(Settings);
