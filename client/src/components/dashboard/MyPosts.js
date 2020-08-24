import React, { Fragment, useEffect } from "react";
import { getMyPosts } from "./../../actions/post";
import { clearmyPost } from "./../../actions/post";
import { setHelperTrue } from "./../../actions/post";
import CreatePost from "./CreatePost";
import Preloader from "./../Preloader";

import spinner from "./../../images/25C.gif";
import { connect } from "react-redux";

import Post from "./Post";
const MyPosts = ({
  post: { myPosts, helper },
  getMyPosts,
  loggedUser,
  setHelperTrue,
  myprofile,
  clearmyPost,
  auth: { user },
}) => {
  useEffect(() => {
    getMyPosts(myprofile._id);
    return () => {
      clearmyPost();
      setHelperTrue();
    };

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

        {helper ? (
          <div className="container">
            <div className="my-1 text-center ">
              <Preloader spinner={spinner} />
            </div>
          </div>
        ) : loggedUser ? (
          myPosts.length === 0 ? (
            <p style={{ padding: "0.5rem" }} className="fw-500 ">
              No Posts.
            </p>
          ) : (
            myPosts.map((text) => (
              <Post key={text._id} text={text} postOwner={user} />
            ))
          )
        ) : myPosts.length === 0 ? (
          <p style={{ padding: "0.5rem" }} className="fw-500 ">
            No Posts.
          </p>
        ) : (
          myPosts.map((text) => (
            <Post key={text._id} text={text} postOwner={myprofile.user} />
          ))
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, {
  getMyPosts,
  clearmyPost,
  setHelperTrue,
})(MyPosts);
