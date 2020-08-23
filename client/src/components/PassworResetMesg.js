import React from "react";
import { Link } from "react-router-dom";

const PassworResetMesg = () => {
  return (
    <div className="padding-top">
      <div className="container text-center">
        <p className=" teal medium my">
          <i className="fab fa-github-alt"></i>
        </p>
        <div className="forgot-password">
          <p style={{ lineHeight: "1.6rem" }}>
            Check your email for a link to reset your password. If it doesn’t
            appear within a few minutes, check your spam folder.
          </p>
          <p className="my-1">
            <Link className="btn" to="/login">
              Return to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassworResetMesg;
