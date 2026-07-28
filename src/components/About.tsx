import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import profileImg from '../../assets/profile.png';

const About: React.FC = () => {
  const handleContactClick = () => {
    window.open("mailto:kumaravelu2003@gmail.com");
  };

  return (
    <section id="about" className="bg-bg py-24 md:py-32 border-b border-stroke overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Profile Card Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center z-10"
            >
              <ProfileCard

                handle="peaceboii"
                status="Open to Opportunities"
                contactText="Email Me"
                avatarUrl={profileImg}
                miniAvatarUrl={profileImg}
                showUserInfo={true}
                enableTilt={true}
                behindGlowEnabled={true}
                behindGlowColor="rgba(78, 133, 191, 0.4)"
                behindGlowSize="60%"
                onContactClick={handleContactClick}
                innerGradient="linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)"
              />
            </motion.div>

            {/* About Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-7 flex flex-col gap-6 text-left"
            >
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                About Me
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary leading-tight">
                Designing scale, crafting intelligence.
              </h2>

              <div className="flex flex-col gap-4 text-sm md:text-base text-muted leading-relaxed">
                <p>
                  I am a passionate software engineer based in India, specializing in building robust backend architectures, full-stack systems, and integrating intelligent AI/machine learning workflows. My core expertise centers on the Python ecosystem, where I write clean, optimized code to tackle complex computational challenges.
                </p>
                <p>
                  With hands-on experience in full-stack frameworks like Django and Flask, coupled with a deep fascination for Large Language Models (LLMs) and natural language processing, I bridge the gap between heavy data operations and sleek user-facing client interfaces.
                </p>
                <p>
                  When I am not developing scalable server architectures or fine-tuning models, I explore automated workflows, containerization strategies, and modern cloud deployment environments.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 border-t border-stroke pt-8">
                <div>
                  <h4 className="text-xs text-muted uppercase tracking-[0.2em] mb-2">My Philosophy</h4>
                  <p className="text-sm text-text-primary/80">
                    Clean code, modular architecture, and user-centric design are the key pillars of everything I construct.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs text-muted uppercase tracking-[0.2em] mb-2">Key Interests</h4>
                  <p className="text-sm text-text-primary/80">
                    Generative AI, Web Scraping Pipelines, Agentic Workflows, and Performance Optimization.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
