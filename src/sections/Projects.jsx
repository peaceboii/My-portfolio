import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
    {
        title: 'NewsBot – Django Web App',
        description: 'Full-stack Django-based news aggregation platform with authentication, caching and real-time updates. Integrated NewsAPI and GNews API. Server-side caching.',
        tags: ['Django', 'SQLite', 'REST APIs', 'Render'],
        demo: 'https://newsbot-gzlm.onrender.com',
        github: 'https://github.com/peaceboii/NewsBot.git'
    },
    {
        title: 'Finance Q&A Chatbot',
        description: 'AI-based chatbot trained on financial question-answer datasets. Fine-tuned GPT-2 Medium using LoRA. Streamlit interface for real-time Q&A with low latency inference deployment.',
        tags: ['Python', 'Transformers', 'LoRA', 'Streamlit'],
        demo: 'https://gpt2-finance.streamlit.app',
        github: 'https://github.com/peaceboii/gpt2-finance-qa.git'
    },
    {
        title: 'Personal Finance Tracker',
        description: 'Full-stack application for managing personal income and expenses. Features REST API backend, PostgreSQL database, and Supabase authentication workflow.',
        tags: ['Flask', 'PostgreSQL', 'Supabase', 'Render'],
        demo: null,
        github: 'https://github.com/peaceboii/personal-finance-tracker'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2"
                    >
                        Work
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-900"
                    >
                        Featured Projects
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col h-full bg-slate-50 p-8 rounded-2xl border border-slate-100 apple-shadow transition-all duration-300 hover:apple-shadow-hover"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-blue-100 rounded-xl">
                                    <Folder className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                                            <Github size={22} />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                                            <ExternalLink size={22} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h4>
                            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{project.description}</p>

                            <ul className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, tIdx) => (
                                    <li key={tIdx} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
