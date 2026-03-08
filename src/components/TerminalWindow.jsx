import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function TerminalWindow({ title, children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="w-full max-w-3xl border border-cyan-500/30 rounded-lg overflow-hidden glass-panel"
        >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-cyan-500/30">
                <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-cyan-400" />
                    <span className="text-xs font-mono text-cyan-400">{title}</span>
                </div>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-600" />
                    <div className="w-3 h-3 rounded-full bg-slate-600" />
                    <div className="w-3 h-3 rounded-full bg-slate-600" />
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm sm:text-base leading-relaxed text-slate-300">
                {children}
            </div>
        </motion.div>
    );
}
