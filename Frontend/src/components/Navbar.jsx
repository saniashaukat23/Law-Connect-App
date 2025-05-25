import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "../Styles/Landing.css";
import { FaRobot, FaPersonBooth } from "react-icons/fa";
import logo from "../assets/logo.svg";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLegalAdvice = location.pathname === "/legal-advice";
  const isAttorney = location.pathname === "/attorneys";
  const isHome = location.pathname === "/";

  const token = localStorage.getItem("token");
  const isLoggedIn = Boolean(token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className={`nav-bar ${isHome ? "" : "nav-bg"}`}>
      <div className="nav-left row">
        <div className="logo col-md-3">
          <img src={logo} alt="Law Connect Logo" />
          <h3>Law Connect</h3>
        </div>
        <div className="nav-links col-md-6 d-flex">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <a href="practice-areas">Practice Areas</a>
          <a href="/attorneys">Attorneys</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="nav-btn col-md-3 d-flex gap-3">
          <Link to="/legal-advice" style={{ textDecoration: "none" }}>
            <button className={`${isLegalAdvice ? "d-none" : ""}`}>
              <FaRobot />
              Consult AI
            </button>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <button className={`${isLegalAdvice ? "d-flex" : "d-none"}`}>
              <FaPersonBooth />
              Visit Lawyers
            </button>
          </Link>

          {!isLoggedIn && (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className={`${isAttorney ? "d-flex" : "d-none"}`}>
                <FaPersonBooth />
                Login
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <>
              <Link to="/update-profile" style={{ textDecoration: "none" }}>
                <button>
                  <FaPersonBooth />
                  Update Profile
                </button>
              </Link>

              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
