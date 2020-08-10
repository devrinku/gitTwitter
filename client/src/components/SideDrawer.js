import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { showSideDrawer } from "./../actions/utils";
import { Link } from "react-router-dom";
import user from "./../images/1.jpg";
import { hideSideDrawer } from "./../actions/utils";
import { hideBackDrop } from "./../actions/utils";
import { showBackDrop } from "./../actions/utils";
import { setBackdropType } from "./../actions/utils";
import { hideModal } from "./../actions/utils";
import { showModal } from "./../actions/utils";
import Modal from "./Modal";

const SideDrawer = ({
  utils,
  showSideDrawer,
  showBackDrop,
  showModal,
  hideBackDrop,
  hideSideDrawer,
  setBackdropType,
  hideModal,
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
        hideModal();
      } else {
        hideSideDrawer();
        hideBackDrop();
        hideModal();
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
            <Link onClick={onClick} to="/dashboard/settings">
              Settings
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                onClick();
                setBackdropType("logout");
                showBackDrop();
                showModal();
              }}
              to="#!">
              Logout
            </Link>{" "}
          </li>
        </ul>
      </div>
      {utils.backdrop && utils.modal && utils.backdropType === "logout" && (
        <Modal index={90} action="logout">
          <a style={{ color: "white" }} href="#!" className="btn orange">
            Confirm
          </a>
        </Modal>
      )}
    </Fragment>
  );
};
const mapStatetoProps = (state) => ({
  utils: state.utils,
});
export default connect(mapStatetoProps, {
  showSideDrawer,
  hideSideDrawer,
  showBackDrop,
  showModal,
  hideBackDrop,
  hideModal,
  setBackdropType,
})(SideDrawer);
