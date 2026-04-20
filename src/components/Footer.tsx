import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { gsap } from 'gsap';

const Footer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

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

    // GSAP Marquee
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="relative bg-bg pt-24 pb-12 overflow-hidden border-t border-stroke">
      {/* Background Video (Flipped) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10">
        {/* Marquee Section */}
        <div ref={marqueeRef} className="border-y border-white/5 py-8 mb-24 overflow-hidden whitespace-nowrap">
          <div className="marquee-inner flex gap-8 w-fit text-7xl md:text-9xl font-display italic text-white/5 uppercase tracking-tighter">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i}>LETS BUILD SOMETHING • </span>
            ))}
            {/* Duplicate for seamless loop */}
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i + 10}>LETS BUILD SOMETHING • </span>
            ))}
          </div>
        </div>

        {/* CTA Content */}
        <div className="container mx-auto px-6 text-center max-w-2xl mb-24">
          <h2 className="text-4xl md:text-6xl text-text-primary mb-12">
            Open to <span className="font-display italic">new opportunities</span> and collaborations.
          </h2>
          
          <a 
            href="mailto:kumaravelu2003@gmail.com" 
            className="group relative inline-flex items-center gap-4 rounded-full px-10 py-5 bg-surface border border-white/10 text-lg sm:text-xl transition-all hover:scale-105"
          >
            <span className="absolute -inset-[2px] accent-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 font-medium">kumaravelu2003@gmail.com</span>
            <span className="relative z-10 text-2xl group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-muted uppercase tracking-[0.2em]">
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/kumaravel-raj" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/peaceboii" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">GitHub</a>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-2 h-2 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#4ADE80] rounded-full animate-ping opacity-75" />
              <div className="relative w-full h-full bg-[#4ADE80] rounded-full" />
            </div>
            <span>Available for projects</span>
          </div>

          <div>
            © 2026 kumaravelu
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
