"use client";

import { motion } from "framer-motion";

const platforms = ["Meta", "TikTok", "YouTube", "Instagram", "LinkedIn"];

export function Platforms() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted uppercase tracking-[0.2em] font-medium mb-8"
        >
          Ads built for these platforms
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {platforms.map((p, i) => (
            <motion.span
              key={p}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-base md:text-lg font-semibold text-navy/30 hover:text-navy transition-colors duration-300 tracking-wide"
            >
              {p}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
