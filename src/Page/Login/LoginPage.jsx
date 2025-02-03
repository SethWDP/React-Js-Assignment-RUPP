import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h1>Login</h1>
      <div className="login p-4 shadow rounded my-5">
        <h3 className="text-center">Welcome Back!</h3>
        <p className="text-center">Please enter details below</p>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Phone or Email"
            value={formData.emailOrPhone}
            onChange={handleChange}
            required
            className="form-control mb-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-control mb-2"
          />
          <Link className="d-flex justify-content-end text-warning" to="/forgetpassword">Forgot Password?</Link>
          <button className="btn btn-warning text-white rounded mt-3">Login</button>
          <p className="text-center mt-3 text-secondary">
            Don't have an account?
            <Link className="ms-2 text-warning" to="/signup">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
