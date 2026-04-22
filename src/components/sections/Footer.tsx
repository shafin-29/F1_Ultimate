"use client";

import { motion } from "framer-motion";
import { Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 bg-f1-dark relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-f1-red rounded-sm flex items-center justify-center font-black text-white italic text-xl">
                F1
              </div>
              <span className="font-bold tracking-tighter text-xl italic uppercase">Ultimate</span>
            </div>
            <p className="text-f1-silver/40 max-w-sm text-sm leading-relaxed mb-8">
              The pinnacle of automotive engineering and racing excellence. Driven by precision, fueled by passion, and dedicated to the art of speed.
            </p>
            <div className="flex gap-6">
              {[
                { Icon: Twitter, href: "https://x.com/_Shafin_29" },
                { Icon: Github, href: "https://github.com/shafin-29" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-f1-silver/20 hover:text-f1-red transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#" },
                { name: "Design", href: "#design" },
                { name: "Performance", href: "#performance" },
                { name: "Engineering", href: "#engineering" },
              ].map((link) => (
                <li key={link.name}>
                  <button 
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
                    className="text-sm text-f1-silver/40 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Technical</h4>
            <ul className="space-y-4">
              {["Power Unit", "Hybrid System", "Chassis", "Tyre Data"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      const targetElement = document.getElementById("engineering");
                      if (targetElement) {
                        const y = targetElement.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                    className="text-sm text-f1-silver/40 hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-[10px] text-f1-silver/20 uppercase tracking-[0.2em] font-bold">
            © 2026 F1 Ultimate Engineering. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a key={item} href="#" className="text-[10px] text-f1-silver/20 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant Background Text */}
      <div className="absolute -bottom-10 left-0 right-0 pointer-events-none select-none opacity-[0.02] flex items-center justify-center">
        <h2 className="text-[25vw] font-black italic tracking-tighter leading-none m-0 p-0 text-white">PRECISION</h2>
      </div>
    </footer>
  );
}
