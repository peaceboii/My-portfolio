import React from 'react';

const SKILLS = {
    Languages: ['Python', 'JavaScript', 'SQL'],
    Frontend: ['React', 'Tailwind CSS', 'Framer Motion'],
    Backend: ['Node.js', 'Express', 'Django'],
    Tools: ['Git', 'Vite', 'Docker', 'Postman'],
};

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <p className="section-tag">Skills</p>
                <h2 className="section-title">Tech stack</h2>
                <div className="skills-grid">
                    {Object.entries(SKILLS).map(([category, items]) => (
                        <article key={category} className="skill-card">
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
