import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import MailIcon from "@mui/icons-material/Mail";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-dock reveal-text">
        <a href="#home" onClick={(e) => handleNav(e, "home")} title="Home">
            <HomeIcon /> <span>Home</span>
        </a>
        <a href="#about" onClick={(e) => handleNav(e, "about")} title="About">
            <InfoIcon /> <span>About</span>
        </a>
        <a href="#experience" onClick={(e) => handleNav(e, "experience")} title="Experience">
            <WorkIcon /> <span>Career</span>
        </a>
        <a href="#projects" onClick={(e) => handleNav(e, "projects")} title="Projects">
            <CodeIcon /> <span>Work</span>
        </a>
        <a href="#contact" onClick={(e) => handleNav(e, "contact")} title="Contact">
            <MailIcon /> <span>Contact</span>
        </a>
      </nav>
    </header>
  );
}
