import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "LANGUAGES",
        items: ["Python", "HTML", "CSS"],
        color: "primary"
    },
    {
        title: "FRAMEWORKS",
        items: ["Flask", "Django"],
        color: "secondary"
    },
    {
        title: "DATABASES",
        items: ["PostgreSQL", "SQLite"],
        color: "primary"
    },
    {
        title: "TOOLS",
        items: ["Git", "GitHub", "Linux", "Render", "PgAdmin"],
        color: "secondary"
    },
    {
        title: "CONCEPTS",
        items: [
            "REST APIs",
            "CRUD operations",
            "Object Oriented Programming",
            "Authentication and Authorization"
        ],
        color: "primary"
    }
];

export default function Skills() {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 border-l-4 border-blue-600 pl-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-1"
                    >
                        System Parameters
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-100 tracking-tight"
                    >
                        Core Competencies
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => {
                        const glowClass = `hover:glow-${category.color} border-${category.color === 'primary' ? 'blue' : 'cyan'}-500/20`;
                        const textClass = `text-${category.color === 'primary' ? 'blue' : 'cyan'}-400`;
                        const dotClass = `bg-${category.color === 'primary' ? 'blue' : 'cyan'}-400`;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`lab-panel p-6 border ${glowClass} transition-all duration-300 relative overflow-hidden group`}
                            >
                                {/* Background glowing orb element */}
                                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity bg-${category.color === 'primary' ? 'blue' : 'cyan'}-500`} />

                                <div className="flex justify-between items-center mb-6 pb-2 border-b border-slate-700/50 relative z-10">
                                    <h4 className={`text-sm font-bold tracking-wider ${textClass}`}>{category.title}</h4>
                                </div>

                                <ul className="space-y-3 font-medium text-sm relative z-10">
                                    {category.items.map((item, idy) => (
                                        <li key={idy} className="flex items-center text-slate-300">
                                            <span className={`w-1.5 h-1.5 rounded-full ${dotClass} mr-3 shadow-[0_0_5px_currentColor]`} />
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
