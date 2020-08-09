import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { showSideDrawer } from "./../actions/utils";
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

  return (
    <Fragment>
      <div
        style={utils.sideDrawer ? { width: "250px" } : { width: "0px" }}
        className="side-drawer"></div>
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
