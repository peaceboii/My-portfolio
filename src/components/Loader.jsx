import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0f]">
            <div className="flex flex-col items-center">
                <motion.div
                    className="w-16 h-16 border-4 border-t-[#00f3ff] border-r-[#bc13fe] border-b-[#00f3ff] border-l-[#bc13fe] rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.p
                    className="mt-6 text-[#00f3ff] font-mono tracking-widest text-glow-cyan"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    SYSTEM INITIALIZING...
                </motion.p>
            </div>
        </div>
    );
}
