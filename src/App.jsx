import React, { useEffect, useRef, useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // 1. GLOBAL SPOTLIGHT & CURSOR
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      document.documentElement.style.setProperty("--mouse-x", `${x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${y}px`);

      if (dotRef.current && ringRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
        ringRef.current.style.left = `${x}px`;
        ringRef.current.style.top = `${y}px`;
      }

      // 2. CARD-LEVEL SPOTLIGHT
      const cards = document.querySelectorAll(".bento-card, .project-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardX = x - rect.left;
        const cardY = y - rect.top;
        card.style.setProperty("--card-mouse-x", `${cardX}px`);
        card.style.setProperty("--card-mouse-y", `${cardY}px`);
      });
    };

    // 3. KINETIC TEXT SPLITTER
    const kineticElements = document.querySelectorAll(".kinetic-text:not(.splitted)");
    kineticElements.forEach((el) => {
      const text = el.textContent;
      el.textContent = "";
      text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.transitionDelay = `${i * 0.03}s`;
        el.appendChild(span);
      });
      el.classList.add("splitted");
    });

    // 4. INTERSECTION OBSERVER
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const observeTargets = document.querySelectorAll(".reveal-text, .kinetic-text, section");
    observeTargets.forEach((t) => observer.observe(t));

    window.addEventListener("mousemove", handleMouseMove);
    
    // Simulating preloader
    const timer = setTimeout(() => setLoaded(true), 1500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className={`preloader ${loaded ? "loaded" : ""}`}>
        <div style={{ fontFamily: "Unbounded", fontSize: "14px", letterSpacing: "4px" }}>
          INITIALIZING_EXPERIENCE_
        </div>
      </div>

      <div className="aurora">
        <div className="aurora-blob" style={{ top: "20%", left: "10%" }}></div>
        <div className="aurora-blob" style={{ top: "60%", left: "80%", background: "var(--cyber-accent)" }}></div>
      </div>

      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
      
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
