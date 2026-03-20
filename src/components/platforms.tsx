"use client";

import { motion } from "framer-motion";

const platforms = ["Meta", "TikTok", "YouTube", "Instagram", "LinkedIn"];

export function Platforms() {
  return (
    <section className="pb-8">
      <div className="mx-auto max-w-4xl px-6">
        <div className="gradient-line mb-8" />
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {platforms.map((p, i) => (
            <motion.span
              key={p}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="text-[13px] font-medium text-muted-foreground/60 hover:text-navy transition-colors duration-300 tracking-wide uppercase"
            >
              {p}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
