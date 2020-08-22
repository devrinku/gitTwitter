import React, { Fragment, useEffect } from "react";
import { getMyPosts } from "./../../actions/post";
import CreatePost from "./CreatePost";
import { connect } from "react-redux";

import Post from "./Post";
const MyPosts = ({
  post: { myPosts },
  getMyPosts,
  loggedUser,
  myprofile,
  auth: { user },
}) => {
  useEffect(() => {
    getMyPosts(myprofile._id);
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div
        className={
          "mid-container " + (loggedUser === true ? "padding-top" : " ")
        }>
        <div className="my teal">
          <span className="pencil fw-500 ">
            <i className="fas fa-blog mx"></i>Posts
          </span>
        </div>
        {loggedUser && <CreatePost myprofile={myprofile} />}
        {myPosts.length === 0 && loggedUser === false && (
          <p className="fw-500 px">No Posts.</p>
        )}
        {myPosts.length > 0 &&
          myPosts.map((text) => (
            <Post key={text._id} text={text} postOwner={user} />
          ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, { getMyPosts })(MyPosts);
