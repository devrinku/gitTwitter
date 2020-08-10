import React from "react";

const ExperienceForm = () => {
  return (
    <div className="container">
      <div className="my ">
        <span className="teal pencil fw-500 ">
          <i className="fas fa-graduation-cap mx"></i>Add Education
        </span>
        <br />
        <span className="mx">* = required Field.</span>
      </div>
      <form className="education-form ">
        <div className="input-field">
          <input type="text" name="" placeholder="School" id="" />
          <span className="x-small ">Job Title.</span>
        </div>
        <div className="input-field">
          <input type="text" name="" placeholder="Degree" id="" />
          <span className="x-small ">
            Type of degree like masters,graduation,under graduation.
          </span>
        </div>
        <div className="input-field">
          <input type="text" name="" placeholder="Field of Study" id="" />
          <span className="x-small ">Your branch of specilization.</span>
        </div>
        <div className="input-field">
          <input type="date" name="" placeholder="From" id="" />
          <span className="x-small ">Date of joining the course</span>
        </div>
        <div className="input-field check">
          <input type="checkbox" />
          <p className="mx">
            <span style={{ color: "initial" }} className="small ">
              I am currently studying here.
            </span>
          </p>
        </div>
        <div className="input-field">
          <input type="date" name="" placeholder="To" id="" />
          <span className="x-small ">Date of completion of course</span>
        </div>
        <div className="input-field">
          <textarea type="text" name="" placeholder="Description" id="" />
          <span className="x-small ">Tell us about your course</span>
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
