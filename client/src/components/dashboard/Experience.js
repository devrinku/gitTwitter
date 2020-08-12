import React, { useState } from "react";
import Modal from "./../Modal";
import { connect } from "react-redux";
import { showBackDrop } from "./../../actions/utils";
import { showModal } from "./../../actions/utils";
import { setBackdropType } from "./../../actions/utils";
import ExperienceForm from "./../Forms/ExperienceForm";
import Moment from "react-moment";

const Experience = ({
  utils,
  showBackDrop,
  profile: { loggedProfile },
  setBackdropType,
  showModal,
}) => {
  const [component, showComponent] = useState(false);
  return (
    <div className="padding-top mid-container">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users-cog mx"></i>Experience Credentials
        </span>
      </div>
      {loggedProfile.experience && loggedProfile.experience.length > 0 && (
        <table>
          <thead className="fw-500 small">
            <tr>
              <td>Title</td>
              <td>Company</td>
              <td>Years</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {loggedProfile.experience.map((exp) => (
              <tr key={exp._id}>
                <td>{exp.title}</td>
                <td>{exp.company}</td>
                <td>
                  <Moment format="YYYY/MM/DD">{exp.from}</Moment>-{" "}
                  {exp.to === null ? (
                    " Now"
                  ) : (
                    <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                  )}
                </td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {utils.backdrop && utils.modal && utils.backdropType === "experience" && (
        <Modal index={90} action="delete this experience credential">
          <a style={{ color: "white" }} href="#!" className="btn orange">
            Confirm
          </a>
        </Modal>
      )}
      <div className="mx py">
        <a onClick={() => showComponent(!component)} href="#!" className="btn">
          {component ? "Close" : "Add Experience"}
        </a>
      </div>
      {component && (
        <div className="px">
          <ExperienceForm showComponent={showComponent} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  utils: state.utils,
  profile: state.profile,
});
export default connect(mapStateToProps, {
  showBackDrop,
  showModal,
  setBackdropType,
})(Experience);
