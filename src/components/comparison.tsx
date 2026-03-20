"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl tracking-tight text-center mb-5 text-[#1a1a1a]"
        >
          How it compares
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center text-lg mb-12 max-w-md mx-auto"
        >
          The Ad Engine vs. every other way to get video ads.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left card: Other options */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 md:p-10"
          >
            <h3 className="font-semibold text-xl text-[#1a1a1a] mb-2">
              Other Options
            </h3>
            <p className="text-sm text-gray-400 mb-8">
              UGC creators, agencies, production houses, DIY
            </p>
            <div className="space-y-4">
              {[
                "$250-500 per UGC creator video",
                "$3,000-5,000 for a single video shoot",
                "2-6 weeks turnaround time",
                "No ad copy or strategy included",
                "No hook variations for testing",
                "3-12 month contracts required",
                "Same recycled creatives month after month",
                "You might need to be on camera",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <X
                    size={14}
                    className="text-red-300 shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-gray-500">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right card: The Ad Engine */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="bg-navy text-white rounded-[20px] p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.03)]"
          >
            <h3 className="font-semibold text-xl text-white mb-2">
              The Ad Engine
            </h3>
            <p className="text-sm text-white/40 mb-8">
              AI-powered video ad production at scale
            </p>
            <div className="space-y-4">
              {[
                "$100 per video with the Growth package",
                "15 videos for $1,500 (one-time)",
                "7 day turnaround, first batch in 48hrs",
                "Full ad copy package with every order",
                "5 hook variations per concept",
                "No contracts, no commitments",
                "Fresh creative every week (retainer)",
                "You never step in front of a camera",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check
                    size={14}
                    className="text-[#4a7dff] shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
