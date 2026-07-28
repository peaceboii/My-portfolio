import React from 'react';
import { motion } from 'framer-motion';
import EvilEye from './EvilEye';

const Watcher: React.FC = () => {
  return (
    <section id="watcher" className="bg-bg py-24 md:py-32 border-t border-stroke relative overflow-hidden flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 text-center max-w-4xl z-10 flex flex-col items-center gap-8">
        
        {/* Large EvilEye Component */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] relative cursor-pointer"
        >
          <EvilEye
            eyeColor="#4E85BF"
            intensity={1.8}
            pupilSize={0.65}
            irisWidth={0.28}
            glowIntensity={0.5}
            scale={0.9}
            noiseScale={1.5}
            pupilFollow={1.5}
            flameSpeed={0.9}
            backgroundColor="#0a0a0a"
          />
        </motion.div>

        {/* Display Typography */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          <span className="text-xs text-muted uppercase tracking-[0.4em]">Interactive Eye</span>
          <h2 className="text-3xl md:text-5xl font-display italic text-text-primary leading-tight">
            Every pixel is under observation.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Watcher;
