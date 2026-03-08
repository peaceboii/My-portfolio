import React from 'react';
import { motion } from 'framer-motion';

const journey = [
    {
        year: '2023 - Present',
        role: 'Quant Developer / Algorithmic Trader',
        details: 'Building high-frequency trading systems, developing momentum strategies for FX pairs, and utilizing Pandas for backtesting.',
        color: 'purple'
    },
    {
        year: '2021 - 2023',
        role: 'Full Stack Python Developer',
        details: 'Developed robust scalable APIs using FastAPI and Django. Built responsive frontends with React for FinTech applications.',
        color: 'cyan'
    },
    {
        year: '2019 - 2021',
        role: 'AI & Machine Learning Engineer',
        details: 'Trained predictive models to forecast market trends. Integrated OpenAI endpoints to develop AI assistants and chat bots.',
        color: 'purple'
    }
];

export default function Experience() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 py-20 relative w-full max-w-4xl mx-auto z-10">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-16 text-glow-cyan"
            >
                <span className="text-cyan-400">04.</span> sys.timeline.execute()
            </motion.h2>

            <div className="relative border-l border-cyan-500/30 ml-4 md:ml-0 md:pl-8 space-y-12">
                {journey.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative"
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[53px] md:-left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-${item.color}-400 shadow-[0_0_10px_rgba(0,243,255,0.5)] z-10`} />

                        <div className={`border border-${item.color}-500/30 blur-backdrop p-6 rounded-xl glass-panel hover:glow-${item.color} transition-all duration-300`}>
                            <span className={`text-sm font-mono text-${item.color}-300 mb-2 block`}>{item.year}</span>
                            <h3 className="text-xl font-bold text-slate-100 mb-2">{item.role}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.details}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
