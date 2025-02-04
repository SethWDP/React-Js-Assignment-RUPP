import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Signup/Signup.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h1>Create Account</h1>
      <div className="register p-4 shadow rounded my-5">
        <h3 className="text-center">Create New Account</h3>
        <p className="text-center">Please fill in the details below</p>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="form-control mb-2"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="form-control mb-2"
          />
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone"
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="form-control mb-4"
          />
          <button className="btn btn-info text-white rounded mt-3">
            Create Account
          </button>
          <p className="text-center mt-3 text-secondary">
            Already have an account?
            <Link className="ms-2 text-dark" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
