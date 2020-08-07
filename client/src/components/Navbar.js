import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="left-nav">
          <p>
            <a href="#!">
              <i class="fab fa-github-alt"></i>
            </a>
          </p>
          <div className="logo">
            <a href="#!">GitTweet</a>
          </div>
        </div>
        <ul className="right-nav">
          <li>
            <a href="#!">Login</a>
          </li>
          <li>
            <a href="#!">Register</a>
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
