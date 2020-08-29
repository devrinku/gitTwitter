import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { showSideDrawer } from "./../actions/utils";
import { showBackDrop } from "./../actions/utils";
import { hideBackDrop } from "./../actions/utils";
import { hideSideDrawer } from "./../actions/utils";
import { setBackdropType } from "./../actions/utils";
import { showModal } from "./../actions/utils";
import { hideModal } from "./../actions/utils";
import { notifyUsers } from "./../actions/profile";

import { logout } from "./../actions/auth";
import Modal from "./Modal";

const Navbar = ({
  utils,
  auth: { loadingAuth, isLoggedIn },
  showSideDrawer,
  showBackDrop,

  showModal,
  hideBackDrop,
  hideSideDrawer,
  hideModal,
  setBackdropType,
  notifyUsers,
  logout,
  profile: { loggedProfile },
}) => {
  const location = useLocation();

  const onClick = () => {
    if (utils.sideDrawer === false) {
      showSideDrawer();
      setBackdropType("sideNav");
      showBackDrop();
    } else {
      hideSideDrawer();
      setBackdropType("sideNav");
      hideBackDrop();
    }
  };

  const guestLinks = (
    <Fragment>
      {loggedProfile !== null && (
        <Fragment>
          <li
            className={
              location.pathname === "/dashboard/notifications" ? "active" : ""
            }>
            <Link
              className="bell"
              to="/dashboard/notifications"
              onClick={() => {
                notifyUsers(loggedProfile.notifications, loggedProfile._id);
              }}
              style={
                loggedProfile &&
                loggedProfile.notifications &&
                loggedProfile.notifications.length > 0
                  ? { color: "red", fontSize: "1.5rem" }
                  : {}
              }
              href="#!">
              <i className="fas fa-bell notifyme"></i>
            </Link>
          </li>
          <li>
            <span className="divider ">|</span>
          </li>
          <li
            className={location.pathname === "/dashboard/home" ? "active" : ""}>
            <Link to="/dashboard/home">
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li>
            <span className="divider ">|</span>
          </li>{" "}
          <li
            className={
              location.pathname === "/dashboard/profile" ? "active" : ""
            }>
            <Link to="/dashboard/profile">
              <i className="fas fa-user"></i>
            </Link>
          </li>
          <li>
            <span className="divider ">|</span>
          </li>
        </Fragment>
      )}
      <li>
        <a
          onClick={() => {
            setBackdropType("nav-logout");
            showBackDrop();
            showModal();
          }}
          href="#!">
          {loggedProfile === null ? (
            "Logout"
          ) : (
            <i className="fas fa-sign-out-alt"></i>
          )}
        </a>
      </li>
    </Fragment>
  );
  const authLinks = (
    <Fragment>
      <li className={location.pathname === "/login" ? "active" : ""}>
        <Link to={loadingAuth ? "#!" : "/login"}>Login</Link>
      </li>
      <li>
        <span className="divider ">|</span>
      </li>
      <li className={location.pathname === "/register" ? "active" : ""}>
        <Link to={loadingAuth ? "#!" : "/register"}>Register</Link>
      </li>
      <li>
        <span className="divider ">|</span>
      </li>
      <li className={location.pathname === "/about" ? "active" : ""}>
        <Link to="/about">About</Link>
      </li>
    </Fragment>
  );
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper">
          <div className="left-nav ">
            <Link to="/" className="logo fw-700 ">
              <i
                style={{ color: "teal" }}
                className="fab fa-github-alt mx "></i>
            </Link>
            {isLoggedIn === true &&
            loggedProfile !== null &&
            loadingAuth === false ? (
              <Fragment>
                <p>
                  <Link
                    style={{ fontSize: "1rem" }}
                    to="/dashboard/search"
                    type="text"
                    placeholder="Search a developer"
                    className="search-bar btn text-center ">
                    Search a developer
                  </Link>
                </p>
                <p></p>
              </Fragment>
            ) : (
              <Fragment>
                <Link to="/" className=" fw-700 logo">
                  <span> Git</span>
                  <span style={{ color: "teal" }}>Tweet</span>
                </Link>
              </Fragment>
            )}
          </div>
          <ul className="right-nav ">
            {utils.menubar && loggedProfile !== null && (
              <Fragment>
                <li className="hide ">
                  <a onClick={onClick} href="#!">
                    <i className="fas fa-bars  "></i>
                  </a>
                </li>
                <li className="hide">
                  <span className="divider ">|</span>
                </li>
              </Fragment>
            )}
            {isLoggedIn === true && loadingAuth === false
              ? guestLinks
              : authLinks}
          </ul>
        </div>
      </nav>
      {utils.backdrop && utils.modal && utils.backdropType === "nav-logout" && (
        <Modal
          warn={true}
          style={{ color: "black" }}
          index={90}
          action="logout">
          <a
            onClick={() => {
              logout();
              hideBackDrop();
              hideModal();
            }}
            style={{ color: "white" }}
            href="#!"
            className="btn orange">
            Confirm
          </a>
        </Modal>
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  utils: state.utils,
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, {
  showSideDrawer,
  showBackDrop,
  hideBackDrop,
  hideSideDrawer,
  setBackdropType,
  logout,
  hideModal,
  showModal,

  notifyUsers,
})(Navbar);
