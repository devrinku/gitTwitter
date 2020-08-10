import React from "react";
import user from "./../../images/1.jpg";

const Followers = () => {
  return (
    <div className="mid-container padding-top">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users mx"></i>Followers
        </span>
      </div>
      <ul>
        <li className="follower border-div ">
          <div>
            <img src={user} alt="" />
          </div>
          <div className="info">
            <p>Rajesh</p>
            <p>Senior Developer</p>
            <p>Location</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Followers;
