"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect } from "react";

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

const FRAME_COUNT = 139;

export default function CinematicExplosion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Preload images
    const loadImages = () => {
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `/f1car_build/ezgif-frame-${frameNumber}.jpg`;
        
        // Render first frame as soon as it loads
        if (i === 1) {
          img.onload = () => renderFrame(0);
        }
        
        imagesRef.current.push(img);
      }
    };
    
    loadImages();
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || !imagesRef.current[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const img = imagesRef.current[index];
    if (img.width === 0) return; // Skip if not loaded yet
    
    // Set canvas dimensions to match image
    if (canvas.width !== img.width || canvas.height !== img.height) {
      canvas.width = img.width;
      canvas.height = img.height;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest * FRAME_COUNT)));
    requestAnimationFrame(() => renderFrame(frameIndex));
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
    <section id="design" ref={containerRef} className="relative h-[400vh] bg-f1-carbon">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Cinematic Canvas Backdrop */}
        <motion.div
          style={{ 
            opacity: imageOpacity,
          }}
          className="absolute inset-0 z-0"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover"
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
              <p className="text-white drop-shadow-md uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold max-w-sm mx-auto leading-relaxed">
                {segments[0].description}
              </p>
            </motion.div>

            {/* Segment 2 */}
            <motion.div style={{ opacity: text2Opacity, y: text2Y }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4 text-white">
                {segments[1].title}
              </h3>
              <p className="text-white drop-shadow-md uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold max-w-sm mx-auto leading-relaxed">
                {segments[1].description}
              </p>
            </motion.div>

            {/* Segment 3 */}
            <motion.div style={{ opacity: text3Opacity, y: text3Y }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4 text-white">
                {segments[2].title}
              </h3>
              <p className="text-white drop-shadow-md uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold max-w-sm mx-auto leading-relaxed text-glow">
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
