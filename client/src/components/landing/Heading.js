import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="container">
      <div className="text-center heading">
        <p className="large fw-700 ">Make Friends While Code.</p>
        <p className="pencil fw-700 my-1">
          Create a developer profile/portfolio, share posts and get help from
          other developers.
        </p>
        <div>
          <Link to="/register" className="btn mx-1">
            SignUp
          </Link>
          <Link
            style={{ backgroundColor: "white", color: "black" }}
            to="/login"
            className="btn white black-text">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;
