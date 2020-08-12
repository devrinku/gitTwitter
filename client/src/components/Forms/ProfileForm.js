import React, { useState, Fragment } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProfile } from "./../../actions/profile";

const ProfileForm = ({ createProfile, history }) => {
  const History = useHistory();
  const [profileData, setProfileData] = useState({
    company: "",
    website: "",
    status: "",
    skills: "",
    bio: "",
    githubusername: "",
    github: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    hometown: "",
    currentcity: "",
  });
  const {
    company,
    website,
    status,
    skills,
    bio,
    githubusername,
    github,
    twitter,
    facebook,
    linkedin,
    instagram,
    hometown,
    currentcity,
  } = profileData;
  const [socialLinks, socialLinksHandler] = useState(false);
  const onChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(profileData, history);
  };
  return (
    <div className="container">
      <div className="my ">
        <span className="teal pencil fw-500 ">
          <i className="fas fa-user mx"></i>Create a Profile
        </span>
        <br />
        <span className="mx">* = required Field.</span>
      </div>
      <form onSubmit={(e) => onSubmit(e)} className="education-form ">
        <div className="input-field">
          <input
            type="text"
            onChange={(e) => onChange(e)}
            value={hometown}
            name="hometown"
            placeholder="* Hometown"
          />
          <span className="x-small ">Your hometown.</span>
        </div>
        <div className="input-field">
          <input
            onChange={(e) => onChange(e)}
            type="text"
            value={currentcity || ""}
            name="currentcity"
            placeholder="Current City"
          />
          <span className="x-small ">Your current City.</span>
        </div>

        <div className="input-field">
          <input
            onChange={(e) => onChange(e)}
            name="status"
            value={status}
            type="text"
            placeholder="* Professional Status"
          />
          <span className="x-small ">
            Give us an idea of where you are in your career like junior/senior
            web developer ,experienced,fresher etc.
          </span>
        </div>
        <div className="input-field">
          <input
            onChange={(e) => onChange(e)}
            value={website || ""}
            name="website"
            type="text"
            placeholder=" Personal Website"
          />
          <span className="x-small ">
            Your website address,if you have one.
          </span>
        </div>
        <div className="input-field">
          <input
            onChange={(e) => onChange(e)}
            value={skills}
            name="skills"
            type="text"
            placeholder="* Your Professional Skills"
          />
          <span className="x-small ">
            Use coma to seprate elements like HTML,CSS .
          </span>
        </div>
        <div className="input-field">
          <input
            onChange={(e) => onChange(e)}
            value={bio || ""}
            type="text"
            name="bio"
            placeholder="Bio"
          />
          <span className="x-small ">Tell us something about youself.</span>
        </div>
        <div className="input-field">
          <input
            onChange={(e) => onChange(e)}
            value={githubusername}
            type="text"
            name="githubusername"
            placeholder="* Github Username"
          />
          <span className="x-small ">
            Your name on github,to showcase your your work.
          </span>
        </div>
        <a
          onClick={() => socialLinksHandler(!socialLinks)}
          href="#!"
          className="btn">
          Add Social Links
        </a>
        {socialLinks && (
          <Fragment>
            {" "}
            <div className="social-links">
              <div className="input my-2">
                <input
                  onChange={(e) => onChange(e)}
                  value={github || ""}
                  name="github"
                  type="text"
                  placeholder="Github"
                />
                <i className="fab fa-github"></i>
              </div>
            </div>
            <div className="social-links">
              <div className="input my-2">
                <input
                  onChange={(e) => onChange(e)}
                  value={twitter || ""}
                  name="twitter"
                  type="text"
                  placeholder="Twitter"
                />
                <i
                  style={{ color: "  #00acee" }}
                  className="fab fa-twitter"></i>
              </div>
            </div>
            <div className="social-links">
              <div className="input my-2">
                <input
                  onChange={(e) => onChange(e)}
                  value={facebook || ""}
                  name="facebook"
                  type="text"
                  placeholder="Facebook"
                />
                <i
                  style={{ color: " #3b5998" }}
                  className="fab fa-facebook"></i>
              </div>
            </div>
            <div className="social-links">
              <div className="input my-2">
                <input
                  onChange={(e) => onChange(e)}
                  value={linkedin || ""}
                  name="linkedin"
                  type="text"
                  placeholder="Linkedin"
                />
                <i style={{ color: "#0e76a8" }} className="fab fa-linkedin"></i>
              </div>
            </div>
            <div className="social-links">
              <div className="input my-1">
                <input
                  onChange={(e) => onChange(e)}
                  value={instagram || ""}
                  name="instagram"
                  type="text"
                  placeholder="Instagram"
                />
                <i
                  style={{ color: "#E1306C" }}
                  className="fab fa-instagram "></i>
              </div>
            </div>
          </Fragment>
        )}
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
              onClick={() => History.goBack()}
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

export default connect(null, { createProfile })(withRouter(ProfileForm));
