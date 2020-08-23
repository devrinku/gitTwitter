import React, { useState, useEffect } from "react";
import { unsetFetch } from "./../../actions/auth";
import { connect } from "react-redux";
import { Link, withRouter, useParams } from "react-router-dom";
import Preloader from "./../Preloader";
import spinner from "./../../images/25B.gif";
import { resetpassword } from "./../../actions/auth";

const ResetPasswordform = ({
  auth: { fetch },
  history,
  resetpassword,
  unsetFetch,
}) => {
  const { salt } = useParams();

  const [form, setForm] = useState({
    newpassword: "",
  });
  useEffect(() => {
    return () => {
      unsetFetch();
    };
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    resetpassword(form, salt, history);
  };
  return (
    <div style={{ paddingBottom: "2rem" }} className="padding-top">
      <div className="container text-center">
        <form onSubmit={(e) => onSubmit(e)} className="my-2 forgot-password">
          {fetch === true && (
            <div style={{ marginBottom: "2rem" }}>
              <Preloader spinner={spinner} />
            </div>
          )}
          <p className="fw-500 medium">Reset Password! </p>
          <div
            style={{
              border: "1px solid white",
              padding: "1rem",
              marginTop: "1.5rem",
            }}
            className="border-div">
            <p style={{ lineHeight: "1.5rem" }} className="my">
              Enter your new Password
            </p>
            <input
              onChange={(e) =>
                setForm({ ...form, newpassword: e.target.value })
              }
              value={form.newpassword}
              type="password"
              name="password"
              placeholder="New Password"
            />
            <input
              style={
                fetch === true
                  ? { margin: "0.3rem 0", background: "red" }
                  : { margin: "0.3rem 0" }
              }
              type="submit"
              disabled={fetch ? true : false}
              value={fetch ? "Resetting Password..." : "Reset Password..."}
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
export default connect(mapsStatetoProps, { unsetFetch, resetpassword })(
  withRouter(ResetPasswordform)
);
