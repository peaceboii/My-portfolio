import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="section section-muted">
            <div className="container contact-shell">
                <p className="section-tag">Contact</p>
                <h2 className="section-title">Let's build something useful</h2>
                <p className="section-text">Open to full-time roles, freelance projects, and technical collaborations.</p>

                <div className="contact-card">
                    <a href="mailto:kumaravelu@example.com">kumaravelu@example.com</a>
                    <a href="https://github.com/peaceboii" target="_blank" rel="noreferrer">github.com/peaceboii</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/kumaravelu</a>
                </div>
            </div>
        </section>
    );
}
