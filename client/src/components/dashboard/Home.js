import React, { useEffect } from "react";
import { getAllPosts } from "./../../actions/post";
import Moment from "react-moment";
import { connect } from "react-redux";
import Modal from "./../Modal";
import { showBackDrop } from "./../../actions/utils";
import { showModal } from "./../../actions/utils";
import { setBackdropType } from "./../../actions/utils";
import FriendList from "./FriendList";
const Home = ({
  getAllPosts,
  post: { posts },
  showBackDrop,
  showModal,
  setBackdropType,
  utils,
}) => {
  useEffect(() => {
    getAllPosts();
    //eslint-disable-next-line
  }, []);
  return (
    posts !== null &&
    posts.length > 0 && (
      <div className="mid-container padding-top">
        {posts.map((text) => (
          <div key={text._id} className="post  ">
            <div className="post-info ">
              <div className="post-img">
                <img src={`./../../uploads/${text.user.image}`} alt="" />
              </div>
              <div className="post-name">
                <p className="my fw-500">{text.user.name}</p>

                <p>
                  <Moment format="YYYY/MM/DD">{text.text.date}</Moment>
                </p>
              </div>
            </div>
            <div className="post-content">{text.text}</div>
            <div className="reaxn">
              <p>
                <a href="#!">
                  <i className="fas fa-thumbs-up mx"></i>
                  {text.likes.length}
                </a>{" "}
                <a
                  onClick={() => {
                    setBackdropType(`likes-${text._id}`);
                    showBackDrop();
                    showModal();
                  }}
                  href="#!"
                  className="x-small btn ">
                  <i className="fas fa-binoculars"></i>
                </a>
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
                <Modal
                  content={<FriendList />}
                  top={true}
                  style={{ color: "black" }}
                  index={90}></Modal>
              )}
          </div>
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
  showModal,
  showBackDrop,
  setBackdropType,
})(Home);
