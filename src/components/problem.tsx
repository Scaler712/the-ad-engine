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
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-6 text-center"
        >
          The Problem
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-4 leading-tight"
        >
          Your competitors are everywhere.
          <br />
          <span className="text-muted-foreground">You&apos;re invisible.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted text-center text-lg mb-14 max-w-2xl mx-auto"
        >
          Every business knows video ads outperform everything else. But between
          the cost, the time, and the awkwardness of getting on camera — most
          businesses just... don&apos;t.
        </motion.p>

        <div className="space-y-4">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card/50 hover:border-accent/30 transition-colors"
            >
              <span className="mt-0.5 text-red-500 text-lg shrink-0">✕</span>
              <p className="text-muted text-[15px] leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            Every week without good creative is another week your competitors
            are stealing your clients.
          </p>
          <p className="text-accent text-lg font-semibold">
            We fix that — in days, not months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
