import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { showSideDrawer } from "./../actions/utils";
import { Link } from "react-router-dom";
import user from "./../images/1.jpg";
import { hideSideDrawer } from "./../actions/utils";
import { hideBackDrop } from "./../actions/utils";
import Backdrop from "./Backdrop";
const SideDrawer = ({
  utils,
  showSideDrawer,
  hideBackDrop,
  hideSideDrawer,
}) => {
  useEffect(() => {
    if (window.innerWidth > 768) {
      showSideDrawer();
    } else {
      hideSideDrawer();
    }
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        showSideDrawer();
        hideBackDrop();
      } else {
        hideSideDrawer();
        hideBackDrop();
      }
    });

    //eslint-disable-next-line
  }, []);
  const onClick = () => {
    if (window.innerWidth < 768) {
      hideSideDrawer();
      hideBackDrop();
    }
  };
  return (
    <Fragment>
      <div
        style={utils.sideDrawer ? { width: "250px" } : { width: "0px" }}
        className="side-drawer">
        <ul>
          <li className="background-img padding-top">
            <img className="user-img" src={user} alt="" />
            <p className="my">rajesh</p>
            <p>rajesh@gmail.com</p>
          </li>
          <li>
            <Link onClick={onClick} to="/dashboard/followers">
              Followers
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/dashboard/followings">
              Followings
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/dashboard/posts">
              Posts
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/dashboard/education">
              Education
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/dashboard/experience">
              Experience
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/dashboard/github">
              Github
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="#!">
              Settings
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="#!">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      {utils.backdrop && <Backdrop />}
    </Fragment>
  );
};
const mapStatetoProps = (state) => ({
  utils: state.utils,
});
export default connect(mapStatetoProps, {
  showSideDrawer,
  hideSideDrawer,
  hideBackDrop,
})(SideDrawer);
