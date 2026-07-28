import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CircularGallery from './CircularGallery';

// Define the skills with name, brand colors, and their Devicon logo URLs
const SKILLS_DATA = [
  { 
    name: "Python", 
    color: "#3776AB", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
  },
  { 
    name: "JavaScript", 
    color: "#F7DF1E", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
  },
  { 
    name: "Flask", 
    color: "#808080", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" 
  },
  { 
    name: "Django", 
    color: "#092E20", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" 
  },
  { 
    name: "PostgreSQL", 
    color: "#4169E1", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
  },
  { 
    name: "SQLite", 
    color: "#003B57", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" 
  },
  { 
    name: "Docker", 
    color: "#2496ED", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
  },
  { 
    name: "Git", 
    color: "#F05032", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
  },
  { 
    name: "GitHub", 
    color: "#808080", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
  },
  { 
    name: "HTML5", 
    color: "#E34F26", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
  },
  { 
    name: "CSS3", 
    color: "#1572B6", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
  }
];

// Canvas card generator function drawing actual brand logo with color glow
function drawCardWithLogo(canvas: HTMLCanvasElement, name: string, brandColor: string, logoImg: HTMLImageElement | null) {
  const ctx = canvas.getContext('2d')!;

  // Clear background with nice space gradient
  const grad = ctx.createLinearGradient(0, 0, 400, 500);
  grad.addColorStop(0, '#0a0b10');
  grad.addColorStop(0.5, '#07080c');
  grad.addColorStop(1, '#020305');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 400, 500);

  // Tech grid lines in background
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
  ctx.lineWidth = 1;
  for (let i = 20; i < 400; i += 40) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 500);
    ctx.stroke();
  }
  for (let j = 20; j < 500; j += 40) {
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(400, j);
    ctx.stroke();
  }

  // Draw central glowing energy core
  ctx.shadowColor = brandColor;
  ctx.shadowBlur = 45;
  const glow = ctx.createRadialGradient(200, 200, 20, 200, 200, 110);
  glow.addColorStop(0, brandColor + '59'); // 35% alpha
  glow.addColorStop(0.5, brandColor + '15'); // 8% alpha
  glow.addColorStop(1, 'transparent');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(200, 200, 110, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0; // Reset shadow

  // Center symbol / icon (a stylized hollow circle with inner rings and crosshairs)
  ctx.strokeStyle = brandColor + '33';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(200, 200, 45, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(200, 200, 65, 0, Math.PI * 2);
  ctx.setLineDash([4, 12]);
  ctx.stroke();
  ctx.setLineDash([]); // Reset dash

  // Draw actual logo if loaded, otherwise fallback circle
  if (logoImg) {
    // Add color drop-shadow to the brand logo
    ctx.shadowColor = brandColor;
    ctx.shadowBlur = 20;
    // Center of the logo: (200, 200). Size: 110x110
    ctx.drawImage(logoImg, 145, 145, 110, 110);
    ctx.shadowBlur = 0; // Reset shadow
  } else {
    // Fallback stylized circle
    ctx.strokeStyle = brandColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(200, 200, 40, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Outer orbits/crosshairs for tech theme
  ctx.strokeStyle = brandColor + '44';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(200, 200, 85, 0, Math.PI * 2);
  ctx.stroke();

  // Tech accent lines on the card edges
  ctx.strokeStyle = brandColor + '55';
  ctx.lineWidth = 2;
  ctx.beginPath();
  // Top left corner
  ctx.moveTo(20, 40); ctx.lineTo(20, 20); ctx.lineTo(40, 20);
  // Top right corner
  ctx.moveTo(380, 40); ctx.lineTo(380, 20); ctx.lineTo(360, 20);
  // Bottom left corner
  ctx.moveTo(20, 460); ctx.lineTo(20, 480); ctx.lineTo(40, 480);
  // Bottom right corner
  ctx.moveTo(380, 460); ctx.lineTo(380, 480); ctx.lineTo(360, 480);
  ctx.stroke();

  // Skill Name text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 32px monospace';
  ctx.textAlign = 'center';
  ctx.shadowColor = '#ffffff';
  ctx.shadowBlur = 8;
  ctx.fillText(name.toUpperCase(), 200, 360);
  ctx.shadowBlur = 0; // Reset

  // Subtitle / category
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('CORE MODULE', 200, 395);
}

const SkillsMarquee: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<{ image: string; text: string }[]>([]);

  useEffect(() => {
    let active = true;

    const loadLogoCards = async () => {
      const items = await Promise.all(
        SKILLS_DATA.map(async (skill) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.src = skill.logo;

          const loadedImg = await new Promise<HTMLImageElement | null>((resolve) => {
            img.onload = () => resolve(img);
            img.onerror = () => {
              console.warn(`Failed to load logo for ${skill.name}`);
              resolve(null);
            };
          });

          const canvas = document.createElement('canvas');
          canvas.width = 400;
          canvas.height = 500;
          drawCardWithLogo(canvas, skill.name, skill.color, loadedImg);

          return {
            image: canvas.toDataURL(),
            text: skill.name
          };
        })
      );

      if (active) {
        setGalleryItems(items);
      }
    };

    loadLogoCards();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="skills" className="bg-bg py-24 md:py-32 overflow-hidden border-b border-stroke relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 mb-12 text-center relative z-10">
          <span className="text-xs text-muted uppercase tracking-[0.3em] mb-4 block">Core Competencies</span>
          <h2 className="text-4xl md:text-6xl font-display italic text-text-primary mb-4">Technical Expertise</h2>
          <p className="text-sm md:text-base text-muted max-w-lg mx-auto">
            Drag horizontally, scroll, or use the arrow keys to browse through my core development stack and technical modules.
          </p>
        </div>

        {/* Circular Gallery Section */}
        <div className="w-full h-[550px] relative z-10 flex items-center justify-center">
          {galleryItems.length > 0 ? (
            <CircularGallery
              items={galleryItems}
              bend={3.5}
              textColor="#4E85BF"
              borderRadius={0.06}
              scrollEase={0.03}
              font="bold 24px monospace"
            />
          ) : (
            <div className="text-muted text-sm animate-pulse">Initializing quantum skills cards...</div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsMarquee;
