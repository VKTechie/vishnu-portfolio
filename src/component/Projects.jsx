import React from "react";

const Projects = () => {
    return (
        <section style={{ background: "#fff" }} id="projects">
            <div className="container">
                <h2>Projects</h2>

                <div style={grid}>
                    <div className="card fade-up">
                        <h3>ERP System</h3>
                        <p>
                            Developed responsive and user-friendly UI modules for an ERP
                            system used to manage organizational operations. Integrated
                            multiple backend APIs to handle workflows, reports, and data
                            visualization efficiently.
                        </p>
                    </div>

                    <div className="card fade-up">
                        <h3>Online Application Platform</h3>
                        <p>
                            Built dynamic frontend screens for an online application platform
                            enabling users to submit and track applications digitally.
                            Implemented React-based forms and integrated REST APIs for seamless
                            data submission and validation.
                        </p>
                    </div>

                    <div className="card fade-up">
                        <h3>Centralized Data Management</h3>
                        <p>
                            Worked on a centralized data system to consolidate information
                            across multiple modules. Focused on UI consistency, performance
                            optimization, and API-driven data rendering.
                        </p>
                    </div>

                    <div className="card fade-up">
                        <h3>Digital Evaluation System</h3>
                        <p>
                            Developed clean and intuitive user interfaces for a digital
                            evaluation system. Integrated APIs to manage evaluations,
                            dashboards, and real-time data updates.
                        </p>
                    </div>

                    <div className="card fade-up">
                        <h3>AI Attendance Camera</h3>
                        <p>
                            Contributed to an AI-based attendance system by developing frontend
                            components and integrating APIs that processed attendance data
                            captured through AI-enabled cameras. Also worked on backend API
                            development using Java.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "35px",
    marginTop: "50px"
};

export default Projects;
