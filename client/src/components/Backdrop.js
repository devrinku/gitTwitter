import React from "react";
import { connect } from "react-redux";
import { hideSideDrawer } from "./../actions/utils";
import { hideBackDrop } from "./../actions/utils";

const Backdrop = ({ hideSideDrawer, index, hideBackDrop }) => {
  const onClick = () => {
    hideBackDrop();
    hideSideDrawer();
  };
  return (
    <div
      style={index ? { zIndex: 20 } : { zIndex: 0 }}
      onClick={onClick}
      className="backdrop"></div>
  );
};

export default connect(null, { hideSideDrawer, hideBackDrop })(Backdrop);
