import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Analysis from './pages/Analysis';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis/:id" element={<Analysis />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;