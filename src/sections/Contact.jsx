import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-24 bg-slate-900 border-t border-slate-800 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-slate-400 mb-12 max-w-xl mx-auto">
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="tel:+917010920699"
                            className="flex items-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors min-w-[200px] justify-center"
                        >
                            <Phone className="w-5 h-5 text-blue-400" />
                            <span className="font-medium">+91 7010920699</span>
                        </a>

                        <a
                            href="mailto:kumaravelu2003@gmail.com"
                            className="flex items-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors min-w-[200px] justify-center"
                        >
                            <Mail className="w-5 h-5 text-blue-400" />
                            <span className="font-medium">Email Me</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/kumaravel-raj"
                            target="_blank" rel="noreferrer"
                            className="flex items-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors min-w-[200px] justify-center"
                        >
                            <Linkedin className="w-5 h-5 text-blue-400" />
                            <span className="font-medium">LinkedIn</span>
                        </a>

                        <a
                            href="https://github.com/peaceboii"
                            target="_blank" rel="noreferrer"
                            className="flex items-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors min-w-[200px] justify-center"
                        >
                            <Github className="w-5 h-5 text-blue-400" />
                            <span className="font-medium">GitHub</span>
                        </a>
                    </div>
                </motion.div>

                <div className="mt-20 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
                    <p>© {new Date().getFullYear()} Kumaravelu R. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Built with React & Three.js</p>
                </div>
            </div>
        </section>
    );
}
