"use client";

import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(15,23,42,0.03)_0%,transparent_50%)]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(15,23,42,0.02)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-navy animate-pulse" />
          <span className="text-xs font-medium text-muted tracking-wide uppercase">
            AI-Powered Ad Creative Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-navy mb-6"
        >
          Video Ads That
          <br />
          Actually Get Clients
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          We produce scroll-stopping video ads using AI — delivered in days, not
          weeks. You never step in front of a camera.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#packages"
            className="bg-navy text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-navy-light transition-all hover:shadow-lg hover:shadow-navy/10"
          >
            See Packages
          </a>
          <a
            href="#work"
            className="border border-border px-8 py-3.5 rounded-full text-sm font-semibold text-navy hover:bg-surface transition-all flex items-center gap-2.5"
          >
            <Play size={14} className="text-navy" fill="currentColor" />
            Watch Examples
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <ArrowDown size={16} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
