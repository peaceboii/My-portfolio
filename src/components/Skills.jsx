import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Layers, 
  Terminal,
  Zap,
  TrendingUp,
  ShieldCheck,
  Brain,
  FlaskConical,
  GitBranch,
  Box
} from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal, color: 'text-blue-600', proficiency: '100%' },
  { name: 'NLP & LLM', icon: Brain, color: 'text-purple-600', proficiency: '65%' },
  { name: 'Backend Pipelines', icon: Layers, color: 'text-indigo-600', proficiency: '75%' },
  { name: 'JavaScript', icon: Globe, color: 'text-yellow-600', proficiency: '80%' },
  { name: 'Django / Flask', icon: FlaskConical, color: 'text-emerald-600', proficiency: '85%' },
  { name: 'PostgreSQL', icon: Database, color: 'text-cyan-600', proficiency: '85%' },
  { name: 'Docker', icon: Box, color: 'text-blue-700', proficiency: '70%' },
  { name: 'Git / CI-CD', icon: GitBranch, color: 'text-orange-600', proficiency: '90%' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50/50">
      <div className="container px-6">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mb-16 text-center"
        >
          <p className="text-cyan-600 font-mono mb-2">02. CAPABILITIES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Tech <span className="text-gradient">Stack</span></h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="glass p-6 rounded-xl border border-slate-200 hover:border-cyan-500/30 transition-colors group cursor-default shadow-sm hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-slate-100 ${skill.color} group-hover:scale-110 transition-transform`}>
                <skill.icon size={24} />
              </div>
              <h3 className="text-slate-900 font-bold mb-4">{skill.name}</h3>
              <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: skill.proficiency }}
                   transition={{ duration: 1, delay: 0.5 }}
                   className={`h-full bg-gradient-to-right from-cyan-500 to-purple-600`}
                 />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
