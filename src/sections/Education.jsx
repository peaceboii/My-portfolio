import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

export default function Education() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2"
                    >
                        Academic Background
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-900"
                    >
                        Education
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-100 apple-shadow hover:apple-shadow-hover transition-shadow"
                    >
                        <div className="mb-6 flex">
                            <div className="p-4 bg-blue-100 rounded-xl">
                                <GraduationCap className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">SNS College of Engineering</h4>
                        <p className="text-blue-600 font-medium mb-4">Bachelor of Engineering</p>
                        <p className="text-slate-600 mb-4">Computer Science (IoT and Cyber Security)</p>
                        <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                            2021 – 2025
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-100 apple-shadow hover:apple-shadow-hover transition-shadow"
                    >
                        <div className="mb-6 flex">
                            <div className="p-4 bg-indigo-100 rounded-xl">
                                <BookOpen className="w-8 h-8 text-indigo-600" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Karaikudi Maharishi Vidhya Mandir School</h4>
                        <p className="text-indigo-600 font-medium mb-4">Higher Secondary Education</p>
                        <p className="text-slate-600">Foundation in Mathematics and Computer Science</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
