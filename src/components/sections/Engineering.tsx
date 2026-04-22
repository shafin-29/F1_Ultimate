"use client";

import { motion } from "framer-motion";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Wind, Zap, Disc, Gauge } from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Aerodynamics",
    date: "2026 Season",
    content: "Carbon fiber aerodynamic components are engineered to generate over 750 kg of downforce at high speeds, ensuring exceptional stability and cornering grip. Every surface is sculpted to manage airflow with precision.",
    category: "Aero",
    icon: Wind,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Power Unit",
    date: "2026 Season",
    content: "A 1.6L V6 turbo hybrid power unit delivering over 1000 horsepower with extreme efficiency and precision. Captures heat and kinetic energy to boost acceleration.",
    category: "Engine",
    icon: Zap,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 88,
  },
  {
    id: 3,
    title: "Performance",
    date: "2026 Season",
    content: "Accelerates from 0–100 km/h in just 2.4 seconds with a top speed exceeding 370 km/h. Engineered for peak track performance under extreme conditions.",
    category: "Specs",
    icon: Gauge,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 4,
    title: "Pirelli P-Zero",
    date: "2026 Season",
    content: "High-performance racing tires designed for maximum grip, precision handling, and durability. Specialized rubber compounds provide optimal traction during cornering.",
    category: "Tires",
    icon: Disc,
    relatedIds: [3],
    status: "pending" as const,
    energy: 75,
  },
];

export default function Engineering() {
  return (
    <section id="engineering" className="min-h-screen flex items-center py-20 bg-f1-dark relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col xl:flex-row items-center justify-between">
        <div className="w-full xl:w-2/5 mb-16 xl:mb-0 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            ENGINEERING <br />
            <span className="text-f1-red">THE FUTURE.</span>
          </motion.h2>
          <p className="text-f1-silver/40 max-w-md uppercase tracking-widest text-sm font-bold leading-relaxed">
            Pushing the boundaries of what's physically possible.
          </p>
        </div>

        <div className="w-full xl:w-3/5 relative z-10 flex justify-center">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-f1-red/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none" />
    </section>
  );
}
