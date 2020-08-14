import React from "react";
import FriendList from "./FriendList";

const Followings = ({ myprofile }) => {
  return (
    <div className="mid-container padding-top">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users mx"></i>Followings
        </span>
      </div>
      <FriendList myprofileFollowings={myprofile} followings={"followings"} />
    </div>
  );
};

export default Followings;
