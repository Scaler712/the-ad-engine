"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "$X.XX", label: "Cost Per Lead", note: "Replace with real CPL" },
  {
    value: "X.X%",
    label: "Click-Through Rate",
    note: "Industry avg is 1.5-2%",
  },
  {
    value: "$XX,XXX",
    label: "Revenue Generated",
    note: "Replace with real revenue",
  },
];

export function Results() {
  return (
    <section id="results" className="py-28 md:py-36 bg-surface">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cal text-3xl md:text-[2.75rem] text-center mb-16 leading-[1.1] text-navy"
        >
          The numbers speak louder
          <br />
          <span className="text-muted-foreground">than we ever could.</span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center py-8 px-4 rounded-2xl border border-border bg-white"
            >
              <p className="font-cal text-3xl md:text-4xl text-navy mb-1.5">
                {m.value}
              </p>
              <p className="text-[13px] font-medium text-navy mb-1">
                {m.label}
              </p>
              <p className="text-[11px] text-muted-foreground">{m.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Screenshots */}
        <div className="mt-14">
          <p className="text-center text-[10px] text-muted-foreground/60 mb-6 uppercase tracking-[0.2em]">
            Straight from Ads Manager
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl bg-surface-raised border border-border/50 flex items-center justify-center text-[11px] text-muted-foreground/30 hover:border-border transition-colors cursor-pointer"
              >
                Screenshot {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
