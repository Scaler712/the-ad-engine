"use client";

import { motion } from "framer-motion";

const platforms = ["Meta", "TikTok", "YouTube", "Instagram", "LinkedIn"];

export function Platforms() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted uppercase tracking-wider mb-8"
        >
          Ads built for these platforms
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {platforms.map((p, i) => (
            <motion.span
              key={p}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-lg md:text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              {p}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
