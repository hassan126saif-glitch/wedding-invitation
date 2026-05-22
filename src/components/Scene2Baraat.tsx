"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Swaying Hanging Lantern SVG
function HangingLantern({ x = 10, delay = 0, scale = 1 }: { x: number; delay?: number; scale?: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 100 150"
      className="absolute text-amber-300 pointer-events-none select-none drop-shadow-[0_4px_8px_rgba(251,191,36,0.3)] origin-top"
      style={{
        left: `${x}%`,
        top: 0,
        width: `${40 * scale}px`,
        height: `${60 * scale}px`,
      }}
      animate={
        shouldReduce
          ? { opacity: [0.7, 1, 0.7] }
          : { rotate: [-5, 5, -5] }
      }
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {/* Wire/String */}
      <line x1="50" y1="0" x2="50" y2="60" stroke="#D4AF37" strokeWidth="2.5" />
      {/* Lantern cap */}
      <path d="M35,60 L65,60 L58,50 L42,50 Z" fill="#D4AF37" />
      {/* Glass body with bulb inside */}
      <path d="M30,60 L70,60 L60,110 L40,110 Z" fill="rgba(251,191,36,0.2)" stroke="#D4AF37" strokeWidth="2.5" />
      <circle cx="50" cy="80" r="12" fill="#FCD34D" opacity="0.9" className="animate-pulse" />
      {/* Bottom tassel */}
      <path d="M45,110 L55,110 L50,130 Z" fill="#DB2777" />
      {/* Sparkle highlights */}
      <circle cx="50" cy="80" r="24" fill="rgba(251,191,36,0.15)" className="pointer-events-none" style={{ filter: "blur(10px)" }} />
    </motion.svg>
  );
}

// Decorated Baraat Horse SVG
function HorseSVG() {
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full">
      {/* Horse Body (White/Light Gray) */}
      <path d="M190,130 C185,120 180,90 170,80 C160,70 140,75 125,75 C100,75 90,85 75,95 C55,110 50,135 60,150 C70,165 95,160 115,160 C135,160 170,165 185,155 C195,148 195,138 190,130 Z" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" />
      
      {/* Neck & Head */}
      <path d="M145,80 C160,75 180,50 185,30 C190,20 182,10 175,15 C165,22 155,50 135,70 Z" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" />
      <path d="M185,30 Q200,28 205,38 Q202,48 185,42 Z" fill="#F9FAFB" /> {/* Muzzle */}
      
      {/* Ears */}
      <path d="M172,16 Q170,5 175,5 Q180,5 178,16 Z" fill="#F3F4F6" />
      <path d="M178,18 Q177,8 181,8 Q185,8 183,18 Z" fill="#F3F4F6" />

      {/* Mane (Dark gray/black) */}
      <path d="M172,18 Q165,25 168,32 M163,30 Q155,38 158,45 M152,43 Q145,52 149,60" stroke="#374151" strokeWidth="4" strokeLinecap="round" />

      {/* Eye */}
      <circle cx="188" cy="30" r="2.5" fill="#111827" />
      <path d="M192,26 Q188,23 184,27" stroke="#374151" strokeWidth="1" fill="none" />

      {/* Legs (Front & Back) */}
      {/* Back leg 1 */}
      <path d="M80,150 L75,200 L87,200 L92,152 Z" fill="#F3F4F6" />
      <rect x="75" y="194" width="12" height="6" rx="1" fill="#D4AF37" />
      {/* Back leg 2 */}
      <path d="M98,155 L98,200 L110,200 L108,155 Z" fill="#E5E7EB" />
      <rect x="98" y="194" width="12" height="6" rx="1" fill="#D4AF37" />
      {/* Front leg 1 */}
      <path d="M165,150 L168,198 L180,198 L175,150 Z" fill="#F3F4F6" />
      <rect x="168" y="194" width="12" height="6" rx="1" fill="#D4AF37" />
      {/* Front leg 2 (Bent/Prancing) */}
      <path d="M142,150 Q138,175 125,180 Q122,182 128,172 Q138,162 148,150 Z" fill="#E5E7EB" />
      <polygon points="120,178 126,182 122,185 118,181" fill="#D4AF37" />

      {/* Tail */}
      <path d="M60,135 Q30,140 20,180 Q40,175 55,150 Z" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" />

      {/* Festive Decorations (Pakistani Wedding Style) */}
      {/* Jhul (Red & Gold Saddle Cloth) */}
      <path d="M95,100 C110,100 145,100 155,105 C158,115 155,145 150,152 C125,152 105,148 95,142 C92,130 92,110 95,100 Z" fill="#DC2777" /> {/* Red cloth */}
      <path d="M100,105 C112,105 140,105 150,110 C152,118 150,138 145,142 C125,142 108,138 100,132 Z" fill="#D4AF37" opacity="0.3" /> {/* Inner gold detail */}
      <path d="M95,142 Q122,148 150,152" stroke="#D4AF37" strokeWidth="4" strokeDasharray="3 3" fill="none" /> {/* Gold hanging tassels effect */}

      {/* Ornamental Plume (Kalgi) on Head */}
      <path d="M178,14 L178,0 L184,10 Z" fill="#EC4899" />
      <circle cx="178" cy="14" r="2" fill="#D4AF37" />

      {/* Bridle & Reins (Gold) */}
      <path d="M185,38 Q180,38 178,16" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
      <path d="M185,42 Q145,95 125,100" stroke="#D4AF37" strokeWidth="3" fill="none" /> {/* Rein leash */}
      
      {/* Decorative Chest Band (Ganda) */}
      <path d="M145,80 Q130,110 115,115" stroke="#EC4899" strokeWidth="4" fill="none" />
      <circle cx="130" cy="100" r="4" fill="#D4AF37" />
    </svg>
  );
}

// Turbaned Dhol Player Musician cartoon SVG
function DholPlayerSVG() {
  return (
    <svg viewBox="0 0 200 250" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
      {/* Turban (Pagri) - Orange & Yellow */}
      <path d="M70,55 Q100,35 130,55 Q135,42 100,32 Q65,42 70,55 Z" fill="#F97316" />
      <path d="M72,45 Q100,30 128,45 Q120,25 100,22 Q80,25 72,45 Z" fill="#FBBF24" />
      <path d="M96,22 L100,5 L104,22 Z" fill="#F97316" />
      <circle cx="100" cy="32" r="3" fill="#E11D48" />

      {/* Face & Hair */}
      <circle cx="100" cy="75" r="24" fill="#FFE5D9" />
      <path d="M85,73 Q90,68 93,73" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M107,73 Q112,68 115,73" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M95,88 Q100,94 105,88" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="83" cy="80" r="3" fill="#F87171" opacity="0.4" />
      <circle cx="117" cy="80" r="3" fill="#F87171" opacity="0.4" />

      {/* Body / Kurta (Emerald Green) */}
      <path d="M70,98 C50,118 45,180 45,230 L155,230 C155,180 150,118 130,98 Z" fill="#047857" />
      <path d="M80,98 Q100,108 120,98 L115,92 Q100,100 85,92 Z" fill="#D4AF37" />

      {/* Dhol hung horizontally */}
      <path d="M60,145 Q100,120 140,145 L140,190 Q100,215 60,190 Z" fill="#78350F" stroke="#D4AF37" strokeWidth="2" />
      <ellipse cx="60" cy="167.5" rx="8" ry="22.5" fill="#FEF3C7" stroke="#451A03" strokeWidth="1.5" />
      <ellipse cx="140" cy="167.5" rx="8" ry="22.5" fill="#FEF3C7" stroke="#451A03" strokeWidth="1.5" />
      {/* V-ropes */}
      <path d="M68,147 L100,167 L68,188 L110,167 L132,147 L115,167 L132,188 L100,167" fill="none" stroke="#FDE047" strokeWidth="1.5" />
      {/* Red Strap */}
      <path d="M78,98 Q60,120 70,145 M122,98 Q140,120 130,145" fill="none" stroke="#EF4444" strokeWidth="4" />

      {/* Hands holding sticks */}
      <path d="M52,115 Q35,130 48,150" fill="none" stroke="#047857" strokeWidth="10" strokeLinecap="round" />
      <circle cx="48" cy="150" r="5" fill="#FFE5D9" />
      <line x1="42" y1="138" x2="30" y2="160" stroke="#9A3412" strokeWidth="3" strokeLinecap="round" />

      <path d="M148,115 Q165,130 152,150" fill="none" stroke="#047857" strokeWidth="10" strokeLinecap="round" />
      <circle cx="152" cy="150" r="5" fill="#FFE5D9" />
      <line x1="158" y1="138" x2="170" y2="160" stroke="#9A3412" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// Turbaned Trumpet/Shehnai Player Musician cartoon SVG
function TrumpetPlayerSVG() {
  return (
    <svg viewBox="0 0 200 250" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
      {/* Turban (Pagri) - Crimson & Gold */}
      <path d="M70,55 Q100,35 130,55 Q135,42 100,32 Q65,42 70,55 Z" fill="#DC2777" />
      <path d="M72,45 Q100,30 128,45 Q120,25 100,22 Q80,25 72,45 Z" fill="#FBBF24" />
      <path d="M96,22 L100,5 L104,22 Z" fill="#DC2777" />
      <circle cx="100" cy="32" r="3" fill="#FBBF24" />

      {/* Face (puffed cheeks) */}
      <path d="M76,75 C76,62 124,62 124,75 C124,94 120,105 100,105 C80,105 76,94 76,75 Z" fill="#FFE5D9" />
      <path d="M84,72 Q88,68 91,72" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M109,72 Q112,68 116,72" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="83" cy="82" r="5" fill="#F87171" opacity="0.5" />
      <circle cx="117" cy="82" r="5" fill="#F87171" opacity="0.5" />
      
      {/* Mouth blowing */}
      <circle cx="100" cy="88" r="4" fill="#E11D48" />

      {/* Kurta (Royal Blue) */}
      <path d="M70,102 C50,122 45,185 45,235 L155,235 C155,185 150,122 130,102 Z" fill="#1D4ED8" />
      <path d="M80,102 Q100,112 120,102 L115,96 Q100,104 85,96 Z" fill="#D4AF37" />

      {/* Shehnai extending to bottom right */}
      <path d="M100,88 L155,160 L163,154 L108,82 Z" fill="#78350F" />
      <path d="M100,88 L155,160" stroke="#D4AF37" strokeWidth="2" />
      <path d="M148,162 Q158,180 178,168 L160,148 Z" fill="#D4AF37" stroke="#78350F" strokeWidth="1" />
      <ellipse cx="168" cy="158" rx="8" ry="8" fill="#F59E0B" transform="rotate(-45 168 158)" />

      {/* Arms holding shehnai */}
      <path d="M60,120 Q85,115 108,125" fill="none" stroke="#1D4ED8" strokeWidth="10" strokeLinecap="round" />
      <circle cx="108" cy="125" r="4.5" fill="#FFE5D9" />

      <path d="M140,120 Q120,125 116,138" fill="none" stroke="#1D4ED8" strokeWidth="10" strokeLinecap="round" />
      <circle cx="116" cy="138" r="4.5" fill="#FFE5D9" />
    </svg>
  );
}

// Dancing Guest 1 cartoon SVG
function DancingGuest1() {
  return (
    <svg viewBox="0 0 160 220" className="w-full h-full drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]">
      {/* Turban (Purple/Pink) */}
      <path d="M50,50 Q80,30 110,50 Q115,38 80,28 Q45,38 50,50 Z" fill="#A855F7" />
      <circle cx="80" cy="70" r="20" fill="#FFE5D9" />
      <path d="M72,68 Q76,64 78,68" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M82,68 Q86,64 88,68" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M76,80 Q80,85 84,80" stroke="#1F2937" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="68" cy="74" r="3" fill="#EC4899" opacity="0.4" />
      <circle cx="92" cy="74" r="3" fill="#EC4899" opacity="0.4" />

      {/* Kurta (Lavender) */}
      <path d="M55,90 C40,110 35,160 35,220 L125,220 C125,160 120,110 105,90 Z" fill="#C084FC" />

      {/* Left Arm raised high */}
      <path d="M45,100 Q20,60 15,35" fill="none" stroke="#C084FC" strokeWidth="10" strokeLinecap="round" />
      <circle cx="15" cy="35" r="5" fill="#FFE5D9" />
      {/* Right Arm raised to side */}
      <path d="M115,100 Q140,80 145,55" fill="none" stroke="#C084FC" strokeWidth="10" strokeLinecap="round" />
      <circle cx="145" cy="55" r="5" fill="#FFE5D9" />
    </svg>
  );
}

// Dancing Guest 2 cartoon SVG
function DancingGuest2() {
  return (
    <svg viewBox="0 0 160 220" className="w-full h-full drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]">
      {/* Turban (Gold) */}
      <path d="M50,50 Q80,30 110,50 Q115,38 80,28 Q45,38 50,50 Z" fill="#EAB308" />
      <circle cx="80" cy="70" r="20" fill="#FFE5D9" />
      <path d="M72,68 Q76,64 78,68" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M82,68 Q86,64 88,68" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M75,80 Q80,86 85,80" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Kurta (Teal/Cyan) */}
      <path d="M55,90 C40,110 35,160 35,220 L125,220 C125,160 120,110 105,90 Z" fill="#06B6D4" />

      {/* Both Arms raised up */}
      <path d="M48,100 Q30,60 40,25" fill="none" stroke="#06B6D4" strokeWidth="10" strokeLinecap="round" />
      <circle cx="40" cy="25" r="5" fill="#FFE5D9" />
      <path d="M112,100 Q130,60 120,25" fill="none" stroke="#06B6D4" strokeWidth="10" strokeLinecap="round" />
      <circle cx="120" cy="25" r="5" fill="#FFE5D9" />
    </svg>
  );
}

// Bouncing Musical Notes
function FloatingNote({ path, delay = 0, size = 16 }: { path: string; delay?: number; size?: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="absolute text-amber-200/60 pointer-events-none select-none drop-shadow-[0_2px_4px_rgba(251,191,36,0.2)]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={
        shouldReduce
          ? { opacity: [0.3, 0.7, 0.3] }
          : {
              y: [0, -60, 0],
              x: [0, 25, 0],
              opacity: [0, 0.8, 0],
            }
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <path d={path} />
    </motion.svg>
  );
}

export default function Scene2Baraat() {
  const shouldReduce = useReducedMotion();

  interface GoldParticle {
    id: number;
    left: number;
    top: number;
    size: number;
    yDist: number;
    duration: number;
    delay: number;
  }

  const [particles, setParticles] = useState<GoldParticle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      yDist: -30 - Math.random() * 50,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * -5,
    }));
    setParticles(generated);
  }, []);

  // Anim configurations
  const slideRight = shouldReduce ? { x: 0, opacity: [0, 1] } : { x: ["100%", "0%"], opacity: 1 };
  const processionReveal = shouldReduce ? { x: 0, opacity: [0, 1] } : { x: ["-100%", "0%"], opacity: 1 };

  return (
    <section
      id="scene-2"
      className="relative h-screen w-full snap-start snap-always overflow-hidden flex flex-col items-center justify-between py-12 md:py-16 bg-gradient-to-b from-[#1e0030] via-[#3c0764] to-[#1e0030]"
    >
      {/* Swaying Lanterns */}
      <HangingLantern x={12} delay={0} scale={1.1} />
      <HangingLantern x={35} delay={1.2} scale={0.9} />
      <HangingLantern x={65} delay={0.6} scale={0.95} />
      <HangingLantern x={88} delay={1.8} scale={1.1} />

      {/* Geometric Gold Mandalas (Background decorations) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] select-none flex items-center justify-center">
        <svg viewBox="0 0 500 500" className="w-[80vw] max-w-[450px] h-auto text-amber-300">
          <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="250" cy="250" r="150" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
          {/* Petals */}
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={i}
              d="M250,250 C290,150 210,150 250,250"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              transform={`rotate(${i * 30} 250 250)`}
            />
          ))}
          {/* Diamonds */}
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x="200"
              y="200"
              width="100"
              height="100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${i * 45} 250 250)`}
            />
          ))}
        </svg>
      </div>

      {/* Scene Title Area */}
      <div className="z-20 text-center px-4 mt-12 w-full">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={slideRight}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 14 }}
          className="relative inline-block"
        >
          {/* Gold glowing shadow */}
          <div className="absolute -inset-4 bg-purple-500/10 blur-lg rounded-full pointer-events-none" />
          
          <h2 className="relative font-cinzel text-3xl md:text-5xl font-extrabold uppercase tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 drop-shadow-[0_4px_10px_rgba(212,175,55,0.4)] px-4">
            Grand Baraat Ceremony
          </h2>
          
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xs md:text-sm tracking-[0.2em] uppercase text-pink-300 font-semibold mt-3 font-cinzel"
        >
          Join us for an unforgettable afternoon of celebration
        </motion.p>
      </div>

      {/* Musical notes floating around the shehnai */}
      <div className="absolute left-[70%] top-[60%] w-24 h-24 z-15 pointer-events-none">
        <FloatingNote path="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" delay={0} size={18} />
        <FloatingNote path="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" delay={2} size={14} />
      </div>
      <div className="absolute left-[42%] top-[62%] w-24 h-24 z-15 pointer-events-none">
        <FloatingNote path="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" delay={1.5} size={15} />
      </div>

      {/* Procession Conveyor (Baraat Elements) */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={processionReveal}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 45, damping: 13, delay: 0.4 }}
        className="w-full max-w-xl md:max-w-2xl px-6 md:px-12 flex items-end justify-between h-[35vh] md:h-[40vh] z-20 pointer-events-none select-none my-auto"
      >
        {/* Bouncing Dhol Player */}
        <motion.div
          animate={
            shouldReduce
              ? {}
              : {
                  y: [-4, 4, -4],
                  rotate: [-3, 3, -3],
                }
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="w-[95px] md:w-[145px]"
        >
          <DholPlayerSVG />
        </motion.div>

        {/* White Prancing Baraat Horse */}
        <motion.div
          animate={
            shouldReduce
              ? {}
              : {
                  y: [0, -10, 0],
                  rotate: [0, 1.5, 0],
                }
          }
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[140px] md:w-[220px] pb-2"
        >
          <HorseSVG />
        </motion.div>

        {/* Bouncing Trumpet Player (leading) */}
        <motion.div
          animate={
            shouldReduce
              ? {}
              : {
                  y: [4, -4, 4],
                  rotate: [2, -2, 2],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="w-[95px] md:w-[145px]"
        >
          <TrumpetPlayerSVG />
        </motion.div>
      </motion.div>

      {/* Background Bobbing Dancing Guest 1 (Left background) */}
      <motion.div
        animate={
          shouldReduce
            ? {}
            : {
                y: [0, -12, 0],
                rotate: [-2, 2, -2],
              }
        }
        transition={{
          duration: 1.7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="absolute left-[6%] md:left-[16%] bottom-[4vh] md:bottom-[6vh] w-[65px] md:w-[100px] h-auto z-15 pointer-events-none select-none opacity-85"
      >
        <DancingGuest1 />
      </motion.div>

      {/* Background Bobbing Dancing Guest 2 (Right background) */}
      <motion.div
        animate={
          shouldReduce
            ? {}
            : {
                y: [0, -12, 0],
                rotate: [2, -2, 2],
              }
        }
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute right-[6%] md:right-[16%] bottom-[4vh] md:bottom-[6vh] w-[65px] md:w-[100px] h-auto z-15 pointer-events-none select-none opacity-85"
      >
        <DancingGuest2 />
      </motion.div>

      {/* Custom Framer Motion Confetti & Golden Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-10 select-none overflow-hidden">
        {/* Floating golden particle circles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-amber-400/50"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
            }}
            animate={
              shouldReduce
                ? { opacity: [0.2, 0.6, 0.2] }
                : {
                    y: [0, p.yDist, 0],
                    opacity: [0, 0.8, 0],
                  }
            }
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Decorative Gold Bottom Wave arch */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-10 opacity-60">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto text-amber-500">
          <path d="M0,80 L1440,80 L1440,20 Q1080,60 720,20 Q360,60 0,20 Z" fill="currentColor" opacity="0.15" />
          <path d="M0,80 L1440,80 L1440,40 Q1080,75 720,40 Q360,75 0,40 Z" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
    </section>
  );
}
