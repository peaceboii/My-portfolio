import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Info } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Quantum Trading Engine",
    category: "FinTech / Automation",
    description: "High-frequency algorithmic trading system using Python and WebSockets.",
    problem: "Real-time market data processing at scale with low latency.",
    solution: "Implemented an asynchronous architecture with Redis for caching and custom data pipelines.",
    tech: ["Python", "Redis", "WebSockets", "Docker", "PostgreSQL"],
    impact: "Reduced execution latency by 45% and improved trade accuracy.",
    github: "#",
    live: "#",
    image: "https://via.placeholder.com/600x400/030712/06b6d4?text=FINTECH+SYSTEM"
  },
  {
    id: 2,
    title: "EcoLink Dashboard",
    category: "Web Application",
    description: "Environmental monitoring dashboard for IoT sensors.",
    problem: "Visualizing complex sensor data for non-technical users.",
    solution: "Designed a clean, intuitive UI with real-time charting and automated alerts.",
    tech: ["Next.js", "Three.js", "D3.js", "Firebase"],
    impact: "Increased user engagement by 60% and simplified reporting.",
    github: "#",
    live: "#",
    image: "https://via.placeholder.com/600x400/030712/8b5cf6?text=IOT+DASHBOARD"
  },
  {
    id: 3,
    title: "NitroAuth SDK",
    category: "Security / Open Source",
    description: "Passwordless authentication SDK for modern web apps.",
    problem: "Traditional auth methods are prone to phishing and user friction.",
    solution: "Built a WebAuthn-based SDK with biometric support and seamless integration.",
    tech: ["TypeScript", "WebAuthn", "Express", "React"],
    impact: "Adopted by 50+ developers; eliminated 99% of login-related phishing.",
    github: "#",
    live: "#",
    image: "https://via.placeholder.com/600x400/030712/ec4899?text=SECURITY+SDK"
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
            A selection of my most challenging and impactful projects, from high-frequency trading to secure SDKs.
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
                <p className="text-slate-400 text-sm mb-6 flex-1">{project.description}</p>
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
                      <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-slate-500">Problem</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-slate-500">Solution</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-slate-500">Impact</h4>
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
                    <a href={selectedProject.live} className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
                       <ExternalLink size={18} />
                       <span className="font-bold text-sm tracking-widest">LIVE DEMO</span>
                    </a>
                    <a href={selectedProject.github} className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
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
