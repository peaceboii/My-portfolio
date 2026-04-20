import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXPLORATIONS = [
  { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=600", rotation: -5, ySpeed: 0.2 },
  { url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600&h=600", rotation: 8, ySpeed: -0.1 },
  { url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=600&h=600", rotation: 12, ySpeed: 0.3 },
  { url: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=600&h=600", rotation: -10, ySpeed: -0.4 },
  { url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=600&h=600", rotation: 5, ySpeed: 0.15 },
  { url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600&h=600", rotation: -15, ySpeed: -0.25 },
];

const Explorations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the center content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax effect for cards
      gsap.utils.toArray<HTMLElement>('.parallax-card').forEach((card, i) => {
        const speed = EXPLORATIONS[i].ySpeed;
        gsap.to(card, {
          y: () => -window.innerHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
      {/* Pinned Center Content */}
      <div 
        ref={contentRef} 
        className="h-screen flex items-center justify-center p-6 text-center z-10 sticky top-0"
      >
        <div className="max-w-2xl">
          <span className="text-xs text-muted uppercase tracking-[0.3em] mb-6 block">Explorations</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary mb-8 leading-none">
            Visual <span className="font-display italic text-text-primary/90">playground</span>
          </h2>
          <p className="text-muted text-sm md:text-base max-w-sm mx-auto mb-10">
            A messy collection of ideas, experiments, and unfinished business.
          </p>
          <button className="rounded-full px-8 py-3 border border-stroke text-xs uppercase tracking-widest hover:bg-text-primary hover:text-bg transition-colors">
            Dribbble Portfolio
          </button>
        </div>
      </div>

      {/* Parallax Image Grid */}
      <div className="absolute inset-x-0 top-0 h-full pointer-events-none z-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-12 md:gap-40 px-10 pt-40">
          {EXPLORATIONS.map((item, i) => (
            <div 
              key={i} 
              className={`parallax-card w-full max-w-[320px] aspect-square bg-surface border border-stroke rounded-2xl overflow-hidden shadow-2xl pointer-events-auto cursor-zoom-in group`}
              style={{ 
                transform: `rotate(${item.rotation}deg)`,
                marginTop: i % 2 === 0 ? "0" : "10vh"
              }}
            >
              <img 
                src={item.url} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explorations;
