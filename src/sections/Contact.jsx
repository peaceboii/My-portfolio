import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-24 bg-quant-bg border-t border-slate-800 relative z-10 font-mono">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="terminal-panel p-8 md:p-12"
                >
                    <div className="flex items-center gap-2 mb-6 text-green-500 border-b border-slate-800 pb-4">
                        <Terminal size={20} />
                        <span className="text-sm tracking-wider">INITIATE_CONNECTION</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">Ping Network Node</h2>
                    <p className="text-slate-400 mb-10">
                        Open for new connections regarding backend infrastructure, financial systems, or full stack roles.
                    </p>

                    <div className="flex flex-col gap-4">
                        <a
                            href="mailto:kumaravelu2003@gmail.com"
                            className="flex items-center justify-between px-6 py-4 bg-slate-900 border border-slate-800 hover:border-green-500/50 hover:bg-slate-800/50 rounded-lg transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-green-500" />
                                <span className="text-slate-300 group-hover:text-white transition-colors">kumaravelu2003@gmail.com</span>
                            </div>
                            <span className="text-xs text-slate-600 hidden md:block">PROTOCOL: SMTP</span>
                        </a>

                        <a
                            href="https://github.com/peaceboii"
                            target="_blank" rel="noreferrer"
                            className="flex items-center justify-between px-6 py-4 bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 rounded-lg transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <Github className="w-5 h-5 text-blue-500" />
                                <span className="text-slate-300 group-hover:text-white transition-colors">github.com/peaceboii</span>
                            </div>
                            <span className="text-xs text-slate-600 hidden md:block">NODE: REPOSITORY</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/kumaravel-raj"
                            target="_blank" rel="noreferrer"
                            className="flex items-center justify-between px-6 py-4 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/50 rounded-lg transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <Linkedin className="w-5 h-5 text-cyan-500" />
                                <span className="text-slate-300 group-hover:text-white transition-colors">linkedin.com/in/kumaravel-raj</span>
                            </div>
                            <span className="text-xs text-slate-600 hidden md:block">NODE: PROFESSIONAL</span>
                        </a>
                    </div>
                </motion.div>

                <div className="mt-12 text-center text-xs text-slate-600 font-mono flex flex-col items-center gap-2">
                    <p>SYSTEM_UPTIME: {(new Date().getFullYear() * 365 * 24).toLocaleString()} HOURS</p>
                    <div className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>Connection Established</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
