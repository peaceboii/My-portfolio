import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/sections/Experience';
import Stats from './components/sections/Stats';
import Contact from './components/Contact';
import SmoothScroll from './components/ui/SmoothScroll';
import CustomCursor from './components/ui/CustomCursor';
import { AnimatePresence } from 'framer-motion';

function App() {
    return (
        <SmoothScroll>
            <div className="bg-slate-950 text-slate-50 min-h-screen selection:bg-cyan-500/30">
                <CustomCursor />
                <Navbar />
                <main>
                    <AnimatePresence mode="wait">
                        <Hero />
                        <About />
                        <Stats />
                        <Skills />
                        <Projects />
                        <Experience />
                        <Contact />
                    </AnimatePresence>
                </main>
                
                <footer className="py-12 border-t border-slate-900 text-center text-slate-500 text-sm font-mono tracking-widest">
                   &copy; 2026 KUMARAVELU // ALL SYSTEMS OPERATIONAL
                </footer>
            </div>
        </SmoothScroll>
    );
}

export default App;
