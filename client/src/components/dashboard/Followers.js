import React from "react";
import FriendList from "./FriendList";

const Followers = ({ myprofile }) => {
  return (
    <div className="mid-container padding-top">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users mx"></i>Followers
        </span>
      </div>
      <FriendList myprofileFollowers={myprofile} followers={"followers"} />
    </div>
  );
};

export default Followers;
