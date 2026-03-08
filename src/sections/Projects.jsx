import React from 'react';
import HologramCard from '../components/HologramCard';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Stock Screener App',
        description: 'A comprehensive platform for scanning and analyzing stock market data using custom parameters and technical indicators.',
        tags: ['Python', 'React', 'FastAPI', 'Pandas'],
        glow: 'cyan'
    },
    {
        title: 'Forex Intelligence Bot',
        description: 'An automated trading bot that analyzes FX pairs and executes trades based on quantitative momentum strategies.',
        tags: ['Python', 'MetaTrader API', 'Machine Learning'],
        glow: 'purple'
    },
    {
        title: 'AI Trading Assistant',
        description: 'An LLM-powered assistant tailored to answer market queries, summarize financial news, and optimize portfolio allocation.',
        tags: ['LangChain', 'OpenAI API', 'React', 'TypeScript'],
        glow: 'cyan'
    },
    {
        title: 'Trading Mentorship Platform',
        description: 'An educational dashboard providing courses, real-time trade signals, and community chat for aspiring traders.',
        tags: ['Next.js', 'Tailwind', 'PostgreSQL'],
        glow: 'purple'
    },
    {
        title: 'SaaS Tools for Businesses',
        description: 'A suite of multi-tenant microservices designed to handle invoicing, customer analytics, and data reporting.',
        tags: ['Python', 'Docker', 'AWS', 'React'],
        glow: 'cyan'
    }
];

export default function Projects() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 py-20 relative w-full max-w-6xl mx-auto z-10">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-16 text-glow-purple"
            >
                <span className="text-purple-400">03.</span> sys.projects.mount()
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <HologramCard key={index} delay={index * 0.15} hoverGlow={project.glow}>
                        <div className="flex flex-col h-full h-min-[280px]">
                            <div className="flex justify-between items-start mb-6 text-slate-400">
                                <div className="text-4xl">📁</div>
                                <div className="flex gap-3">
                                    <a href="#" className="hover:text-cyan-400 transition-colors"><Github size={20} /></a>
                                    <a href="#" className="hover:text-cyan-400 transition-colors"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className={`text-xl font-bold mb-3 group-hover:text-${project.glow}-400 transition-colors`}>
                                {project.title}
                            </h3>

                            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-2 text-xs font-mono text-slate-500 mt-auto">
                                {project.tags.map((tag, i) => (
                                    <li key={i} className="px-2 py-1 bg-slate-800/50 rounded-md border border-slate-700/50">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </HologramCard>
                ))}
            </div>
        </section>
    );
}
