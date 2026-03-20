"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-navy text-white relative overflow-hidden"
    >
      {/* Subtle radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            <span className="text-xs text-white/50 font-medium tracking-wide">
              10 new clients per month
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold mb-4 leading-tight">
            Your competitors aren&apos;t waiting.
            <br />
            Neither should you.
          </h2>

          <p className="text-white/50 text-base mb-10 max-w-lg mx-auto leading-relaxed">
            Pick a package and get your first batch of scroll-stopping video ads
            — or book a call to talk about the monthly retainer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#packages"
              className="bg-white text-navy px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-all flex items-center gap-2"
            >
              Choose Your Package
              <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Phone size={14} />
              Book a Strategy Call
            </a>
          </div>

          <p className="text-xs text-white/30 mt-8">
            No contracts. No commitments. Just better ads.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
