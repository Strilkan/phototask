import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import Portfolio from "./components/portfolio";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {loading && <Loader />}
        {/* {!loading && <BackgroundSlider />} */}

        <Navbar />

        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Portfolio />
                </>
              }
            />
            <Route path="/" element={<Hero />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer className="footer">
          © 2025. Majki Photography. Designed by:{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61576811879765"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strilkan
          </a>
          . All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
