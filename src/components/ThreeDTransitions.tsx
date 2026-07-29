import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Text3DProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  charDelay?: number;
  duration?: number;
}

export const Text3D: React.FC<Text3DProps> = ({
  text,
  className = '',
  delay = 0,
  wordDelay = 0.05,
  charDelay = 0.015,
  duration = 0.8
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const words = text.split(' ');

  return (
    <span
      ref={containerRef}
      className={`inline-block ${className}`}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      {words.map((word, wIdx) => (
        <span
          key={wIdx}
          className="inline-block whitespace-nowrap mr-[0.25em]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {word.split('').map((char, cIdx) => (
            <motion.span
              key={cIdx}
              className="inline-block origin-bottom"
              initial={{ opacity: 0, rotateX: 90, y: '30%', z: -60 }}
              animate={isInView ? { opacity: 1, rotateX: 0, y: 0, z: 0 } : {}}
              transition={{
                duration: duration,
                ease: [0.16, 1, 0.3, 1], // easeOutExpo
                delay: delay + (wIdx * wordDelay) + (cIdx * charDelay),
              }}
              style={{ backfaceVisibility: 'hidden', display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

interface Container3DProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  tiltOnHover?: boolean;
  rotateXStart?: number;
  rotateYStart?: number;
  zStart?: number;
  yStart?: number;
}

export const Container3D: React.FC<Container3DProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 1.0,
  tiltOnHover = true,
  rotateXStart = 20,
  rotateYStart = -10,
  zStart = -100,
  yStart = 50
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        rotateX: rotateXStart,
        rotateY: rotateYStart,
        z: zStart,
        y: yStart
      }}
      animate={isInView ? {
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        z: 0,
        y: 0
      } : {}}
      whileHover={tiltOnHover ? {
        rotateX: 3,
        rotateY: -3,
        scale: 1.02,
        z: 15,
        transition: { duration: 0.3, ease: "easeOut" }
      } : undefined}
      transition={{
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
        delay: delay
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
    </motion.div>
  );
};

interface Section3DProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  rotateXStart?: number;
  scaleStart?: number;
  yStart?: number;
  duration?: number;
}

export const Section3D: React.FC<Section3DProps> = ({
  children,
  className = '',
  id,
  rotateXStart = 15,
  scaleStart = 0.95,
  yStart = 80,
  duration = 1.2
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial={{
        opacity: 0.7,
        rotateX: rotateXStart,
        scale: scaleStart,
        y: yStart
      }}
      animate={isInView ? {
        opacity: 1,
        rotateX: 0,
        scale: 1,
        y: 0
      } : {}}
      transition={{
        duration: duration,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        transformOrigin: 'top center',
        transformStyle: 'preserve-3d',
        perspective: '1500px'
      }}
    >
      {children}
    </motion.section>
  );
};
