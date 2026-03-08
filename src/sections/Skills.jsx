import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, LayoutTemplate, PenTool, Globe, Server } from 'lucide-react';

const skillCategories = [
    {
        title: "Languages",
        icon: <Code2 className="w-6 h-6 text-blue-600" />,
        items: ["Python", "HTML", "CSS"]
    },
    {
        title: "Frameworks",
        icon: <LayoutTemplate className="w-6 h-6 text-blue-600" />,
        items: ["Flask", "Django"]
    },
    {
        title: "Databases",
        icon: <Database className="w-6 h-6 text-blue-600" />,
        items: ["PostgreSQL", "SQLite"]
    },
    {
        title: "Tools",
        icon: <PenTool className="w-6 h-6 text-blue-600" />,
        items: ["Git", "GitHub", "Linux", "Render", "PgAdmin"]
    },
    {
        title: "Concepts",
        icon: <Server className="w-6 h-6 text-blue-600" />,
        items: [
            "REST APIs",
            "CRUD operations",
            "Object Oriented Programming",
            "Authentication and Authorization",
            "MVC architecture",
            "Backend development"
        ]
    }
];

export default function Skills() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2"
                    >
                        Expertise
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-900"
                    >
                        Technical Skills
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl apple-shadow hover:apple-shadow-hover transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 rounded-xl">
                                    {category.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-slate-900">{category.title}</h4>
                            </div>
                            <ul className="space-y-3">
                                {category.items.map((item, idy) => (
                                    <li key={idy} className="flex items-center text-slate-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 shrink-0" />
                                        <span>{item}</span>
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
