"use client";

import { useRef, useState } from "react";
import BackgroundParticles from "@/components/BackgroundParticles";
import ScrollProgress from "@/components/ScrollProgress";
import Envelope from "@/components/Envelope";
import Scene1Intro from "@/components/Scene1Intro";
import Scene2Baraat from "@/components/Scene2Baraat";
import Scene3Palace from "@/components/Scene3Palace";
import Scene4Final from "@/components/Scene4Final";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const totalScenes = 4;

  // Handle scroll events on snap container to update active dot indicators
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPos = container.scrollTop;
    const height = container.clientHeight;
    
    if (height > 0) {
      const index = Math.round(scrollPos / height);
      if (index !== activeScene && index >= 0 && index < totalScenes) {
        setActiveScene(index);
      }
    }
  };

  // Scroll to scene by index
  const scrollToScene = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const height = container.clientHeight;
      container.scrollTo({
        top: index * height,
        behavior: "smooth",
      });
      setActiveScene(index);
    }
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#0d0116]">
      {/* Interactive Envelope Overlay */}
      {!isEnvelopeOpened && (
        <Envelope onOpen={() => setIsEnvelopeOpened(true)} />
      )}

      {/* Global Sparkles & Lights Particles Background */}
      <BackgroundParticles />

      {/* Floating Scroll Nav Progress bar on right edge */}
      {isEnvelopeOpened && (
        <ScrollProgress
          activeScene={activeScene}
          totalScenes={totalScenes}
          scrollToScene={scrollToScene}
        />
      )}

      {/* Snap Scroll Vertical Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className={`h-screen w-full ${
          isEnvelopeOpened ? "overflow-y-auto" : "overflow-hidden"
        } snap-y snap-mandatory scroll-smooth no-scrollbar relative z-20`}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="snap-start snap-always w-full h-screen">
          <Scene1Intro />
        </div>
        <div className="snap-start snap-always w-full h-screen">
          <Scene2Baraat />
        </div>
        <div className="snap-start snap-always w-full h-screen">
          <Scene3Palace />
        </div>
        <div className="snap-start snap-always w-full h-screen">
          <Scene4Final />
        </div>
      </div>
    </main>
  );
}
