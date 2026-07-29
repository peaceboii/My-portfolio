import React, { useEffect, useState } from 'react';
import PillNav from './PillNav';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'skills'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "https://drive.google.com/file/d/1jW4IBeec2SKRMjkOtbtsT-ZsIXvuJJlZ/view?usp=drive_link" },
    { label: "Say Hi", href: "mailto:kumaravelu2003@gmail.com" }
  ];

  const logoUrl = `${import.meta.env.BASE_URL}assets/logo.png`;

  return (
    <PillNav
      logo={logoUrl}
      logoAlt="KV Logo"
      items={navItems}
      activeHref={activeSection}
      baseColor="#ffffff"
      pillColor="transparent"
      pillTextColor="#ffffff"
      hoveredPillTextColor="#000000"
      initialLoadAnimation={true}
    />
  );
};

export default Navbar;
