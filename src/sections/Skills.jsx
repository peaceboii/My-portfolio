import React from 'react';
import HologramCard from '../components/HologramCard';
import { motion } from 'framer-motion';
import { Terminal, Database, LineChart, Cpu, Layout, Globe } from 'lucide-react';

const skills = [
    { name: 'Python Engineering', icon: <Terminal size={32} className="text-cyan-400" />, color: 'cyan' },
    { name: 'React & Frontend', icon: <Layout size={32} className="text-purple-400" />, color: 'purple' },
    { name: 'AI & Machine Learning', icon: <Cpu size={32} className="text-cyan-400" />, color: 'cyan' },
    { name: 'Algorithmic Trading', icon: <LineChart size={32} className="text-purple-400" />, color: 'purple' },
    { name: 'API Architecture', icon: <Globe size={32} className="text-cyan-400" />, color: 'cyan' },
    { name: 'FinTech Development', icon: <Database size={32} className="text-purple-400" />, color: 'purple' }
];

export default function Skills() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 py-20 relative w-full max-w-5xl mx-auto z-10">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-16 text-glow-cyan"
            >
                <span className="text-cyan-400">02.</span> sys.modules.load('skills')
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <HologramCard key={index} delay={index * 0.1} hoverGlow={skill.color}>
                        <div className="flex flex-col items-center text-center gap-4 h-full justify-center py-6">
                            <div className="p-4 rounded-full bg-slate-800/50 border border-slate-700/50">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-semibold font-mono tracking-wide">
                                {skill.name}
                            </h3>
                        </div>
                    </HologramCard>
                ))}
            </div>
        </section>
    );
}
