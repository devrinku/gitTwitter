import React, { useEffect } from "react";
import Modal from "./../Modal";
import { connect } from "react-redux";
import { showBackDrop } from "./../../actions/utils";
import { showModal } from "./../../actions/utils";
import { setBackdropType } from "./../../actions/utils";
import ExperienceForm from "./../Forms/ExperienceForm";
import { deleteExperience } from "./../../actions/profile";
import { unsetProgress } from "./../../actions/profile";
import Moment from "react-moment";
import { showComponent } from "./../../actions/utils";
import { Fragment } from "react";

const Experience = ({
  utils,
  showBackDrop,
  myprofile,
  setBackdropType,
  deleteExperience,
  showModal,
  unsetProgress,
  showComponent,
  loggedUser,
  profile: { progress },
}) => {
  useEffect(() => {
    return () => {
      unsetProgress();
    };
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    return () => {
      showComponent(false, null);
    };
    //eslint-disable-next-line
  }, []);

  return (
    myprofile.experience && (
      <div
        className={
          "mid-container " + (loggedUser === true ? "padding-top" : " ")
        }>
        <div className="my teal">
          <span className="pencil fw-500 ">
            <i className="fas fa-users-cog mx"></i>Experience Credentials
          </span>
        </div>
        {myprofile.experience.length > 0 && (
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
        {myprofile.experience.length === 0 && loggedUser === false && (
          <p className="fw-500 px">The user has not added experience yet.</p>
        )}
        {myprofile.experience.map((exp) => (
          <Fragment key={exp._id}>
            {" "}
            <div
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

              {loggedUser && (
                <p className="text-center" style={{ width: "10%" }}>
                  <a
                    onClick={() => {
                      setBackdropType(`experience-${exp._id}`);
                      showBackDrop();
                      showModal();
                    }}
                    href="#!">
                    <i
                      style={{ color: "red" }}
                      className="small  fas fa-trash"></i>
                  </a>
                </p>
              )}
            </div>
            {utils.backdrop &&
              utils.modal &&
              utils.backdropType === `experience-${exp._id}` && (
                <Modal
                  warn={true}
                  index={90}
                  action="delete this experience credential">
                  <a
                    onClick={() => deleteExperience(exp._id)}
                    style={{ color: "white" }}
                    href="#!"
                    className="btn orange">
                    Confirm
                  </a>
                </Modal>
              )}
          </Fragment>
        ))}
        {loggedUser && (
          <div className="mx py">
            <a
              style={progress === true ? { background: "red" } : {}}
              onClick={() => showComponent(!utils.component, "experience")}
              href="#!"
              className="btn">
              {utils.component
                ? "Close"
                : progress === true
                ? "Deleting Experience..."
                : "Add Experience"}
            </a>
          </div>
        )}
        {utils.componentType === "experience" && utils.component && (
          <div className="px">
            <ExperienceForm inDashboard={true} />
          </div>
        )}
      </div>
    )
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
  showComponent,
  unsetProgress,
})(Experience);
