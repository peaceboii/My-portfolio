import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const SECTION_IDS = ['hero', 'about', 'projects', 'skills', 'contact'];

function App() {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            { threshold: [0.35, 0.55, 0.75], rootMargin: '-20% 0px -30% 0px' }
        );

        SECTION_IDS.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="site-bg">
            <Navbar activeSection={activeSection} />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    );
}

export default App;
