"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Phone } from "lucide-react";

const packages = [
  {
    name: "Starter",
    videos: "5 videos",
    price: "$750",
    perVideo: "$150/video",
    desc: "Test the waters. See if AI video ads work for your business before going all in.",
    popular: false,
    features: [
      "5 AI video ads (15-45 sec)",
      "1 concept × 5 hook variations",
      "Direct-response scripting",
      "Professional editing + captions + music",
      "Written ad copy (primary text + headline)",
      "9:16 + 1:1 formats",
      "Campaign setup guide with targeting",
      "7 business day delivery",
    ],
    valueAnchors: [
      { item: "5 videos at UGC creator rates", value: "$1,250-2,500" },
      { item: "Scripting + copywriting", value: "$500" },
      { item: "Campaign setup guide", value: "$200" },
    ],
  },
  {
    name: "Growth",
    videos: "15 videos",
    price: "$1,500",
    perVideo: "$100/video",
    desc: "Enough creative to run a real split-test campaign. Find your winning ads.",
    popular: true,
    features: [
      "15 AI video ads",
      "3 concepts × 5 hook variations",
      "Multiple AI presenters per concept",
      "Direct-response scripting for each concept",
      "Full editing + captions + branding + music",
      "Ad copy package (3 primary texts + 3 headlines per concept)",
      "Campaign setup guide with audience targeting",
      "7 business day delivery",
    ],
    valueAnchors: [
      { item: "15 videos at UGC creator rates", value: "$3,750-7,500" },
      { item: "3 unique scripts + copywriting", value: "$1,500" },
      { item: "Campaign strategy guide", value: "$500" },
    ],
  },
  {
    name: "Scale",
    videos: "30 videos",
    price: "$3,000",
    perVideo: "$100/video",
    desc: "Full creative arsenal. Five angles, six hooks each. Dominate your market.",
    popular: false,
    features: [
      "30 AI video ads",
      "5 concepts × 6 hook variations",
      "Full format mix (talking head, testimonial, educational, FAQ, comparison)",
      "Multiple AI presenters matched to your audience",
      "Complete ad copy packages for every concept",
      "Competitor ad audit — what's running in your space",
      "30-min strategy call on launch approach",
      "10 business day delivery + 1 round revisions",
    ],
    valueAnchors: [
      { item: "30 videos at UGC creator rates", value: "$7,500-15,000" },
      { item: "Competitor ad audit", value: "$1,000" },
      { item: "Strategy call + copywriting", value: "$2,000" },
    ],
  },
];

const retainerFeatures = [
  "20 video ads per month (weekly delivery)",
  "4 concepts × 5 hook variations",
  "Scripting based on what's performing",
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
    <section id="packages" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cal text-3xl md:text-4xl text-center mb-3 text-navy"
        >
          Pick a package. Get your ads.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted text-center text-[14px] mb-4 max-w-md mx-auto"
        >
          One-time purchase. No contracts. No commitments.
          Come back when you need more.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[12px] text-muted-foreground mb-14"
        >
          For reference: a single UGC creator video costs $250-500.
          A video production shoot costs $3,000-5,000.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border rounded-2xl overflow-hidden bg-white">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex flex-col p-8 md:p-9 ${
                pkg.popular
                  ? "bg-navy text-white"
                  : "border-b md:border-b-0 md:border-r border-border last:border-0"
              }`}
            >
              {pkg.popular && (
                <span className="absolute top-4 right-4 text-[9px] font-medium bg-white/10 text-white/60 px-2 py-0.5 rounded">
                  MOST POPULAR
                </span>
              )}

              <p
                className={`text-[10px] uppercase tracking-[0.15em] mb-0.5 ${
                  pkg.popular ? "text-white/30" : "text-muted-foreground"
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
                <span
                  className={`text-[11px] ml-2 ${
                    pkg.popular ? "text-white/30" : "text-muted-foreground"
                  }`}
                >
                  {pkg.perVideo}
                </span>
              </div>

              <p
                className={`text-[12px] mb-6 leading-relaxed ${
                  pkg.popular ? "text-white/40" : "text-muted"
                }`}
              >
                {pkg.desc}
              </p>

              {/* What's included */}
              <ul className="space-y-1.5 mb-6 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[11px]">
                    <Check
                      size={11}
                      className={`shrink-0 mt-0.5 ${
                        pkg.popular ? "text-white/25" : "text-muted-foreground/50"
                      }`}
                    />
                    <span
                      className={
                        pkg.popular ? "text-white/55" : "text-muted"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Value anchor */}
              <div
                className={`rounded-lg p-3 mb-5 text-[10px] ${
                  pkg.popular ? "bg-white/5" : "bg-surface"
                }`}
              >
                <p
                  className={`font-medium mb-1.5 ${
                    pkg.popular ? "text-white/40" : "text-muted"
                  }`}
                >
                  What this would cost elsewhere:
                </p>
                {pkg.valueAnchors.map((a) => (
                  <div
                    key={a.item}
                    className={`flex justify-between py-0.5 ${
                      pkg.popular ? "text-white/30" : "text-muted-foreground"
                    }`}
                  >
                    <span>{a.item}</span>
                    <span className="line-through">{a.value}</span>
                  </div>
                ))}
              </div>

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

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 py-5 rounded-xl border border-border bg-white"
        >
          <p className="text-[13px] text-navy font-medium">
            Not happy? We revise until you are — or redo it from scratch. No questions asked.
          </p>
        </motion.div>

        {/* Retainer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl border border-border bg-white p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                For businesses spending $5k+/mo on ads
              </p>
              <h3 className="font-cal text-2xl text-navy">
                Monthly Retainer
              </h3>
            </div>
            <div className="md:text-right">
              <span className="font-cal text-3xl text-navy">$2,500</span>
              <span className="text-muted text-[12px]">/month</span>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                Cancel anytime. No lock-in.
              </p>
            </div>
          </div>

          <p className="text-muted text-[13px] leading-relaxed mb-6 max-w-xl">
            Your agency charges this much and gives you 6 static images.
            We deliver 20 video ads per month with strategy, copy, and weekly fresh creative.
            Your ads never go stale. Your testing never stops.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 mb-6">
            {retainerFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2 text-[11px]">
                <Check
                  size={11}
                  className="text-muted-foreground/50 shrink-0 mt-0.5"
                />
                <span className="text-muted">{f}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-2.5 rounded-lg text-[13px] font-medium hover:bg-navy-light transition-colors"
            >
              <Phone size={13} />
              Book a Strategy Call
            </a>
            <p className="text-[11px] text-muted-foreground self-center">
              First batch delivered within 48 hours of onboarding — or your first month is free.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
