import React, { useState } from "react";
import Modal from "./../Modal";
import { connect } from "react-redux";
import { showBackDrop } from "./../../actions/utils";
import { showModal } from "./../../actions/utils";
import { setBackdropType } from "./../../actions/utils";
import ExperienceForm from "./../Forms/ExperienceForm";
import { deleteExperience } from "./../../actions/profile";
import Moment from "react-moment";
import { Fragment } from "react";

const Experience = ({
  utils,
  showBackDrop,
  profile: { loggedProfile },
  setBackdropType,
  deleteExperience,
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
        <div className="edu">
          <div
            style={{ background: "rgb(243, 243, 243)" }}
            className="border-div head edu ">
            <p className="px" style={{ width: "30%" }}>
              Title
            </p>
            <p className="px" style={{ width: "30%" }}>
              Company
            </p>
            <p className="px" style={{ width: "30%" }}>
              Years
            </p>
            <p className="px" style={{ width: "10%" }}></p>
          </div>
        </div>
      )}
      {loggedProfile.experience.map((exp) => (
        <div
          key={exp._id}
          style={{ background: "rgb(243, 243, 243)" }}
          className="border-div head edu">
          <p style={{ width: "30%" }}>{exp.title}</p>
          <p style={{ width: "30%" }}>{exp.company}</p>
          <p style={{ width: "30%" }}>
            <Moment format="YYYY/MM/DD">{exp.from}</Moment>-
            {exp.to === null ? (
              " Now"
            ) : (
              <Fragment>
                <Moment format="YYYY/MM/DD">{exp.to}</Moment>
              </Fragment>
            )}
          </p>
          <p className="text-center" style={{ width: "10%" }}>
            <a
              onClick={() => {
                setBackdropType(`experience-${exp._id}`);
                showBackDrop();
                showModal();
              }}
              href="#!">
              <i style={{ color: "red" }} className="small  fas fa-trash"></i>
            </a>
          </p>
          {utils.backdrop &&
            utils.modal &&
            utils.backdropType === `experience-${exp._id}` && (
              <Modal index={90} action="delete this experience credential">
                <a
                  onClick={() => deleteExperience(exp._id)}
                  style={{ color: "white" }}
                  href="#!"
                  className="btn orange">
                  Confirm
                </a>
              </Modal>
            )}
        </div>
      ))}

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
  deleteExperience,
  showModal,
  setBackdropType,
})(Experience);
