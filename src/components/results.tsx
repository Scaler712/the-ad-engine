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
    <section id="results" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="glass-strong rounded-3xl p-8 md:p-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cal text-3xl md:text-[2.5rem] mb-4 leading-[1.1] text-gradient"
          >
            One winning ad pays for
            <br />
            the entire package.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted text-[14px] mb-12 max-w-md mx-auto opacity-60"
          >
            Our Growth package is $1,500. If one ad brings you one client,
            here&apos;s what that&apos;s worth:
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {values.map((v, i) => (
              <motion.div
                key={v.industry}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-xl bg-white/40 border border-white/60 text-left"
              >
                <p className="text-[10px] text-muted-foreground mb-1">{v.industry}</p>
                <p className="font-cal text-base text-gradient">{v.range}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-[12px] text-muted-foreground max-w-md mx-auto leading-relaxed">
            Compare $1,500 for 15 tested video ads to $250-500 per UGC creator video,
            $3-5k for a video shoot, or $4-6k/month for an in-house content hire.
          </p>
        </div>
      </div>
    </section>
  );
}
