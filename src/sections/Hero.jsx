import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = [
    "Python Developer",
    "AI Builder",
    "Quant Developer",
    "Algorithmic Trader"
];

export default function Hero() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && displayedText === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        } else if (isDeleting && displayedText === '') {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setDisplayedText((prev) =>
                isDeleting
                    ? prev.slice(0, -1)
                    : currentRole.slice(0, prev.length + 1)
            );
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentRoleIndex]);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative px-6 w-full max-w-7xl mx-auto pointer-events-none">
            <div className="text-center mt-[-10vh] border p-8 rounded-2xl glass-panel pointer-events-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4"
                >
                    Hi, I'm Kumaravelu
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-10 text-xl md:text-2xl font-mono text-cyan-300 flex items-center justify-center gap-1"
                >
                    <span>&gt; {displayedText}</span>
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-3 h-6 bg-cyan-400 inline-block"
                    />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-auto"
            >
                <span className="text-xs text-slate-400 uppercase tracking-widest mb-2 font-mono">Initiate Sequence</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-[1px] h-16 bg-gradient-to-b from-cyan-500 to-transparent"
                />
            </motion.div>
        </section>
    );
}
