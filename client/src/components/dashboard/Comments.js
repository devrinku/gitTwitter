import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { getAPost } from "./../../actions/post";
import { clearAPost } from "./../../actions/post";
import { addComment } from "./../../actions/post";
import { deleteComment } from "./../../actions/post";
import Modal from "./../Modal";
import { showBackDrop } from "./../../actions/utils";
import { showModal } from "./../../actions/utils";
import { setBackdropType } from "./../../actions/utils";
import { unsetProgress } from "./../../actions/profile";
import { unsetFetch } from "./../../actions/auth";
import { connect } from "react-redux";
import Post from "./Post";
import Moment from "react-moment";

const Comments = ({
  getAPost,
  post: { singlePost },
  unsetFetch,
  unsetProgress,
  clearAPost,
  deleteComment,
  addComment,
  showBackDrop,
  setBackdropType,
  utils,
  showModal,
  profile: { progress },
  auth: { user, fetch },
}) => {
  const [comment, setComment] = useState({
    text: "",
  });
  const { text } = comment;
  const { id } = useParams();
  useEffect(() => {
    getAPost(id);
    return () => {
      clearAPost();
      unsetFetch();
      unsetProgress();
    };
  }, []);

  return (
    singlePost && (
      <Fragment>
        {" "}
        <div className="padding-top mid-container">
          <Post text={singlePost} postOwner={singlePost.user} />
          <div className="badge  badge-comment">Leave a comment</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addComment(comment, id);
              setComment({ ...comment, text: "" });
            }}
            className="create-post px">
            <textarea
              value={text}
              onChange={(e) => setComment({ ...comment, text: e.target.value })}
              type="text"
              placeholder="Post a comment"></textarea>
            <div>
              <input
                type="submit"
                style={progress === true ? { background: "red" } : {}}
                value={progress === true ? "Posting your comment..." : "Post"}
                className="btn  "
              />
            </div>
          </form>
          {singlePost.comments &&
            singlePost.comments.length > 0 &&
            singlePost.comments.map((comment) => (
              <div key={comment._id} className="post  ">
                <div className="post-info ">
                  <div className="post-img">
                    <img
                      src={`/./../../uploads/${comment.user.image}`}
                      alt=""
                    />
                  </div>
                  <div className="post-name">
                    <p className="my fw-500">{comment.user.name}</p>

                    <p>
                      <Moment format="DD/MM/YYYY">{comment.date}</Moment>
                    </p>
                  </div>
                </div>
                <div
                  style={{ borderBottom: "1px solid grey" }}
                  className="post-content ">
                  {comment.text}
                </div>
                {comment.user._id === user._id && (
                  <div className="py">
                    <a
                      onClick={() => {
                        setBackdropType(`comment-${comment._id}`);
                        showBackDrop();
                        showModal();
                      }}
                      href="#!"
                      style={{ margin: "0px 1rem", background: "red" }}
                      type="submit"
                      className="btn ">
                      Delete
                    </a>
                  </div>
                )}
                {utils.backdrop &&
                  utils.modal &&
                  utils.backdropType === `comment-${comment._id}` && (
                    <Modal warn={true} index={90} action="delete this comment">
                      <a
                        href="#!"
                        onClick={() =>
                          deleteComment(singlePost._id, comment._id)
                        }
                        style={{ color: "white" }}
                        className="btn orange">
                        Confirm
                      </a>
                    </Modal>
                  )}
              </div>
            ))}
        </div>
      </Fragment>
    )
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
  profile: state.profile,
  utils: state.utils,
});
export default connect(mapStateToProps, {
  getAPost,
  clearAPost,
  unsetProgress,
  unsetFetch,
  deleteComment,
  addComment,
  showBackDrop,
  setBackdropType,
  showModal,
})(Comments);
