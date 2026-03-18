"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const segments = [
  {
    title: "AESTHETIC PRECISION.",
    description: "Every pixel is calculated for emotional impact and performance. We don't just build websites; we engineer digital experiences.",
  },
  {
    title: "KINETIC PHYSICS.",
    description: "Interactions that feel alive, governed by the laws of motion. Our design system prioritizes tactile feedback and fluid transitions.",
  },
  {
    title: "ENGINEERING EXCELLENCE.",
    description: "High-agency code that sets the standard for the modern web. Built for speed, precision, and longevity.",
  },
];

export default function CinematicExplosion() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Static background with consistent presence
  const imageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.4, 1, 1, 0.4]);

  // Text transition logic for 3 segments
  const text1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.35], [0, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.1, 0.2, 0.35], [20, 0, -20]);

  const text2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.65], [0, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.4, 0.5, 0.65], [20, 0, -20]);

  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.95], [0, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.7, 0.8, 0.95], [20, 0, -20]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-f1-carbon">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Static Cinematic Backdrop Image */}
        <motion.div
          style={{ 
            opacity: imageOpacity,
          }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/f1_racer.jpg"
            alt="F1 Racer"
            className="w-full h-full object-contain p-4 md:px-12 md:pt-12 md:pb-0"
          />
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_85%)]" />
        </motion.div>

        {/* Floating Text Blocks */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            
            {/* Segment 1 */}
            <motion.div style={{ opacity: text1Opacity, y: text1Y }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4 text-white">
                {segments[0].title}
              </h3>
              <p className="text-f1-silver/60 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold max-w-sm mx-auto leading-relaxed">
                {segments[0].description}
              </p>
            </motion.div>

            {/* Segment 2 */}
            <motion.div style={{ opacity: text2Opacity, y: text2Y }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4 text-white">
                {segments[1].title}
              </h3>
              <p className="text-f1-silver/60 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold max-w-sm mx-auto leading-relaxed">
                {segments[1].description}
              </p>
            </motion.div>

            {/* Segment 3 */}
            <motion.div style={{ opacity: text3Opacity, y: text3Y }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4 text-white">
                {segments[2].title}
              </h3>
              <p className="text-f1-silver/60 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold max-w-sm mx-auto leading-relaxed text-glow">
                {segments[2].description}
              </p>
            </motion.div>

          </div>
        </div>

        {/* Progress side-line */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 h-40 w-px bg-white/10 overflow-hidden">
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="w-full h-full bg-f1-red origin-top"
          />
        </div>
      </div>
    </section>
  );
}
