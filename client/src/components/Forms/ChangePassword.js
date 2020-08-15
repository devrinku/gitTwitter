import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changePassword } from "./../../actions/auth";
import { unsetFetch } from "./../../actions/auth";
import { withRouter } from "react-router-dom";
import Preloader from "./../Preloader";
import spinner from "./../../images/25C.gif";

const ChangePassword = ({
  changePassword,
  history,
  unsetFetch,
  auth: { fetch },
}) => {
  useEffect(() => {
    return () => {
      unsetFetch();
    };
    //eslint-disable-next-line
  }, []);
  const [formData, setFormData] = useState({
    newPassword: "",
    oldPassword: "",
  });
  const { oldPassword, newPassword } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    changePassword(formData, history);
  };
  return (
    <div className="container ">
      {fetch && (
        <div className="container text-center">
          <Preloader spinner={spinner} />
        </div>
      )}

      <div className="my ">
        <span className="teal pencil fw-500 ">
          <i className="fas fa-user-secret mx"></i>Change Password
        </span>
        <br />
      </div>
      <div className="change-password">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="feild">
            <label className="small">Old Password</label>
            <input
              onChange={(e) => onChange(e)}
              value={oldPassword}
              type="password"
              name="oldPassword"
              placeholder="* School"
            />
          </div>
          <div className="feild">
            <label className="small">New Password</label>
            <input
              onChange={(e) => onChange(e)}
              value={newPassword}
              type="password"
              name="newPassword"
              placeholder="* School"
            />
          </div>

          <input
            disabled={fetch === true ? true : false}
            className="btn "
            style={fetch === true ? { background: "red" } : {}}
            type="submit"
            value={fetch === true ? "Checking Password..." : "Change Password"}
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { changePassword, unsetFetch })(
  withRouter(ChangePassword)
);
