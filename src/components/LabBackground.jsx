import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LabBackground() {
    const containerRef = useRef();
    const { scrollY } = useScroll();

    // Create deep parallax transition effects for scrolling
    const yGrid = useTransform(scrollY, [0, 3000], [0, -400]);
    const yNodes = useTransform(scrollY, [0, 3000], [0, -800]);
    const yLines = useTransform(scrollY, [0, 3000], [0, -200]);

    useEffect(() => {
        if (!containerRef.current) return;

        // Create random floating data nodes and line charts
        const nodes = containerRef.current.querySelectorAll('.data-node');

        nodes.forEach((node) => {
            gsap.set(node, {
                x: () => Math.random() * window.innerWidth,
                y: () => Math.random() * window.innerHeight,
                opacity: () => 0.2 + Math.random() * 0.4,
                scale: () => 0.5 + Math.random() * 1.5,
            });

            gsap.to(node, {
                y: `+=${-100 + Math.random() * 200}`,
                x: `+=${-100 + Math.random() * 200}`,
                duration: 15 + Math.random() * 15,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: -Math.random() * 10
            });
        });

    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        >
            {/* Subtle Data Grid overlay with parallax */}
            <motion.div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    y: yGrid,
                    height: '150vh', // Extend to prevent cutoff during parallax
                    backgroundImage: `
            linear-gradient(to right, #2563eb 1px, transparent 1px),
            linear-gradient(to bottom, #2563eb 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Radial gradient glow for the lab core feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />

            {/* Floating Data Nodes layer with deep parallax */}
            <motion.div style={{ y: yNodes }} className="absolute inset-0 h-[150vh]">
                {Array.from({ length: 25 }).map((_, i) => {
                    const isPrimary = Math.random() > 0.5;
                    const color = isPrimary ? 'bg-blue-500' : 'bg-cyan-500';
                    const size = 3 + Math.random() * 6;

                    return (
                        <div
                            key={i}
                            className={`data-node absolute rounded-full ${color} shadow-[0_0_10px_currentColor]`}
                            style={{ width: `${size}px`, height: `${size}px` }}
                        />
                    );
                })}
            </motion.div>

            {/* Background abstract line charts with slight parallax */}
            <motion.svg style={{ y: yLines }} className="absolute w-full h-[150vh] opacity-10" preserveAspectRatio="none">
                <path d="M0,1000 Q200,800 400,900 T800,700 T1200,800 T1600,600 T2000,700" fill="none" stroke="#2563eb" strokeWidth="2" />
                <path d="M0,1200 Q300,900 600,1000 T1200,800 T1800,900 T2400,700" fill="none" stroke="#06b6d4" strokeWidth="1" />
                <path d="M0,1600 Q400,1400 800,1600 T1600,1200 T2400,1400" fill="none" stroke="#2563eb" strokeWidth="3" />
            </motion.svg>
        </div>
    );
}
