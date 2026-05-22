"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const shouldReduce = useReducedMotion();
  const [status, setStatus] = useState<"closed" | "breaking" | "unfolding" | "sliding" | "opened">("closed");

  const handleOpen = async () => {
    if (status !== "closed") return;

    // Phase 1: Break/Fade seal
    setStatus("breaking");
    
    // Phase 2: Unfold top flap
    setTimeout(() => {
      setStatus("unfolding");
    }, 600);

    // Phase 3: Split and slide envelope parts away
    setTimeout(() => {
      setStatus("sliding");
    }, 1400);

    // Phase 4: Finalize and reveal main invite
    setTimeout(() => {
      setStatus("opened");
      onOpen();
    }, 2400);
  };

  if (status === "opened") return null;

  // 3D rotation angles for top flap
  const flapRotateX = status === "closed" || status === "breaking" ? 0 : -180;

  return (
    <div className="fixed inset-0 w-screen h-screen z-50 flex items-center justify-center bg-[#07000d] overflow-hidden select-none">
      {/* Dynamic Golden Background Sparkle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-purple-950/10 to-[#07000d] pointer-events-none" />

      {/* 3D Perspective Wrapper */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-[92%] max-w-[500px] h-[340px] md:h-[360px] flex items-center justify-center"
        style={{ perspective: 1200 }}
      >
        {/* ENVELOPE CARD */}
        <motion.div
          animate={
            status === "sliding"
              ? { scale: 1.05, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-full h-full shadow-[0_25px_60px_rgba(0,0,0,0.85),_0_0_40px_rgba(212,175,55,0.1)] rounded-2xl overflow-visible transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* SLIDING TOP HALF */}
          <motion.div
            animate={
              status === "sliding"
                ? { y: "-100vh", opacity: 0 }
                : { y: 0 }
            }
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-x-0 top-0 h-1/2 overflow-visible origin-bottom"
            style={{ transformStyle: "preserve-3d", zIndex: 30 }}
          >
            {/* Top Half Base Cover */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#29023f] to-[#3a0352] rounded-t-2xl border-t border-x border-amber-500/20 flex flex-col justify-end items-center pb-2">
              {/* Elegant Gold Calligraphy */}
              <h2 className="font-cinzel text-[11px] md:text-xs tracking-[0.3em] text-amber-400/70 uppercase mb-1 font-semibold">
                The Wedding Of
              </h2>
              <h1 className="font-playfair italic text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 drop-shadow-[0_2px_4px_rgba(212,175,55,0.15)] text-center px-4 mb-2">
                Ayesha & Hassan
              </h1>
            </div>

            {/* 3D UNFOLDING TOP FLAP */}
            <motion.div
              animate={{ rotateX: flapRotateX }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-x-0 bottom-0 h-[170px] md:h-[180px] origin-top pointer-events-none"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                top: "100%", // starts attached to top half bottom edge
                zIndex: 25,
              }}
            >
              {/* Triangular Flap Shape via Clip-path */}
              <div 
                className="w-full h-full bg-gradient-to-b from-[#3a0352] to-[#220136] border-b border-x border-amber-500/20 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.5)]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              >
                {/* Decorative gold border inside the triangular flap */}
                <div 
                  className="w-full h-full bg-transparent border-b-2 border-amber-400/30 opacity-40"
                  style={{
                    clipPath: "polygon(3% 0, 97% 0, 50% 95%)",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* SLIDING BOTTOM HALF */}
          <motion.div
            animate={
              status === "sliding"
                ? { y: "100vh", opacity: 0 }
                : { y: 0 }
            }
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-x-0 bottom-0 h-1/2 z-20"
          >
            {/* Bottom Half Base Cover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b012b] via-[#240238] to-[#300344] rounded-b-2xl border-b border-x border-amber-500/20 flex flex-col items-center justify-between py-6">
              
              {/* Empty spacing for center seal */}
              <div className="h-10" />

              {/* Action Callout */}
              <div className="text-center">
                <p className="font-cinzel text-[10px] md:text-xs tracking-[0.25em] text-amber-200/50 uppercase animate-pulse">
                  {status === "closed" ? "• Click Golden Seal to Open •" : "• Unfolding Invite •"}
                </p>
              </div>
            </div>

            {/* Decorative Side Flaps overlay for premium feel */}
            <div 
              className="absolute left-0 bottom-0 w-[45%] h-full bg-gradient-to-tr from-[#1b012b] to-transparent opacity-30 border-l border-amber-500/10 pointer-events-none rounded-bl-2xl"
              style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
            />
            <div 
              className="absolute right-0 bottom-0 w-[45%] h-full bg-gradient-to-tl from-[#1b012b] to-transparent opacity-30 border-r border-amber-500/10 pointer-events-none rounded-br-2xl"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
            />
          </motion.div>

          {/* PULSATING GOLDEN WAX SEAL (Centered at overlap point) */}
          <AnimatePresence>
            {(status === "closed" || status === "breaking") && (
              <motion.div
                exit={{ 
                  scale: 0, 
                  opacity: 0,
                  filter: "blur(10px)"
                }}
                transition={{ duration: 0.6, ease: "easeIn" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center"
              >
                {/* Glowing Pulsating Rings */}
                {status === "closed" && (
                  <>
                    <motion.div 
                      animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-28 h-28 rounded-full bg-amber-400/20 blur-md pointer-events-none" 
                    />
                    <motion.div 
                      animate={{ scale: [1, 1.45, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-36 h-36 rounded-full bg-amber-500/10 blur-xl pointer-events-none" 
                    />
                  </>
                )}

                {/* Wax Seal Button */}
                <motion.button
                  onClick={handleOpen}
                  whileHover={status === "closed" ? { scale: 1.08 } : {}}
                  whileTap={status === "closed" ? { scale: 0.95 } : {}}
                  className={`relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 via-yellow-400 to-amber-700 border border-yellow-300 flex items-center justify-center cursor-pointer shadow-[0_8px_25px_rgba(0,0,0,0.65),_0_0_15px_rgba(251,191,36,0.5)] z-50 transition-all ${
                    status === "breaking" ? "pointer-events-none filter brightness-110" : ""
                  }`}
                >
                  {/* Wax Seal Scalloped Outer Rings (SVG) */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-amber-600/20 fill-current animate-[spin_40s_linear_infinite]">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <circle 
                        key={i} 
                        cx={50 + 38 * Math.cos((i * Math.PI) / 6)} 
                        cy={50 + 38 * Math.sin((i * Math.PI) / 6)} 
                        r="14" 
                      />
                    ))}
                  </svg>

                  {/* Inner Seal Circle with Monogram */}
                  <div className="w-[82%] h-[82%] rounded-full bg-gradient-to-tr from-amber-700 via-yellow-500 to-amber-600 border border-yellow-200/50 flex flex-col items-center justify-center shadow-inner z-10">
                    <span className="font-cinzel text-lg font-bold text-yellow-950 tracking-wider">
                      A&H
                    </span>
                    {/* Tiny floral detail */}
                    <div className="w-4 h-[1px] bg-yellow-950/40 my-0.5" />
                    <span className="text-[7px] font-sans font-bold tracking-[0.2em] text-yellow-950/70 uppercase">
                      UNION
                    </span>
                  </div>
                </motion.button>

                {/* Sparkling Break Burst (Golden Particles) */}
                {status === "breaking" && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => {
                      const angle = (i * Math.PI) / 6;
                      const xDest = 70 * Math.cos(angle);
                      const yDest = 70 * Math.sin(angle);
                      return (
                        <motion.div
                          key={i}
                          initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                          animate={{ 
                            x: xDest, 
                            y: yDest, 
                            scale: 0,
                            opacity: 0 
                          }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-200 shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                        />
                      );
                    })}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
