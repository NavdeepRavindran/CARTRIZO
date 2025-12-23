// src/Home/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.jpg";
import "./Navbar.css";

export default function Navbar({ toggleMenu }) {
  const navigate = useNavigate();

  return (
    <header className="topbar">
      <div className="left-group">
        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="brand" onClick={() => navigate("/")}>
          <img src={hero} alt="logo" className="brand-logo" />
          <span className="brand-title">CARTRIZO</span>
        </div>
      </div>

      <nav className="topnav">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/about-us")}>About</span>
        <span onClick={() => navigate("/signup")}>Signup</span>
        <span onClick={() => navigate("/login")}>Login</span>
        <span onClick={() => navigate("/profile")}>Profile</span>

        <button className="admin-btn" onClick={() => navigate("/admin")}>
          Admin
        </button>
      </nav>
    </header>
  );
}
