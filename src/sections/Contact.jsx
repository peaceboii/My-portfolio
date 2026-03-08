import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section className="py-24 bg-lab-bg relative z-10">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lab-panel p-8 md:p-12 border-t-4 border-t-blue-600"
                >
                    <div className="flex flex-col gap-6 font-mono text-sm">
                        {/* Terminal Command 1 */}
                        <div className="group">
                            <div className="text-blue-500 mb-2 font-bold tracking-wider">
                                <span className="text-slate-500 mr-2">root@lab:~#</span> contact --email
                            </div>
                            <div className="pl-4 border-l-2 border-slate-800 py-2">
                                <a href="mailto:kumaravelu2003@gmail.com" className="text-slate-300 hover:text-white hover:text-glow-primary transition-all">
                                    kumaravelu2003@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Terminal Command 2 */}
                        <div className="group">
                            <div className="text-cyan-500 mb-2 font-bold tracking-wider">
                                <span className="text-slate-500 mr-2">root@lab:~#</span> contact --github
                            </div>
                            <div className="pl-4 border-l-2 border-slate-800 py-2">
                                <a href="https://github.com/peaceboii" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white hover:text-glow-secondary transition-all">
                                    github.com/peaceboii
                                </a>
                            </div>
                        </div>

                        {/* Terminal Command 3 */}
                        <div className="group">
                            <div className="text-blue-500 mb-2 font-bold tracking-wider">
                                <span className="text-slate-500 mr-2">root@lab:~#</span> contact --linkedin
                            </div>
                            <div className="pl-4 border-l-2 border-slate-800 py-2">
                                <a href="https://linkedin.com/in/kumaravel-raj" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white hover:text-glow-primary transition-all">
                                    linkedin.com/in/kumaravel-raj
                                </a>
                            </div>
                        </div>

                        {/* Blinking Cursor */}
                        <div className="mt-4 text-blue-500 font-bold tracking-wider flex items-center">
                            <span className="text-slate-500 mr-2">root@lab:~#</span>
                            <span className="w-2.5 h-5 bg-blue-500 animate-pulse inline-block" />
                        </div>
                    </div>
                </motion.div>

                <div className="mt-12 text-center text-xs text-slate-500 font-medium tracking-widest uppercase flex flex-col items-center gap-2">
                    <p>AI Lab System Status: Active</p>
                    <div className="flex gap-2 items-center text-blue-500">
                        <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.8)] animate-pulse" />
                        <span>Connection Secure</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
