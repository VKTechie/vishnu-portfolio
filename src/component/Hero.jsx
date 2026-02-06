import React from "react";
import CodeIcon from "@mui/icons-material/Code";

export default function Hero() {
  return (
   <section id="home" className="hero">
  <div className="hero-content">
    <p className="hero-intro">Hi, I’m</p>

    <h1 className="hero-title">
      Vishnukarthick <span>K</span>
    </h1>

    <p className="hero-desc">
      Senior Frontend Developer crafting scalable, high-performance web
      applications with <strong>React</strong>,{" "}
      <strong>JavaScript</strong>, and modern UI engineering.
    </p>

    <div className="hero-actions">
      <a href="#projects" className="btn primary">
        Explore My Work
      </a>
    </div>
  </div>

  <div className="hero-icon">
    <CodeIcon />
  </div>
</section>


  );
}
