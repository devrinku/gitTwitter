import React, { useState, Fragment } from "react";
import Modal from "./../Modal";
import { connect } from "react-redux";
import { showBackDrop } from "./../../actions/utils";
import { showModal } from "./../../actions/utils";
import { setBackdropType } from "./../../actions/utils";
import EducationForm from "./../Forms/EducationForm";
import { deleteEducation } from "./../../actions/profile";
import Moment from "react-moment";

const Education = ({
  utils,
  showBackDrop,
  profile: { loggedProfile },
  showModal,
  deleteEducation,
  setBackdropType,
}) => {
  const [component, showComponent] = useState(false);
  return (
    <div className="padding-top mid-container">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users-cog mx"></i>Education Credentials
        </span>
      </div>
      {loggedProfile.education && loggedProfile.education.length > 0 && (
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
      {loggedProfile.education.map((edu) => (
        <div
          key={edu._id}
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
          {utils.backdrop &&
            utils.modal &&
            utils.backdropType === `education-${edu._id}` && (
              <Modal index={90} action="delete this education credential">
                <a
                  onClick={() => deleteEducation(edu._id)}
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
          <EducationForm showComponent={showComponent} />
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
  setBackdropType,
})(Education);
