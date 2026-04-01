import React from 'react';
import { motion } from 'framer-motion';
import Background from './canvas/Background';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <Background />
            
            <div className="container relative z-10 px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl pt-20"
                >
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-cyan-600 font-mono tracking-widest uppercase mb-4"
                    >
                        // Portfolio v2.0
                    </motion.p>
                    
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-slate-900">
                        I'm <span className="text-gradient">Kumaravelu</span>
                    </h1>
                    
                    <div className="text-2xl md:text-4xl text-slate-600 font-light mb-8 h-12">
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                2000,
                                'Python Enthusiast',
                                2000,
                                'FinTech Innovator',
                                2000,
                                'AI & ML Explorer',
                                2000,
                                'Backend Architect',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-slate-600 max-w-2xl mb-12 leading-relaxed"
                    >
                        Building high-performance automation systems and finance-focused tools 
                        where logic meets market psychology. Passionate about clean architecture and immersive user experiences.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-6"
                    >
                        <a 
                            href="#projects" 
                            className="group relative px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-xl shadow-cyan-500/20"
                        >
                            <span className="relative z-10">EXPLORE PROJECTS</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <a 
                            href="#contact" 
                            className="group px-8 py-4 border border-slate-300 hover:border-cyan-500 rounded-lg transition-all"
                        >
                            <span className="group-hover:text-cyan-600 transition-colors text-slate-600">GET IN TOUCH</span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-2">
                    <motion.div 
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-1 bg-cyan-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
