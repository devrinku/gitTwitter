import React, { Fragment, useEffect } from "react";
import { unsetProgress } from "./../../actions/profile";
import { clearANotification } from "./../../actions/profile";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { clearNotifications } from "./../../actions/profile";

import Preloader from "./../Preloader";
import spinner from "./../../images/25C.gif";

const Notifications = ({
  clearNotifications,
  profile: { notifyUsers, loggedProfile, progress },
  clearANotification,
  unsetProgress,
}) => {
  useEffect(() => {
    return () => {
      unsetProgress();
    };
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="mid-container padding-top">
        <div className="my teal">
          <span className="pencil fw-500 ">
            <i className="fas fa-bell mx"></i>Notifications
          </span>
        </div>{" "}
        {notifyUsers === null ? (
          <div style={{ padding: "1rem" }} className="text-center">
            <Preloader spinner={spinner} />
          </div>
        ) : loggedProfile.notifications.length > 0 ? (
          <Fragment>
            {" "}
            <p className="my-1">
              {" "}
              <a
                href="#!"
                style={progress === true ? { background: "red" } : {}}
                onClick={() => clearNotifications(loggedProfile._id)}
                className="btn mx py">
                {progress === true
                  ? "Clearing Notifications..."
                  : "Clear Notifications"}
              </a>
            </p>
            {notifyUsers.map((person) => (
              <Link
                onClick={() =>
                  clearANotification(person.notificationId, loggedProfile._id)
                }
                style={{ display: "block" }}
                key={uuidv4()}
                to={
                  person.type === "liked" || person.type === "commented on"
                    ? `/dashboard/posts/${person.resourceId}/comments`
                    : `/dashboard/profile/${person.resourceId}`
                }>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",

                    padding: "0",
                  }}
                  className="post  ">
                  <div style={{ padding: "0.6rem" }} className="post-info ">
                    <div className="post-img">
                      <img
                        src={`/./../../uploads/${person.user.image}`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="post-content">
                    <span className="fw-500">
                      {person.user.name.charAt(0).toUpperCase() +
                        person.user.name.slice(1)}{" "}
                    </span>
                    {person.type === "liked" ||
                    person.type === "commented on" ? (
                      <Fragment>{person.type} your post</Fragment>
                    ) : (
                      <Fragment>started {person.type} you</Fragment>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </Fragment>
        ) : (
          <p className="small fw-500 px">There is no new notification</p>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  clearNotifications,
  clearANotification,
  unsetProgress,
})(Notifications);
