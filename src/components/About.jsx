import React from 'react';

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <p className="section-tag">About</p>
                <h2 className="section-title">Building practical products with clean code</h2>
                <p className="section-text">
                    I work across frontend, backend, and automation workflows. My focus is creating reliable applications that solve real
                    business problems, especially in data-heavy and finance-related domains.
                </p>
                <div className="info-grid">
                    <article className="info-card">
                        <h3>Backend</h3>
                        <p>Python, Node.js, REST APIs, background jobs, and integrations.</p>
                    </article>
                    <article className="info-card">
                        <h3>Frontend</h3>
                        <p>React, responsive UI systems, accessibility, and smooth interactions.</p>
                    </article>
                    <article className="info-card">
                        <h3>FinTech Focus</h3>
                        <p>Trading automation, market data pipelines, and analytics tooling.</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
