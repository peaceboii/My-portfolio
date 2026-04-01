import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(14,165,233,0.3)]">
            <Cpu size={24} />
          </div>
          <span className="font-bold text-xl tracking-tighter text-slate-900">PORTFOLIO<span className="text-cyan-600">.</span></span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center glass px-8 py-3 rounded-full border border-slate-200">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-semibold text-slate-500 hover:text-cyan-600 transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
           <motion.a 
             href="#contact"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-6 py-2 border border-cyan-600 text-cyan-600 font-bold rounded-full text-sm tracking-widest hover:bg-cyan-600 hover:text-white transition-all shadow-lg shadow-cyan-500/10"
           >
             LET'S CHAT
           </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
           className="md:hidden text-slate-900"
           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-b border-slate-200 py-8 md:hidden shadow-2xl"
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold text-slate-500 hover:text-cyan-600 transition-colors uppercase tracking-widest"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
