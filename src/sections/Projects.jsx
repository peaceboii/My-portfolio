import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu } from 'lucide-react';

const projects = [
    {
        title: 'NewsBot Data Aggregator',
        description: 'Full-stack Django-based news aggregation platform with authentication, caching, and real-time updates. Integrated NewsAPI and GNews API for data feeds.',
        tags: ['Django', 'SQLite', 'REST APIs', 'Render'],
        demo: 'https://newsbot-gzlm.onrender.com',
        github: 'https://github.com/peaceboii/NewsBot.git',
        color: 'primary'
    },
    {
        title: 'Finance_QA_Engine AI',
        description: 'AI-based chatbot trained on financial question-answer datasets. Fine-tuned GPT-2 Medium using LoRA. Low-latency inference deployment via Streamlit.',
        tags: ['Python', 'Transformers', 'LoRA', 'Streamlit'],
        demo: 'https://gpt2-finance.streamlit.app',
        github: 'https://github.com/peaceboii/gpt2-finance-qa.git',
        color: 'secondary'
    },
    {
        title: 'Personal Finance Pipeline',
        description: 'Full-stack application for managing personal income and expenses. Features REST API backend, PostgreSQL database, and Supabase auth workflow.',
        tags: ['Flask', 'PostgreSQL', 'Supabase', 'Render'],
        demo: null,
        github: 'https://github.com/peaceboii/personal-finance-tracker',
        color: 'primary'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 border-l-4 border-cyan-500 pl-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-1"
                    >
                        Research Modules
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-100 tracking-tight"
                    >
                        Deployed Architecture
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => {
                        const isPrimary = project.color === 'primary';
                        const glowClass = `hover:glow-${project.color} border-${isPrimary ? 'blue' : 'cyan'}-500/30`;
                        const textClass = `text-${isPrimary ? 'blue' : 'cyan'}-400`;
                        const bgClass = `bg-${isPrimary ? 'blue' : 'cyan'}-500/10`;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`flex flex-col h-full lab-panel p-8 border ${glowClass} transition-all duration-300 relative group`}
                            >
                                {/* Simulated Chart Line Background for Research Lab Vibe */}
                                <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                                        <path d={`M0,100 L0,${60 + Math.random() * 20} Q${25},${30 + Math.random() * 40} ${50},${50 + Math.random() * 30} T100,${30 + Math.random() * 20} L100,100 Z`} fill="currentColor" className={textClass} />
                                    </svg>
                                </div>

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className={`p-2 ${bgClass} rounded-lg border border-${isPrimary ? 'blue' : 'cyan'}-500/30 shadow-[0_0_10px_currentColor] ${textClass}`}>
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-300 transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noreferrer" className={`text-slate-500 hover:${textClass} transition-colors`}>
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold text-slate-100 mb-3 relative z-10 tracking-tight">{project.title}</h4>
                                <p className="text-sm font-medium text-slate-400 leading-relaxed mb-6 flex-grow relative z-10">{project.description}</p>

                                <ul className="flex flex-wrap gap-2 mt-auto relative z-10">
                                    {project.tags.map((tag, tIdx) => (
                                        <li key={tIdx} className={`px-2 py-1 bg-slate-800 border border-slate-700 rounded-md text-[10px] font-bold uppercase tracking-wider text-slate-300`}>
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
