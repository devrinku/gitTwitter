import React from "react";

const ProfileForm = () => {
  return (
    <div className="container">
      <div className="my ">
        <span className="teal pencil fw-500 ">
          <i className="fas fa-user mx"></i>Create a Profile
        </span>
        <br />
        <span className="mx">* = required Field.</span>
      </div>
      <form className="education-form ">
        <div className="input-field">
          <input type="text" name="" placeholder="Current City" id="" />
          <span className="x-small ">Your current City.</span>
        </div>
        <div className="input-field">
          <input type="text" name="" placeholder="Hometown" id="" />
          <span className="x-small ">Your hometown.</span>
        </div>
        <div className="input-field">
          <input
            type="text"
            name=""
            placeholder="* Professional Status"
            id=""
          />
          <span className="x-small ">
            Give us an idea of where you are in your career like junior/senior
            web developer ,experienced,fresher etc.
          </span>
        </div>
        <div className="input-field">
          <input type="text" name="" placeholder="Company" id="" />
          <span className="x-small ">
            It can be your company ,or the company you are working for.
          </span>
        </div>
        <div className="input-field">
          <input type="text" name="" placeholder=" Personal Website" id="" />
          <span className="x-small ">
            Your website address,if you have one.
          </span>
        </div>
        <div className="input-field">
          <input
            type="text"
            name=""
            placeholder="* Your Professional Skills"
            id=""
          />
          <span className="x-small ">
            Use coma to seprate elements like HTML,CSS .
          </span>
        </div>
        <div className="input-field">
          <input type="text" name="" placeholder="Bio" id="" />
          <span className="x-small ">Tell us something about youself.</span>
        </div>
        <div className="input-field">
          <input type="text" name="" placeholder="Github Username" id="" />
          <span className="x-small ">
            Your name on github,to showcase your your work.
          </span>
        </div>
        <a href="#!" className="btn">
          Add Social Links
        </a>
        <div className="social-links">
          <div className="input my-2">
            <input type="text" placeholder="Github" />
            <i className="fab fa-github"></i>
          </div>
        </div>
        <div className="social-links">
          <div className="input my-2">
            <input type="text" placeholder="Twitter" />
            <i style={{ color: "  #00acee" }} className="fab fa-twitter"></i>
          </div>
        </div>
        <div className="social-links">
          <div className="input my-2">
            <input type="text" placeholder="Facebook" />
            <i style={{ color: " #3b5998" }} className="fab fa-facebook"></i>
          </div>
        </div>
        <div className="social-links">
          <div className="input my-2">
            <input type="text" placeholder="Linkedin" />
            <i style={{ color: "#0e76a8" }} className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="social-links">
          <div className="input my-1">
            <input type="text" placeholder="Instagram" />
            <i style={{ color: "#E1306C" }} className="fab fa-instagram "></i>
          </div>
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

export default ProfileForm;
