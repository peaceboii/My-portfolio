import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Text3D, Container3D } from './ThreeDTransitions';

const ROLES = ["Python Developer", "Full-stack Developer", "AI Enthusiast"];

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const source = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(source);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = source;
    }

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-bg">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-20">
        <Text3D
          text="PYTHON • AI • FULLSTACK"
          className="text-xs text-muted uppercase tracking-[0.3em] mb-8 font-semibold"
          delay={0.1}
          duration={0.6}
        />
        
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-text-primary mb-6 uppercase"
          style={{ fontFamily: "'Lora', serif", fontStyle: 'italic' }}
        >
          <Text3D text="KUMARAVELU" delay={0.2} duration={0.9} charDelay={0.03} />
        </h1>

        <Container3D delay={0.4} duration={0.8} tiltOnHover={false} rotateXStart={15} yStart={30}>
          <div className="text-lg md:text-2xl text-text-primary/90 mb-6 flex items-center justify-center gap-2">
            <span>A</span>
            <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block min-w-[180px] text-center">
              {ROLES[roleIndex]}
            </span>
            <span>based in India.</span>
          </div>
        </Container3D>

        <Container3D delay={0.55} duration={0.8} tiltOnHover={false} rotateXStart={15} yStart={30}>
          <p className="text-sm md:text-base text-muted max-w-md mx-auto mb-12 leading-relaxed">
            Crafting intelligent web systems through code. Passionate about AI integration and scalable backend solutions.
          </p>
        </Container3D>

        <Container3D delay={0.7} duration={0.8} tiltOnHover={false} rotateXStart={15} yStart={30}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative rounded-full text-sm px-8 py-4 bg-text-primary text-bg font-medium transition-transform hover:scale-105"
            >
              <span className="relative z-10">See Works</span>
              <div className="absolute -inset-[1px] accent-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </button>
            
            <a 
              href="https://drive.google.com/file/d/1jW4IBeec2SKRMjkOtbtsT-ZsIXvuJJlZ/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative rounded-full text-sm px-8 py-4 border-2 border-stroke bg-bg/50 backdrop-blur-sm text-text-primary font-medium transition-all hover:scale-105 hover:border-transparent"
            >
              <span className="relative z-10 flex items-center gap-2">
                Resume <span className="text-[10px]">↓</span>
              </span>
              <div className="absolute -inset-[2px] accent-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </a>
          </div>
        </Container3D>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke overflow-hidden">
          <div className="w-full h-1/2 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
