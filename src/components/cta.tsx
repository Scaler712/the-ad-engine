"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-10 md:p-16 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Limited to 10 new clients per month
          </p>

          <h2 className="font-cal text-3xl md:text-[2.5rem] mb-4 leading-[1.1] text-gradient">
            Your competitors aren&apos;t waiting.
            <br />
            Neither should you.
          </h2>

          <p className="text-muted text-[14px] mb-10 max-w-md mx-auto leading-relaxed opacity-60">
            Every week without fresh creative is a week they&apos;re taking your
            clients. Pick a package or book a call.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <a
              href="#packages"
              className="bg-navy text-white px-7 py-3 rounded-lg text-[13px] font-medium hover:bg-navy-light transition-all flex items-center gap-2 shadow-sm"
            >
              Choose Your Package
              <ArrowRight size={13} />
            </a>
            <a
              href="#contact"
              className="glass text-navy px-7 py-3 rounded-lg text-[13px] font-medium hover:bg-white/70 transition-all flex items-center gap-2"
            >
              <Phone size={13} />
              Book a Strategy Call
            </a>
          </div>

          <p className="text-[11px] text-muted-foreground">
            No contracts. No commitments. If the work isn&apos;t right, we redo it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
