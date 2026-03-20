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
  if (val === true) return <Check size={13} className="text-navy mx-auto" />;
  if (val === false) return <X size={13} className="text-muted-foreground/25 mx-auto" />;
  return <span>{val}</span>;
}

export function Comparison() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cal text-3xl md:text-4xl text-center mb-4 text-gradient"
        >
          How it compares
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted text-center text-[14px] mb-12 max-w-md mx-auto opacity-60"
        >
          The Ad Engine vs. every other way to get video ads.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-[11px] min-w-[700px]">
              <thead>
                <tr className="border-b border-black/5">
                  <th className="text-left py-3.5 px-5 text-muted font-medium w-[140px]" />
                  <th className="py-3.5 px-3 text-center">
                    <span className="font-cal text-[12px] text-navy bg-navy/5 px-3 py-1 rounded-md">The Ad Engine</span>
                  </th>
                  <th className="py-3.5 px-3 text-center text-muted font-medium">UGC Creators</th>
                  <th className="py-3.5 px-3 text-center text-muted font-medium">Agency</th>
                  <th className="py-3.5 px-3 text-center text-muted font-medium">DIY AI</th>
                  <th className="py-3.5 px-3 text-center text-muted font-medium">Production</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-black/[0.03] last:border-0">
                    <td className="py-3 px-5 text-muted font-medium">{row.feature}</td>
                    <td className="py-3 px-3 text-center font-semibold text-navy"><CellValue val={row.engine} /></td>
                    <td className="py-3 px-3 text-center text-muted"><CellValue val={row.ugc} /></td>
                    <td className="py-3 px-3 text-center text-muted"><CellValue val={row.agency} /></td>
                    <td className="py-3 px-3 text-center text-muted"><CellValue val={row.diy} /></td>
                    <td className="py-3 px-3 text-center text-muted"><CellValue val={row.production} /></td>
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
