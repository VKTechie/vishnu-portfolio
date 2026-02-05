import React from "react";

const Hero = () => {
  return (
    <section id="home">
      <div className="container fade-up" style={{ textAlign: "center" }}>
        <h1>Vishnukarthick K</h1>

        <h2 style={{ color: "#2563EB", marginTop: "15px" }}>
          Senior Frontend Developer | React.js | JavaScript
        </h2>

        <p style={{ maxWidth: "760px", margin: "30px auto" }}>
          Software Developer with 4.5+ years of experience in designing and
          developing responsive, scalable, and high-performance web
          applications. Strong expertise in React.js UI development, API
          integration, and backend API development using Java.
        </p>

        <a href="#contact" className="btn">Let’s Work Together</a>

      </div>
    </section>
  );
};

export default Hero;
