import React, { useEffect, Fragment } from "react";
import Modal from "./../Modal";
import { connect } from "react-redux";
import { showBackDrop } from "./../../actions/utils";
import { showModal } from "./../../actions/utils";
import { setBackdropType } from "./../../actions/utils";
import { showComponent } from "./../../actions/utils";
import EducationForm from "./../Forms/EducationForm";
import { deleteEducation } from "./../../actions/profile";
import Moment from "react-moment";
import { unsetProgress } from "./../../actions/profile";

const Education = ({
  utils,
  showBackDrop,
  myprofile,
  showModal,
  deleteEducation,
  unsetProgress,
  profile: { progress },
  setBackdropType,
  showComponent,
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
    <div className="padding-top mid-container">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users-cog mx"></i>Education Credentials
        </span>
      </div>
      {myprofile.education && myprofile.education.length > 0 && (
        <div className="edu">
          <div
            style={{ background: "rgb(243, 243, 243)" }}
            className="border-div head edu ">
            <p className="px" style={{ width: "30%" }}>
              School
            </p>
            <p className="px" style={{ width: "30%" }}>
              Degree
            </p>
            <p className="px" style={{ width: "30%" }}>
              Years
            </p>
            <p className="px" style={{ width: "10%" }}></p>
          </div>
        </div>
      )}
      {myprofile.education.map((edu) => (
        <Fragment key={edu._id}>
          <div
            style={{ background: "rgb(243, 243, 243)" }}
            className="border-div head edu">
            <p className="px" style={{ width: "30%" }}>
              {edu.school}
            </p>
            <p className="px" style={{ width: "30%" }}>
              {edu.degree}
            </p>
            <p className="px" style={{ width: "30%" }}>
              <Moment format="YYYY/MM/DD">{edu.from}</Moment>-
              {edu.to === null ? (
                " Now"
              ) : (
                <Fragment>
                  <Moment format="YYYY/MM/DD">{edu.to}</Moment>
                </Fragment>
              )}
            </p>
            <p className="text-center" style={{ width: "10%" }}>
              <a
                onClick={() => {
                  setBackdropType(`education-${edu._id}`);
                  showBackDrop();
                  showModal();
                }}
                href="#!">
                <i style={{ color: "red" }} className="small  fas fa-trash"></i>
              </a>
            </p>
          </div>
          {utils.backdrop &&
            utils.modal &&
            utils.backdropType === `education-${edu._id}` && (
              <Modal
                warn={true}
                index={90}
                action="delete this education credential">
                <a
                  href="#!"
                  onClick={() => deleteEducation(edu._id)}
                  style={{ color: "white" }}
                  className="btn orange">
                  Confirm
                </a>
              </Modal>
            )}
        </Fragment>
      ))}
      <div className="mx py">
        <a
          style={progress === true ? { background: "red" } : {}}
          onClick={() => {
            showComponent(!utils.component, "education");
          }}
          href="#!"
          className="btn">
          {utils.component
            ? "Close"
            : progress === true
            ? "Deleting Education..."
            : "Add Education"}
        </a>
      </div>
      {utils.componentType === "education" && utils.component && (
        <div className="px">
          <EducationForm />
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
  deleteEducation,
  unsetProgress,
  showComponent,
  setBackdropType,
})(Education);
