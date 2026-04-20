import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  "Python", "JavaScript", "HTML5", "CSS3", "Flask", "Django", 
  "PostgreSQL", "SQLite", "Git", "GitHub", "Render", "PgAdmin", "Docker"
];

const SkillsMarquee: React.FC = () => {
  return (
    <section id="skills" className="bg-bg py-24 md:py-32 overflow-hidden border-y border-stroke">
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="text-xs text-muted uppercase tracking-[0.3em] mb-4 block">Core Competencies</span>
        <h2 className="text-4xl md:text-6xl font-display italic text-text-primary">Technical Expertise</h2>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* First Row */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1035] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex flex-nowrap items-center gap-8 whitespace-nowrap"
          >
            {[...SKILLS, ...SKILLS].map((skill, i) => (
              <div 
                key={i}
                className="text-6xl md:text-8xl lg:text-9xl font-display italic text-white/5 hover:text-accent transition-colors duration-500 cursor-default px-4"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row (Reverse) */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [-1035, 0] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex flex-nowrap items-center gap-8 whitespace-nowrap"
          >
            {[...SKILLS.reverse(), ...SKILLS].map((skill, i) => (
              <div 
                key={i}
                className="text-6xl md:text-8xl lg:text-9xl font-display italic text-white/5 hover:text-accent transition-colors duration-500 cursor-default px-4"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
