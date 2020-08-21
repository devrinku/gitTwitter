import React, { Fragment, useEffect } from "react";
import Modal from "./../Modal";

import { connect } from "react-redux";
import { hideSideDrawer } from "./../../actions/utils";
import { hideBackDrop } from "./../../actions/utils";
import { hideModal } from "./../../actions/utils";
import Preloader from "./../Preloader";
import spinner from "./../../images/25C.gif";

const Notifications = ({
  hideBackDrop,
  notifications,
  hideModal,
  hideSideDrawer,
}) => {
  useEffect(() => {
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
        notifications.length > 0 ? (
          <Fragment>
            {" "}
            <div className="modal-heading fw-500 small">
              <div className="like-heading">
                Notifications
                <a onClick={close} href="#!">
                  <i className="fas fa-times-circle"></i>
                </a>
              </div>
            </div>
            <div className="likes-container">
              {notifications.length > 0 &&
                notifications.map((person) => (
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
        ) : (
          <Fragment>
            <div className="modal-heading fw-500 small">
              <div className="like-heading">Notifications</div>
            </div>
            <div className="likes-container">
              <p className="small fw-500">There are no notifications</p>
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

  hideModal,
})(Notifications);
