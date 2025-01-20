import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../../Style/Mainlayout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import reportWebVitals from "./reportWebVitals";
import logo from "../../assets/booklogo.png";

// import "./Mainlayout.css";
const Mainlayout = () => {
  return (
    <>
      {/* Header section */}
      <header className="navbar navbar-expand-lg navbar-light bg-white">
        <nav className="container ">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo-img" />
          </Link>

          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navigation items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto d-flex gap-4">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/category"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/ភាពជាអ្នកដឹកនាំ">
                      ភាពជាអ្នកដឹកនាំ
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ជំនួញនិងទុរកិច្ច">
                      ជំនួញ និង ទុរកិច្ច
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ទស្សនវិជ្ជា">
                      ទស្សនវិជ្ជា
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ចិត្តវិទ្យា">
                      ចិត្តវិទ្យា
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/historybook">
                      ប្រវត្តិសាស្ត្រ
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ប្រលោមលោក">
                      ប្រលោមលោក
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/programmingBook">
                      Programming Language
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {/* Cart icon */}
            <div className="cart-icon">
              <a className="nav-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span className="cart-badge">0</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
      {/* This is for footer design */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            {/* <h4>Colorlib</h4> */}
            <div class="logo">
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="logo-img" />
              </Link>
            </div>

            <p>Get All The Books You Need!</p>
          </div>

          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li>
                <a href="#">Buy & Sell</a>
              </li>
              <li>
                <a href="#">Merchant</a>
              </li>
              <li>
                <a href="#">Giving Back</a>
              </li>
              <li>
                <Link className="dropdown-item" to="/programmingBook">
                  Programming Language
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Tag Cloud</h4>
            <div className="tags">
              <a href="#">Dish</a>
              <a href="#">Menu</a>
              <a href="#">Food</a>
              <a href="#">Sweet</a>
              <a href="#">Tasty</a>
              <a href="#">Delicious</a>
              <a href="#">Desserts</a>
              <a href="#">Drinks</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Subscribe</h4>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter email address" />
              <button type="submit">→</button>
            </form>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright ©2025. All rights reserved | This template is made with ♥️
            by Colorlib.com
          </p>
          <div className="footer-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Compliances</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Mainlayout;
