import React from "react";
import { connect } from "react-redux";
import { hideSideDrawer } from "./../actions/utils";
import { hideBackDrop } from "./../actions/utils";

const Backdrop = ({ hideSideDrawer, hideBackDrop }) => {
  const onClick = () => {
    hideBackDrop();
    hideSideDrawer();
  };
  return <div onClick={onClick} className="backdrop"></div>;
};

export default connect(null, { hideSideDrawer, hideBackDrop })(Backdrop);
