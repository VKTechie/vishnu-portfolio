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
    description: "Enterprise Resource Planning system used to manage institutional operations, workflows, and reports. Developed responsive React UI modules.",
    tags: ["React", "Enterprise", "UI"]
  },
  {
    title: "Online Application",
    icon: <SchoolIcon />,
    description: "A web-based application platform where students can apply for courses, complete payments, and track their application status.",
    tags: ["React", "Payment", "Real-time"]
  },
  {
    title: "Centralized Data",
    icon: <StorageIcon />,
    description: "Centralized system for staff to enter and manage yearly academic reports with optimized UI performance and API-driven dashboards.",
    tags: ["Dashboard", "Reports", "Optimization"]
  },
  {
    title: "Digital Evaluation",
    icon: <FactCheckIcon />,
    description: "Online evaluation platform where staff can correct answer sheets digitally, including revaluation workflows.",
    tags: ["Platform", "Digital", "Workflow"]
  },
  {
    title: "AI Attendance",
    icon: <CameraAltIcon />,
    description: "AI-based attendance system using smart cameras. Contributed to backend API development in Java for processing data.",
    tags: ["AI", "Java", "API"]
  },
  {
    title: "Student Portal",
    icon: <PersonIcon />,
    description: "Student self-service portal to view attendance, class periods, exam results, and track leave approval status.",
    tags: ["Portal", "Student", "UX"]
  }
];

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="kinetic-text section-title">
                    The <span>Legacy</span>
                </h2>

                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="bento-card reveal-text" style={{ padding: '0', overflow: 'hidden', height: '100%' }}>
                            <div style={{ height: '220px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ transform: 'scale(1.5)', opacity: 0.5 }}>{project.icon}</div>
                            </div>
                            <div style={{ padding: '30px' }}>
                                <h3 style={{ fontFamily: 'Unbounded', fontSize: '18px', marginBottom: '10px' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>{project.description}</p>
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    {(project.tags || []).map(tag => (
                                        <span key={tag} style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--gold-primary)', padding: '4px 10px', border: '1px solid var(--border-gold-subtle)', borderRadius: '4px' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
