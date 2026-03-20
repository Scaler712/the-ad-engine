"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Cost per video", engine: "$100", others: "$250–9,500" },
  { feature: "Videos per batch", engine: "5–30", others: "1–3" },
  { feature: "Turnaround", engine: "7 days", others: "2–6 weeks" },
  { feature: "Script & strategy", engine: true, others: false },
  { feature: "Ad copy included", engine: true, others: false },
  { feature: "Hook variations", engine: true, others: false },
  { feature: "On camera", engine: "Never", others: "Often" },
  { feature: "Contracts", engine: "None", others: "3–12 mo" },
];

function Val({ v }: { v: string | boolean }) {
  if (v === true)
    return <Check size={16} className="text-green-500 mx-auto" />;
  if (v === false)
    return <X size={16} className="text-gray-300 mx-auto" />;
  return <span>{v}</span>;
}

export function Comparison() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl tracking-tight text-center mb-5 text-[#1a1a1a]"
        >
          How it compares
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center text-base mb-12 max-w-sm mx-auto"
        >
          Angle Ads vs. every other way to get video ads.
        </motion.p>

        {/* iOS-style grouped rows */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.04)]"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_100px_100px] px-5 py-3 border-b border-gray-100">
            <span />
            <span className="text-[11px] font-cal text-center text-[#4a7dff]">
              Angle Ads
            </span>
            <span className="text-[11px] font-medium text-center text-gray-400">
              Others
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_100px_100px] px-5 py-3.5 items-center ${
                i < rows.length - 1 ? "border-b border-gray-50" : ""
              }`}
            >
              <span className="text-sm text-[#1a1a1a]">{row.feature}</span>
              <span className="text-sm font-medium text-[#1a1a1a] text-center">
                <Val v={row.engine} />
              </span>
              <span className="text-sm text-gray-400 text-center">
                <Val v={row.others} />
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
