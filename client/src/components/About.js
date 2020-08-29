import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <div className="about">
        <div className="container">
          <p className="small ">
            Gitweet helps to connect with other developers and share work
          </p>
          <p className="">Version 1.0.1</p>
          <p className="my">
            <Link className="btn" to="/">
              Back
            </Link>
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="left-info">
            <p style={{ fontSize: "1rem" }}>Code and Design by Rajesh</p>
          </div>
          <div className="right-info">
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/devrinku">
                <i className="fab fa-github  "></i>
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/rinku1221995/">
                <i className="fab fa-instagram  "></i>
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/rajesh.pardhan.3/">
                <i className="fab fa-facebook  "></i>
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/Rajeshk29278950">
                <i className="fab fa-twitter  "></i>
              </a>
            </p>
          </div>
        </div>
        <p className="text-center copy">Copyright © 2020 | GitTwitter</p>
      </div>
    </Fragment>
  );
};

export default About;
