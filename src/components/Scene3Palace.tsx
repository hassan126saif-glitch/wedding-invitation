"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Detailed Ornate Sparkle Component
function Sparkle({ x, y, delay = 0, scale = 1 }: { x: number; y: number; delay?: number; scale?: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      className="absolute text-amber-300 pointer-events-none select-none drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${16 * scale}px`,
        height: `${16 * scale}px`,
      }}
      animate={
        shouldReduce
          ? { opacity: [0.2, 0.7, 0.2] }
          : {
              scale: [0.8, 1.3, 0.8],
              opacity: [0.3, 1, 0.3],
            }
      }
      transition={{
        duration: 3 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <path
        d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

// Mughal Palace Silhouette Outline SVG
// Flickering Brass Diya Oil Lamp on Stand
function DiyaStandSVG({ delay = 0 }: { delay?: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <svg viewBox="0 0 100 300" className="w-full h-full text-amber-500 fill-current drop-shadow-[0_4px_12px_rgba(251,191,36,0.35)]">
      {/* Base */}
      <path d="M20,290 L80,290 L75,275 L25,275 Z" fill="#D4AF37" />
      <path d="M30,275 Q50,265 70,275 Z" fill="#F59E0B" />

      {/* Tall decorative stand stem */}
      <rect x="47" y="55" width="6" height="220" fill="#D4AF37" />
      <circle cx="50" cy="110" r="7" fill="#F59E0B" />
      <circle cx="50" cy="170" r="7" fill="#F59E0B" />
      <circle cx="50" cy="230" r="7" fill="#F59E0B" />

      {/* Decorative bowl/cup holding oil at top */}
      <path d="M25,55 C25,75 75,75 75,55 Z" fill="#D4AF37" />
      <ellipse cx="50" cy="55" rx="25" ry="5" fill="#78350F" />
      <ellipse cx="50" cy="55" rx="18" ry="3" fill="#D4AF37" opacity="0.75" />

      {/* Flickering Flame */}
      <motion.g
        animate={
          shouldReduce
            ? { opacity: [0.7, 0.9, 0.7] }
            : {
                scale: [1, 1.15, 0.96, 1.12, 1],
                opacity: [0.85, 1, 0.9, 1, 0.85],
                skewX: [0, 2, -1.5, 2.5, 0],
              }
        }
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="origin-bottom"
        style={{ transformOrigin: "50px 55px" }}
      >
        {/* Outer Warm Glow */}
        <circle cx="50" cy="32" r="18" fill="rgba(245,158,11,0.25)" filter="blur(4px)" className="pointer-events-none" />
        
        {/* Main Outer Flame (Orange) */}
        <path d="M50,12 C55,27 63,35 59,46 C55,56 45,56 41,46 C37,35 45,27 50,12 Z" fill="#F97316" />
        
        {/* Inner Flame (Yellow/Amber) */}
        <path d="M50,19 C52,29 57,34 55,42 C53,48 47,48 45,42 C43,29 48,29 50,19 Z" fill="#FBBF24" />
        
        {/* Flame Core (White) */}
        <path d="M50,28 Q52,35 51,41 Q50,44 49,41 Q48,35 50,28 Z" fill="#FEF3C7" />
      </motion.g>
    </svg>
  );
}

// Mughal Palace Silhouette Outline SVG with Lattice screens
function PalaceSVG() {
  return (
    <svg viewBox="0 0 800 600" fill="none" className="w-full h-full text-amber-500/20 stroke-amber-500/25">
      <defs>
        {/* Traditional Mughal Star Geometric Pattern */}
        <pattern id="jaali-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 0 0 L 24 24 M 24 0 L 0 24 M 12 0 L 12 24 M 0 12 L 24 12" stroke="rgba(212,175,55,0.15)" strokeWidth="0.75" fill="none" />
          <polygon points="12,0 24,12 12,24 0,12" stroke="rgba(212,175,55,0.12)" strokeWidth="0.75" fill="none" />
          <circle cx="12" cy="12" r="3" stroke="rgba(212,175,55,0.08)" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>

      {/* Ornate Mughal Arch Border (Framing the card) */}
      <path
        d="M 100 600 L 100 250 C 100 150 180 100 280 80 C 310 110 350 110 400 80 C 450 110 490 110 520 80 C 620 100 700 150 700 250 L 700 600"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M 120 600 L 120 260 C 120 170 190 120 280 100 C 310 130 350 130 400 100 C 450 130 490 130 520 100 C 610 120 680 170 680 260 L 680 600"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill="none"
      />

      {/* Center Arch background filled with Jaali Lattice behind the frosted glass card */}
      <path
        d="M 280 600 L 280 240 C 280 160 320 120 400 95 C 480 120 520 160 520 240 L 520 600"
        fill="url(#jaali-pattern)"
        stroke="none"
        opacity="0.85"
      />
      <path
        d="M 280 600 L 280 240 C 280 160 320 120 400 95 C 480 120 520 160 520 240 L 520 600"
        stroke="rgba(212,175,55,0.18)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Main Dome */}
      <path
        d="M 330 180 Q 330 120 400 85 Q 470 120 470 180 Z"
        strokeWidth="2"
        fill="none"
      />
      {/* Crescent Moon spire */}
      <line x1="400" y1="85" x2="400" y2="60" strokeWidth="2.5" />
      <path d="M 397 70 Q 408 67 400 58 Q 412 63 397 75" fill="currentColor" stroke="none" />

      {/* Left Dome */}
      <path
        d="M 230 220 Q 230 175 270 150 Q 310 175 310 220 Z"
        strokeWidth="1.5"
        fill="none"
      />
      <line x1="270" y1="150" x2="270" y2="135" strokeWidth="1.5" />

      {/* Right Dome */}
      <path
        d="M 490 220 Q 490 175 530 150 Q 570 175 570 220 Z"
        strokeWidth="1.5"
        fill="none"
      />
      <line x1="530" y1="150" x2="530" y2="135" strokeWidth="1.5" />

      {/* Left Minaret (Filled with Lattice) */}
      <rect x="50" y="180" width="30" height="420" fill="url(#jaali-pattern)" />
      <rect x="50" y="180" width="30" height="420" strokeWidth="2" fill="none" />
      {/* Minaret Dome Top */}
      <path d="M 50 180 Q 50 160 65 150 Q 80 160 80 180 Z" strokeWidth="1.5" />
      <line x1="65" y1="150" x2="65" y2="140" strokeWidth="1.5" />

      {/* Right Minaret (Filled with Lattice) */}
      <rect x="720" y="180" width="30" height="420" fill="url(#jaali-pattern)" />
      <rect x="720" y="180" width="30" height="420" strokeWidth="2" fill="none" />
      {/* Minaret Dome Top */}
      <path d="M 720 180 Q 720 160 735 150 Q 750 160 750 180 Z" strokeWidth="1.5" />
      <line x1="735" y1="150" x2="735" y2="140" strokeWidth="1.5" />

      {/* Ornate Islamic geometric star details in the bottom corners */}
      <path d="M 0 500 L 80 500 L 40 540 Z" strokeWidth="1" />
      <path d="M 800 500 L 720 500 L 760 540 Z" strokeWidth="1" />
    </svg>
  );
}

export default function Scene3Palace() {
  const shouldReduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Typewriter text parts
  const fullTexts = [
    "✨ THE WEDDING CELEBRATION ✨",
    "Saturday, June 13, 2026",
    "Arrival & Baraat Reception: 1:00 PM",
    "Abdullah Palace, Ghordor Road Peoples Colony, Gujranwala",
  ];

  const [typedTexts, setTypedTexts] = useState<string[]>(["", "", "", ""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  // Check if component is scrolled into view to trigger typewriter
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typewriter logic
  useEffect(() => {
    if (!isInView) return;

    if (currentLine < fullTexts.length) {
      const fullText = fullTexts[currentLine];
      if (currentChar < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedTexts((prev) => {
            const next = [...prev];
            next[currentLine] = fullText.slice(0, currentChar + 1);
            return next;
          });
          setCurrentChar((c) => c + 1);
        }, 50); // typing speed
        return () => clearTimeout(timeout);
      } else {
        // Line completed, move to next line after a short delay
        const nextLineTimeout = setTimeout(() => {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        }, 350);
        return () => clearTimeout(nextLineTimeout);
      }
    }
  }, [isInView, currentLine, currentChar]);

  return (
    <section
      id="scene-3"
      className="relative h-screen w-full snap-start snap-always overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[#11011e] via-[#3b075e] to-[#1e0034]"
    >
      {/* Background Palace SVG */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none flex items-center justify-center w-full h-full scale-105 opacity-60">
        <PalaceSVG />
      </div>

      {/* Sparkles */}
      <Sparkle x={15} y={20} delay={0.5} scale={1.2} />
      <Sparkle x={80} y={15} delay={1.8} scale={0.9} />
      <Sparkle x={75} y={75} delay={1.2} scale={1.1} />
      <Sparkle x={22} y={70} delay={2.5} scale={0.85} />
      <Sparkle x={48} y={12} delay={3.1} scale={1} />

      {/* Traditional Flickering Diya Stands framing the card */}
      <div className="absolute left-[3%] md:left-[15%] bottom-[4vh] md:bottom-[8vh] w-[45px] md:w-[75px] h-[135px] md:h-[225px] z-25 pointer-events-none select-none">
        <DiyaStandSVG delay={0} />
      </div>
      <div className="absolute right-[3%] md:right-[15%] bottom-[4vh] md:bottom-[8vh] w-[45px] md:w-[75px] h-[135px] md:h-[225px] z-25 pointer-events-none select-none">
        <DiyaStandSVG delay={0.5} />
      </div>

      {/* Frosted Glass Details Card */}
      <motion.div
        ref={cardRef}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        animate={
          shouldReduce
            ? {}
            : {
                y: [0, -6, 0],
              }
        }
        style={{ originY: 0.5 }}
        className="relative z-20 w-11/12 max-w-md bg-purple-950/45 backdrop-blur-md border border-amber-500/30 rounded-2xl p-6 md:p-8 text-center shadow-[0_0_30px_rgba(212,175,55,0.15)] purple-glow-card"
      >
        {/* Decorative Inner Card Border */}
        <div className="absolute inset-2 border border-amber-500/10 rounded-xl pointer-events-none" />

        {/* Small Golden Arch graphic on top of Card */}
        <svg viewBox="0 0 100 40" fill="none" className="w-16 h-8 text-amber-400/70 mx-auto mb-4">
          <path d="M10,40 Q50,0 90,40" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="50" cy="18" r="3" fill="currentColor" />
        </svg>

        {/* Date, Time, Venue text inside glass card */}
        <div className="flex flex-col gap-6 md:gap-8 justify-center min-h-[180px]">
          {/* Header Line */}
          <div className="min-h-[24px]">
            <h3 className="font-cinzel text-xs md:text-sm font-bold tracking-[0.25em] text-amber-300">
              {typedTexts[0]}
              {currentLine === 0 && (
                <span className="inline-block w-2 h-4 ml-1 bg-amber-400 animate-pulse animate-blink border-l border-amber-400" />
              )}
            </h3>
          </div>

          {/* Date Line */}
          <div className="min-h-[36px]">
            <h4 className="font-playfair text-xl md:text-2xl font-semibold italic text-amber-100">
              {typedTexts[1]}
              {currentLine === 1 && (
                <span className="inline-block w-2 h-5 ml-1 bg-amber-400 animate-pulse animate-blink border-l border-amber-400" />
              )}
            </h4>
          </div>

          {/* Time Line */}
          <div className="min-h-[24px]">
            <p className="font-sans text-xs md:text-sm tracking-[0.15em] text-pink-300 font-medium">
              {typedTexts[2]}
              {currentLine === 2 && (
                <span className="inline-block w-2 h-4 ml-1 bg-amber-400 animate-pulse animate-blink border-l border-amber-400" />
              )}
            </p>
          </div>

          {/* Venue Line */}
          <div className="min-h-[48px]">
            <p className="font-cinzel text-sm md:text-base tracking-[0.15em] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
              {typedTexts[3]}
              {currentLine === 3 && (
                <span className="inline-block w-2 h-4 ml-1 bg-amber-400 animate-pulse animate-blink border-l border-amber-400" />
              )}
            </p>
          </div>
        </div>

        {/* Small Decorative Footer */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6" />
      </motion.div>
    </section>
  );
}
