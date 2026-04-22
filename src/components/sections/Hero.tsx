"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end items-start pb-5 md:pb-5 overflow-hidden">
      {/* Background Video with Inward Masking Gradient */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Inward Radial Masking Gradient (Vignette) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_90%)] z-10 pointer-events-none" />
        
        {/* Image Background */}
        <img
          src="/f1_car.jpeg"
          alt="F1 Car"
          className="w-full h-full object-cover scale-100"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20 w-full">
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-white italic">
              PRECISION <br />
              <span className="text-f1-red text-glow">REDEFINED.</span>
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
