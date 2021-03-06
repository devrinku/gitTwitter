import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";
import { uploadDP } from "./../../actions/auth";
import { deleteDP } from "./../../actions/auth";
import Modal from "./../Modal";
import { showBackDrop } from "./../../actions/utils";
import { showModal } from "./../../actions/utils";
import Preloader from "./../Preloader";
import spinner from "./../../images/25C.gif";
import { setBackdropType } from "./../../actions/utils";
import { unsetProgress } from "./../../actions/profile";
import { unsetFetch } from "./../../actions/auth";

const UploadImage = ({
  uploadDP,
  history,
  auth: { user, fetch },
  profile: { progress },
  utils,
  setBackdropType,
  showModal,
  showBackDrop,
  unsetFetch,

  deleteDP,
}) => {
  const History = useHistory();

  useEffect(() => {
    return () => {
      unsetProgress();
      unsetFetch();
    };
    //eslint-disable-next-line
  }, []);
  const [file, setFile] = useState("");
  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    uploadDP(file, history);
  };
  return (
    <div className="padding-top">
      <div className="container">
        {fetch && (
          <div className="container text-center">
            <Preloader spinner={spinner} />
          </div>
        )}
        <div className="my ">
          <span className="teal pencil fw-500 ">
            <i className="fas fa-camera mx"></i>Upload a profile image.
          </span>
          <br />
        </div>
        <form onSubmit={(e) => onSubmit(e)} className="education-form ">
          <div style={{ marginBottom: "0" }} className="input-field">
            <input onChange={(e) => onChange(e)} type="file" />
            <input
              style={progress === true ? { background: "red" } : {}}
              disabled={progress === true ? true : false}
              className="btn block"
              type="submit"
              value={
                user && user.image !== "no-image.png"
                  ? progress === true
                    ? "Changing Profile Image..."
                    : "Change Profile Image"
                  : progress === true
                  ? "Uploading Profile Image..."
                  : "Upload Profile Image"
              }
            />
          </div>
        </form>
        {user && user.image !== "no-image.png" && (
          <input
            onClick={() => {
              setBackdropType(`image`);
              showBackDrop();
              showModal();
            }}
            className="btn block  my-1"
            style={
              fetch === true
                ? { textAlign: "center", background: "red" }
                : { textAlign: "center" }
            }
            disabled={fetch === true ? true : false}
            type="submit"
            value={
              fetch === true
                ? "Deleting Image..."
                : "Delete Current Profile Image"
            }
          />
        )}
        {History.location.state ? (
          <input
            onClick={() => {
              if (History.location.state) {
                History.goBack();
              }
            }}
            style={{
              backgroundColor: "grey",
              display: "block",
              textAlign: "center",
            }}
            className="btn block "
            value="Close"
            type="submit"
          />
        ) : (
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
        )}
        {utils.backdrop && utils.modal && utils.backdropType === `image` && (
          <Modal warn={true} index={90} action="delete your  profile image">
            <input
              onClick={() => {
                deleteDP(history);
              }}
              style={{ color: "white" }}
              className="btn orange"
              type="submit"
              value="Confirm"
            />
          </Modal>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  utils: state.utils,
  profile: state.profile,
});
export default connect(mapStateToProps, {
  uploadDP,
  deleteDP,
  setBackdropType,
  showModal,
  showBackDrop,
  unsetFetch,
  unsetProgress,
})(withRouter(UploadImage));
