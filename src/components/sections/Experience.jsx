import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Future Finance",
    role: "Senior Full Stack Developer",
    period: "2023 - Present",
    desc: "Led the development of a microservices architecture for real-time asset management."
  },
  {
    company: "TechNexus",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    desc: "Automated core business workflows, reducing manual overhead by 30%."
  },
  {
    company: "Innova Labs",
    role: "Junior Developer",
    period: "2019 - 2021",
    desc: "Contributed to front-end UI components and API integrations for client-facing apps."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container px-6">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mb-16"
        >
          <p className="text-cyan-600 font-mono mb-2">04. JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Career <span className="text-gradient">Timeline</span></h2>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 group"
              >
                {/* Dot */}
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-cyan-600 transition-colors shadow-[0_0_10px_rgba(14,165,233,0)] group-hover:shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                
                <div className="glass p-6 rounded-2xl border border-slate-200 group-hover:border-slate-300 transition-all shadow-sm group-hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-cyan-600 font-mono text-sm font-bold">{exp.period}</span>
                  </div>
                  <h4 className="text-slate-700 font-medium mb-3">{exp.company}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
