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
                    className="terminal-panel p-8 md:p-12 relative overflow-hidden group"
                >
                    {/* Decorative background grid and edge glow */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8 border-b border-slate-700/50 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <span className="ml-2 font-mono text-sm text-slate-500">~/profile/about_me.sh</span>
                        </div>

                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-mono">
                            <span className="text-green-400">Entry-level Python developer</span> specializing in
                            backend systems and financial applications. Experienced in building <span className="text-blue-400">REST APIs</span>,
                            full-stack applications, and deploying scalable services on <span className="text-cyan-400">cloud platforms</span>.
                        </p>

                        <div className="mt-8 flex items-center gap-2 font-mono text-green-500">
                            <span>root@quant-lab:~#</span>
                            <span className="w-2 h-5 bg-green-500 animate-pulse inline-block" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
