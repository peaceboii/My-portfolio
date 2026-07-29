import React from 'react';
import ProfileCard from './ProfileCard';
import profileImg from '../../assets/profile.png';
import { Section3D, Text3D, Container3D } from './ThreeDTransitions';

const About: React.FC = () => {
  const handleContactClick = () => {
    window.open("mailto:kumaravelu2003@gmail.com");
  };

  return (
    <Section3D id="about" className="bg-bg py-24 md:py-32 border-b border-stroke overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Profile Card Side */}
          <Container3D
            className="lg:col-span-5 flex justify-center z-10"
            delay={0.2}
            tiltOnHover={false}
            rotateXStart={15}
            rotateYStart={-15}
            zStart={-120}
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
          </Container3D>

          {/* About Text Side */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <Text3D
              text="About Me"
              className="text-xs text-muted uppercase tracking-[0.3em] font-semibold"
              delay={0.2}
              duration={0.6}
            />

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary leading-tight">
              <Text3D text="Designing scale," delay={0.3} duration={0.8} />
              <br />
              <Text3D text="crafting intelligence." delay={0.45} duration={0.8} />
            </h2>

            <Container3D delay={0.5} tiltOnHover={false} rotateXStart={15} rotateYStart={10} yStart={30} duration={0.8}>
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
            </Container3D>

            <Container3D delay={0.65} tiltOnHover={false} rotateXStart={10} rotateYStart={5} yStart={20} duration={0.8}>
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
            </Container3D>
          </div>

        </div>
      </div>
    </Section3D>
  );
};

export default About;
