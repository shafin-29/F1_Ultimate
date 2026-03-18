"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Video with Inward Masking Gradient */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Inward Radial Masking Gradient (Vignette) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_90%)] z-10 pointer-events-none" />
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src="/f1_car.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center mt-12 md:mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-f1-red/10 border border-f1-red/20 text-f1-red text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-8"
            >
              Engineering Excellence
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-6 md:mb-10 text-white italic">
              PRECISION <br />
              <span className="text-f1-red text-glow">REDEFINED.</span>
            </h1>
            
            <p className="text-base md:text-lg text-f1-silver/60 max-w-[40ch] mx-auto mb-8 md:mb-12 leading-relaxed font-medium">
              Experience the pinnacle of automotive engineering. Where every millisecond counts and every aerodynamic curve is a masterpiece of speed.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <MagneticButton className="px-10 py-5">
                Explore The Car
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton variant="outline" className="px-10 py-5">
                Technical Specs
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
