"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Phone } from "lucide-react";

const packages = [
  {
    name: "Starter",
    videos: "5 videos",
    price: "$750",
    period: "one-time",
    desc: "Test the waters. See what AI video ads can do for your business.",
    popular: false,
    features: [
      "5 AI video ads (15-45 sec each)",
      "1 concept × 5 hook variations",
      "Full scripting + professional editing",
      "Captions, branding, music",
      "Ad copy for each video",
      "Delivered in 9:16 + 1:1 formats",
      "Campaign setup guide",
      "7 business day turnaround",
    ],
  },
  {
    name: "Growth",
    videos: "15 videos",
    price: "$1,500",
    period: "one-time",
    desc: "Enough creative to run a real testing campaign and find winners.",
    popular: true,
    features: [
      "15 AI video ads",
      "3 concepts × 5 hook variations",
      "Multiple AI presenters per concept",
      "Full scripting + editing + captions + branding",
      "Ad copy package per concept",
      "Campaign setup guide with targeting",
      "7 business day turnaround",
      "The sweet spot for most businesses",
    ],
  },
  {
    name: "Scale",
    videos: "30 videos",
    price: "$3,000",
    period: "one-time",
    desc: "Full creative arsenal. Enough to dominate your market.",
    popular: false,
    features: [
      "30 AI video ads",
      "5 concepts × 6 hook variations",
      "Full format mix: talking head, testimonial, educational, FAQ, comparison",
      "Multiple AI presenters",
      "Complete ad copy packages",
      "Competitor ad audit",
      "30-min strategy call",
      "10 business day turnaround + 1 round revisions",
    ],
  },
];

const retainerFeatures = [
  "20 AI video ads per month (rolling weekly delivery)",
  "4 unique concepts × 5 hook variations",
  "Full scripting based on what's performing",
  "Complete ad copy for every concept",
  "Monthly creative strategy brief",
  "Competitor ad monitoring",
  "Campaign guidance: targeting, budget, structure",
  "First batch in 48 hours",
  "Unlimited revisions",
  "Monthly 20-min strategy call",
];

export function Pricing() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-4 text-center"
        >
          Choose Your Package
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-navy"
        >
          One-time packages. No contracts.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted text-center text-base mb-16 max-w-lg mx-auto"
        >
          Pick a package, get your videos, run your ads. Want more? Come back
          anytime or upgrade to monthly.
        </motion.p>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl flex flex-col transition-all ${
                pkg.popular
                  ? "bg-navy text-white shadow-2xl shadow-navy/20 scale-[1.02]"
                  : "bg-white border border-border hover:border-navy/15 hover:shadow-lg hover:shadow-navy/5"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-navy text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-0.5 ${
                    pkg.popular ? "text-white" : "text-navy"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-xs ${
                    pkg.popular ? "text-white/50" : "text-muted"
                  }`}
                >
                  {pkg.videos}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={`font-display text-4xl font-bold ${
                    pkg.popular ? "text-white" : "text-navy"
                  }`}
                >
                  {pkg.price}
                </span>
                <span
                  className={`text-sm ml-2 ${
                    pkg.popular ? "text-white/40" : "text-muted"
                  }`}
                >
                  {pkg.period}
                </span>
              </div>

              <p
                className={`text-sm mb-6 ${
                  pkg.popular ? "text-white/60" : "text-muted"
                }`}
              >
                {pkg.desc}
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px]">
                    <Check
                      size={14}
                      className={`shrink-0 mt-0.5 ${
                        pkg.popular ? "text-white/60" : "text-navy/40"
                      }`}
                    />
                    <span
                      className={
                        pkg.popular ? "text-white/70" : "text-muted"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all ${
                  pkg.popular
                    ? "bg-white text-navy hover:bg-white/90"
                    : "bg-navy text-white hover:bg-navy-light"
                }`}
              >
                Get Started
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Monthly retainer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-navy/10 bg-white p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-2">
                For Serious Growth
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-navy">
                Monthly Retainer
              </h3>
            </div>
            <div className="text-left md:text-right">
              <p className="font-display text-4xl font-bold text-navy">
                $2,500
              </p>
              <p className="text-xs text-muted">/month</p>
            </div>
          </div>

          <p className="text-muted text-sm leading-relaxed mb-8 max-w-2xl">
            Stop buying creative one batch at a time. The Ad Engine runs
            continuously — fresh video ads every week, strategy included,
            performance tracked. Your creative never goes stale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            {retainerFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2.5 text-[13px]">
                <Check size={14} className="text-navy/40 shrink-0 mt-0.5" />
                <span className="text-muted">{f}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-navy-light transition-colors"
          >
            <Phone size={14} />
            Book a Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
