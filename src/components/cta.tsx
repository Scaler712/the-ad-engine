"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-navy text-white">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-4">
            Limited to 10 new clients per month
          </p>

          <h2 className="font-cal text-3xl md:text-[2.75rem] mb-4 leading-[1.1]">
            Your competitors aren&apos;t waiting.
            <br />
            Neither should you.
          </h2>

          <p className="text-white/40 text-[15px] mb-10 max-w-md mx-auto leading-relaxed">
            Pick a package and get your first batch of scroll-stopping video
            ads — or book a call about the monthly retainer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#packages"
              className="bg-white text-navy px-7 py-3 rounded-lg text-[13px] font-medium hover:bg-white/90 transition-all flex items-center gap-2"
            >
              Choose Your Package
              <ArrowRight size={13} />
            </a>
            <a
              href="#contact"
              className="border border-white/15 text-white px-7 py-3 rounded-lg text-[13px] font-medium hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Phone size={13} />
              Book a Call
            </a>
          </div>

          <p className="text-[11px] text-white/20 mt-8">
            No contracts. No commitments. Just better ads.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
