import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createPost } from "./../../actions/post";
import { updatePost } from "./../../actions/post";
import { clearCurrentPost } from "./../../actions/post";
import { unsetProgress } from "./../../actions/profile";
const CreatePost = ({
  createPost,
  myprofile,
  updatePost,
  clearCurrentPost,
  post: { currentPost },
  unsetProgress,
  profile: { progress },
}) => {
  useEffect(() => {
    if (currentPost) {
      setPost(currentPost);
    } else {
      setPost({ ...post, text: "" });
    }
  }, [currentPost]);
  useEffect(() => {
    return () => {
      unsetProgress();
    };
    //eslint-disable-next-line
  }, []);
  const [post, setPost] = useState({
    text: "",
  });
  const { text } = post;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (currentPost) {
          updatePost(post, currentPost._id);
          setPost({ ...post, text: "" });
        } else {
          createPost(post, myprofile._id);
          setPost({ ...post, text: "" });
        }
      }}
      className="create-post px">
      <textarea
        onChange={(e) => setPost({ ...post, text: e.target.value })}
        type="text"
        value={text}
        placeholder="Create a Post"></textarea>
      <div className="my-1">
        <input
          disabled={progress === true ? true : false}
          style={progress === true ? { background: "red" } : {}}
          type="submit"
          className="btn block "
          value={
            progress === true
              ? currentPost
                ? "Updating Post..."
                : "Creating Post..."
              : currentPost
              ? "Update Post"
              : "Create Post"
          }
        />
      </div>
      {currentPost && (
        <div className="my-1">
          <a
            onClick={clearCurrentPost}
            href="#!"
            disabled={progress === true ? true : false}
            style={{ background: "grey", textAlign: "center" }}
            className="btn block ">
            Don't Update
          </a>
        </div>
      )}
    </form>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profile,
  post: state.post,
});
export default connect(mapStateToProps, {
  createPost,
  unsetProgress,
  updatePost,
  clearCurrentPost,
})(CreatePost);
