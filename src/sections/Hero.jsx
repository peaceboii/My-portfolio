import React from 'react';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from '../three/Scene';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto">
            {/* Left side: Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-left z-10 md:pr-12"
            >
                <div className="inline-block px-3 py-1 mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full text-blue-400 font-medium text-xs uppercase tracking-widest shadow-[0_0_10px_rgba(37,99,235,0.2)]">
                    AI Research Lab | Node Active
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-2 tracking-tight">
                    Kumaravelu R
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-cyan-500 mb-6">
                    Python Developer <span className="text-slate-600">|</span> Backend Engineer
                </h2>

                <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
                    Entry-level software developer specializing in Python backend systems and building scalable financial and data-driven applications.
                </p>

                <div className="flex flex-wrap gap-4 font-medium">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
                    >
                        View Projects
                    </a>
                    <a
                        href="/assets/resume.pdf"
                        download
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors"
                    >
                        Download Resume
                    </a>
                </div>
            </motion.div>

            {/* Right side: 3D Canvas */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex-1 w-full h-[500px] md:h-[600px] relative mt-12 md:mt-0 glow-primary rounded-2xl overflow-hidden bg-slate-900/60 backdrop-blur-md border border-blue-500/20"
            >
                <Canvas camera={{ position: [0, 1, 6], fov: 45 }} className="w-full h-full">
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </motion.div>
        </section>
    );
}
