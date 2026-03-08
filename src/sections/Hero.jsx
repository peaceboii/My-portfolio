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
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-2">
                    Kumaravelu R
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
                    Python Developer
                </h2>

                <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                    Entry-level software developer specializing in Python and backend development
                    with experience building and deploying full-stack applications.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                    >
                        View Projects
                    </a>
                    <a
                        href="/assets/resume.pdf"
                        download
                        className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
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
                className="flex-1 w-full h-[500px] md:h-[600px] relative mt-12 md:mt-0"
            >
                <Canvas camera={{ position: [0, 1, 5], fov: 45 }} className="w-full h-full rounded-2xl">
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </motion.div>
        </section>
    );
}
