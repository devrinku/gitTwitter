import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth card">
      <p className="medium fw-600">Create an account </p>
      <form className="my-1fr">
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <i className="fas fa-user"></i>
          </div>
          <input type="text" name="" placeholder="Name" id="" />
        </div>
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <i className="fas fa-envelope"></i>
          </div>
          <input type="email" name="" placeholder="Email" id="" />
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
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <i className="fas fa-lock"></i>
          </div>
          <input type="text" name="" placeholder="Confirm  Password" id="" />
          <div className="eyeslash-wrapper">
            <a href="#!">
              <i className="fas fa-eye-slash"></i>
            </a>
          </div>
        </div>
        <input type="submit" value="Register" className="btn block" />
      </form>
      <div className="auth-links ">
        <p>
          <Link to="/login">I am already registered! </Link>
        </p>
        <p>
          <Link to="#!">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
