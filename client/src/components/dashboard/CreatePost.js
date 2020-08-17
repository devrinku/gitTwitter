import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createPost } from "./../../actions/post";
import { unsetProgress } from "./../../actions/profile";
const CreatePost = ({
  createPost,
  myprofile,
  unsetProgress,
  profile: { progress },
}) => {
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
        createPost(post, myprofile._id);
        setPost({ ...post, text: "" });
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
          value={progress === true ? "Creating Post..." : "Create Post"}
        />
      </div>
    </form>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { createPost, unsetProgress })(
  CreatePost
);
