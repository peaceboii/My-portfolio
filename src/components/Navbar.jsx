import React from 'react';

const LINKS = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }) {
    const resumeUrl = `${import.meta.env.BASE_URL}assets/resume.pdf`;

    return (
        <header className="navbar-wrap">
            <nav className="navbar container">
                <a href="#hero" className="brand">Kumaravelu</a>

                <div className="nav-links">
                    {LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <a className="resume-btn" href={resumeUrl} download>
                    Download Resume
                </a>
            </nav>
        </header>
    );
}
