"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-navy text-white">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cal text-3xl md:text-[2.5rem] mb-4 leading-[1.1]">
            Your competitors are running
            <br />
            video ads right now.
          </h2>

          <p className="text-white/35 text-[14px] mb-10 max-w-md mx-auto leading-relaxed">
            Every week without fresh creative is a week they&apos;re taking
            your clients. We take 10 new clients per month. When slots fill,
            new clients wait until next month.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
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
              Book a Strategy Call
            </a>
          </div>

          <p className="text-[11px] text-white/20">
            No contracts. No commitments. If the work isn&apos;t right, we redo it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
