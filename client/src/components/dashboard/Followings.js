import React from "react";
import FriendList from "./FriendList";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Followings = ({ myprofile, profile: { otherProfile } }) => {
  const history = useHistory();

  return (
    <div className="mid-container padding-top">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users mx"></i>
          {history.location.state &&
            history.location.state.from === "dashboard" &&
            "My "}
          Followings
        </span>
      </div>
      {history.location.state &&
        history.location.state.from === "otherProfile" && (
          <FriendList
            myprofileFollowings={otherProfile}
            followings={"followings"}
          />
        )}
      {history.location.state &&
        history.location.state.from === "dashboard" && (
          <FriendList
            myprofileFollowings={myprofile}
            followings={"followings"}
          />
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps)(Followings);

// <FriendList myprofileFollowings={myprofile} followings={"followings"} />;
