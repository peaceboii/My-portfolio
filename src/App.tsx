import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import LoadingScreen from './components/LoadingScreen.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import SelectedWorks from './components/SelectedWorks.tsx';
import SkillsMarquee from './components/SkillsMarquee.tsx';
import Footer from './components/Footer.tsx';

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
          <Navbar />
          <Hero />
          <SelectedWorks />
          <SkillsMarquee />
          <Footer />
        </div>
      )}
    </main>
  );
};

export default App;
