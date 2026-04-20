import React from 'react';
import { motion } from 'framer-motion';

const ENTRIES = [
  {
    title: "Optimizing Python for High-Frequency Trading",
    date: "Apr 20, 2024",
    time: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366a7c?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    title: "Large Language Models in Financial Analysis",
    date: "Mar 15, 2024",
    time: "10 min read",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    title: "Building Scalable AI Agents with LangGraph",
    date: "Feb 02, 2024",
    time: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    title: "The Future of Algorithmic Trading",
    date: "Jan 12, 2024",
    time: "5 min read",
    image: "https://images.unsplash.com/photo-1611974717411-9430c50d9931?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

const Journal: React.FC = () => {
  return (
    <section id="journal" className="bg-bg py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              Diving deep into the world of AI agents, fintech engineering, 
              and the latest trends in algorithmic trading technology.
            </p>
          </div>

          <button className="hidden md:inline-flex items-center gap-3 group relative px-6 py-3 rounded-full border border-stroke hover:border-transparent transition-all overflow-hidden text-sm">
            <span className="relative z-10 transition-colors group-hover:text-bg">View all thoughts</span>
            <span className="relative z-10 text-[10px] transform translate-y-px group-hover:translate-x-1 group-hover:text-bg transition-all">→</span>
            <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>

        {/* Entries List */}
        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-5 bg-surface/30 hover:bg-surface border border-stroke rounded-[32px] sm:rounded-full transition-all cursor-pointer"
            >
              <div className="w-16 h-16 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0 border border-stroke">
                <img src={entry.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg md:text-xl text-text-primary group-hover:text-accent transition-colors">
                  {entry.title}
                </h3>
              </div>

              <div className="flex items-center gap-6 text-[10px] text-muted uppercase tracking-widest pb-2 sm:pb-0">
                <span>{entry.date}</span>
                <span className="w-1 h-1 rounded-full bg-stroke" />
                <span>{entry.time}</span>
              </div>

              <div className="hidden sm:flex w-10 h-10 rounded-full border border-stroke items-center justify-center text-muted group-hover:bg-text-primary group-hover:text-bg group-hover:border-transparent transition-all">
                ↗
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
