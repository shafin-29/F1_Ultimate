"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Design", href: "#design" },
  { name: "Performance", href: "#performance" },
  { name: "Engineering", href: "#engineering" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Update scrolled state for background styling
    setScrolled(latest > 50);

    // Hide navbar if scrolling down and past a certain threshold
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
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
            <motion.button
              key={link.name}
              onClick={() => {
                if (link.href === "#") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  const targetId = link.href.substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    const y = targetElement.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-f1-silver/60 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-f1-red transition-all group-hover:w-full" />
            </motion.button>
          ))}
        </div>


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
    </motion.nav>
  );
}
