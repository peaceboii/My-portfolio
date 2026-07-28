import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import LoadingScreen from './components/LoadingScreen.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import SelectedWorks from './components/SelectedWorks.tsx';
import SkillsMarquee from './components/SkillsMarquee.tsx';
import Footer from './components/Footer.tsx';
import SplashCursor from './components/SplashCursor.tsx';
import Galaxy from './components/Galaxy.tsx';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="flex flex-col">
          <SplashCursor />
          <Navbar />
          <Hero />
          
          <div className="relative">
            {/* Galaxy background container */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Galaxy 
                mouseRepulsion={true}
                mouseInteraction={true}
                density={1.5}
                glowIntensity={0.5}
                saturation={0.8}
                hueShift={240}
              />
            </div>
            
            {/* Page Sections */}
            <div className="relative z-10">
              <About />
              <SelectedWorks />
              <SkillsMarquee />
            </div>
          </div>

          <Footer />
        </div>
      )}
    </main>
  );
};

export default App;
