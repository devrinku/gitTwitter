import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "./../../actions/auth";

import Preloader from "./../Preloader";
import spinner from "./../../images/25B.gif";

const Login = ({ login, auth: { isLoggedIn, loadingAuth } }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [blur, setBlur] = useState(false);
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  if (isLoggedIn === true && loadingAuth === false) {
    return <Redirect to="/dashboard/profile" />;
  }
  return (
    <div className="auth card login">
      {loadingAuth && <Preloader spinner={spinner} />}
      <p className="medium fw-600">Welcome Back! </p>
      <form onSubmit={(e) => onSubmit(e)} className="my-1">
        <input
          onChange={(e) => onChange(e)}
          value={email}
          type="text"
          name="email"
          placeholder="Email"
        />
        <div className="input-wrapper">
          <input
            onChange={(e) => onChange(e)}
            value={password}
            type={blur ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          <div className="eyeslash-wrapper">
            <a onClick={() => setBlur(!blur)} href="#!">
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
          <input type="submit" value="Login" className="btn block" />
        )}
      </form>
      <div className="auth-links ">
        <p>
          <Link to={loadingAuth ? "#!" : "/register"}>
            I am not registered!{" "}
          </Link>
        </p>
        <p>
          <Link to={loadingAuth ? "#!" : "/create/forgotpassword"}>
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
