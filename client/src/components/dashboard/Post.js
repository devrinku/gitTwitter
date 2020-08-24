import React from "react";
import Moment from "react-moment";
import Modal from "./../Modal";
import { showBackDrop } from "./../../actions/utils";
import { likeAPost } from "./../../actions/post";
import { deleteAPost } from "./../../actions/post";
import { clearCurrentPost } from "./../../actions/post";
import { setCurrentPost } from "./../../actions/post";
import { showModal } from "./../../actions/utils";
import { connect } from "react-redux";
import { setBackdropType } from "./../../actions/utils";
import LikeInfo from "./LikeInfo";
import { Link, useLocation } from "react-router-dom";

const Post = ({
  text,
  postOwner,
  deleteAPost,
  setCurrentPost,
  utils,
  auth: { user },
  showBackDrop,
  likeAPost,
  clearCurrentPost,
  showModal,
  setBackdropType,
}) => {
  const location = useLocation();
  const showBinacular = (text, user) => {
    const icon = text.likes.filter((like) => like.user === user._id);
    if (icon.length > 0) {
      return <i className="fas fa-thumbs-up"></i>;
    } else {
      return <i className="far fa-thumbs-up"></i>;
    }
  };

  const postLinks = (text, user) => {
    if (text.user._id === user._id) {
      return (
        <div className="post-links small ">
          <a
            onClick={() => {
              clearCurrentPost();
              setBackdropType(`post-${text._id}`);
              showBackDrop();
              showModal();
            }}
            href="#!">
            <i className="fas fa-trash mx-1"></i>
          </a>
          <a onClick={() => setCurrentPost(text)} href="#!">
            <i style={{ color: "teal" }} className="fas fa-edit px"></i>
          </a>
        </div>
      );
    }
  };

  return (
    <div className="post  ">
      <div className="post-info ">
        <div className="post-img">
          <img src={`/./../../uploads/${postOwner.image}`} alt="" />
        </div>
        <div className="post-name">
          <p style={{ textTransform: "capitalize" }} className="my fw-500">
            {postOwner.name}
          </p>

          <p>
            Posted on <Moment format="DD/MM/YYYY">{text.text.date}</Moment>
          </p>
        </div>
        {(location.pathname === "/dashboard/posts" ||
          location.pathname === "/dashboard/home") &&
          postLinks(text, user)}
      </div>
      <div className="post-content">{text.text}</div>
      <div className="reaxn">
        <p>
          <a onClick={() => likeAPost(text._id)} href="#!">
            {showBinacular(text, user)} {text.likes.length}
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
          <Link to={`/dashboard/posts/${text._id}/comments`}>
            <i className="fas fa-comment-alt mx"></i>
            {text.comments.length}
          </Link>
        </p>
      </div>
      {utils.backdrop &&
        utils.modal &&
        utils.backdropType === `likes-${text._id}` && (
          <LikeInfo currentPost={text} />
        )}
      {utils.backdrop &&
        utils.modal &&
        utils.backdropType === `post-${text._id}` && (
          <Modal warn={true} index={90} action="delete this post">
            <a
              href="#!"
              onClick={() => deleteAPost(text._id)}
              style={{ color: "white" }}
              className="btn orange">
              Confirm
            </a>
          </Modal>
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
  deleteAPost,
  setCurrentPost,
  setBackdropType,
  clearCurrentPost,
})(Post);
