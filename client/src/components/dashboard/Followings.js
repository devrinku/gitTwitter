import React from "react";
import user from "./../../images/1.jpg";
const Followings = () => {
  return (
    <div className="mid-container padding-top">
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

export default Followings;
