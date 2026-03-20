"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Phone } from "lucide-react";

const packages = [
  {
    name: "Starter",
    videos: "5 videos",
    price: "$750",
    desc: "Test the waters.",
    popular: false,
    features: [
      "5 AI video ads (15-45 sec each)",
      "1 concept × 5 hook variations",
      "Full scripting + editing",
      "Captions, branding, music",
      "Ad copy for each video",
      "9:16 + 1:1 formats",
      "Campaign setup guide",
      "7-day turnaround",
    ],
  },
  {
    name: "Growth",
    videos: "15 videos",
    price: "$1,500",
    desc: "Find your winning ads.",
    popular: true,
    features: [
      "15 AI video ads",
      "3 concepts × 5 hook variations",
      "Multiple AI presenters",
      "Full scripting + editing + captions",
      "Ad copy package per concept",
      "Campaign setup guide + targeting",
      "7-day turnaround",
      "The sweet spot",
    ],
  },
  {
    name: "Scale",
    videos: "30 videos",
    price: "$3,000",
    desc: "Dominate your market.",
    popular: false,
    features: [
      "30 AI video ads",
      "5 concepts × 6 hook variations",
      "Full format mix",
      "Multiple AI presenters",
      "Complete ad copy packages",
      "Competitor ad audit",
      "30-min strategy call",
      "10-day turnaround + revisions",
    ],
  },
];

const retainerFeatures = [
  "20 videos per month (weekly delivery)",
  "4 concepts × 5 hook variations",
  "Scripting based on what's performing",
  "Complete ad copy for every concept",
  "Monthly creative strategy brief",
  "Competitor ad monitoring",
  "Campaign guidance",
  "First batch in 48 hours",
  "Unlimited revisions",
  "Monthly strategy call",
];

export function Pricing() {
  return (
    <section id="packages" className="py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cal text-3xl md:text-4xl text-center mb-3 text-navy"
        >
          Simple, honest pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted text-center text-[15px] mb-14 max-w-sm mx-auto"
        >
          One-time packages. No contracts. No commitments. Just better ads.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 border border-border rounded-2xl overflow-hidden bg-white">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex flex-col p-8 md:p-10 ${
                pkg.popular
                  ? "bg-navy text-white"
                  : "border-b md:border-b-0 md:border-r border-border last:border-0"
              }`}
            >
              {pkg.popular && (
                <span className="absolute top-4 right-4 text-[10px] font-medium bg-white/10 text-white/70 px-2.5 py-0.5 rounded-full">
                  Popular
                </span>
              )}

              <p
                className={`text-[11px] uppercase tracking-[0.15em] mb-1 ${
                  pkg.popular ? "text-white/40" : "text-muted"
                }`}
              >
                {pkg.videos}
              </p>

              <h3
                className={`font-cal text-xl mb-4 ${
                  pkg.popular ? "text-white" : "text-navy"
                }`}
              >
                {pkg.name}
              </h3>

              <div className="mb-1">
                <span
                  className={`font-cal text-4xl ${
                    pkg.popular ? "text-white" : "text-navy"
                  }`}
                >
                  {pkg.price}
                </span>
              </div>

              <p
                className={`text-[13px] mb-8 ${
                  pkg.popular ? "text-white/40" : "text-muted"
                }`}
              >
                {pkg.desc}
              </p>

              <ul className="space-y-2 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[12px]">
                    <Check
                      size={12}
                      className={`shrink-0 mt-0.5 ${
                        pkg.popular ? "text-white/30" : "text-muted-foreground"
                      }`}
                    />
                    <span
                      className={
                        pkg.popular ? "text-white/60" : "text-muted"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-[13px] font-medium transition-all ${
                  pkg.popular
                    ? "bg-white text-navy hover:bg-white/90"
                    : "bg-navy text-white hover:bg-navy-light"
                }`}
              >
                Get Started
                <ArrowRight size={13} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Retainer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 rounded-2xl border border-border bg-white p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-muted mb-1">
                For serious growth
              </p>
              <h3 className="font-cal text-2xl text-navy">
                Monthly Retainer
              </h3>
            </div>
            <div className="md:text-right">
              <span className="font-cal text-3xl text-navy">$2,500</span>
              <span className="text-muted text-[13px]">/mo</span>
            </div>
          </div>

          <p className="text-muted text-[13px] leading-relaxed mb-8 max-w-xl">
            Fresh video ads every week, strategy included, performance tracked.
            Your creative never goes stale. Your ads never stop improving.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
            {retainerFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2 text-[12px]">
                <Check size={12} className="text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted">{f}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy text-white px-6 py-2.5 rounded-lg text-[13px] font-medium hover:bg-navy-light transition-colors"
          >
            <Phone size={13} />
            Book a Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
