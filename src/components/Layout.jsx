import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';

export default function Layout() {
    return (
        <main className="w-full min-h-screen text-slate-200">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </main>
    );
}
