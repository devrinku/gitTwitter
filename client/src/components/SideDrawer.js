import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { showSideDrawer } from "./../actions/utils";
import { hideSideDrawer } from "./../actions/utils";
import Backdrop from "./Backdrop";
const SideDrawer = ({ utils, showSideDrawer, hideSideDrawer }) => {
  const [backdrop, backdropHandler] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      showSideDrawer();
      backdropHandler(false);
    } else {
      hideSideDrawer();
      backdropHandler(true);
    }
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        showSideDrawer();
        backdropHandler(false);
      } else {
        hideSideDrawer();
        backdropHandler(true);
      }
    });
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div
        style={utils.sideDrawer ? { width: "250px" } : { width: "0px" }}
        className="side-drawer"></div>
      {utils.sideDrawer && backdrop && <Backdrop />}
    </Fragment>
  );
};
const mapStatetoProps = (state) => ({
  utils: state.utils,
});
export default connect(mapStatetoProps, { showSideDrawer, hideSideDrawer })(
  SideDrawer
);
