"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2,400+", label: "Videos Delivered" },
  { value: "48hrs", label: "First Batch Turnaround" },
  { value: "47%", label: "Higher CTR vs Static" },
];

export function StatsBar() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
