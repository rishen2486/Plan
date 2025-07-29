
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src="/logo.png" alt="Logo" />
    </div>
    <ul className="nav-links">
      <li><Link to="/">Bookings</Link></li>
      <li><Link to="/cars">Car Registration</Link></li>
      <li><Link to="/report">Report</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
);

export default Navbar;
