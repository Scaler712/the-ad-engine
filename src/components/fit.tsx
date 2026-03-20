"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const goodFit = [
  "You run a service business, SaaS, agency, or any business that acquires clients through paid ads",
  "You know video ads outperform static images but you're not producing them",
  "You're tired of paying agencies $3-5k/month for the same recycled creatives",
  "You don't want to be on camera and don't have time to manage content production",
  "You want a constant flow of fresh, tested creative — not 3 videos from a one-time shoot",
  "You understand that one winning ad can pay for itself 10x over",
];

const notFit = [
  "You're not running paid ads and have no plans to",
  "You want viral TikToks for organic reach, not direct-response ad creative",
  "You're looking for the cheapest possible option (Canva templates exist for a reason)",
  "You need full ad account management included (we offer that as an add-on)",
];

export function Fit() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-12 text-center"
        >
          Is This For You?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border bg-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <Check size={14} className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-navy">
                This is for you if...
              </h3>
            </div>
            <ul className="space-y-3.5">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px]">
                  <Check
                    size={14}
                    className="text-green-500 shrink-0 mt-0.5"
                  />
                  <span className="text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border bg-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                <X size={14} className="text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-navy">
                Not the right fit
              </h3>
            </div>
            <ul className="space-y-3.5">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px]">
                  <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                  <span className="text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
