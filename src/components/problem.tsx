"use client";

import { motion } from "framer-motion";

const painPoints = [
  "Your ads look like everyone else's — static images, stock photos, the same copy your competitor is running",
  "You hired a videographer once, spent $4,000 on 3 videos, and never did it again",
  "You know video ads outperform everything else but you don't have time to produce them",
  "Your marketing agency charges $5k/month and gives you the same tired creatives on rotation",
  "You've thought about AI video but don't know where to start and don't have time to learn",
  "Every week without good creative is another week your competitors are taking your clients",
];

export function Problem() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-4 text-center"
        >
          The Problem
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-[2.75rem] font-bold text-center mb-4 leading-tight text-navy"
        >
          Your competitors are everywhere.
          <br />
          <span className="text-navy/40">You&apos;re invisible.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted text-center text-base mb-14 max-w-lg mx-auto leading-relaxed"
        >
          Every business knows video ads outperform everything else. But between
          the cost, the time, and the awkwardness of getting on camera — most
          businesses just... don&apos;t.
        </motion.p>

        <div className="space-y-3">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-navy/15 transition-colors group"
            >
              <span className="mt-0.5 w-5 h-5 rounded-full border border-red-200 flex items-center justify-center shrink-0">
                <span className="text-red-400 text-xs">✕</span>
              </span>
              <p className="text-muted text-[14px] leading-relaxed group-hover:text-foreground transition-colors">
                {point}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="gradient-line max-w-xs mx-auto mb-8" />
          <p className="text-lg md:text-xl font-semibold text-navy mb-2">
            Every week without good creative is another week
            <br className="hidden md:block" /> your competitors are stealing your clients.
          </p>
          <p className="text-navy font-bold text-lg mt-4">
            We fix that — in days, not months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
