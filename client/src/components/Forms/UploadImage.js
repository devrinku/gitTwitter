import React from "react";

const UploadImage = () => {
  return (
    <div className="container">
      <div className="my ">
        <span className="teal pencil fw-500 ">
          <i className="fas fa-camera mx"></i>Upload a profile image.
        </span>
        <br />
      </div>
      <form className="education-form ">
        <div className="input-field">
          <input type="file" name="" placeholder="Description" id="" />
          <input className="btn block" type="submit" value="Upload" />
        </div>
      </form>
    </div>
  );
};

export default UploadImage;
