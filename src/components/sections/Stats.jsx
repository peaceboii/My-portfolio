import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, Users, Star } from 'lucide-react';

const stats = [
  { label: 'Commits', value: '2.5k+', icon: Github, color: 'text-cyan-600' },
  { label: 'Lines of Code', value: '150k+', icon: Code2, color: 'text-purple-600' },
  { label: 'Users Impacted', value: '10k+', icon: Users, color: 'text-pink-600' },
  { label: 'Stars Earned', value: '500+', icon: Star, color: 'text-yellow-600' },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-slate-50 border-y border-slate-200">
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
              <div className={`mb-4 mx-auto w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm border border-slate-100 ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-widest font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
