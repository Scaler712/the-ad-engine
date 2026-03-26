"use client";

import { motion } from "framer-motion";

const values = [
  { industry: "Ecommerce product launch", range: "$5,000 - $50,000" },
  { industry: "DTC subscription brand", range: "$10,000 - $100,000" },
  { industry: "Dental implant case", range: "$5,000 - $15,000" },
  { industry: "Roof replacement job", range: "$8,000 - $25,000" },
  { industry: "SaaS annual contract", range: "$3,000 - $50,000" },
  { industry: "Personal injury case", range: "$5,000 - $100,000" },
  { industry: "Med spa treatment plan", range: "$2,000 - $8,000" },
  { industry: "HVAC system install", range: "$5,000 - $15,000" },
];

const stats = [
  { number: "$1,500", label: "Growth package cost" },
  { number: "1 ad", label: "To pay for itself" },
  { number: "10-50x", label: "Typical ROI per client" },
];

export function Results() {
  return (
    <section id="results" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left: Card mock showing client values */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-5 md:p-9"
          >
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">
              Revenue per client / product launch
            </p>
            <div className="space-y-3">
              {values.map((v, i) => (
                <motion.div
                  key={v.industry}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between py-3 border-b border-gray-200/60 last:border-0"
                >
                  <span className="text-sm text-gray-500">{v.industry}</span>
                  <span className="text-sm font-medium text-[#1a1a1a]">
                    {v.range}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Big stats */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight text-[#1a1a1a] leading-[1.1] mb-4 md:mb-6">
              Do the math. One client pays for everything.
            </h2>
            <p className="text-gray-500 text-base mb-10 leading-relaxed">
              Our Growth package costs $1,500. One winning ad — whether it
              lands a client or drives product sales — makes that back many
              times over. Here&apos;s what that looks like in your industry:
            </p>

            <div className="space-y-6">
              {stats.map((stat, i) => (
                <div key={i} className="border-t border-gray-200 pt-4">
                  <p className="font-heading text-3xl tracking-tight text-[#1a1a1a]">
                    {stat.number}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-8 leading-relaxed max-w-sm">
              Compare $1,500 for 15 tested video ads to $250-500 per UGC creator
              video, $3-5k for a video shoot, or $4-6k/month for an in-house
              content hire.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
