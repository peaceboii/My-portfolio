import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, Users, Star } from 'lucide-react';

const stats = [
  { label: 'Commits', value: '2.5k+', icon: Github, color: 'text-cyan-400' },
  { label: 'Lines of Code', value: '150k+', icon: Code2, color: 'text-purple-400' },
  { label: 'Users Impacted', value: '10k+', icon: Users, color: 'text-pink-400' },
  { label: 'Stars Earned', value: '500+', icon: Star, color: 'text-yellow-400' },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-slate-900/30 border-y border-slate-800/50">
      <div className="container px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               className="text-center"
            >
              <div className={`mb-4 mx-auto w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
