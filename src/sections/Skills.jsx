import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "LANGUAGES",
        items: ["Python", "HTML", "CSS"],
        color: "green"
    },
    {
        title: "FRAMEWORKS",
        items: ["Flask", "Django"],
        color: "blue"
    },
    {
        title: "DATABASES",
        items: ["PostgreSQL", "SQLite"],
        color: "cyan"
    },
    {
        title: "TOOLS",
        items: ["Git", "GitHub", "Linux", "Render", "PgAdmin"],
        color: "green"
    },
    {
        title: "CONCEPTS",
        items: [
            "REST APIs",
            "Authentication",
            "Authorization",
            "CRUD",
            "Object Oriented Programming",
            "Backend Systems"
        ],
        color: "blue"
    }
];

export default function Skills() {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 border-l-2 border-green-500 pl-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-mono tracking-widest text-green-500 uppercase mb-1"
                    >
                        [ SYSTEM_CAPABILITIES ]
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-100"
                    >
                        Technical Stack
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => {
                        const glowClass = `hover:glow-${category.color} border-${category.color}-500/20`;
                        const textClass = `text-${category.color}-400`;
                        const dotClass = `bg-${category.color}-400`;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`terminal-panel p-6 border ${glowClass} transition-all duration-300 relative overflow-hidden`}
                            >
                                {/* Decorative corner markers */}
                                <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-${category.color}-500/50`} />
                                <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-${category.color}-500/50`} />
                                <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-${category.color}-500/50`} />
                                <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-${category.color}-500/50`} />

                                <div className="flex justify-between items-center mb-6 border-b border-slate-700/50 pb-2">
                                    <h4 className={`text-sm font-mono tracking-wider ${textClass}`}>{category.title}</h4>
                                    <span className="text-xs font-mono text-slate-600">v{idx + 1}.0</span>
                                </div>

                                <ul className="space-y-3 font-mono text-sm">
                                    {category.items.map((item, idy) => (
                                        <li key={idy} className="flex items-center text-slate-300">
                                            <span className={`w-1 h-1 rounded-sm ${dotClass} mr-3 shadow-[0_0_5px_currentColor]`} />
                                            <span className="hover:text-white transition-colors cursor-default">{item}</span>
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
