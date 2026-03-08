import React from 'react';
import { motion } from 'framer-motion';

export default function HologramCard({ children, delay = 0, hoverGlow = 'cyan' }) {
    const glowClass = hoverGlow === 'purple' ? 'hover:glow-purple border-purple-500/30' : 'hover:glow-cyan border-cyan-500/30';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5 }}
            className={`relative p-6 rounded-xl border glass-panel transition-all duration-300 ${glowClass}`}
        >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current opacity-50" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current opacity-50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />

            {children}
        </motion.div>
    );
}
