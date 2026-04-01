import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Info } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Finance Q&A Bot — GPT-2 + LoRA",
    category: "NLP",
    description: "Fine-tuned GPT-2 Medium with LoRA on a curated 10k+ finance Q&A dataset; integrated Streamlit UI.",
    problem: "Providing accurate, cited financial information using lightweight LLMs.",
    solution: "Used LoRA for efficient fine-tuning; integrated citations and BLEU/ROUGE/BERTScore evaluation.",
    tech: ["Python", "GPT-2", "LoRA", "Streamlit", "Transformers"],
    impact: "Achieved BLEU: 57.91, ROUGE-L: 0.64, and BERTScore-F1: 0.94.",
    github: "https://github.com/peaceboii/gpt2-finance-qa.git",
    live: "https://gpt2-finance.streamlit.app/",
    image: "/assets/finaceQ&A chatBot.png"
  },
  {
    id: 2,
    title: "Personal Finance Tracker",
    category: "Full-stack",
    description: "A full-stack web application for secure income and expense tracking.",
    problem: "Need for a secure, intuitive way to manage personal finances with real-time updates.",
    solution: "Built with Flask, PostgreSQL, and SQLAlchemy; integrated user authentication and responsive UI.",
    tech: ["Flask", "PostgreSQL", "SQLAlchemy", "Render", "JavaScript"],
    impact: "Hosted on Render with automated database backups and secure auth.",
    github: "https://github.com/peaceboii/personal-finance-tracker",
    live: "https://personal-finance-tracker-1-3vl9.onrender.com",
    image: "/assets/personal-finance.png"
  },
  {
    id: 3,
    title: "News-Bot",
    category: "API / Django",
    description: "Python bot fetching news related to user's preference with a full-stack Django UI.",
    problem: "Sifting through irrelevant news to find specific finance/tech updates.",
    solution: "Created a preference-based fetching engine with a Django-powered dashboard.",
    tech: ["Python", "Django", "NewsAPI", "Render", "PostgreSQL"],
    impact: "Automated daily news curation, tailored to user-specified niches.",
    github: "https://github.com/peaceboii/NewsBot.git",
    live: "https://newsbot-gzlm.onrender.com/",
    image: "/assets/NewsBot.png"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24">
      <div className="container px-6">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-cyan-400 font-mono mb-2">03. WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
          </div>
          <p className="text-slate-400 max-w-md">
            A selection of my technical implementations in FinTech, AI/NLP, and Full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden glass border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-cyan-500 text-black p-3 rounded-full">
                    <Info size={24} />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-cyan-400 font-mono text-xs mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-2">{project.description}</p>
                <div className="flex gap-4">
                   {project.tech.slice(0, 3).map((t, i) => (
                     <span key={i} className="text-[10px] uppercase font-bold tracking-wider text-slate-500 border border-slate-800 px-2 py-1 rounded">
                       {t}
                     </span>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            />
            
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-3xl glass border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-slate-800/50 hover:bg-slate-700 rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto">
                   <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-none">
                  <p className="text-cyan-400 font-mono text-xs mb-4 uppercase tracking-widest">{selectedProject.category}</p>
                  <h3 className="text-4xl font-bold mb-8">{selectedProject.title}</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-slate-500">Goal</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-slate-500">Methodology</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-slate-500">Metrics/Impact</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.impact}</p>
                    </div>
                  </div>

                  <div className="mt-12 flex flex-wrap gap-3">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="text-[10px] text-cyan-400 font-bold border border-cyan-500/20 bg-cyan-500/5 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-12 flex gap-6">
                    <a href={selectedProject.live} target="_blank" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
                       <ExternalLink size={18} />
                       <span className="font-bold text-sm tracking-widest">LIVE DEMO</span>
                    </a>
                    <a href={selectedProject.github} target="_blank" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
                       <Github size={18} />
                       <span className="font-bold text-sm tracking-widest">GITHUB</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
