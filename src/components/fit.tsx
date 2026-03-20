"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const goodFit = [
  "You run a service business, SaaS, agency, or any business that acquires clients through paid ads",
  "You know video ads outperform static images but you're not producing them",
  "You're tired of paying agencies $3-5k/month for the same recycled creatives",
  "You don't want to be on camera and don't have time to manage content production",
  "You want a constant flow of fresh, tested creative",
  "You understand that one winning ad can pay for itself 10x over",
];

const notFit = [
  "You're not running paid ads and have no plans to",
  "You want viral TikToks for organic reach, not direct-response ad creative",
  "You're looking for the cheapest possible option",
  "You need full ad account management included (available as add-on)",
];

export function Fit() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-light tracking-tight text-center mb-16 text-gray-800"
        >
          Is this for you?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <p className="text-lg font-medium text-gray-800 mb-6">Perfect fit</p>
            <ul className="space-y-4">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="card p-8"
          >
            <p className="text-lg font-medium text-gray-800 mb-6">Not the right fit</p>
            <ul className="space-y-4">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                  <span className="text-gray-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
