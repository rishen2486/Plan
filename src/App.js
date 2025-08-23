
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingsPage from "./pages/BookingsPage";
import CarManagerPage from "./pages/CarManagerPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookingsPage />} />
        <Route path="/cars" element={<CarManagerPage />} />
        <Route path="/report" element={<div>Report Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
