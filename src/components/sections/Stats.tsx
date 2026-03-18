"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "0-100 KM/H", value: "2.4", unit: "S" },
  { label: "DOWNFORCE", value: "2.5k", unit: "KG" },
  { label: "TOP SPEED", value: "370", unit: "KM/H" },
  { label: "MAX G-FORCE", value: "6.0", unit: "G" },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-40 bg-f1-carbon relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <motion.span 
                  className="text-5xl md:text-7xl font-black italic tracking-tighter text-white"
                >
                  {stat.value}
                </motion.span>
                <span className="text-xl md:text-2xl font-bold text-f1-red italic">{stat.unit}</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-f1-silver/40">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll-linked progress bar */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-f1-red origin-left"
      />
    </section>
  );
}
