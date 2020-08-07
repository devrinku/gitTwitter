import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth card">
      <p className="medium fw-600">Create an account </p>
      <form className="my-1fr">
        <input type="text" name="" placeholder="Name" id="" />
        <input type="text" name="" placeholder="Email" id="" />
        <input type="text" name="" placeholder="Password" id="" />
        <input type="text" name="" placeholder="Confirm Password" id="" />
        <input type="submit" value="Register" className="btn block" />
      </form>
      <div className="auth-links ">
        <Link to="/login">I am already registered! </Link>
        <Link to="#!">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Register;
