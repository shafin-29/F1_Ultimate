"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { name: "Performance", href: "#performance" },
  { name: "Engineering", href: "#engineering" },
  { name: "Aerodynamics", href: "#aero" },
  { name: "Legacy", href: "#legacy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className={cn(
        "container mx-auto px-6 py-6 flex items-center justify-between transition-all",
        scrolled ? "py-4" : "py-8"
      )}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-f1-red rounded-sm flex items-center justify-center font-black text-white italic text-xl">
            F1
          </div>
          <span className="font-bold tracking-tighter text-xl italic uppercase">Ultimate</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-f1-silver/60 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-f1-red transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <MagneticButton className="px-6 py-2.5">
            Connect
          </MagneticButton>
        </motion.div>
      </div>

      {/* Glass Morphic Background for scrolled state */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="absolute inset-0 -z-10 bg-f1-carbon/80 backdrop-blur-md border-b border-white/5"
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
