"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Custom Jasmine Flower SVG animation
function JasmineFlower({ delay = 0, x = 0, y = 0, scale = 1 }: { delay?: number; x?: number; y?: number; scale?: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="absolute text-amber-50/50 select-none pointer-events-none drop-shadow-[0_2px_4px_rgba(212,175,55,0.15)]"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${24 * scale}px`,
        height: `${24 * scale}px`,
      }}
      animate={
        shouldReduce
          ? { opacity: [0.3, 0.7, 0.3] }
          : {
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 360],
            }
      }
      transition={{
        duration: 10 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {/* 5 Petals */}
      <path d="M50,15 C54,35 70,35 50,50 C70,35 85,50 50,50 C70,65 50,85 50,50 C30,65 15,50 50,50 C30,35 46,15 50,15 Z" fill="#FFFFFF" />
      <circle cx="50" cy="50" r="8" fill="#FBBF24" />
    </motion.svg>
  );
}

// Custom Groom SVG
function GroomSVG() {
  return (
    <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
      {/* Skin tone */}
      <path d="M80,100 Q100,130 120,100 L120,125 Q100,150 80,125 Z" fill="#FFE5D9" /> {/* Neck */}
      <circle cx="100" cy="90" r="35" fill="#FFE5D9" /> {/* Face */}

      {/* Turban (Pagri) - Gold and Pink */}
      {/* Base fold */}
      <path d="M60,70 Q100,50 140,70 Q145,55 100,45 Q55,55 60,70 Z" fill="#D4AF37" />
      {/* Pink fold crossing over */}
      <path d="M62,60 Q100,42 138,60 Q130,35 100,32 Q70,35 62,60 Z" fill="#EC4899" />
      {/* Turban peak (shamdah) */}
      <path d="M90,32 L100,10 L110,32 Z" fill="#D4AF37" />
      <path d="M96,32 L100,15 L104,32 Z" fill="#EC4899" />
      {/* Turban jewel (kalgi) */}
      <ellipse cx="100" cy="45" rx="5" ry="8" fill="#E11D48" />
      <circle cx="100" cy="45" r="2" fill="#FFFFFF" />
      {/* Feather */}
      <path d="M100,10 Q112,-8 118,-15 Q115,-3 103,5 Z" fill="#F3F4F6" opacity="0.9" />

      {/* Hair & Ears */}
      <path d="M65,80 Q58,82 63,90 Z" fill="#1F2937" /> {/* Left ear */}
      <path d="M135,80 Q142,82 137,90 Z" fill="#1F2937" /> {/* Right ear */}
      <path d="M65,75 Q68,68 75,70 Q80,72 85,70" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" /> {/* Sideburns */}
      <path d="M135,75 Q132,68 125,70 Q120,72 115,70" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" />

      {/* Eyes (Cute squinting cartoon eyes) */}
      <path d="M82,88 Q90,83 94,88" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M106,88 Q110,83 118,88" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* Eyebrows */}
      <path d="M80,82 Q88,77 94,80" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M106,82 Q112,77 120,80" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Smile & Blush */}
      <path d="M94,103 Q100,110 106,103" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="78" cy="98" r="4" fill="#F87171" opacity="0.5" />
      <circle cx="122" cy="98" r="4" fill="#F87171" opacity="0.5" />

      {/* Sherwani (Royal Purple & Gold) */}
      <path d="M70,125 C50,150 40,240 40,300 L160,300 C160,240 150,150 130,125 Z" fill="#581C87" /> {/* Main body */}
      {/* Collar (Gold) */}
      <path d="M80,125 Q100,140 120,125 L115,115 Q100,130 85,115 Z" fill="#D4AF37" />
      {/* Gold embroidery center strip */}
      <path d="M96,135 L104,135 L104,300 L96,300 Z" fill="#D4AF37" />
      {/* Golden buttons */}
      <circle cx="100" cy="155" r="3" fill="#FFF" />
      <circle cx="100" cy="180" r="3" fill="#FFF" />
      <circle cx="100" cy="205" r="3" fill="#FFF" />
      <circle cx="100" cy="230" r="3" fill="#FFF" />
      
      {/* Shawl (Dupatta draped) - Peach/Champagne */}
      <path d="M45,160 Q30,220 50,300" stroke="#FDE047" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.8" />
      <path d="M45,160 Q30,220 50,300" stroke="#FFEDD5" strokeWidth="4" fill="none" strokeLinecap="round" />
      
      {/* Embroidery Details (Sleeves) */}
      <path d="M50,155 Q65,190 60,240" stroke="#D4AF37" strokeWidth="2" fill="none" />
      <path d="M150,155 Q135,190 140,240" stroke="#D4AF37" strokeWidth="2" fill="none" />
    </svg>
  );
}

// Custom Bride SVG
function BrideSVG() {
  return (
    <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
      {/* Skin tone */}
      <path d="M80,105 Q100,135 120,105 L120,128 Q100,155 80,128 Z" fill="#FFE5D9" /> {/* Neck */}
      <circle cx="100" cy="95" r="32" fill="#FFE5D9" /> {/* Face */}

      {/* Hair (Black, parting in middle) */}
      <path d="M68,90 Q100,70 132,90 Q138,105 132,120 Q122,100 100,95 Q78,100 68,120 Q62,105 68,90 Z" fill="#111827" />

      {/* Eyes & Eyebrows (Cute anime look with eyelashes) */}
      <path d="M80,94 Q88,88 94,93" stroke="#111827" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M106,94 Q112,88 120,93" stroke="#111827" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M78,87 Q86,81 94,84" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M106,87 Q114,81 122,84" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Eyelashes */}
      <path d="M78,92 L75,89" stroke="#111827" strokeWidth="1.5" />
      <path d="M122,92 L125,89" stroke="#111827" strokeWidth="1.5" />

      {/* Smile & Blush */}
      <path d="M95,107 Q100,113 105,107" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="79" cy="103" r="5" fill="#EC4899" opacity="0.4" />
      <circle cx="121" cy="103" r="5" fill="#EC4899" opacity="0.4" />

      {/* Gold Jewelry - Maang Tikka (Forehead) */}
      <line x1="100" y1="72" x2="100" y2="82" stroke="#D4AF37" strokeWidth="2" />
      <polygon points="100,82 97,86 100,90 103,86" fill="#D4AF37" />
      <circle cx="100" cy="86" r="1.5" fill="#EF4444" />

      {/* Earrings (Jhumkas) */}
      {/* Left Earring */}
      <path d="M68,102 Q60,110 65,115 L70,115 Z" fill="#D4AF37" />
      <circle cx="66" cy="118" r="2" fill="#E11D48" />
      {/* Right Earring */}
      <path d="M132,102 Q140,110 135,115 L130,115 Z" fill="#D4AF37" />
      <circle cx="134" cy="118" r="2" fill="#E11D48" />

      {/* Lehenga Dress (Pink & Gold) */}
      <path d="M70,130 C50,155 40,240 40,300 L160,300 C160,240 150,155 130,130 Z" fill="#DB2777" /> {/* Main dress */}
      
      {/* Gold Necklace */}
      <path d="M78,128 Q100,145 122,128" stroke="#D4AF37" strokeWidth="4" fill="none" />
      <path d="M83,134 Q100,150 117,134" stroke="#F59E0B" strokeWidth="2" fill="none" />

      {/* Dupatta Veil (Translucent Pink draped over head and shoulders) */}
      {/* Back drape */}
      <path d="M62,90 C50,120 32,220 35,300 L55,300 C50,220 62,130 70,105 Z" fill="#EC4899" opacity="0.75" />
      <path d="M138,90 C150,120 168,220 165,300 L145,300 C150,220 138,130 130,105 Z" fill="#EC4899" opacity="0.75" />
      {/* Arch on top of hair */}
      <path d="M64,90 Q100,66 136,90 Q142,92 136,88 Q100,60 64,88 Z" fill="#DB2777" />
      {/* Gold borders on dupatta */}
      <path d="M64,88 Q100,62 136,88" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
      <path d="M62,90 C50,120 32,220 35,300" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      <path d="M138,90 C150,120 168,220 165,300" stroke="#D4AF37" strokeWidth="1.5" fill="none" />

      {/* Gold Dots (Embroidery patterns on Lehenga dress) */}
      <circle cx="80" cy="180" r="2" fill="#FBBF24" />
      <circle cx="120" cy="180" r="2" fill="#FBBF24" />
      <circle cx="100" cy="195" r="2.5" fill="#FBBF24" />
      <circle cx="70" cy="220" r="2" fill="#FBBF24" />
      <circle cx="130" cy="220" r="2" fill="#FBBF24" />
      <circle cx="90" cy="240" r="2.5" fill="#FBBF24" />
      <circle cx="110" cy="240" r="2.5" fill="#FBBF24" />
      <circle cx="100" cy="265" r="3" fill="#FBBF24" />
      <circle cx="75" cy="275" r="2" fill="#FBBF24" />
      <circle cx="125" cy="275" r="2" fill="#FBBF24" />
    </svg>
  );
}

// Custom swinging Marigold flower garland chain
function MarigoldChain({ x, height = 120, delay = 0 }: { x: number; height?: number; delay?: number }) {
  const flowersCount = Math.floor(height / 18);
  return (
    <motion.div
      className="absolute origin-top pointer-events-none select-none z-15"
      style={{ left: `${x}%`, top: 0 }}
      animate={{ rotate: [-2.5, 2.5, -2.5] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {/* String */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[1px] bg-amber-800/20" style={{ height }} />
      {/* Flower balls */}
      <div className="flex flex-col items-center">
        {Array.from({ length: flowersCount }).map((_, idx) => {
          const isOrange = idx % 2 === 0;
          return (
            <div
              key={idx}
              className="w-3.5 h-3.5 rounded-full relative my-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.15)]"
              style={{
                backgroundColor: isOrange ? "#F97316" : "#FBBF24",
                border: `1px solid ${isOrange ? "#EA580C" : "#D97706"}`,
              }}
            >
              {/* Petal core */}
              <div className="absolute inset-[3px] rounded-full bg-white/25" />
            </div>
          );
        })}
        {/* Decorative Green leaf at bottom of chain */}
        <div className="w-2 h-2.5 bg-emerald-600 rounded-t-sm" />
        {/* Tiny golden drop bell */}
        <div className="w-2.5 h-1.5 bg-amber-400 rounded-full border border-amber-300" />
      </div>
    </motion.div>
  );
}

// Guest Silhouettes in Bottom Left Corner
function GuestLeftSilhouette() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-pink-900/15 fill-current">
      {/* Leftmost Guest profile */}
      <path d="M-10,200 L12,135 C20,122 30,110 32,95 C30,90 25,85 20,88 C15,90 10,100 5,105 C-5,115 -10,125 -10,140 Z" />
      <circle cx="28" cy="80" r="10" />
      <path d="M25,100 Q45,75 55,60 C58,55 52,50 48,55 Q35,75 20,95 Z" />
      
      {/* Tall central Guest throwing rose petals */}
      <path d="M25,200 L45,115 C55,105 60,95 58,80 C55,75 48,72 42,75 C36,78 30,85 28,95 C25,110 20,130 20,200 Z" />
      <circle cx="48" cy="65" r="9.5" />
      <path d="M48,82 Q75,45 85,30 C90,22 82,18 78,25 Q65,48 40,82 Z" />
      <circle cx="85" cy="30" r="2.5" className="text-rose-400" /> {/* Petals in hand */}

      {/* Guest looking up/waving on right of Left silhouette */}
      <path d="M55,200 L75,130 C80,120 85,110 82,98 C78,92 70,90 65,95 C60,100 58,110 55,120 C52,140 45,160 45,200 Z" />
      <circle cx="72" cy="86" r="9" />
      <path d="M72,100 Q95,75 105,65 C110,60 105,55 100,60 Q85,75 68,100 Z" />
    </svg>
  );
}

// Guest Silhouettes in Bottom Right Corner (Mirrored)
function GuestRightSilhouette() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-pink-900/15 fill-current transform scale-x-[-1]">
      <path d="M-10,200 L12,135 C20,122 30,110 32,95 C30,90 25,85 20,88 C15,90 10,100 5,105 C-5,115 -10,125 -10,140 Z" />
      <circle cx="28" cy="80" r="10" />
      <path d="M25,100 Q45,75 55,60 C58,55 52,50 48,55 Q35,75 20,95 Z" />
      
      <path d="M25,200 L45,115 C55,105 60,95 58,80 C55,75 48,72 42,75 C36,78 30,85 28,95 C25,110 20,130 20,200 Z" />
      <circle cx="48" cy="65" r="9.5" />
      <path d="M48,82 Q75,45 85,30 C90,22 82,18 78,25 Q65,48 40,82 Z" />
      <circle cx="85" cy="30" r="2.5" className="text-rose-400" />

      <path d="M55,200 L75,130 C80,120 85,110 82,98 C78,92 70,90 65,95 C60,100 58,110 55,120 C52,140 45,160 45,200 Z" />
      <circle cx="72" cy="86" r="9" />
      <path d="M72,100 Q95,75 105,65 C110,60 105,55 100,60 Q85,75 68,100 Z" />
    </svg>
  );
}

// Swaying and drifting Falling Rose Petals
function FallingPetal({ delay = 0, x = 0 }: { delay?: number; x?: number }) {
  return (
    <motion.svg
      viewBox="0 0 20 20"
      className="absolute text-rose-500/70 fill-current select-none pointer-events-none z-15"
      style={{
        left: `${x}%`,
        top: `-20px`,
        width: `${Math.random() * 8 + 8}px`,
        height: `${Math.random() * 8 + 8}px`,
      }}
      animate={{
        y: ["0vh", "105vh"],
        x: [`${x}%`, `${x + (Math.random() * 24 - 12)}%`],
        rotate: [0, 360 * (Math.random() > 0.5 ? 1.5 : -1.5)],
      }}
      transition={{
        duration: 9 + Math.random() * 5,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      <path d="M10,0 C15,4 20,8 16,14 C12,18 6,18 3,14 C-1,10 4,4 10,0 Z" />
    </motion.svg>
  );
}

export default function Scene1Intro() {
  const shouldReduce = useReducedMotion();
  const [petals, setPetals] = useState<{ id: number; x: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate scattered falling petals on mount to avoid Next.js hydration mismatches
    const generated = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      x: Math.random() * 92 + 4,
      delay: Math.random() * -12, // Pre-warmed delays so they start immediately
    }));
    setPetals(generated);
  }, []);

  // Settings for slide animations based on reduced motion setting
  const slideLeft = shouldReduce ? { x: 0, opacity: [0, 1] } : { x: ["-100%", "0%"], opacity: 1 };
  const slideRight = shouldReduce ? { x: 0, opacity: [0, 1] } : { x: ["100%", "0%"], opacity: 1 };
  const scaleBounce = shouldReduce ? { scale: 1, opacity: 1 } : { scale: [0.3, 1], opacity: 1 };

  return (
    <section
      id="scene-1"
      className="relative h-screen w-full snap-start snap-always overflow-hidden flex flex-col items-center justify-between py-12 md:py-16 bg-gradient-to-b from-[#fad5dc] via-[#f7c2cf] to-[#faebd7]"
    >
      {/* Decorative Marigold Garlands dangling from top */}
      {!shouldReduce && (
        <>
          <MarigoldChain x={5} height={150} delay={0.2} />
          <MarigoldChain x={13} height={100} delay={1.4} />
          <MarigoldChain x={23} height={130} delay={0.8} />
          <MarigoldChain x={33} height={85} delay={2.1} />
          <MarigoldChain x={67} height={85} delay={1.8} />
          <MarigoldChain x={77} height={130} delay={0.5} />
          <MarigoldChain x={87} height={100} delay={1.1} />
          <MarigoldChain x={95} height={150} delay={2.3} />
        </>
      )}

      {/* Floating Rose Petals drifting down */}
      {!shouldReduce && petals.map((petal) => (
        <FallingPetal key={petal.id} x={petal.x} delay={petal.delay} />
      ))}

      {/* Sparkles / Jasmine Flowers floating */}
      <JasmineFlower delay={0} x={10} y={15} scale={1.2} />
      <JasmineFlower delay={3} x={85} y={20} scale={0.9} />
      <JasmineFlower delay={1.5} x={75} y={55} scale={1.1} />
      <JasmineFlower delay={4.5} x={20} y={65} scale={0.8} />

      {/* Decorative Top Border Arch */}
      <div className="absolute top-0 left-0 w-full h-16 pointer-events-none opacity-40 select-none z-10">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full h-full text-[#581C87]">
          <path d="M0,0 L1440,0 L1440,30 Q1080,70 720,30 Q360,70 0,30 Z" fill="currentColor" />
          <path d="M0,40 Q360,80 720,40 Q1080,80 1440,40" stroke="#D4AF37" strokeWidth="2" />
        </svg>
      </div>

      {/* Subtitle & Header Area */}
      <div className="z-20 text-center px-4 mt-8 flex flex-col items-center max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-purple-950 font-semibold mb-2 font-cinzel"
        >
          Bismillah-ir-Rahman-ir-Rahim
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[15px] md:text-lg italic font-medium text-pink-800 font-playfair leading-relaxed mb-4"
        >
          Together with their families invite you to celebrate
        </motion.p>
      </div>

      {/* Couple Names (Center stage) */}
<div className="z-20 text-center w-full px-4 my-auto">
  <motion.div
    initial={{ scale: 0.3, opacity: 0 }}
    whileInView={scaleBounce}
    viewport={{ once: true }}
    transition={{
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.6,
    }}
    className="relative inline-block w-full max-w-2xl"
  >
    {/* Background glowing glow */}
    <div className="absolute -inset-4 bg-amber-400/20 blur-xl rounded-full opacity-60 animate-pulse pointer-events-none" />

    {/* Names with lineage — responsive row on md+, stacked on mobile */}
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 px-2">

      {/* Ayesha block */}
      <div className="flex flex-col items-center">
        <h1 className="font-playfair italic text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-950 via-amber-600 to-purple-950 drop-shadow-[0_2px_4px_rgba(212,175,55,0.2)] leading-tight">
          Ayesha Saif
        </h1>
        <p className="font-cinzel text-[11px] md:text-xs tracking-widest uppercase text-purple-800/80 mt-1">
          daughter of <span className="font-semibold text-purple-950">SaifUllah</span>
        </p>
      </div>

      {/* Ampersand divider */}
      <span className="font-playfair italic text-4xl md:text-6xl font-bold text-amber-500 select-none leading-none pb-4 md:pb-0">
        &amp;
      </span>

      {/* Hassan block */}
      <div className="flex flex-col items-center">
        <h1 className="font-playfair italic text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-950 via-amber-600 to-purple-950 drop-shadow-[0_2px_4px_rgba(212,175,55,0.2)] leading-tight">
          Hassan Maqsood
        </h1>
        <p className="font-cinzel text-[11px] md:text-xs tracking-widest uppercase text-purple-800/80 mt-1">
          son of <span className="font-semibold text-purple-950">Maqsood</span>
        </p>
      </div>
    </div>

    {/* Decorative Divider */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="h-[1.5px] w-40 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4"
    />
  </motion.div>
</div>

      {/* Groom & Bride Slide In (Settle at bottom left/right) */}
      <div className="relative w-full max-w-lg md:max-w-2xl px-6 md:px-12 flex justify-between items-end h-[35vh] md:h-[40vh] z-20 pointer-events-none select-none">
        
        {/* Cartoon Groom */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={slideLeft}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.8 }}
          className="w-[140px] md:w-[190px] h-full"
        >
          <GroomSVG />
        </motion.div>

        {/* Cartoon Bride */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={slideRight}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.8 }}
          className="w-[140px] md:w-[190px] h-full"
        >
          <BrideSVG />
        </motion.div>
        
      </div>

      {/* Guest Silhouettes in Corners */}
      <div className="absolute left-0 bottom-0 w-[100px] md:w-[180px] h-[100px] md:h-[180px] pointer-events-none select-none z-15 opacity-80">
        <GuestLeftSilhouette />
      </div>
      <div className="absolute right-0 bottom-0 w-[100px] md:w-[180px] h-[100px] md:h-[180px] pointer-events-none select-none z-15 opacity-80">
        <GuestRightSilhouette />
      </div>

      {/* Cloud Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-10 opacity-90">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto text-amber-50">
          <path d="M0,80 Q120,40 280,60 Q440,80 600,60 Q760,40 920,60 Q1080,80 1240,65 Q1360,50 1440,70 L1440,120 L0,120 Z" fill="currentColor" />
          <path d="M0,90 Q150,55 320,70 Q490,85 660,70 Q830,55 1000,70 Q1170,85 1310,75 Q1390,70 1440,78 L1440,120 L0,120 Z" fill="#FFFDF9" opacity="0.6" />
        </svg>
      </div>
    </section>
  );
}
