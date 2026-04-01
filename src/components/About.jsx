import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative min-h-screen py-24 flex items-center overflow-hidden">
      <div className="container px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div style={{ opacity }}>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-cyan-600 font-mono mb-4"
          >
            01. INTRODUCTION
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900">
            Where Logic meets <span className="text-gradient">Market Psychology</span>
          </h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
                My journey started with scripting strategies for the forex market, but I quickly expanded into
                backend development, working on APIs, data pipelines, and real-time trading systems.
            </p>
            <p>
                I’m constantly exploring the intersection of finance and technology — building tools that make life easier for traders and developers alike.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-slate-900 font-bold text-3xl mb-1">3+</h3>
              <p className="text-slate-500 font-mono text-sm uppercase">Years in FinTech</p>
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-3xl mb-1">10k+</h3>
              <p className="text-slate-500 font-mono text-sm uppercase">Dataset Curation</p>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div 
            style={{ y: y1 }}
            className="aspect-square glass rounded-2xl p-8 relative z-10 overflow-hidden group shadow-2xl shadow-slate-200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="h-full w-full border border-dashed border-slate-300 rounded-xl flex items-center justify-center overflow-hidden">
               <img src="/assets/profile.png" alt="Kumaravelu" className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>
          
          {/* Decorative Elements */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/5 blur-3xl rounded-full"
          />
          <motion.div 
             animate={{ 
               rotate: 360,
               scale: [1, 1.1, 1]
             }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="absolute -bottom-10 -left-10 w-32 h-32 border border-cyan-500/10 rounded-full border-dashed"
          />
        </div>
      </div>
    </section>
  );
}
