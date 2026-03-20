"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-16 md:py-24 relative">
      {/* Slightly warmer gradient overlay for the CTA section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e5ddd6]/30 to-[#ddd5ce]/40 pointer-events-none" />

      <div className="mx-auto max-w-3xl px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">
            Limited to 10 new clients per month
          </p>

          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-gray-800 leading-[1.1] mb-6">
            Your competitors aren&apos;t waiting.
            <br />
            Neither should you.
          </h2>

          <p className="text-gray-500 text-base mb-10 max-w-md leading-relaxed">
            Every week without fresh creative is a week they&apos;re taking your
            clients. Pick a package or book a call.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
            <a
              href="#packages"
              className="bg-navy text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-navy-light transition-all flex items-center gap-2"
            >
              Choose Your Package
              <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="card text-gray-600 px-8 py-3 rounded-xl text-sm font-medium hover:shadow-md transition-all flex items-center gap-2"
            >
              <Phone size={14} />
              Book a Strategy Call
            </a>
          </div>

          <p className="text-xs text-gray-400">
            No contracts. No commitments. If the work isn&apos;t right, we redo it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
