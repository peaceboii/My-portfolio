import React from 'react';

const PROJECTS = [
    {
        title: 'Finance Q&A ChatBot',
        description: 'Conversational assistant for financial questions using context-aware NLP pipelines.',
        stack: 'Python, NLP, React',
    },
    {
        title: 'Forex News Scraper Bot',
        description: 'Automated event extraction from macroeconomic sources with structured feed output.',
        stack: 'Python, BeautifulSoup, Node.js',
    },
    {
        title: 'Algorithmic Trading Bot',
        description: 'Rule-based strategy execution engine with risk controls and performance tracking.',
        stack: 'Python, Pandas, PineScript',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section section-muted">
            <div className="container">
                <p className="section-tag">Projects</p>
                <h2 className="section-title">Selected work</h2>
                <div className="projects-grid">
                    {PROJECTS.map((project) => (
                        <article key={project.title} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <span>{project.stack}</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
