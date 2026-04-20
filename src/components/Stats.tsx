import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { label: "Years Experience", value: "20+" },
  { label: "Projects Done", value: "95+" },
  { label: "Satisfied Clients", value: "200%" }
];

const Stats: React.FC = () => {
  return (
    <section className="bg-bg py-24 md:py-32 border-y border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left group"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-display text-text-primary mb-4 group-hover:text-accent transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-xs text-muted uppercase tracking-[0.3em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
