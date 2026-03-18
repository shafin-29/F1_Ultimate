"use client";

import { motion } from "framer-motion";
import LiquidGlass from "@/components/ui/LiquidGlass";
import { Wind, Zap, Disc, Gauge } from "lucide-react";

const features = [
  {
    title: "Aerodynamics",
    description: [
      "Carbon fiber aerodynamic components are engineered to generate over 750 kg of downforce at high speeds, ensuring exceptional stability and cornering grip.",
      "Every surface of the car is sculpted to manage airflow with precision from the front wing directing clean air around the tires to the rear wing maximizing downforce without excessive drag. Advanced airflow channels, bargeboards, and floor design work together to create ground effect suction, keeping the car firmly planted to the track.",
      "This aerodynamic efficiency allows for higher cornering speeds, improved braking stability, and optimized straight-line performance, making it a critical factor in overall race competitiveness."
    ],
    icon: <Wind className="text-f1-red" size={24} />,
    className: "md:col-span-2",
    image: "/aero_detail.png",
  },
  {
    title: "Power Unit",
    description: [
      "A 1.6L V6 turbo hybrid power unit delivering over 1000 horsepower with extreme efficiency and precision.",
      "The system combines internal combustion with advanced energy recovery systems, capturing heat and kinetic energy to boost acceleration and reduce energy loss."
    ],
    icon: <Zap className="text-f1-red" size={24} />,
    className: "md:col-span-1",
  },
  {
    title: "Performance",
    description: [
      "Accelerates from 0–100 km/h in just 2.4 seconds with a top speed exceeding 370 km/h.",
      "Engineered for peak track performance, it delivers rapid throttle response, high-speed stability, and consistent lap times under extreme racing conditions."
    ],
    icon: <Gauge className="text-f1-red" size={24} />,
    className: "md:col-span-1",
  },
  {
    title: "Pirelli P-Zero",
    description: [
      "High-performance racing tires designed for maximum grip, precision handling, and durability under extreme conditions.",
      "Specialized rubber compounds and construction provide optimal traction during cornering, braking, and acceleration, while maintaining performance across varying track temperatures."
    ],
    icon: <Disc className="text-f1-red" size={24} />,
    className: "md:col-span-1",
  },
];

export default function Engineering() {
  return (
    <section id="engineering" className="py-32 bg-f1-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            ENGINEERING <br />
            <span className="text-f1-red">THE FUTURE.</span>
          </motion.h2>
          <p className="text-f1-silver/40 max-w-xl uppercase tracking-widest text-xs font-bold">
            Pushing the boundaries of what's physically possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={feature.className}
            >
              <LiquidGlass className="h-full p-8 flex flex-col justify-between group hover:border-f1-red/30 transition-colors duration-500">
                <div>
                  <div className="mb-6 w-12 h-12 rounded-2xl bg-f1-red/10 flex items-center justify-center border border-f1-red/20 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">{feature.title}</h3>
                  <div className="text-f1-silver/60 leading-relaxed text-sm space-y-4">
                    {Array.isArray(feature.description) 
                      ? feature.description.map((p, idx) => <p key={idx}>{p}</p>)
                      : <p>{feature.description}</p>
                    }
                  </div>
                </div>
                
                <div className="mt-12 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-f1-red opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 duration-500">
                  Read More
                  <div className="w-8 h-px bg-f1-red" />
                </div>
              </LiquidGlass>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-f1-red/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
