import React, { useEffect } from "react";
import { getAllPosts } from "./../../actions/post";

import { connect } from "react-redux";
import Post from "./Post";

const Home = ({ getAllPosts, post: { posts } }) => {
  useEffect(() => {
    getAllPosts();
    //eslint-disable-next-line
  }, []);
  return (
    posts.length > 0 && (
      <div className="mid-container padding-top">
        {posts.map((text) => (
          <Post key={text._id} text={text} postOwner={text.user} />
        ))}
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
  utils: state.utils,
});
export default connect(mapStateToProps, {
  getAllPosts,
})(Home);
