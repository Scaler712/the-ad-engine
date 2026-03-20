"use client";

import { motion } from "framer-motion";

const values = [
  { type: "One dental implant case", range: "$5,000 – $15,000" },
  { type: "One roofing job", range: "$8,000 – $25,000" },
  { type: "One SaaS annual contract", range: "$3,000 – $50,000" },
  { type: "One legal case", range: "$5,000 – $100,000" },
];

export function ClientValue() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          What&apos;s one new client worth
          <br />
          <span className="gradient-text">to your business?</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {values.map((v, i) => (
            <motion.div
              key={v.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-accent/30 transition-colors"
            >
              <p className="text-sm text-muted mb-1">{v.type}</p>
              <p className="text-2xl font-bold gradient-text">{v.range}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted text-center text-[15px] leading-relaxed max-w-3xl mx-auto"
        >
          Our Growth package costs $1,500. If just one ad from that batch brings
          you one client, you&apos;ve already made your money back — many times
          over. Compare that to $250-$500 per UGC creator video, $3,000-$5,000
          for a single video shoot, or $4,000-$6,000/month for an in-house
          content hire who produces half the volume.
        </motion.p>
      </div>
    </section>
  );
}
