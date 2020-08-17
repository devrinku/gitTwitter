import React from "react";
import Moment from "react-moment";
import { showBackDrop } from "./../../actions/utils";
import { likeAPost } from "./../../actions/post";
import { showModal } from "./../../actions/utils";
import { connect } from "react-redux";
import { setBackdropType } from "./../../actions/utils";
import LikeInfo from "./LikeInfo";

const Post = ({
  text,
  postOwner,
  utils,
  auth: { user },

  showBackDrop,
  likeAPost,
  showModal,
  setBackdropType,
}) => {
  const check = (text, user) => {
    const icon = text.likes.filter((like) => like.user === user._id);
    if (icon.length > 0) {
      return <i className="fas fa-thumbs-up"></i>;
    } else {
      return <i className="far fa-thumbs-up"></i>;
    }
  };
  return (
    <div className="post  ">
      <div className="post-info ">
        <div className="post-img">
          <img src={`./../../uploads/${postOwner.image}`} alt="" />
        </div>
        <div className="post-name">
          <p className="my fw-500">{postOwner.name}</p>

          <p>
            <Moment format="YYYY/MM/DD">{text.text.date}</Moment>
          </p>
        </div>
      </div>
      <div className="post-content">{text.text}</div>
      <div className="reaxn">
        <p>
          <a onClick={() => likeAPost(text._id)} href="#!">
            {check(text, user)} {text.likes.length}
          </a>
          {text.likes.length > 0 && (
            <a
              onClick={() => {
                setBackdropType(`likes-${text._id}`);
                showBackDrop();
                showModal();
              }}
              href="#!"
              className="x-small btn mx">
              <i className="fas fa-binoculars"></i>
            </a>
          )}
        </p>
        <p>
          <a href="#!">
            <i className="fas fa-comment-alt mx"></i>
            {text.comments.length}
          </a>
        </p>
      </div>
      {utils.backdrop &&
        utils.modal &&
        utils.backdropType === `likes-${text._id}` && (
          <LikeInfo currentPost={text} />
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  utils: state.utils,
  auth: state.auth,
});
export default connect(mapStateToProps, {
  showModal,
  showBackDrop,
  likeAPost,
  setBackdropType,
})(Post);
