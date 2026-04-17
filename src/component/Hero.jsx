import React from "react";
import Pic from "../Pic.jpeg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        {/* <div className="hero-top-header reveal-text">
          <span>V_K // SYST_ACTIVE</span>
          <div className="pulse-dot"></div>
        </div> */}
        <div className="hero-profile-container reveal-text">
          <div className="corner-brackets"></div>
          <div className="hex-frame"></div>
          <div className="hologram-ring"></div>
          <div className="orbit-container">
            <div className="orbit-ball ball-1"></div>
            <div className="orbit-ball ball-2"></div>
            <div className="orbit-ball ball-3"></div>
          </div>
          <div className="glitch-overlay"></div>
          <img src={Pic} alt="Vishnukarthick" className="hero-image" />
        </div>

        <h1 className="kinetic-text section-title" style={{ marginBottom: '10px' }}>
          VishnuKarthick K
        </h1>
        
        <p className="hero-role reveal-text" style={{ fontFamily: 'Outfit', fontWeight: 300, color: 'var(--gold-primary)', letterSpacing: '6px', fontSize: '11px', textTransform: 'uppercase' }}>
          Senior Frontend Developer <span style={{ color: 'var(--text-white)' }}>&</span> UI/UX Developer ⚡
        </p>

        <div className="hero-actions reveal-text" style={{ marginTop: '40px' }}>
          <a href="#projects" className="btn-gold">
            EXPLORE_WORK
          </a>
        </div>
      </div>
    </section>
  );
}
