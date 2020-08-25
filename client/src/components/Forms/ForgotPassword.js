import React, { useState, useEffect } from "react";
import { forgotpassword } from "./../../actions/auth";
import { unsetFetch } from "./../../actions/auth";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Preloader from "./../Preloader";
import spinner from "./../../images/25B.gif";

const ForgotPassword = ({
  forgotpassword,
  auth: { fetch },
  history,
  unsetFetch,
}) => {
  const [form, setForm] = useState({
    email: "",
    host: window.location.host,
    protocol: window.location.protocol,
  });
  useEffect(() => {
    return () => {
      unsetFetch();
    };
    //eslint-disable-next-line
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    forgotpassword(form, history);
  };
  return (
    <div className="padding-top">
      <div className="container text-center">
        <form onSubmit={(e) => onSubmit(e)} className="my-2 forgot-password">
          {fetch === true && (
            <div style={{ marginBottom: "2rem" }}>
              <Preloader spinner={spinner} />
            </div>
          )}
          <p className="fw-500 medium">What's My Password! </p>
          <div
            style={{
              border: "1px solid white",
              padding: "1rem",
              marginTop: "1.5rem",
            }}
            className="border-div">
            <p style={{ lineHeight: "1.5rem" }} className="my">
              Enter your user account's verified email address and we will send
              you a password reset link.
            </p>
            <input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
              type="text"
              name="email"
              placeholder="Email"
            />
            <input
              style={
                fetch === true
                  ? { margin: "0.3rem 0", background: "red" }
                  : { margin: "0.3rem 0" }
              }
              type="submit"
              disabled={fetch ? true : false}
              value={fetch ? "Sending..." : "Send"}
              className="btn block"
            />
          </div>
          <div style={{ marginTop: "1rem" }} className="text-right">
            <Link
              to={fetch ? "#!" : "/login"}
              style={{
                background: "white",
                color: "black",
              }}
              className="btn"
              name="email"
              placeholder="Email">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapsStatetoProps = (state) => ({
  auth: state.auth,
});
export default connect(mapsStatetoProps, { forgotpassword, unsetFetch })(
  withRouter(ForgotPassword)
);
