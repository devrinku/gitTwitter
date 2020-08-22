import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getFriends } from "./../../actions/profile";
import { clearFollowers } from "./../../actions/profile";
import { clearFollowings } from "./../../actions/profile";
import { connect } from "react-redux";
const FriendList = ({
  followers,
  followings,
  myprofileFollowings,
  myprofileFollowers,
  getFriends,

  clearFollowers,
  clearFollowings,
  profile,
}) => {
  useEffect(() => {
    if (followers) {
      getFriends(myprofileFollowers._id, followers);
    }
    if (followings) {
      getFriends(myprofileFollowings._id, followings);
    }
    return () => {
      clearFollowings();
      clearFollowers();
    };
    //eslint-disable-next-line
  }, []);
  return (
    <ul>
      {followers
        ? profile.followers.length > 0 &&
          profile.followers.map((follower) => (
            <Link
              key={follower._id}
              to={`/dashboard/profile/${follower._id}`}
              style={{ display: "block" }}>
              <li className="follower border-div ">
                <div>
                  <img src={`/./../../uploads/${follower.user.image}`} alt="" />
                </div>
                <div className="info">
                  <p>{follower.user.name}</p>
                  <p>{follower.status}</p>
                  <p>{follower.hometown}</p>
                </div>
              </li>
            </Link>
          ))
        : profile.followings.length > 0 &&
          profile.followings.map((following) => (
            <Link
              key={following._id}
              to={`/dashboard/profile/${following._id}`}
              style={{ display: "block" }}>
              <li className="follower border-div ">
                <div>
                  <img
                    src={`/./../../uploads/${following.user.image}`}
                    alt=""
                  />
                </div>
                <div className="info">
                  <p>{following.user.name}</p>
                  <p>{following.status}</p>
                  <p>{following.hometown}</p>
                </div>
              </li>
            </Link>
          ))}
    </ul>
  );
};
const mapStateToprops = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToprops, {
  getFriends,
  clearFollowings,
  clearFollowers,
})(FriendList);
