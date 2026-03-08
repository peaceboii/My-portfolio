import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lab-panel p-8 md:p-12 relative overflow-hidden group"
                >
                    {/* Decorative background grid and edge glow */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-colors duration-700" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8 border-b border-slate-700/50 pb-4">
                            <span className="text-sm font-bold tracking-widest text-cyan-500 uppercase">
                                Initialize Profile
                            </span>
                        </div>

                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                            <span className="text-blue-400 font-medium">Entry-level Python developer</span> focused on
                            backend systems, REST APIs, and financial applications. Experienced in building <span className="text-cyan-400">full-stack applications</span> and
                            deploying services using modern cloud platforms.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
