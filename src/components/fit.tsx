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
  "You need full ad account management included (we offer that as an add-on, not as the core service)",
];

export function Fit() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4 text-center"
        >
          Is This For You?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Good fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border bg-card"
          >
            <h3 className="text-xl font-bold mb-2">This is for you if...</h3>
            <p className="text-sm text-accent mb-6">Perfect fit ✓</p>
            <ul className="space-y-4">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check
                    size={16}
                    className="text-green-500 shrink-0 mt-0.5"
                  />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not fit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border bg-card"
          >
            <h3 className="text-xl font-bold mb-2">Not the right fit</h3>
            <p className="text-sm text-red-400 mb-6">✗</p>
            <ul className="space-y-4">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
