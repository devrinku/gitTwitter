import React, { Fragment } from "react";
import { connect } from "react-redux";
import { hideSideDrawer } from "./../actions/utils";
import { hideBackDrop } from "./../actions/utils";
import { hideModal } from "./../actions/utils";
import Backdrop from "./Backdrop";
const Modal = ({ hideSideDrawer, hideModal, hideBackDrop, ...props }) => {
  const close = () => {
    hideBackDrop();
    hideModal();
    if (window.innerWidth < 768) {
      hideSideDrawer();
    }
  };
  return (
    <Fragment>
      <Backdrop index={props.index} />
      <div className="modal">
        <div className="modal-heading fw-500 small">Confirm Your Action</div>
        <div className="modal-content">
          <p className="small"> Are you sure you want to {props.action}</p>
          <div className="modal-links ">
            <p>
              <a
                onClick={close}
                style={{ color: "white" }}
                href="#!"
                className="btn teal ">
                Close
              </a>
            </p>
            <p className="mx">{props.children}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { hideSideDrawer, hideBackDrop, hideModal })(
  Modal
);
