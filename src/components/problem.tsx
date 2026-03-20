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
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-2xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cal text-3xl md:text-[2.75rem] text-center mb-4 leading-[1.1] text-navy"
        >
          Your competitors are everywhere.
          <br />
          <span className="text-muted-foreground">You&apos;re invisible.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted text-center text-[15px] mb-16 max-w-md mx-auto leading-relaxed"
        >
          Every business knows video ads outperform everything else. But between
          the cost, the time, and the awkwardness of getting on camera — most
          businesses just... don&apos;t.
        </motion.p>

        <div className="space-y-2.5">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3.5 py-3.5 px-4 rounded-lg hover:bg-surface transition-colors"
            >
              <span className="text-red-300 text-xs mt-1 shrink-0">✕</span>
              <p className="text-[14px] text-muted leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-cal text-xl md:text-2xl text-navy">
            We fix that — in days, not months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
