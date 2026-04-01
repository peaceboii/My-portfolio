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
  Smartphone
} from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal, color: 'text-blue-400', proficiency: '95%' },
  { name: 'React / Next.js', icon: Globe, color: 'text-cyan-400', proficiency: '90%' },
  { name: 'Node.js', icon: Zap, color: 'text-green-400', proficiency: '85%' },
  { name: 'PostgreSQL', icon: Database, color: 'text-indigo-400', proficiency: '80%' },
  { name: 'FinTech APIs', icon: TrendingUp, color: 'text-emerald-400', proficiency: '85%' },
  { name: 'System Design', icon: Layers, color: 'text-purple-400', proficiency: '75%' },
  { name: 'Cyber Security', icon: ShieldCheck, color: 'text-red-400', proficiency: '70%' },
  { name: 'Automation', icon: Cpu, color: 'text-orange-400', proficiency: '95%' },
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
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container px-6">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mb-16 text-center"
        >
          <p className="text-cyan-400 font-mono mb-2">02. CAPABILITIES</p>
          <h2 className="text-4xl md:text-5xl font-bold">Tech <span className="text-gradient">Stack</span></h2>
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
              className="glass p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors group cursor-default"
            >
              <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-slate-800/50 ${skill.color} group-hover:scale-110 transition-transform`}>
                <skill.icon size={24} />
              </div>
              <h3 className="text-white font-bold mb-4">{skill.name}</h3>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: skill.proficiency }}
                   transition={{ duration: 1, delay: 0.5 }}
                   className={`h-full bg-gradient-to-right from-cyan-400 to-purple-500`}
                 />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
