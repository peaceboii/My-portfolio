import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Achievements from '../sections/Achievements';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

export default function Layout() {
    return (
        <main className="w-full relative">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Education />
            <Contact />
        </main>
    );
}
