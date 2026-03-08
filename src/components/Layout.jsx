import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import TradingBackground from './TradingBackground';

export default function Layout() {
    return (
        <main className="w-full relative min-h-screen">
            <TradingBackground />
            <div className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </main>
    );
}
