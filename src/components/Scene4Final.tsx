"use client";

import { motion, useReducedMotion } from "framer-motion";

// Custom Groom profile SVG (arm extending right)
function GroomHoldingSVG() {
  return (
    <svg viewBox="0 0 160 220" className="w-full h-full drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]">
      {/* Turban */}
      <path d="M50,50 Q80,35 110,50 Q115,40 80,30 Q45,40 50,50 Z" fill="#D4AF37" />
      <path d="M52,42 Q80,28 108,42 Q100,24 80,22 Q60,24 52,42 Z" fill="#EC4899" />
      <path d="M76,22 L80,5 L84,22 Z" fill="#D4AF37" />
      <ellipse cx="80" cy="32" rx="4" ry="6" fill="#E11D48" />

      {/* Face & Hair */}
      <circle cx="80" cy="70" r="25" fill="#FFE5D9" />
      <path d="M55,68 Q52,70 54,77 L57,77 Z" fill="#1F2937" /> {/* Ear */}
      {/* Eye looking right */}
      <circle cx="92" cy="68" r="2.5" fill="#1F2937" />
      <path d="M90,62 Q94,59 97,64" stroke="#1F2937" strokeWidth="1.5" fill="none" />
      <path d="M78,78 Q83,82 88,78" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="95" cy="75" r="3" fill="#F87171" opacity="0.4" />

      {/* Sherwani Body */}
      <path d="M55,95 C40,115 35,180 35,220 L115,220 C115,180 110,115 95,95 Z" fill="#581C87" />
      <path d="M65,95 Q80,105 95,95 L90,87 Q80,95 70,87 Z" fill="#D4AF37" /> {/* Collar */}
      <path d="M77,102 L83,102 L83,220 L77,220 Z" fill="#D4AF37" /> {/* Trim */}

      {/* Arm extending to the right for handholding */}
      <path d="M85,120 Q115,120 135,135 Q138,138 135,142 Q115,135 85,135 Z" fill="#581C87" />
      {/* Hand (Peach) */}
      <circle cx="137" cy="138" r="7" fill="#FFE5D9" />
    </svg>
  );
}

// Custom Bride profile SVG (arm extending left)
function BrideHoldingSVG() {
  return (
    <svg viewBox="0 0 160 220" className="w-full h-full drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]">
      {/* Hair & Jewelry */}
      <path d="M50,70 Q80,50 110,70" stroke="#111827" strokeWidth="5" fill="none" />
      <circle cx="80" cy="70" r="23" fill="#FFE5D9" />
      <path d="M54,66 Q70,52 80,54" stroke="#111827" strokeWidth="3" fill="none" />
      
      {/* Eye looking left */}
      <circle cx="68" cy="68" r="2.5" fill="#111827" />
      <path d="M63,64 Q66,59 70,62" stroke="#111827" strokeWidth="1.5" fill="none" />
      <path d="M72,78 Q77,82 82,78" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="65" cy="75" r="3" fill="#EC4899" opacity="0.4" />

      {/* Tikka */}
      <line x1="80" y1="48" x2="80" y2="56" stroke="#D4AF37" strokeWidth="1.5" />
      <circle cx="80" cy="58" r="2.5" fill="#D4AF37" />

      {/* Lehenga Dress */}
      <path d="M65,93 C50,113 45,180 45,220 L125,220 C125,180 120,113 105,93 Z" fill="#DB2777" />
      <path d="M68,91 Q80,105 92,91" stroke="#D4AF37" strokeWidth="3.5" fill="none" />

      {/* Translucent Pink Dupatta */}
      <path d="M102,68 C115,90 128,170 125,220 L110,220 C112,170 102,100 95,85 Z" fill="#EC4899" opacity="0.8" />
      <path d="M102,68 C115,90 128,170 125,220" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      <path d="M50,70 Q80,48 110,70" stroke="#D4AF37" strokeWidth="2" fill="none" />

      {/* Arm extending to the left for handholding */}
      <path d="M75,120 Q45,120 25,135 Q22,138 25,142 Q45,135 75,135 Z" fill="#DB2777" />
      {/* Hand (Peach) */}
      <circle cx="23" cy="138" r="7" fill="#FFE5D9" />
    </svg>
  );
}

// Bouncing Bottom Decor Components (🎉 💐 ✨ 🥁)
function BottomDecorItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      animate={
        shouldReduce
          ? { opacity: [0.7, 1, 0.7] }
          : {
              y: [0, -12, 0],
              scale: [1, 1.05, 1],
            }
      }
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-950/45 border border-amber-500/30 flex items-center justify-center p-2.5 shadow-[0_0_12px_rgba(212,175,55,0.1)]"
    >
      {children}
    </motion.div>
  );
}

// Shamiana Canopy Top Valance
function ShamianaValanceSVG() {
  return (
    <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
      {/* Back Layer of fabric */}
      <path
        d="M0,0 L0,50 Q120,95 240,50 Q360,95 480,50 Q600,95 720,50 Q840,95 960,50 Q1080,95 1200,50 Q1320,95 1440,50 L1440,0 Z"
        fill="#800d1e"
      />
      {/* Front Layer of fabric */}
      <path
        d="M0,0 L0,60 Q120,110 240,60 Q360,110 480,60 Q600,110 720,60 Q840,110 960,60 Q1080,110 1200,60 Q1320,110 1440,60 L1440,0 Z"
        fill="#6b0612"
      />
      {/* Gold Trim Border */}
      <path
        d="M0,60 Q120,110 240,60 Q360,110 480,60 Q600,110 720,60 Q840,110 960,60 Q1080,110 1200,60 Q1320,110 1440,60"
        stroke="#D4AF37"
        strokeWidth="4"
        fill="none"
      />
      {/* Gold Valleys dangling tassels */}
      {[120, 360, 600, 840, 1080, 1320].map((x, idx) => (
        <g key={`valley-${idx}`}>
          <line x1={x} y1={85} x2={x} y2={100} stroke="#D4AF37" strokeWidth="2.5" />
          <circle cx={x} cy={104} r="4.5" fill="#D4AF37" />
        </g>
      ))}
      {/* Gold Peaks dangling tassels */}
      {[240, 480, 720, 960, 1200].map((x, idx) => (
        <g key={`peak-${idx}`}>
          <line x1={x} y1={60} x2={x} y2={76} stroke="#D4AF37" strokeWidth="2" />
          <circle cx={x} cy={80} r="3.5" fill="#D4AF37" />
        </g>
      ))}
    </svg>
  );
}

// Shamiana Side Curtain (can be mirrored)
function ShamianaCurtainSVG({ isRight }: { isRight?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 800"
      fill="none"
      className="h-full w-full drop-shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
      style={isRight ? { transform: "scaleX(-1)" } : undefined}
    >
      {/* Deep crimson drapery background */}
      <path d="M0,0 Q70,100 90,400 Q100,500 50,800 L0,800 Z" fill="#6b0612" />
      {/* Inner fabric folds and shadows */}
      <path d="M0,0 Q30,150 50,400 Q60,490 20,800" fill="none" stroke="#4a040b" strokeWidth="4" />
      <path d="M0,0 Q15,180 25,400 Q35,480 8,800" fill="none" stroke="#800d1e" strokeWidth="2.5" />
      {/* Gold Trim Border */}
      <path d="M0,0 Q70,100 90,400 Q100,500 50,800" fill="none" stroke="#D4AF37" strokeWidth="3" />
      
      {/* Gold tie-back sash */}
      <path d="M70,390 C85,395 85,405 70,410 C60,410 60,390 70,390 Z" fill="#D4AF37" />
      {/* Tassels hanging from tie-back */}
      <path d="M70,405 L80,430 L75,432 Z" fill="#D4AF37" />
      <path d="M65,408 L70,435 L65,437 Z" fill="#D4AF37" />
    </svg>
  );
}

// Celebrating Family Silhouettes - Left
function FamilyLeftSilhouette() {
  return (
    <svg viewBox="0 0 240 320" className="w-full h-full">
      {/* Mother/Elder with sari head drape */}
      <path d="M10,320 C10,240 30,180 60,180 C70,180 80,220 90,320 Z" fill="currentColor" />
      <circle cx="45" cy="170" r="14" fill="currentColor" />
      <path d="M45,140 C35,140 25,150 25,170 C25,185 30,195 40,200 C30,200 15,220 15,245" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
      <path d="M60,220 Q80,210 75,195 Q65,195 55,215" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />

      {/* Father/Elder with turban and raised cheering arm */}
      <path d="M80,320 C80,220 100,160 140,160 C150,160 160,200 170,320 Z" fill="currentColor" />
      <circle cx="120" cy="140" r="16" fill="currentColor" />
      <path d="M104,130 Q120,115 136,130 Q140,122 120,110 Q100,122 104,130 Z" fill="currentColor" />
      <path d="M135,190 Q165,140 170,100" stroke="currentColor" strokeWidth="9" strokeLinecap="round" fill="none" />
      <circle cx="170" cy="95" r="6" fill="currentColor" />

      {/* Sister/Younger girl waving */}
      <path d="M150,320 C150,260 165,220 190,220 C200,220 210,250 220,320 Z" fill="currentColor" />
      <circle cx="180" cy="195" r="12" fill="currentColor" />
      <circle cx="192" cy="190" r="5" fill="currentColor" />
      <path d="M185,240 Q215,220 220,180" stroke="currentColor" strokeWidth="7" strokeLinecap="round" fill="none" />
      <circle cx="220" cy="175" r="5" fill="currentColor" />
    </svg>
  );
}

// Celebrating Family Silhouettes - Right
function FamilyRightSilhouette() {
  return (
    <svg viewBox="0 0 240 320" className="w-full h-full">
      {/* Younger brother cheering with both arms raised */}
      <path d="M30,320 C30,260 40,210 70,210 C80,210 90,250 95,320 Z" fill="currentColor" />
      <circle cx="65" cy="185" r="12" fill="currentColor" />
      <path d="M50,235 Q30,190 25,150" stroke="currentColor" strokeWidth="7" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="144" r="5" fill="currentColor" />
      <path d="M80,235 Q100,190 105,150" stroke="currentColor" strokeWidth="7" strokeLinecap="round" fill="none" />
      <circle cx="106" cy="144" r="5" fill="currentColor" />

      {/* Sister/Aunt waving */}
      <path d="M85,320 C85,240 105,180 135,180 C145,180 155,220 165,320 Z" fill="currentColor" />
      <circle cx="125" cy="150" r="14" fill="currentColor" />
      <path d="M105,150 C105,130 145,130 145,150 C145,170 135,185 125,190" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M135,210 Q165,180 160,140" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="159" cy="133" r="5" fill="currentColor" />

      {/* Elder Uncle greeting/blessing */}
      <path d="M150,320 C150,220 170,170 205,170 C215,170 225,210 230,320 Z" fill="currentColor" />
      <circle cx="190" cy="140" r="15" fill="currentColor" />
      <path d="M175,130 Q190,115 205,130 Q210,122 190,110 Q170,122 175,130 Z" fill="currentColor" />
      <path d="M175,220 Q160,200 165,180" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="166" cy="173" r="5" fill="currentColor" />
    </svg>
  );
}

export default function Scene4Final() {
  const shouldReduce = useReducedMotion();

  // Settings
  const slideLeft = shouldReduce ? { x: 0, opacity: [0, 1] } : { x: ["-100%", "-8%"], opacity: 1 };
  const slideRight = shouldReduce ? { x: 0, opacity: [0, 1] } : { x: ["100%", "8%"], opacity: 1 };

  return (
    <section
      id="scene-4"
      className="relative h-screen w-full snap-start snap-always overflow-hidden flex flex-col items-center justify-between py-12 md:py-16 bg-gradient-to-b from-[#ffd175] via-[#fb7082] to-[#800d1e]"
    >
      {/* Premium Shamiana Canopy Valance */}
      <div className="absolute top-0 left-0 w-full pointer-events-none select-none z-25">
        <ShamianaValanceSVG />
      </div>

      {/* Premium Shamiana Side Curtains */}
      <div className="absolute top-0 left-0 h-full w-12 md:w-20 pointer-events-none select-none z-25">
        <ShamianaCurtainSVG />
      </div>
      <div className="absolute top-0 right-0 h-full w-12 md:w-20 pointer-events-none select-none z-25">
        <ShamianaCurtainSVG isRight />
      </div>

      {/* Celebrating Family Silhouettes in Corners */}
      <div className="absolute bottom-0 left-0 w-28 md:w-44 h-40 md:h-64 pointer-events-none select-none text-red-950/20 md:text-red-950/30 z-10">
        <FamilyLeftSilhouette />
      </div>
      <div className="absolute bottom-0 right-0 w-28 md:w-44 h-40 md:h-64 pointer-events-none select-none text-red-950/20 md:text-red-950/30 z-10">
        <FamilyRightSilhouette />
      </div>

      {/* Main Ending Title & Calligraphy */}
      <div className="z-20 text-center px-4 mt-8 w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <h2 className="font-playfair italic text-3xl md:text-5xl font-bold text-purple-950 mb-4 drop-shadow-[0_2px_4px_rgba(251,191,36,0.3)]">
            Join Our Celebration ✨
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-[1px] w-24 bg-purple-950/40 mx-auto mb-5"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-playfair text-sm md:text-base italic font-semibold leading-relaxed text-purple-950/90"
        >
          "With love in our hearts, <br />
          we warmly invite you and your family <br />
          to celebrate this beautiful beginning."
        </motion.p>
      </div>

      {/* Hands holding animation stage */}
      <div className="relative w-full max-w-sm md:max-w-md h-[30vh] flex items-end justify-center z-20 select-none pointer-events-none mb-4">
        
        {/* Groom slides left-to-right to meet in center */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={slideLeft}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 14, delay: 0.5 }}
          className="w-[125px] md:w-[150px] absolute left-1/2 -translate-x-[110px]"
        >
          <GroomHoldingSVG />
        </motion.div>

        {/* Bride slides right-to-left to meet in center */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={slideRight}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 14, delay: 0.5 }}
          className="w-[125px] md:w-[150px] absolute left-1/2"
        >
          <BrideHoldingSVG />
        </motion.div>

        {/* Floating Heart above their joined hands */}
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 15 }}
          whileInView={
            shouldReduce
              ? { opacity: 1, scale: 1, y: 0 }
              : {
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1.2, 1, 0.8],
                  y: [10, -35, -45, -55],
                }
          }
          viewport={{ once: true }}
          transition={{
            duration: 4,
            ease: "easeOut",
            delay: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute z-30 bottom-[95px] md:bottom-[105px] left-1/2 -translate-x-1/2"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      </div>

      {/* Bottom decorations: animated SVG wedding objects (🎉 💐 ✨ 🥁) */}
      <div className="z-20 flex gap-4 md:gap-6 justify-center w-full px-4 mb-6">
        
        {/* Celebration Cone SVG */}
        <BottomDecorItem delay={0}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-300">
            <path d="M5,20 L11,14 L14,17 L8,23 Z" fill="currentColor" />
            <path d="M11,14 L19,5 L22,8 L14,17 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="16" cy="10" r="1.5" fill="#EC4899" />
            <circle cx="12" cy="8" r="1" fill="#10B981" />
            <path d="M22,3 Q23,1 21,2 C19,3 18,2 17,4" stroke="#EF4444" strokeWidth="1.5" />
          </svg>
        </BottomDecorItem>

        {/* Flower Bouquet SVG */}
        <BottomDecorItem delay={0.4}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-pink-400">
            <circle cx="12" cy="7" r="4.5" fill="#EF4444" />
            <circle cx="8" cy="11" r="4.5" fill="#F472B6" />
            <circle cx="16" cy="11" r="4.5" fill="#FB7185" />
            {/* Wrap stems */}
            <path d="M9,14 L12,23 L15,14 Z" fill="#D4AF37" />
            {/* Bow ribbon */}
            <path d="M10,16 Q12,18 14,16 L12,15 Z" fill="#FFF" />
          </svg>
        </BottomDecorItem>

        {/* Sparkle SVG */}
        <BottomDecorItem delay={0.8}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-amber-300">
            <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
          </svg>
        </BottomDecorItem>

        {/* Drum (Dhol) SVG */}
        <BottomDecorItem delay={1.2}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-500">
            <rect x="5" y="6" width="14" height="12" rx="2" fill="#78350F" stroke="#FDE047" strokeWidth="1.5" />
            <ellipse cx="5" cy="12" rx="1.5" ry="6" fill="#FFF" stroke="#FDE047" strokeWidth="1" />
            <ellipse cx="19" cy="12" rx="1.5" ry="6" fill="#FFF" stroke="#FDE047" strokeWidth="1" />
            <path d="M6,6 L18,18 M6,18 L18,6" stroke="#FEF3C7" strokeWidth="0.75" />
          </svg>
        </BottomDecorItem>

      </div>
    </section>
  );
}

