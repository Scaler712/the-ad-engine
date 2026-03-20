"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-6"
        >
          AI-Powered Ad Creative Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          Video Ads That Actually{" "}
          <span className="gradient-text">Get Clients</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We produce scroll-stopping video ads for your business using AI —
          delivered in days, not weeks. You never step in front of a camera. You
          just get ads that work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#packages"
            className="rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-light transition-all hover:scale-105 glow-orange"
          >
            See Packages
          </a>
          <a
            href="#work"
            className="rounded-full border border-border px-8 py-3.5 text-base font-semibold text-foreground hover:bg-card transition-all flex items-center gap-2"
          >
            <Play size={16} className="text-accent" />
            Watch Examples
          </a>
        </motion.div>
      </div>
    </section>
  );
}
