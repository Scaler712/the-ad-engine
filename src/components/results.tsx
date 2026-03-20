"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "$X.XX",
    label: "Cost Per Lead",
    note: "Replace with your real CPL numbers",
  },
  {
    value: "X.X%",
    label: "Click-Through Rate",
    note: "Industry average is 1.5-2% on Meta",
  },
  {
    value: "$XX,XXX",
    label: "Revenue Generated",
    note: "Replace with real campaign revenue",
  },
];

export function Results() {
  return (
    <section id="results" className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-4"
        >
          The numbers speak louder
          <br />
          <span className="text-muted-foreground">than we ever could.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl border border-border bg-background"
            >
              <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {m.value}
              </p>
              <p className="text-foreground font-semibold mb-1">{m.label}</p>
              <p className="text-sm text-muted">{m.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Screenshots section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-center text-sm text-muted mb-8 uppercase tracking-wider">
            Straight from Ads Manager
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl bg-card border border-border flex items-center justify-center text-xs text-muted-foreground hover:border-accent/30 transition-colors cursor-pointer"
              >
                Screenshot {i + 1}
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Tap any image to view full size · Scroll for more →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
