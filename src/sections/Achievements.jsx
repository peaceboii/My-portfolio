import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText } from 'lucide-react';

const presentations = [
    "Cyber Forensics for Real World Applications (2022)",
    "Decentralized Voting System (2023)",
    "Smart Traffic Management System (2024)"
];

export default function Achievements() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2"
                    >
                        Recognition
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-900"
                    >
                        Achievements & Papers
                    </motion.h3>
                </div>

                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-6 rounded-xl border border-slate-100 flex items-center gap-4 apple-shadow"
                    >
                        <div className="p-4 bg-yellow-50 rounded-full">
                            <Award className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900">PLI Blockathon India</h4>
                            <p className="text-slate-500">2022</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white p-8 rounded-xl border border-slate-100 apple-shadow"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-blue-50 rounded-full">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900">Paper Presentations</h4>
                        </div>

                        <ul className="space-y-4 pl-4 md:pl-16">
                            {presentations.map((paper, idx) => (
                                <li key={idx} className="flex relative items-center text-slate-600">
                                    <div className="absolute -left-6 w-2 h-2 rounded-full bg-blue-400" />
                                    <span className="text-md">{paper}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
