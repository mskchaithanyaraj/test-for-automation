import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <nav className="mb-8 space-x-4">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Contact
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
