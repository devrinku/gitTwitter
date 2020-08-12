import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showSideDrawer } from "./../actions/utils";
import { showBackDrop } from "./../actions/utils";
import { hideBackDrop } from "./../actions/utils";
import { hideSideDrawer } from "./../actions/utils";
import { setBackdropType } from "./../actions/utils";
import { showModal } from "./../actions/utils";
import { hideModal } from "./../actions/utils";
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
  logout,
}) => {
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
      <li>
        <a href="#!">
          <i className="fas fa-bell"></i>
        </a>
      </li>
      <li>
        <span className="divider small">|</span>
      </li>
      <li>
        <a href="#!">
          <i className="fas fa-home"></i>
        </a>
      </li>

      <li>
        <span className="divider small">|</span>
      </li>
      <li>
        <Link to="/dashboard/profile">
          <i className="fas fa-user"></i>
        </Link>
      </li>
      <li>
        <span className="divider small">|</span>
      </li>
      <li>
        <Link to="#!">
          <i className="fas fa-plus-circle"></i>
        </Link>
      </li>
      <li>
        <span className="divider small">|</span>
      </li>
      <li>
        <a
          onClick={() => {
            setBackdropType("nav-logout");
            showBackDrop();
            showModal();
          }}
          href="#!">
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </li>
    </Fragment>
  );
  const authLinks = (
    <Fragment>
      <li>
        <a href="#!">Login</a>
      </li>
      <li>
        <span className="divider small">|</span>
      </li>
      <li>
        <a href="#!">Register</a>
      </li>
      <li>
        <span className="divider small">|</span>
      </li>
      <li>
        <Link to="/dashboard/profile">Enter as guest</Link>
      </li>
    </Fragment>
  );
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper">
          <div className="left-nav">
            <Link to="/" style={{ fontSize: "2.1rem" }} className=" fw-700 ">
              <i
                style={{ color: "teal" }}
                className="fab fa-github-alt mx "></i>
            </Link>
            {isLoggedIn === true && loadingAuth === false ? (
              <Fragment>
                <p>
                  <input
                    type="text"
                    placeholder="ser"
                    className="search-bar"
                    name=""
                    id=""
                  />
                </p>
                <p>
                  <a
                    style={{ height: "2.5rem", fontSize: "initial" }}
                    className="btn mx"
                    href="#!">
                    <i className="fas fa-search"></i>
                  </a>
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <Link
                  to="/"
                  style={{ fontSize: "2.1rem" }}
                  className=" fw-700 ">
                  <span> Git</span>
                  <span style={{ color: "teal" }}>Tweet</span>
                </Link>
              </Fragment>
            )}
          </div>
          <ul className="right-nav">
            {utils.menubar && (
              <Fragment>
                <li className="hide ">
                  <a onClick={onClick} href="#!">
                    <i className="fas fa-bars small "></i>
                  </a>
                </li>
                <li className="hide">
                  <span className="divider small">|</span>
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
        <Modal style={{ color: "black" }} index={90} action="logout">
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
})(Navbar);
