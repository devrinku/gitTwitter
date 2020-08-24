import React, { useEffect, Fragment } from "react";
import { getAllPosts } from "./../../actions/post";
import CreatePost from "./CreatePost";
import { setHelperTrue } from "./../../actions/post";
import { connect } from "react-redux";
import Preloader from "./../Preloader";

import spinner from "./../../images/25C.gif";
import Post from "./Post";

const Home = ({
  getAllPosts,
  myprofile,
  setHelperTrue,
  post: { posts, helper },
}) => {
  useEffect(() => {
    getAllPosts();
    return () => {
      setHelperTrue();
    };
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div className="mid-container padding-top">
        <div className="my teal">
          <span className="pencil fw-500 ">
            <i className="fas fa-blog mx"></i>Home
          </span>
        </div>
        <CreatePost myprofile={myprofile} />
        {helper ? (
          <div className="container">
            <div className="my-1 text-center">
              <Preloader spinner={spinner} />
            </div>
          </div>
        ) : (
          posts.length > 0 &&
          posts.map((text) => (
            <Post key={text._id} text={text} postOwner={text.user} />
          ))
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
  utils: state.utils,
});
export default connect(mapStateToProps, {
  getAllPosts,
  setHelperTrue,
})(Home);
