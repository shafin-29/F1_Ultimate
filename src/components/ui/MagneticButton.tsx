"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  variant?: "solid" | "outline";
}

export default function MagneticButton({
  children,
  className,
  onClick,
  strength = 35,
  variant = "solid",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for magnetic pull
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Motion values for spotlight shimmer/shine
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end feel
  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
    
    // Calculate magnetic pull
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * (strength / 100));
    y.set(middleY * (strength / 100));

    // Calculate spotlight position for shimmer
    const relX = clientX - left;
    const relY = clientY - top;
    mouseX.set(relX);
    mouseY.set(relY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const variants = {
    solid: "bg-f1-red text-white",
    outline: "bg-white/5 backdrop-blur-md text-white border border-white/10 hover:border-white/30",
  };

  return (
    <motion.button
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
      }}
      className={cn(
        "relative rounded-full font-black uppercase tracking-[0.2em] text-[10px] md:text-xs overflow-hidden transition-all duration-300 active:scale-95 group",
        variants[variant],
        className
      )}
    >
      {/* Premium Spotlight Shimmer */}
      <motion.div 
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, ${variant === 'solid' ? 'rgba(255,255,255,0.25)' : 'rgba(225,6,0,0.15)'} 0%, transparent 65%)`
          ),
          opacity: isHovered ? 1 : 0,
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Subtle Inner Refraction (only for solid) */}
      {variant === "solid" && (
        <div className="absolute inset-x-0 top-0 h-px bg-white/20 z-10" />
      )}

      {/* Hover Pulse Effect */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovered ? { scale: 1.5, opacity: 0.1 } : { scale: 0, opacity: 0 }}
        className="absolute inset-0 bg-white rounded-full z-0"
      />

      {/* Text/Content (Static relative to button) */}
      <span className="relative z-20 flex items-center justify-center gap-3">
        {children}
      </span>
    </motion.button>
  );
}
