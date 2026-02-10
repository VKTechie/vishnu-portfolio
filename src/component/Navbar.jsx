import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleNav = (e, id) => {
    e.preventDefault(); // stops # from appearing
    setOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // clean URL (no #)
    window.history.pushState(null, "", "/");
  };

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
          <a href="home" onClick={(e) => handleNav(e, "home")}>Home</a>
          <a href="projects" onClick={(e) => handleNav(e, "projects")}>Projects</a>
          <a href="about" onClick={(e) => handleNav(e, "about")}>About</a>
          <a href="contact" onClick={(e) => handleNav(e, "contact")}>Contact</a>


          <a
            href="/vishnukarthick.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
            onClick={handleClose}
          >
            View Resume
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
