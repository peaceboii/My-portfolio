import React, { Suspense, lazy } from 'react';

const Avatar = lazy(() => import('./Avatar'));

export default function Hero() {
    const resumeUrl = `${import.meta.env.BASE_URL}assets/resume.pdf`;

    return (
        <section id="hero" className="section hero-section">
            <div className="container hero-grid">
                <div className="hero-content">
                    <p className="eyebrow">Full Stack Developer</p>
                    <h1 className="hero-title">Kumaravelu</h1>
                    <h2 className="hero-subtitle">Full Stack Developer | Python & FinTech</h2>
                    <p className="hero-description">
                        I build production-ready web apps, automation systems, and finance-focused tools with a strong focus on performance,
                        clean architecture, and user experience.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="primary-btn">View Projects</a>
                        <a href={resumeUrl} download className="secondary-btn">Download Resume</a>
                    </div>
                </div>

                <div className="avatar-shell" aria-label="3D developer avatar">
                    <Suspense fallback={<div className="avatar-loading">Loading 3D avatar...</div>}>
                        <Avatar />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
