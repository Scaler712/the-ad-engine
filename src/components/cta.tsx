"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#eaecf3]">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl tracking-tight leading-[1.1] mb-6">
            <span className="font-semibold text-[#1a1a1a]">
              Your competitors aren&apos;t waiting.
            </span>
            <br />
            <span className="font-display-italic text-[#4a7dff]">
              Neither should you.
            </span>
          </h2>

          <p className="text-gray-500 text-base mb-10 max-w-md leading-relaxed">
            Every week without fresh creative is a week they&apos;re taking your
            clients. Pick a package or book a call.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
            <a
              href="#packages"
              className="bg-[#4a7dff] text-white px-8 py-3 rounded-xl text-sm font-medium hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(74,125,255,0.3)]"
            >
              Choose Your Package
              <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="bg-white text-[#1a1a1a] px-8 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <Phone size={14} />
              Book a Strategy Call
            </a>
          </div>

          <p className="text-xs text-gray-400">
            No contracts. No commitments. If the work isn&apos;t right, we redo
            it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
