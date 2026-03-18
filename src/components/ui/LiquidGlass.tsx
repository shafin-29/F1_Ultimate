"use client";

import { cn } from "@/lib/utils";

interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export default function LiquidGlass({
  children,
  className,
  intensity = "medium",
}: LiquidGlassProps) {
  const blurClasses = {
    low: "backdrop-blur-md",
    medium: "backdrop-blur-xl",
    high: "backdrop-blur-2xl",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-4xl border border-white/10 bg-white/5",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-15px_rgba(0,0,0,0.1)]",
        blurClasses[intensity],
        className
      )}
    >
      {/* Refraction edge simulation */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
