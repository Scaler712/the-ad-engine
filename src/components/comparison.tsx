"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Cost per video", engine: "$100", ugc: "$250-500", agency: "$800-1,500", diy: "$2-11", production: "$2,700-9,500" },
  { feature: "Videos per batch", engine: "5-30", ugc: "1-3", agency: "2-6/mo", diy: "Unlimited (raw)", production: "1-3" },
  { feature: "Turnaround", engine: "7 days", ugc: "7-14 days", agency: "2-4 weeks", diy: "Hours", production: "3-6 weeks" },
  { feature: "Script + strategy", engine: true, ugc: false, agency: true, diy: false, production: "Sometimes" },
  { feature: "Ad copy included", engine: true, ugc: false, agency: "Sometimes", diy: false, production: false },
  { feature: "Hook variations", engine: true, ugc: false, agency: false, diy: false, production: false },
  { feature: "You on camera", engine: "Never", ugc: "Never", agency: "Sometimes", diy: "Sometimes", production: "Usually" },
  { feature: "Contracts", engine: "None", ugc: "Per video", agency: "3-12 mo", diy: "Monthly sub", production: "Per project" },
];

function CellValue({ val }: { val: string | boolean }) {
  if (val === true) return <Check size={14} className="text-gray-800 mx-auto" />;
  if (val === false) return <X size={14} className="text-gray-300 mx-auto" />;
  return <span>{val}</span>;
}

export function Comparison() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl tracking-tight text-center mb-5 text-gray-800"
        >
          How it compares
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center text-lg mb-10 max-w-md mx-auto"
        >
          The Ad Engine vs. every other way to get video ads.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-6 text-gray-400 font-normal text-xs w-[140px]" />
                  <th className="py-4 px-4 text-center">
                    <span className="text-sm font-medium text-gray-800 bg-gray-50 px-3 py-1 rounded-lg">The Ad Engine</span>
                  </th>
                  <th className="py-4 px-4 text-center text-gray-400 font-normal text-xs">UGC Creators</th>
                  <th className="py-4 px-4 text-center text-gray-400 font-normal text-xs">Agency</th>
                  <th className="py-4 px-4 text-center text-gray-400 font-normal text-xs">DIY AI</th>
                  <th className="py-4 px-4 text-center text-gray-400 font-normal text-xs">Production</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="py-3.5 px-6 text-gray-500 text-xs font-medium">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center font-medium text-gray-800 text-xs"><CellValue val={row.engine} /></td>
                    <td className="py-3.5 px-4 text-center text-gray-400 text-xs"><CellValue val={row.ugc} /></td>
                    <td className="py-3.5 px-4 text-center text-gray-400 text-xs"><CellValue val={row.agency} /></td>
                    <td className="py-3.5 px-4 text-center text-gray-400 text-xs"><CellValue val={row.diy} /></td>
                    <td className="py-3.5 px-4 text-center text-gray-400 text-xs"><CellValue val={row.production} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
