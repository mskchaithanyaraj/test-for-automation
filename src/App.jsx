import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RandomTracker from "./pages/RandomTracker";
import Forms from "./pages/Forms";
import EdgeCases from "./pages/EdgeCases";
import ThemeToggle from "./components/ThemeToggle";
import logo from "./assets/logo.png";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen theme-bg-primary premium-animate-fade-in">
          <nav className="premium-nav">
            <div className="max-w-7xl mx-auto px-6 py-3">
              <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                  <img
                    src={logo}
                    alt="AutoTest Logo"
                    className="w-10 h-10 rounded-xl object-cover shadow-lg"
                  />
                  <div>
                    <span className="font-bold text-xl theme-text-primary">
                      AutoTest
                    </span>
                    <div className="text-xs theme-text-tertiary">
                      Testing Suite
                    </div>
                  </div>
                </div>

                {/* Mobile Hamburger Menu */}
                <button
                  className="md:hidden p-2 rounded-md theme-bg-secondary"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  aria-label="Toggle navigation"
                  data-testid="mobile-menu-button"
                >
                  <svg
                    className="w-6 h-6 theme-text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        isNavOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>

                {/* Navigation Links */}
                <div
                  className={`${
                    isNavOpen ? "flex" : "hidden"
                  } md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 absolute md:static top-16 left-0 right-0 md:top-auto theme-bg-primary md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none z-50`}
                >
                  <Link
                    to="/"
                    className="premium-nav-link theme-text-primary flex items-center space-x-2 w-full md:w-auto px-2 py-1"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/tracker"
                    className="premium-nav-link theme-text-primary flex items-center space-x-2 w-full md:w-auto px-2 py-1"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <span>Tracker</span>
                  </Link>
                  <Link
                    to="/forms"
                    className="premium-nav-link theme-text-primary flex items-center space-x-2 w-full md:w-auto px-2 py-1"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <span>Forms</span>
                  </Link>
                  <Link
                    to="/edge-cases"
                    className="premium-nav-link theme-text-primary flex items-center space-x-2 w-full md:w-auto px-2 py-1"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <span>Edge Cases</span>
                  </Link>
                  <Link
                    to="/about"
                    className="premium-nav-link theme-text-primary flex items-center space-x-2 w-full md:w-auto px-2 py-1"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <span>About</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="premium-nav-link theme-text-primary flex items-center space-x-2 w-full md:w-auto px-2 py-1"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <span>Contact</span>
                  </Link>
                </div>

                {/* Theme Toggle - Always visible */}
                <div className="flex items-center ml-2">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tracker" element={<RandomTracker />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/edge-cases" element={<EdgeCases />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
