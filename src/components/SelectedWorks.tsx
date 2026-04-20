import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: "NewsBot",
    category: "Django • News API",
    image: "/assets/NewsBot.png",
    description: "A Python bot that fetches news based on user preferences, built as a full-stack application with the Django framework.",
    span: "md:col-span-7",
    link: "https://github.com/peaceboii/NewsBot.git"
  },
  {
    title: "Finance Q&A Chatbot",
    category: "NLP • GPT-2 • LoRA",
    image: "/assets/finaceQ&A chatBot.png",
    description: "Fine-tuned GPT-2 Medium with LoRA on a curated 10,000+ finance Q&A dataset; integrated Streamlit UI.",
    span: "md:col-span-5",
    link: "https://github.com/peaceboii/gpt2-finance-qa.git"
  },
  {
    title: "Personal Finance Tracker",
    category: "Flask • PostgreSQL",
    image: "/assets/personal-finance.png",
    description: "Full-stack Flask application for tracking income & expenses with secure auth and responsive UI.",
    span: "md:col-span-6",
    link: "https://github.com/peaceboii/personal-finance-tracker"
  },
  {
    title: "AI Tax Report Analyzer",
    category: "AI • Agentic • FinTech",
    image: "/assets/tax-analyzer.png", 
    description: "An AI-driven agent for analyzing complex tax reports and providing real-time compliance insights using agentic workflows.",
    span: "md:col-span-6",
    link: "https://github.com/peaceboii/tax-report-analyzer-AI-agent.git"
  }
];

const SelectedWorks: React.FC = () => {
  return (
    <section id="work" className="bg-bg py-24 md:py-32">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              A selection of projects I've worked on, showcasing my proficiency in Python frameworks and AI integration.
            </p>
          </div>

          <a 
            href="https://github.com/peaceboii" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-3 group relative px-6 py-3 rounded-full border border-stroke hover:border-transparent transition-all overflow-hidden text-sm"
          >
            <span className="relative z-10 transition-colors group-hover:text-bg">View GitHub</span>
            <span className="relative z-10 text-[10px] transform translate-y-px group-hover:translate-x-1 group-hover:text-bg transition-all">↗</span>
            <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-3xl bg-surface border border-stroke min-h-[400px] ${project.span}`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-stroke/20 animate-pulse" />
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                <div className="absolute inset-0 halftone opacity-10 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] text-white/60 uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-3">{project.title}</h3>
                  <p className="text-white/70 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-lg mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="relative p-[1px] rounded-full accent-gradient">
                      <div className="bg-white px-5 py-2 rounded-full">
                        <span className="text-bg text-xs font-semibold">View Case Study</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href={project.link} target="_blank" rel="noreferrer" className="absolute inset-0 z-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
