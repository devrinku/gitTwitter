import React, { useEffect } from "react";
import user from "./../../images/1.jpg";
import { getFriends } from "./../../actions/profile";
import { connect } from "react-redux";
const FriendList = ({ followers, followings, profile, getFriends }) => {
  useEffect(() => {
    if (followers) {
      getFriends(profile.loggedProfile._id, followers);
    }
    if (followings) {
      getFriends(profile.loggedProfile._id, followings);
    }
    //eslint-disable-next-line
  }, []);
  return (
    <ul>
      {followers
        ? profile.followers.length > 0 &&
          profile.followers.map((follower) => (
            <li key={follower._id} className="follower border-div ">
              <div>
                <img src={user} alt="" />
              </div>
              <div className="info">
                <p>{follower.user.name}</p>
                <p>{follower.status}</p>
                <p>{follower.hometown}</p>
              </div>
            </li>
          ))
        : profile.followings.length > 0 &&
          profile.followings.map((following) => (
            <li key={following._id} className="follower border-div ">
              <div>
                <img src={user} alt="" />
              </div>
              <div className="info">
                <p>{following.user.name}</p>
                <p>{following.status}</p>
                <p>{following.hometown}</p>
              </div>
            </li>
          ))}
    </ul>
  );
};
const mapStateToprops = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToprops, { getFriends })(FriendList);
