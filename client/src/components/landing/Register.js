import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "./../../actions/auth";
import Preloader from "./../Preloader";
import spinner from "./../../images/25B.gif";

const Register = ({ register, auth: { isLoggedIn, loadingAuth } }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [blur1, setBlur1] = useState(false);
  const [blur2, setBlur2] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast(`Password does not match`, {
        className: "black-background",
        bodyClassName: "grow-font-size",
        progressClassName: "Toastify__progress-bar--dark",
      });
    } else {
      register({ name, email, password });
    }
  };
  if (isLoggedIn === true && loadingAuth === false) {
    return <Redirect to="/dashboard/profile" />;
  }
  return (
    <div className="auth card register">
      {loadingAuth && <Preloader spinner={spinner} />}
      <p className="medium fw-600">Create an account </p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="input-wrapper">
          <input
            type="text"
            onChange={(e) => onChange(e)}
            value={name}
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={(e) => onChange(e)}
            value={email}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={(e) => onChange(e)}
            value={password}
            type={blur1 ? "text" : "password"}
            name="password"
            placeholder="Password"
          />

          <div className="eyeslash-wrapper">
            <a onClick={() => setBlur1(!blur1)} href="#!">
              <i className="fas fa-eye-slash"></i>
            </a>
          </div>
        </div>
        <div className="input-wrapper">
          <input
            onChange={(e) => onChange(e)}
            value={confirmPassword}
            type={blur2 ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm  Password"
          />
          <div className="eyeslash-wrapper">
            <a onClick={() => setBlur2(!blur2)} href="#!">
              <i className="fas fa-eye-slash"></i>
            </a>
          </div>
        </div>
        {loadingAuth === true ? (
          <input
            disabled
            type="submit"
            style={{ backgroundColor: "red" }}
            value="Loading..."
            className="btn block"
          />
        ) : (
          <input type="submit" value="Register" className="btn block" />
        )}
      </form>
      <div>
        <p className="text-center ">
          <Link className="login-link" to={loadingAuth ? "#!" : "/login"}>
            I am registered!{" "}
          </Link>
        </p>
        <p></p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { register })(Register);
