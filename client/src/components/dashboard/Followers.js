import React from "react";
import FriendList from "./FriendList";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const Followers = ({ myprofile, profile: { otherProfile } }) => {
  const history = useHistory();
  const { profileId } = useParams();

  return (
    <div className="mid-container padding-top">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users mx"></i>
          {history.location.state &&
            history.location.state.from === "dashboard" &&
            "My "}
          Followers{" "}
        </span>
      </div>
      {history.location.state &&
        history.location.state.from === "otherProfile" && (
          <FriendList
            id={profileId}
            myprofileFollowers={otherProfile}
            followers={"followers"}
          />
        )}
      {history.location.state &&
        history.location.state.from === "dashboard" && (
          <FriendList myprofileFollowers={myprofile} followers={"followers"} />
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps)(Followers);
