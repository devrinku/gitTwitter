import React from "react";
import FriendList from "./FriendList";

import { connect } from "react-redux";
const Followings = ({ profile: { loggedProfile } }) => {
  return (
    <div className="mid-container padding-top">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users mx"></i>Followings
        </span>
      </div>
      {loggedProfile.followings.length > 0 && (
        <FriendList followings={"followings"} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps)(Followings);
