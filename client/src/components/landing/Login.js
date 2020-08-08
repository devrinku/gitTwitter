import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth card">
      <p className="medium fw-600">Welcome Back! </p>
      <form className="my-1">
        <input type="text" name="" placeholder="Email" id="" />
        <input type="text" name="" placeholder="Password" id="" />
        <input type="submit" value="Login" className="btn block" />
      </form>
      <div className="auth-links ">
        <p>
          <Link to="/register">I am already registered! </Link>
        </p>
        <p>
          <Link to="#!">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
