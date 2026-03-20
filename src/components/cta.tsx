"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-sm text-accent bg-accent/10 px-4 py-2 rounded-full mb-8">
            <Clock size={14} />
            We take on 10 new clients per month
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your competitors aren&apos;t waiting.
            <br />
            <span className="gradient-text">Neither should you.</span>
          </h2>

          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Pick a package and get your first batch of scroll-stopping video ads
            — or book a call to talk about the monthly retainer. Either way,
            you&apos;ll have better ads running within days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#packages"
              className="rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-light transition-all hover:scale-105 glow-orange flex items-center gap-2"
            >
              Get Started — Choose Your Package
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-8 py-3.5 text-base font-semibold text-foreground hover:bg-card transition-all"
            >
              Book a Strategy Call
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No contracts. No commitments. Just better ads.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
