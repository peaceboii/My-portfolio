import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
                        About Me
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8 leading-tight">
                        Building robust backends and clean user interfaces.
                    </h3>
                    <p className="text-xl text-slate-600 leading-relaxed mx-auto">
                        Entry-level Software Developer specializing in Python and backend development
                        with practical experience building and deploying full-stack applications.
                        Skilled in REST API development, SQL databases, version control, and cloud
                        deployment with focus on clean and maintainable code.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
