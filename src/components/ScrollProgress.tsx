"use client";

import { motion } from "framer-motion";

interface ScrollProgressProps {
  activeScene: number;
  totalScenes: number;
  scrollToScene: (index: number) => void;
}

export default function ScrollProgress({ activeScene, totalScenes, scrollToScene }: ScrollProgressProps) {
  return (
    <div className="fixed right-3 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-5">
      {/* Scrollbar Line Track */}
      <div className="relative w-0.5 h-24 md:h-32 bg-purple-950/60 rounded-full overflow-hidden border border-amber-500/10">
        {/* Progress Fill */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 origin-top rounded-full"
          style={{ height: "100%" }}
          animate={{
            scaleY: activeScene / (totalScenes - 1),
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      {/* Dots */}
      <div className="flex flex-col gap-4">
        {Array.from({ length: totalScenes }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToScene(index)}
            className="group relative flex items-center justify-center w-6 h-6 focus:outline-none cursor-pointer"
            aria-label={`Go to scene ${index + 1}`}
          >
            {/* Tooltip on hover */}
            <span className="absolute right-8 text-[10px] uppercase tracking-[0.25em] text-amber-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-cinzel select-none">
              Scene {index + 1}
            </span>

            {/* Glowing active indicator */}
            {activeScene === index && (
              <motion.div
                layoutId="activeDotRing"
                className="absolute w-4 h-4 rounded-full border border-amber-400/80 bg-amber-400/10 shadow-[0_0_10px_rgba(251,191,36,0.6)]"
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
              />
            )}

            {/* Dot */}
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeScene === index
                  ? "bg-amber-400 scale-125"
                  : "bg-purple-800 border border-purple-500/80 group-hover:bg-amber-400/70"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
