import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showSideDrawer } from "./../actions/utils";
import { showBackDrop } from "./../actions/utils";
import { hideBackDrop } from "./../actions/utils";
import { hideSideDrawer } from "./../actions/utils";

const Navbar = ({
  utils,
  showSideDrawer,
  showBackDrop,
  hideBackDrop,
  hideSideDrawer,
}) => {
  const onClick = () => {
    if (utils.sideDrawer === false) {
      showSideDrawer();
      showBackDrop();
    } else {
      hideSideDrawer();
      hideBackDrop();
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="left-nav">
          <Link to="/" style={{ fontSize: "2.1rem" }} className=" fw-700 ">
            <i className="fab fa-github-alt mx orange"></i>
            Git<span className="orange">Tweet</span>
          </Link>
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
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => ({
  utils: state.utils,
});
export default connect(mapStateToProps, {
  showSideDrawer,
  showBackDrop,
  hideBackDrop,
  hideSideDrawer,
})(Navbar);
