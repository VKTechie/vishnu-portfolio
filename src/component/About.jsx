import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <h2 className="kinetic-text section-title">
                    The <span>Architect</span>
                </h2>

                <div className="bento-grid">
                    {/* Main Bio Card */}
                    <div className="bento-card bento-main reveal-text">
                        <h3 style={{ fontFamily: 'Unbounded', fontSize: '18px', color: 'var(--gold-primary)', marginBottom: '20px' }}>
                            Philosophy
                        </h3>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', fontWeight: 300, color: 'var(--text-white)' }}>
                            Software Developer with 4.5+ years of experience, specializing in high-performance UI and complex API orchestration. 
                            My approach blends mathematical precision with aesthetic fluidity.
                        </p>
                        <p style={{ marginTop: '20px', color: 'var(--text-muted)' }}>
                            I don't just build interfaces; I architect digital ecosystems that prioritize speed, accessibility, and human-centric design.
                        </p>
                    </div>

                    {/* Stats Card */}
                    <div className="bento-card bento-side reveal-text" style={{ textAlign: 'center' }}>
                        <h4 style={{ color: 'var(--gold-primary)', fontSize: '12px', letterSpacing: '4px', marginBottom: '10px' }}>EXPERIENCE</h4>
                        <div style={{ fontSize: '64px', fontWeight: 900, fontFamily: 'Unbounded' }}>4.5+</div>
                        <p style={{ color: 'var(--text-muted)' }}>Years of Mastery</p>
                    </div>

                    {/* Stats Card 2 */}
                    <div className="bento-card bento-side reveal-text" style={{ textAlign: 'center' }}>
                        <h4 style={{ color: 'var(--gold-primary)', fontSize: '12px', letterSpacing: '4px', marginBottom: '10px' }}>DISPATCHED</h4>
                        <div style={{ fontSize: '64px', fontWeight: 900, fontFamily: 'Unbounded' }}>50+</div>
                        <p style={{ color: 'var(--text-muted)' }}>Elite Deployments</p>
                    </div>

                    {/* Skills Area */}
                    <div className="bento-card reveal-text" style={{ gridColumn: 'span 3', marginTop: '10px' }}>
                        <h3 style={{ fontFamily: 'Unbounded', fontSize: '14px', letterSpacing: '4px', color: 'var(--gold-primary)', marginBottom: '30px' }}>TECHNICAL_ENGINE</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                            {["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Java", "Performance", "Material UI", "Emotion", "Webpack", "Babel", "Responsive"].map(skill => (
                                <span key={skill} style={{ padding: '10px 24px', borderRadius: '100px', border: '1px solid var(--border-glass)', fontSize: '13px', backdropFilter: 'blur(10px)' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
