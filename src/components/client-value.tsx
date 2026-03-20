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
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cal text-3xl md:text-4xl text-navy mb-14"
        >
          What&apos;s one new client
          <br />
          worth to your business?
        </motion.h2>

        <div className="grid grid-cols-2 gap-3 mb-10">
          {values.map((v, i) => (
            <motion.div
              key={v.type}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-5 rounded-xl border border-border text-left"
            >
              <p className="text-[11px] text-muted tracking-wide mb-1">
                {v.type}
              </p>
              <p className="font-cal text-xl text-navy">{v.range}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-muted text-[13px] leading-relaxed max-w-lg mx-auto">
          Our Growth package costs $1,500. One client from one ad pays for
          itself many times over. Compare that to $3-5k for a video shoot or
          $4-6k/month for an in-house hire.
        </p>
      </div>
    </section>
  );
}
