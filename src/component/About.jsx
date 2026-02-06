import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import ApiIcon from "@mui/icons-material/Api";
import CoffeeIcon from "@mui/icons-material/Coffee";
import SpeedIcon from "@mui/icons-material/Speed";

const skills = [
    { name: "React", icon: <CodeIcon /> },
    { name: "JavaScript", icon: <JavascriptIcon /> },
    { name: "HTML", icon: <HtmlIcon /> },
    { name: "CSS", icon: <CssIcon /> },
    { name: "REST APIs", icon: <ApiIcon /> },
    { name: "Java", icon: <CoffeeIcon /> },
    { name: "Performance Optimization", icon: <SpeedIcon /> }
];

export default function About() {
    return (
        <section id="about" className="about">
            <h2 className="section-title">
                About <span>Me</span>
            </h2>

            <div className="about-card glass fade-up">
                <p className="about-text">
                    Software Developer with <strong>4.5+ years of experience</strong>
                    , specializing in frontend development, API integration, and
                    performance-optimized UI. Experienced in building scalable React
                    applications and developing backend APIs using Java.
                </p>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">
                                {skill.icon}
                            </div>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
