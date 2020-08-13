import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { uploadDP } from "./../../actions/auth";

const UploadImage = ({ uploadDP, history }) => {
  const [file, setFile] = useState("");
  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    uploadDP(file, history);
  };
  return (
    <div className="container">
      <div className="my ">
        <span className="teal pencil fw-500 ">
          <i className="fas fa-camera mx"></i>Upload a profile image.
        </span>
        <br />
      </div>
      <form onSubmit={(e) => onSubmit(e)} className="education-form ">
        <div className="input-field">
          <input
            onChange={(e) => onChange(e)}
            type="file"
            placeholder="Description"
          />
          <input className="btn block" type="submit" value="Upload" />
          <Link
            to="/dashboard/profile"
            style={{
              backgroundColor: "grey",
              display: "block",
              textAlign: "center",
            }}
            className="btn block ">
            Skip
          </Link>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { uploadDP })(withRouter(UploadImage));
