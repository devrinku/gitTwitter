import React from "react";
import FriendList from "./FriendList";

import { connect } from "react-redux";

const Followers = ({ profile: { loggedProfile } }) => {
  return (
    <div className="mid-container padding-top">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users mx"></i>Followers
        </span>
      </div>
      {loggedProfile.followers.length > 0 && (
        <FriendList followers={"followers"} />
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps)(Followers);
