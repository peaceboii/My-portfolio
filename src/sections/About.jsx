import React from 'react';
import TerminalWindow from '../components/TerminalWindow';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20 relative w-full max-w-7xl mx-auto z-10">
            <div className="w-full flex-col flex items-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12 text-glow-cyan"
                >
                    <span className="text-cyan-400">01.</span> sys.about_me()
                </motion.h2>

                <TerminalWindow title="user@core:~/about_me.txt" delay={0.2}>
                    <p className="mb-4">
                        <span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = {'{'}
                        <br />
                        &nbsp;&nbsp;name: <span className="text-green-400">'Kumaravelu'</span>,
                        <br />
                        &nbsp;&nbsp;origin: <span className="text-green-400">'Earth'</span>,
                        <br />
                        &nbsp;&nbsp;focus: <span className="text-green-400">'Python, FinTech, Quant Systems'</span>,
                        <br />
                        &nbsp;&nbsp;mission: <span className="text-green-400">'To build intelligent trading systems and scalable backend infrastructure.'</span>
                        <br />
                        {'}'};
                    </p>
                    <p className="mb-4">
                        <span className="text-slate-500">// Initialize career narrative</span><br />
                        I am a passionate software engineer specializing in Python and React.
                        My expertise lies in building FinTech applications, quantitative trading systems,
                        and AI-enhanced automation tools.
                    </p>
                    <p>
                        When I'm not writing code or analyzing market behavior, you can find me
                        exploring modern web technologies, studying algorithmic trading patterns,
                        and refining scalable SaaS platforms.
                    </p>
                    <p className="mt-4 text-cyan-400 animate-pulse">_</p>
                </TerminalWindow>
            </div>
        </section>
    );
}
