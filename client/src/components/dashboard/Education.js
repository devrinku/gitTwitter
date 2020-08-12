import React, { useState } from "react";
import Modal from "./../Modal";
import { connect } from "react-redux";
import { showBackDrop } from "./../../actions/utils";
import { showModal } from "./../../actions/utils";
import { setBackdropType } from "./../../actions/utils";
import EducationForm from "./../Forms/EducationForm";
import Moment from "react-moment";

const Education = ({
  utils,
  showBackDrop,
  profile: { loggedProfile },
  showModal,
  setBackdropType,
}) => {
  const [component, showComponent] = useState(false);
  return (
    <div className="padding-top mid-container">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-graduation-cap mx"></i>Education Credentials
        </span>
      </div>
      {loggedProfile.education && loggedProfile.education.length > 0 && (
        <table>
          <thead className="fw-500 small ">
            <tr>
              <td>School</td>
              <td>Degree</td>
              <td>Years</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {loggedProfile.education.map((edu) => (
              <tr key={edu._id}>
                <td>{edu.school}</td>
                <td>{edu.degree}</td>
                <td>
                  <Moment format="YYYY/MM/DD">{edu.from}</Moment>-{" "}
                  {edu.to === null ? (
                    " Now"
                  ) : (
                    <Moment format="YYYY/MM/DD">{edu.to}</Moment>
                  )}
                </td>
                <td>
                  <a
                    onClick={() => {
                      setBackdropType("education");
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
      {utils.backdrop && utils.modal && utils.backdropType === "education" && (
        <Modal index={90} action="delete this education credential">
          <a style={{ color: "white" }} href="#!" className="btn orange">
            Confirm
          </a>
        </Modal>
      )}
      <div className="mx py">
        <a onClick={() => showComponent(!component)} href="#!" className="btn">
          {component ? "Close" : "Add Education"}
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
  setBackdropType,
})(Education);
