import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import StorageIcon from "@mui/icons-material/Storage";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PersonIcon from "@mui/icons-material/Person";

const projects = [
  {
    title: "ERP System",
    icon: <BusinessIcon />,
    desc: "Enterprise Resource Planning system used to manage institutional operations, workflows, and reports. Developed responsive React UI modules and integrated multiple backend APIs."
  },
  {
    title: "Online Application",
    icon: <SchoolIcon />,
    desc: "A web-based application platform where students can apply for courses, complete payments, and track their application status in real time."
  },
  {
    title: "Centralized Data Management",
    icon: <StorageIcon />,
    desc: "Centralized system for staff to enter and manage yearly academic and administrative reports with optimized UI performance and API-driven dashboards."
  },
  {
    title: "Digital Evaluation System",
    icon: <FactCheckIcon />,
    desc: "Online evaluation platform where staff can correct answer sheets digitally, including revaluation workflows and real-time evaluation status."
  },
  {
    title: "AI Attendance Camera",
    icon: <CameraAltIcon />,
    desc: "AI-based attendance system using smart cameras. Contributed to backend API development in Java for processing, storing, and managing attendance data captured through AI-enabled cameras."
  },
  {
    title: "Student Login Portal",
    icon: <PersonIcon />,
    desc: "Student self-service portal to view attendance, class periods, exam results, apply for leave, and track leave approval status."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">
        Projects <span>I’ve Worked On</span>
      </h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card fade-up" key={i}>
            <div className="project-icon">
              {p.icon}
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
