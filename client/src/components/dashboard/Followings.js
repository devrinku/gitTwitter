import React from "react";
import FriendList from "./FriendList";

const Followings = () => {
  return (
    <div className="mid-container padding-top">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users mx"></i>Followings
        </span>
      </div>
      <FriendList followings={"followings"} />
    </div>
  );
};

export default Followings;
