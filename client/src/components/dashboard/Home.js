import React, { useEffect, Fragment } from "react";
import { getAllPosts } from "./../../actions/post";
import CreatePost from "./CreatePost";
import { connect } from "react-redux";
import Post from "./Post";

const Home = ({ getAllPosts, myprofile, post: { posts } }) => {
  useEffect(() => {
    getAllPosts();
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
        {posts.length > 0 &&
          posts.map((text) => (
            <Post key={text._id} text={text} postOwner={text.user} />
          ))}
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
})(Home);
