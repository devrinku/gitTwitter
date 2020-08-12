import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addExperience } from "./../../actions/profile";

const ExperienceForm = ({
  profile: { loggedProfile },
  addEducation,
  history,
}) => {
  return (
    <div className="container">
      <div className="my ">
        <span className="teal pencil fw-500 ">
          <i className="fas fa-cogs mx"></i>Add Experience
        </span>
        <br />
        <span className="mx">* = required Field.</span>
      </div>
      <form className="education-form ">
        <div className="input-field">
          <input type="text" name="" placeholder="* Job title." />
          <span className="x-small ">
            Job title like manager,quality analysts etc.
          </span>
        </div>
        <div className="input-field">
          <input type="text" name="" placeholder="* Name of Company" />
          <span className="x-small ">Company you were working for.</span>
        </div>
        <div className="input-field">
          <input type="text" name="" placeholder="* From" />
          <span className="x-small ">Date of joining company.</span>
        </div>

        <div className="input-field check">
          <input type="checkbox" />
          <p className="mx">
            <span style={{ color: "initial" }}>
              I am currently working here.
            </span>
          </p>
        </div>
        <div className="input-field">
          <input type="date" name="" placeholder="* To" />
          <span className="x-small ">Date of resign.</span>
        </div>
        <div className="input-field">
          <textarea type="text" name="" placeholder="Description" />
          <span className="x-small ">Tell us about your job</span>
        </div>
        <div className="links">
          <p>
            <input
              style={{ color: "white" }}
              type="submit"
              value="Submit"
              className="btn "
            />
          </p>
          <p>
            <a
              href="#!"
              style={{ backgroundColor: "grey" }}
              className="btn mx-2">
              Go Back
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
