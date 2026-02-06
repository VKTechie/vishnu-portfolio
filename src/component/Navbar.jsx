import { useState } from "react";
import React from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <div className="logo">
          <span className="logo-v">V</span>
          <span className="logo-k">K</span>
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#home" onClick={handleClose}>Home</a>
          <a href="#projects" onClick={handleClose}>Projects</a>
          <a href="#about" onClick={handleClose}>About</a>
          <a href="#contact" onClick={handleClose}>Contact</a>

          <a
            href="/resume.pdf"
            download
            className="nav-resume"
            onClick={handleClose}
          >
            Download Resume
          </a>
        </nav>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
