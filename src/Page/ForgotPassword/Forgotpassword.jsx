import React from "react";
import { Link } from "react-router-dom";
import "./forgotpassword.css";
const ForgotPassword = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h1>Forgot Password</h1>
      <div className="forgot my-5">
        <h3>Forgot Password</h3>
        <p>Please enter your phone or email to receive a password reset link</p>
        <form className="d-flex flex-column">
          <input type="text" placeholder="Phone or Email" required />
          <button className="btn btn-dark text-white rounded rounded-5 mt-3">
            Verify
          </button>
          <p className="d-flex justify-content-between mt-3 text-secondary">
            <Link className="text-dark" to="/login">
              Login
            </Link>
            <Link className="ms-2 text-dark" to="/signup">
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;
