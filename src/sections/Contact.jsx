import React from 'react';
import TerminalWindow from '../components/TerminalWindow';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Contact() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20 relative w-full max-w-4xl mx-auto z-10">
            <div className="w-full flex-col flex items-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12 text-glow-purple"
                >
                    <span className="text-purple-400">05.</span> sys.network.connect()
                </motion.h2>

                <TerminalWindow title="user@core:~/contact.sh" delay={0.2}>
                    <p className="mb-6 text-slate-400">
                        [SYS_MSG] Connecting to remote server... <span className="text-green-400">SUCCESS</span>
                        <br />
                        [SYS_MSG] Loading communication protocols...
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
                        <a
                            href="mailto:example@email.com"
                            className="flex items-center gap-3 px-6 py-3 border border-cyan-500/30 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-100 transition-colors font-mono hover:glow-cyan"
                        >
                            <Mail size={18} className="text-cyan-400" />
                            <span>Email</span>
                        </a>

                        <a
                            href="https://github.com"
                            target="_blank" rel="noreferrer"
                            className="flex items-center gap-3 px-6 py-3 border border-purple-500/30 rounded bg-purple-500/10 hover:bg-purple-500/20 text-purple-100 transition-colors font-mono hover:glow-purple"
                        >
                            <Github size={18} className="text-purple-400" />
                            <span>GitHub</span>
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank" rel="noreferrer"
                            className="flex items-center gap-3 px-6 py-3 border border-cyan-500/30 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-100 transition-colors font-mono hover:glow-cyan"
                        >
                            <Linkedin size={18} className="text-cyan-400" />
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-3 px-6 py-3 border border-green-500/30 rounded bg-green-500/10 hover:bg-green-500/20 text-green-100 transition-colors font-mono hover:shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                        >
                            <Download size={18} className="text-green-400" />
                            <span>Download.Resume</span>
                        </a>
                    </div>

                    <div className="mt-12 text-slate-500 text-xs text-center border-t border-slate-800 pt-6">
                        <p>&gt; Connection established.</p>
                        <p className="mt-2 text-cyan-400 animate-pulse">_</p>
                    </div>
                </TerminalWindow>
            </div>
        </section>
    );
}
