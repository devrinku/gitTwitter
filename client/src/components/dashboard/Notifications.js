import React, { Fragment, useEffect } from "react";
import Modal from "./../Modal";
import { getLikeCredentials } from "./../../actions/post";
import { clearLikes } from "./../../actions/post";
import { connect } from "react-redux";
import { hideSideDrawer } from "./../../actions/utils";
import { hideBackDrop } from "./../../actions/utils";
import { hideModal } from "./../../actions/utils";
import Preloader from "./../Preloader";
import spinner from "./../../images/25C.gif";

const Notifications = ({
  hideBackDrop,
  getLikeCredentials,
  hideModal,
  hideSideDrawer,
  clearLikes,
  currentPost,
  post: { likesInfo },
}) => {
  useEffect(() => {
    getLikeCredentials(currentPost._id);
    return () => {
      clearLikes();
    };
    //eslint-disable-next-line
  }, []);
  const close = () => {
    hideBackDrop();
    hideModal();
    if (window.innerWidth < 768) {
      hideSideDrawer();
    }
  };
  return (
    <Modal
      content={
        likesInfo === null ? (
          <div style={{ padding: "1rem" }} className="text-center">
            <Preloader spinner={spinner} />
          </div>
        ) : (
          <Fragment>
            <div className="modal-heading fw-500 small">
              <div className="like-heading">
                Likes
                <a onClick={close} href="#!">
                  <i className="fas fa-times-circle"></i>
                </a>
              </div>
            </div>
            <div className="likes-container">
              {likesInfo.length > 0 &&
                likesInfo.map((person) => (
                  <div key={person._id} className="likes">
                    <div className="like-image">
                      <img
                        src={`/./../../uploads/${person.user.image}`}
                        alt=""
                      />
                    </div>
                    <div className="like-info my">
                      <p className=" fw-500"> {person.user.name}</p>
                      <p>{person.status}</p>
                      <p> {person.hometown}</p>
                    </div>
                  </div>
                ))}
            </div>
          </Fragment>
        )
      }
      top={true}
      style={{ color: "black" }}
      index={90}></Modal>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, {
  hideSideDrawer,
  hideBackDrop,
  getLikeCredentials,
  clearLikes,
  hideModal,
})(Notifications);
