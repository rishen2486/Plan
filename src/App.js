import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.jpg';

function Bookings() {
  return <h2>Bookings Page</h2>;
}

function CarRegistration() {
  return <h2>Car Registration Page</h2>;
}

function Report() {
  return <h2>Report Page</h2>;
}

function Login() {
  return <h2>Login Page</h2>;
}

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="Logo" />
        <Link to="/">Bookings</Link>
        <Link to="/car-registration">Car Registration</Link>
        <Link to="/report">Report</Link>
        <Link to="/login">Login</Link>
      </nav>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Bookings />} />
          <Route path="/car-registration" element={<CarRegistration />} />
          <Route path="/report" element={<Report />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
