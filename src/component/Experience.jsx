import React from "react";

export default function Experience() {
    return (
        <section id="experience">
            <div className="container">
                <h2 className="kinetic-text section-title">
                    The <span>Career</span>
                </h2>

                <div className="stagger-container">
                    <div className="bento-card reveal-text" style={{ marginBottom: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                            <div>
                                <h3 style={{ fontFamily: 'Unbounded', fontSize: '20px' }}>Software Developer</h3>
                                <p style={{ color: 'var(--gold-primary)', fontWeight: 600, letterSpacing: '1px' }}>Strategic Role / 4.5+ Year Pillar</p>
                            </div>
                            <span style={{ fontSize: '12px', padding: '6px 16px', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '100px', border: '1px solid var(--border-gold-subtle)' }}>
                                CURRENT
                            </span>
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)' }}>
                            {["Orchestrated responsive and scalable architectures using React.js.", "Engineered high-performance RESTful API integrations.", "Authored modular design systems with Emotion and Material UI.", "Executed deep performance optimization, slashing load times by 40%+."].map((bullet, i) => (
                                <li key={i} style={{ paddingLeft: '20px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', background: 'var(--gold-primary)', borderRadius: '50%' }}></span>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
