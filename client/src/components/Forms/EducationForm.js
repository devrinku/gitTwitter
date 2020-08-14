import React, { useState, useEffect } from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addEducation } from "./../../actions/profile";

const EducationForm = ({
  profile: { loggedProfile, progress },
  addEducation,
  showComponent,

  history,
}) => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    description: "",
  });
  const { school, description, degree, from, to, fieldofstudy } = formData;
  const [current, currenthandler] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/dashboard/education") {
      addEducation(formData, loggedProfile._id, true, showComponent);
    } else {
      addEducation(formData, loggedProfile._id, false, history);
    }
  };
  return (
    <div
      className={
        location.pathname === "/dashboard/education" ? " " : "container"
      }>
      <div className="my ">
        <span className="teal pencil fw-500 ">
          <i className="fas fa-graduation-cap mx"></i>Add Education
        </span>
        <br />
        <span className="mx">* = required Field.</span>
      </div>
      <form onSubmit={(e) => onSubmit(e)} className="education-form ">
        <div className="input-field">
          <input
            onChange={(e) => onChange(e)}
            value={school}
            type="text"
            name="school"
            placeholder="* School"
          />
          <span className="x-small ">Name of school/college.</span>
        </div>
        <div className="input-field">
          <input
            onChange={(e) => onChange(e)}
            value={degree}
            type="text"
            name="degree"
            placeholder="* Degree"
          />
          <span className="x-small ">
            Type of degree like masters,graduation,under graduation.
          </span>
        </div>
        <div className="input-field">
          <input
            onChange={(e) => onChange(e)}
            value={fieldofstudy}
            type="text"
            name="fieldofstudy"
            placeholder="* Field of Study"
          />
          <span className="x-small ">Your branch of specilization.</span>
        </div>
        <div className="input-field">
          <input
            onChange={(e) => onChange(e)}
            value={from}
            type="date"
            name="from"
            placeholder="* From"
          />
          <span className="x-small ">Date of joining the course.</span>
        </div>
        <div className="input-field check">
          <input onChange={() => currenthandler(!current)} type="checkbox" />
          <p className="mx">
            <span style={{ color: "initial" }}>
              I am currently studying here.
            </span>
          </p>
        </div>
        <div className="input-field">
          <input
            disabled={current ? true : false}
            onChange={(e) => onChange(e)}
            value={to || ""}
            type="date"
            name="to"
            placeholder="* To"
          />
          <span className="x-small ">Date of completion of course.</span>
        </div>
        <div className="input-field">
          <textarea
            onChange={(e) => onChange(e)}
            value={description || ""}
            type="text"
            name="description"
            placeholder="Description"
          />
          <span className="x-small ">Tell us about your course.</span>
        </div>
        <div
          className={
            location.pathname === "/dashboard/education" ? " " : "links"
          }>
          <p>
            <input
              disabled={progress === true ? true : false}
              style={
                progress === true
                  ? { color: "white", background: "red" }
                  : { color: "white" }
              }
              type="submit"
              value={
                progress === true ? "Addding Education..." : "Add Education"
              }
              className="btn block "
            />
          </p>
          {location.pathname === "/dashboard/education" ? null : (
            <p>
              <Link
                to={progress === true ? "#!" : "/create/experienceform"}
                style={{ backgroundColor: "grey" }}
                className="btn mx-2">
                Skip
              </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
const mapStatetoprops = (state) => ({
  profile: state.profile,
});
export default connect(mapStatetoprops, { addEducation })(
  withRouter(EducationForm)
);
