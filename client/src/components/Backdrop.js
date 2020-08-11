import React from "react";
import { connect } from "react-redux";
import { hideSideDrawer } from "./../actions/utils";
import { hideBackDrop } from "./../actions/utils";
import { hideModal } from "./../actions/utils";

const Backdrop = ({ hideSideDrawer, hideModal, index, hideBackDrop }) => {
  const onClick = () => {
    hideBackDrop();
    hideModal();

    if (window.innerWidth < 768) {
      hideSideDrawer();
    }
  };
  return (
    <div
      style={index ? { zIndex: index } : { zIndex: 0 }}
      onClick={onClick}
      className="backdrop"></div>
  );
};

export default connect(null, { hideSideDrawer, hideBackDrop, hideModal })(
  Backdrop
);
