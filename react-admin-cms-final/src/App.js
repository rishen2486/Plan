
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookingsPage from './pages/BookingsPage';
import CarManagerPage from './pages/CarManagerPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <nav className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin CMS</h1>
          <div className="space-x-4">
            <Link to="/bookings" className="text-blue-600 hover:underline">Bookings</Link>
            <Link to="/cars" className="text-blue-600 hover:underline">Cars</Link>
          </div>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/cars" element={<CarManagerPage />} />
            <Route path="*" element={<BookingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
