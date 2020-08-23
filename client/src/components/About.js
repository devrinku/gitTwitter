import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="padding-top">
      <main className="my-2"></main>
      <div className="container">
        <p className="medium fw-500">About Us</p>
        <p className="small fw-500 my">
          Gitweet helps to connect with other developers and share work
        </p>
        <p className="fw-500">Version 1.0.1</p>
        <p className="my-1">
          <Link className="btn" to="/">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default About;
