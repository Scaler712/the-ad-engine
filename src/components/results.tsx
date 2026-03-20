"use client";

import { motion } from "framer-motion";

const values = [
  { industry: "Dental implant case", range: "$5,000 – $15,000" },
  { industry: "Roof replacement job", range: "$8,000 – $25,000" },
  { industry: "SaaS annual contract", range: "$3,000 – $50,000" },
  { industry: "Personal injury case", range: "$5,000 – $100,000" },
  { industry: "Med spa treatment plan", range: "$2,000 – $8,000" },
  { industry: "HVAC system install", range: "$5,000 – $15,000" },
];

export function Results() {
  return (
    <section className="py-24 md:py-32 bg-navy text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cal text-3xl md:text-[2.5rem] mb-4 leading-[1.1]"
        >
          One winning ad pays for
          <br />
          the entire package.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 text-[14px] mb-14 max-w-md mx-auto"
        >
          Our Growth package is $1,500. If one ad brings you one client,
          here&apos;s what that&apos;s worth:
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {values.map((v, i) => (
            <motion.div
              key={v.industry}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-5 rounded-xl border border-white/8 bg-white/[0.03] text-left"
            >
              <p className="text-[10px] text-white/30 mb-1">{v.industry}</p>
              <p className="font-cal text-lg text-white">{v.range}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/30 text-[12px] max-w-md mx-auto leading-relaxed"
        >
          Compare $1,500 for 15 tested video ads to $250-500 per UGC creator video,
          $3-5k for a video shoot, or $4-6k/month for an in-house content hire
          who produces half the volume.
        </motion.p>
      </div>
    </section>
  );
}
