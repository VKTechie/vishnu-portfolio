import React from "react";

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h2>Skills</h2>

                <div style={grid}>
                    <div className="card">
                        <h3>Frontend</h3>
                        <p>HTML5, CSS3, JavaScript (ES6+), React.js</p>
                    </div>

                    <div className="card">
                        <h3>Backend</h3>
                        <p>Java, REST API Development</p>
                    </div>

                    <div className="card">
                        <h3>Other</h3>
                        <p>Git, Responsive Design, Performance Optimization</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginTop: "40px"
};

export default Skills;
