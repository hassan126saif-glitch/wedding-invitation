"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  type: "sparkle" | "light" | "heart";
  x: number; // percentage
  y: number; // percentage
  size: number;
  duration: number;
  delay: number;
}

export default function BackgroundParticles() {
  const shouldReduceMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate a fixed number of particles to avoid hydration mismatches
    const types: ("sparkle" | "light" | "heart")[] = ["sparkle", "light", "heart"];
    const generated: Particle[] = Array.from({ length: 25 }).map((_, i) => {
      const type = types[i % 3];
      return {
        id: i,
        type,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: type === "light" ? Math.random() * 4 + 2 : Math.random() * 10 + 6,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * -20, // Negative delay to prevent particles starting all at once
      };
    });
    setParticles(generated);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
      {particles.map((p) => {
        const isReduced = shouldReduceMotion;

        // Animate definitions
        const animateProps = isReduced
          ? {
              opacity: [0.1, 0.4, 0.1],
            }
          : {
              y: ["0vh", "-100vh"],
              x: ["0vw", `${Math.random() * 10 - 5}vw`],
              opacity: [0, p.type === "light" ? 0.6 : 0.4, 0.8, 0.4, 0],
              rotate: p.type === "sparkle" ? [0, 360] : [0, 0],
            };

        const transitionProps = {
          duration: isReduced ? p.duration * 1.5 : p.duration,
          repeat: Infinity,
          ease: "linear" as const,
          delay: p.delay,
        };

        return (
          <motion.div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: isReduced ? `${p.y}%` : "100%",
              width: p.size,
              height: p.size,
            }}
            animate={animateProps}
            transition={transitionProps}
          >
            {p.type === "light" && (
              <div
                className="w-full h-full rounded-full bg-amber-400/60 blur-[1px]"
                style={{
                  boxShadow: "0 0 6px rgba(251, 191, 36, 0.8)",
                }}
              />
            )}

            {p.type === "sparkle" && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-amber-300 drop-shadow-[0_0_3px_rgba(251,191,36,0.6)]"
              >
                <path
                  d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z"
                  fill="currentColor"
                />
              </svg>
            )}

            {p.type === "heart" && (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full text-pink-500/20 drop-shadow-[0_0_2px_rgba(244,63,94,0.3)]"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
