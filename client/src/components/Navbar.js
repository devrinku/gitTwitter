import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="left-nav">
          <Link to="/" style={{ fontSize: "2.1rem" }} className=" fw-700 ">
            <i className="fab fa-github-alt mx orange"></i>
            Git<span className="orange">Tweet</span>
          </Link>
        </div>
        <ul className="right-nav">
          <li>
            <a href="#!">Login</a>
          </li>
          <li className="mx">
            <span className="small">|</span>
          </li>
          <li>
            <a href="#!">Register</a>
          </li>
          <li className="mx">
            <span className="small">|</span>
          </li>
          <li>
            <a href="#!">Enter as guest</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
