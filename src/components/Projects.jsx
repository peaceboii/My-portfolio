import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Briefcase } from 'lucide-react';

const projects = [
    {
        id: 1,
        name: 'Finance Q&A ChatBot',
        description: 'An intelligent conversational assistant designed for financial reasoning with contextual NLP and fast UI responses.',
        tech: ['Python', 'NLP', 'React'],
        github: '#',
        live: '#',
    },
    {
        id: 2,
        name: 'Forex News Scraper Bot',
        description: 'A resilient data pipeline collecting and structuring high-impact economic events into actionable feed summaries.',
        tech: ['Python', 'BeautifulSoup', 'Node.js'],
        github: '#',
        live: '#',
    },
    {
        id: 3,
        name: 'Algorithmic Trading Bot',
        description: 'A volatility-aware trading bot that evaluates momentum signals and executes rule-based strategies with risk controls.',
        tech: ['Python', 'Pandas', 'PineScript'],
        github: '#',
        live: '#',
    }
];

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-4 max-h-[62vh] overflow-y-auto pr-2"
        >
            <h2 className="text-3xl font-space font-bold text-white mb-2 flex items-center gap-3 sticky top-0 bg-sapphire-night/70 backdrop-blur-md py-2 z-10">
                <Briefcase className="text-sapphire-mist" /> Projects
            </h2>

            <div className="flex flex-col gap-4 pb-4 pointer-events-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="glass-panel p-5 rounded-2xl hover:border-sapphire-frost/45 transition-colors group"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ y: -6, scale: 1.01 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sapphire-frost transition-colors">{project.name}</h3>
                        <p className="text-sm text-sapphire-frost/75 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((t) => (
                                <span key={t} className="text-xs px-2 py-1 rounded bg-sapphire-abyss/35 text-sapphire-frost border border-sapphire-frost/25">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <a href={project.github} className="flex items-center gap-1 text-xs text-sapphire-frost/80 hover:text-white transition-colors">
                                <Github size={14} /> GitHub
                            </a>
                            <a href={project.live} className="flex items-center gap-1 text-xs text-sapphire-frost hover:text-white transition-colors">
                                <ExternalLink size={14} /> Live Demo
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
