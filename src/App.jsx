import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RandomTracker from "./pages/RandomTracker";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen theme-bg-primary premium-animate-fade-in">
          <nav className="premium-nav">
            <div className="max-w-7xl mx-auto px-6 py-3">
              <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-base">AT</span>
                  </div>
                  <div>
                    <span className="font-bold text-xl theme-text-primary">
                      AutoTest
                    </span>
                    <div className="text-xs theme-text-tertiary">
                      Testing Suite
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-2">
                  <Link
                    to="/"
                    className="premium-nav-link theme-text-primary flex items-center space-x-2"
                  >
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/about"
                    className="premium-nav-link theme-text-primary flex items-center space-x-2"
                  >
                    <span>About</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="premium-nav-link theme-text-primary flex items-center space-x-2"
                  >
                    <span>Contact</span>
                  </Link>
                  <Link
                    to="/tracker"
                    className="premium-nav-link theme-text-primary flex items-center space-x-2"
                  >
                    <span>Tracker</span>
                  </Link>
                </div>

                {/* Theme Toggle */}
                <div className="flex items-center">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tracker" element={<RandomTracker />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
