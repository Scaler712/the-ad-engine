"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
      "Ad copy for each video (primary text + headline)",
      "Delivered in 9:16 + 1:1 formats",
      "Campaign setup guide with targeting tips",
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
      "Ad copy package per concept (3 texts + 3 headlines)",
      "Campaign setup guide with audience targeting",
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
      "Multiple AI presenters matched to your audience",
      "Complete ad copy packages for every concept",
      "Competitor ad audit — what's running in your space",
      "30-min strategy call on launch approach",
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
    <section id="packages" className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4 text-center"
        >
          Choose Your Package
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          One-time packages. No contracts. No commitments.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted text-center text-lg mb-14 max-w-2xl mx-auto"
        >
          Pick a package, get your videos, run your ads. Want more? Come back
          anytime or upgrade to monthly.
        </motion.p>

        {/* One-time packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative p-8 rounded-2xl border bg-background flex flex-col ${
                pkg.popular
                  ? "border-accent glow-orange"
                  : "border-border hover:border-accent/30"
              } transition-all`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted">{pkg.videos}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{pkg.price}</span>
                <span className="text-muted ml-2 text-sm">{pkg.period}</span>
              </div>

              <p className="text-sm text-muted mb-6">{pkg.desc}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center rounded-full py-3 text-sm font-semibold transition-all ${
                  pkg.popular
                    ? "bg-accent text-white hover:bg-accent-light"
                    : "border border-border text-foreground hover:bg-card"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Monthly retainer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-accent/30 bg-background p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
              For Serious Growth
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              The Ad Engine Monthly Retainer
            </h3>
            <p className="text-4xl font-bold gradient-text">$2,500/month</p>
          </div>

          <p className="text-muted text-center max-w-2xl mx-auto mb-10 text-[15px] leading-relaxed">
            Stop buying creative one batch at a time. The Ad Engine runs
            continuously — fresh video ads every week, strategy included,
            performance tracked. Your creative never goes stale. Your ads never
            stop improving.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {retainerFeatures.map((f) => (
              <div key={f} className="flex items-start gap-3 text-sm">
                <Check size={16} className="text-accent shrink-0 mt-0.5" />
                <span className="text-muted">{f}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-light transition-all glow-orange"
            >
              Book a Strategy Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
