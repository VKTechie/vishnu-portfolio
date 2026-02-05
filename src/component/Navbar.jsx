import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6
            }
        );

        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    const handleClick = id => {
        setActive(id);
        setOpen(false);
    };

    return (
        <header className="navbar">
            <div className="nav-container">
                {/* <div className="logo">𝒱𝒦</div> */}

                <a href="#home" className="nav-logo">
                    <img src="/logo.png" alt="VK Logo" />
                </a>


                <nav className={`nav-links ${open ? "open" : ""}`}>
                    <a
                        href="#home"
                        className={active === "home" ? "active" : ""}
                        onClick={() => handleClick("home")}
                    >
                        Home
                    </a>

                    <a
                        href="#skills"
                        className={active === "skills" ? "active" : ""}
                        onClick={() => handleClick("skills")}
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className={active === "projects" ? "active" : ""}
                        onClick={() => handleClick("projects")}
                    >
                        Projects
                    </a>

                    <a
                        href="#experience"
                        className={active === "experience" ? "active" : ""}
                        onClick={() => handleClick("experience")}
                    >
                        Experience
                    </a>

                    <a
                        href="#contact"
                        className={active === "contact" ? "active" : ""}
                        onClick={() => handleClick("contact")}
                    >
                        Contact
                    </a>
                </nav>

                <div
                    className={`hamburger ${open ? "active" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
