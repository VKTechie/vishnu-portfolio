import React from "react";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container contact-container anime">
                <h2>Let’s Connect</h2>
                <p className="contact-sub">
                    Open to opportunities, collaborations, and frontend challenges.
                </p>

                <div className="contact-grid">
                    <a href="tel:+919361762268" className="contact-card">
                        <div className="icon-wrapper phone">
                            <svg viewBox="0 0 24 24">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                19.86 19.86 0 0 1-8.63-3.07
                19.5 19.5 0 0 1-6-6
                19.86 19.86 0 0 1-3.07-8.63
                A2 2 0 0 1 4.11 2h3
                a2 2 0 0 1 2 1.72
                12.84 12.84 0 0 0 .7 2.81
                2 2 0 0 1-.45 2.11L8.09 9.91
                a16 16 0 0 0 6 6l1.27-1.27
                a2 2 0 0 1 2.11-.45
                12.84 12.84 0 0 0 2.81.7
                A2 2 0 0 1 22 16.92z"
                                    fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                        <h3>Phone</h3>
                        <p>+91 9361762268</p>
                    </a>

                    <a
                        href="mailto:vishnukarthick1012@gmail.com"
                        className="contact-card"
                    >
                        <div className="icon-wrapper mail">
                            <svg viewBox="0 0 24 24">
                                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4
                a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                                    fill="none" stroke="currentColor" strokeWidth="2" />
                                <path d="M22 6l-10 7L2 6"
                                    fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                        <h3>Email</h3>
                        <p>vishnukarthick1012@gmail.com</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
