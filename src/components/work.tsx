"use client";

import { motion } from "framer-motion";

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4 text-center"
        >
          See The Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Real ads. Real results.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted text-center text-lg mb-14 max-w-xl mx-auto"
        >
          Every video below was produced by our team using AI — scripted,
          edited, and delivered ad-ready.
        </motion.p>

        {/* Video grid placeholder - replace with real videos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: n * 0.08 }}
              className="aspect-[9/16] rounded-xl bg-card border border-border flex items-center justify-center group hover:border-accent/40 transition-all cursor-pointer overflow-hidden relative"
            >
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center mx-auto mb-3 group-hover:border-accent transition-colors">
                  <svg
                    className="w-5 h-5 text-accent ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-xs text-muted">Video {n}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
