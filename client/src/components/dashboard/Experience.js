import React from "react";
import Modal from "./../Modal";
import { connect } from "react-redux";
import { showBackDrop } from "./../../actions/utils";
import { showModal } from "./../../actions/utils";
import { setBackdropType } from "./../../actions/utils";

const Experience = ({ utils, showBackDrop, setBackdropType, showModal }) => {
  return (
    <div className="padding-top mid-container">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users-cog mx"></i>Experience Credentials
        </span>
      </div>
      <table>
        <thead className="fw-500 small">
          <tr>
            <td>School</td>
            <td>Degree</td>
            <td>Years</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
            <td>
              <a
                onClick={() => {
                  setBackdropType("experience");
                  showBackDrop();
                  showModal();
                }}
                href="#!"
                className="btn orange">
                Delete
              </a>
              {utils.backdrop &&
                utils.modal &&
                utils.backdropType === "experience" && (
                  <Modal index={90} action="delete this experience credential">
                    <a
                      style={{ color: "white" }}
                      href="#!"
                      className="btn orange">
                      Confirm
                    </a>
                  </Modal>
                )}
            </td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
            <td>
              <a href="#!" className="btn orange">
                Delete
              </a>
            </td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
            <td>
              <a href="#!" className="btn orange">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  utils: state.utils,
});
export default connect(mapStateToProps, {
  showBackDrop,
  showModal,
  setBackdropType,
})(Experience);