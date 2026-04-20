import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Work", id: "work" },
    { name: "Skills", id: "skills" },
    { name: "Resume", id: "resume" }
  ];

  const handleNavClick = (id: string) => {
    if (id === "resume") {
      window.open("/assets/resume.pdf", "_blank");
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div 
        className={`inline-flex items-center rounded-full transition-all duration-300 border border-white/10 bg-surface px-2 py-2 ${
          isScrolled ? "backdrop-blur-md shadow-md shadow-black/20" : "backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <div 
          onClick={() => handleNavClick("home")}
          className="group relative w-9 h-9 rounded-full p-[1px] overflow-hidden flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform"
        >
          <div className="absolute inset-0 accent-gradient group-hover:rotate-180 transition-transform duration-700" />
          <div className="relative w-full h-full bg-bg rounded-full flex items-center justify-center text-[11px] font-display italic text-text-primary uppercase tracking-tighter">
            KV
          </div>
        </div>

        <div className="hidden md:block w-px h-5 bg-stroke mx-1" />

        {/* Nav Links */}
        <div className="flex items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-muted hover:text-text-primary hover:bg-stroke/50 transition-all"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="w-px h-5 bg-stroke mx-1" />

        {/* Say Hi Button */}
        <button 
          onClick={() => window.open("mailto:kumaravelu2003@gmail.com")}
          className="relative group text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary font-medium overflow-visible"
        >
          <span className="absolute -inset-[2px] accent-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 flex items-center gap-1 bg-surface rounded-full px-3 py-1.5 backdrop-blur-md border border-white/5">
            Say hi <span className="text-[10px]">↗</span>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
