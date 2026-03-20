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
    <section id="results" className="py-24 md:py-32 bg-navy text-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-4 text-center"
        >
          Results
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-[2.75rem] font-bold text-center mb-16 leading-tight"
        >
          The numbers speak louder
          <br />
          <span className="text-white/40">than we ever could.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl border border-white/10 bg-white/5"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                {m.value}
              </p>
              <p className="text-white font-semibold text-sm mb-1">{m.label}</p>
              <p className="text-xs text-white/40">{m.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Screenshots placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-center text-xs text-white/30 mb-8 uppercase tracking-[0.15em]">
            Straight from Ads Manager
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-white/20 hover:bg-white/8 transition-colors cursor-pointer"
              >
                Screenshot {i + 1}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
