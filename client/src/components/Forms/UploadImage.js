import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { uploadDP } from "./../../actions/auth";
import { deleteDP } from "./../../actions/auth";
import Modal from "./../Modal";
import { showBackDrop } from "./../../actions/utils";
import { showModal } from "./../../actions/utils";
import { setBackdropType } from "./../../actions/utils";

const UploadImage = ({
  uploadDP,
  history,
  auth: { user },
  utils,
  setBackdropType,
  showModal,
  showBackDrop,
  deleteDP,
}) => {
  const [file, setFile] = useState("");
  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    uploadDP(file, history);
  };
  return (
    <div className="container">
      <div className="my ">
        <span className="teal pencil fw-500 ">
          <i className="fas fa-camera mx"></i>Upload a profile image.
        </span>
        <br />
      </div>
      <form onSubmit={(e) => onSubmit(e)} className="education-form ">
        <div className="input-field">
          <input
            onChange={(e) => onChange(e)}
            type="file"
            placeholder="Description"
          />
          <input
            className="btn block"
            type="submit"
            value={
              user && user.image !== "no-image.png"
                ? "Change Profile Image"
                : "Upload"
            }
          />
          {user && user.image !== "no-image.png" && (
            <a
              href="#!"
              className="btn block orange my-1"
              style={{ textAlign: "center" }}
              onClick={() => {
                setBackdropType(`image`);
                showBackDrop();
                showModal();
              }}>
              Delete Current Profile Image
            </a>
          )}
          <Link
            to="/dashboard/profile"
            style={{
              backgroundColor: "grey",
              display: "block",
              textAlign: "center",
            }}
            className="btn block ">
            Skip
          </Link>
        </div>
      </form>
      {utils.backdrop && utils.modal && utils.backdropType === `image` && (
        <Modal index={90} action="delete your  profile image">
          <a
            onClick={() => deleteDP(history)}
            style={{ color: "white" }}
            href="#!"
            className="btn orange">
            Confirm
          </a>
        </Modal>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  utils: state.utils,
});
export default connect(mapStateToProps, {
  uploadDP,
  deleteDP,
  setBackdropType,
  showModal,
  showBackDrop,
})(withRouter(UploadImage));
