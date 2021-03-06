import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getFriends } from "./../../actions/profile";
import { clearFollowers } from "./../../actions/profile";
import { clearFollowings } from "./../../actions/profile";
import Preloader from "./../Preloader";

import spinner from "./../../images/25C.gif";
import { connect } from "react-redux";
const FriendList = ({
  followers,
  followings,
  myprofileFollowings,
  myprofileFollowers,
  getFriends,
  id,
  clearFollowers,
  clearFollowings,
  profile,
}) => {
  useEffect(() => {
    if (followers) {
      if (id) {
        getFriends(id, followers);
      } else {
        getFriends(myprofileFollowers._id, followers);
      }
    }
    if (followings) {
      if (id) {
        getFriends(id, followings);
      } else {
        getFriends(myprofileFollowings._id, followings);
      }
    }
    return () => {
      clearFollowings();
      clearFollowers();
    };
    //eslint-disable-next-line
  }, []);
  return (
    <ul>
      {followers ? (
        profile.followers === null ? (
          <div className="container  ">
            <div className="my-1 text-center">
              <Preloader spinner={spinner} />
            </div>
          </div>
        ) : profile.followers.length === 0 ? (
          <p style={{ padding: "0.5rem" }} className="fw-500 ">
            No Followers yet.
          </p>
        ) : (
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
                  <p style={{ textTransform: "capitalize" }}>
                    {follower.user.name}
                  </p>
                  <p style={{ textTransform: "capitalize" }}>
                    {follower.status}
                  </p>
                  <p style={{ textTransform: "capitalize" }}>
                    {follower.hometown}
                  </p>
                </div>
              </li>
            </Link>
          ))
        )
      ) : profile.followings === null ? (
        <div className="container ">
          <div className="my-1 text-center">
            <Preloader spinner={spinner} />
          </div>
        </div>
      ) : profile.followings.length === 0 ? (
        <p style={{ padding: "0.5rem" }} className="fw-500 ">
          No Followings yet.
        </p>
      ) : (
        profile.followings.map((following) => (
          <Link
            key={following._id}
            to={`/dashboard/profile/${following._id}`}
            style={{ display: "block" }}>
            <li className="follower border-div ">
              <div>
                <img src={`/./../../uploads/${following.user.image}`} alt="" />
              </div>
              <div className="info">
                <p style={{ textTransform: "capitalize" }}>
                  {following.user.name}
                </p>
                <p style={{ textTransform: "capitalize" }}>
                  {following.status}
                </p>
                <p style={{ textTransform: "capitalize" }}>
                  {following.hometown}
                </p>
              </div>
            </li>
          </Link>
        ))
      )}
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
