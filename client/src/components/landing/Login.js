import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth card">
      <p className="medium fw-600">Welcome Back! </p>
      <form className="my-1">
        <div className="input-wrapper">
          <input type="email" name="" placeholder="Email" id="" />
          <div className="icon-wrapper">
            <i className="fas fa-envelope"></i>
          </div>
        </div>
        <div className="input-wrapper">
          <input type="text" name="" placeholder="Password" id="" />
          <div className="icon-wrapper">
            <i className="fas fa-lock"></i>
          </div>
          <div className="eyeslash-wrapper">
            <a href="#!">
              <i className="fas fa-eye-slash"></i>
            </a>
          </div>
        </div>
        <input type="submit" value="Login" className="btn block" />
      </form>
      <div className="auth-links ">
        <p>
          <Link to="/register">I am not registered yet! </Link>
        </p>
        <p>
          <Link to="#!">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
