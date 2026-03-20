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
      "1 concept x 5 hook variations",
      "Direct-response scripting",
      "Professional editing + captions + music",
      "Written ad copy (primary text + headline)",
      "9:16 + 1:1 formats",
      "Campaign setup guide with targeting",
      "7 business day delivery",
    ],
    bonus: "30+ static ad creatives based on winning patterns",
    valueAnchors: [
      { item: "5 videos at UGC creator rates", value: "$1,250-2,500" },
      { item: "Scripting + copywriting", value: "$500" },
      { item: "30+ static ad creatives", value: "$600" },
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
      "3 concepts x 5 hook variations",
      "Multiple AI presenters per concept",
      "Direct-response scripting for each concept",
      "Full editing + captions + branding + music",
      "Ad copy package (3 primary texts + 3 headlines per concept)",
      "Campaign setup guide with audience targeting",
      "7 business day delivery",
    ],
    bonus: "30+ static ad creatives based on winning patterns",
    valueAnchors: [
      { item: "15 videos at UGC creator rates", value: "$3,750-7,500" },
      { item: "3 unique scripts + copywriting", value: "$1,500" },
      { item: "30+ static ad creatives", value: "$600" },
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
      "5 concepts x 6 hook variations",
      "Full format mix (talking head, testimonial, educational, FAQ, comparison)",
      "Multiple AI presenters matched to your audience",
      "Complete ad copy packages for every concept",
      "Competitor ad audit",
      "30-min strategy call on launch approach",
      "10 business day delivery + 1 round revisions",
    ],
    bonus: "30+ static ad creatives based on winning patterns",
    valueAnchors: [
      { item: "30 videos at UGC creator rates", value: "$7,500-15,000" },
      { item: "Competitor ad audit + strategy call", value: "$2,000" },
      { item: "30+ static ad creatives", value: "$600" },
    ],
  },
];

const retainerFeatures = [
  "20 video ads per month (weekly delivery)",
  "4 concepts x 5 hook variations",
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
    <section id="packages" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl tracking-tight text-center mb-5 text-gray-800"
        >
          Pick a package. Get your ads.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center text-base mb-4 max-w-md mx-auto"
        >
          One-time purchase. No contracts. No commitments.
          Come back when you need more.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-400 mb-10"
        >
          For reference: a single UGC creator video costs $250-500.
          A video production shoot costs $3,000-5,000.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex flex-col rounded-2xl p-8 ${
                pkg.popular
                  ? "bg-navy text-white shadow-[0_4px_16px_rgba(26,26,46,0.25),0_12px_40px_rgba(26,26,46,0.2)]"
                  : "card"
              }`}
            >
              {pkg.popular && (
                <span className="absolute top-4 right-4 text-[9px] font-medium bg-white/10 text-white/60 px-2.5 py-1 rounded-md">
                  MOST POPULAR
                </span>
              )}

              <p
                className={`text-xs uppercase tracking-wider mb-1 ${
                  pkg.popular ? "text-white/30" : "text-gray-400"
                }`}
              >
                {pkg.videos}
              </p>

              <h3
                className={`font-cal text-xl mb-4 ${
                  pkg.popular ? "text-white" : "text-gray-800"
                }`}
              >
                {pkg.name}
              </h3>

              <div className="mb-2">
                <span
                  className={`text-4xl font-light tracking-tight ${
                    pkg.popular ? "text-white" : "text-gray-800"
                  }`}
                >
                  {pkg.price}
                </span>
                <span
                  className={`text-xs ml-2 ${
                    pkg.popular ? "text-white/30" : "text-gray-400"
                  }`}
                >
                  {pkg.perVideo}
                </span>
              </div>

              <p
                className={`text-sm mb-6 leading-relaxed ${
                  pkg.popular ? "text-white/40" : "text-gray-500"
                }`}
              >
                {pkg.desc}
              </p>

              {/* What's included */}
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-xs">
                    <Check
                      size={12}
                      className={`shrink-0 mt-0.5 ${
                        pkg.popular ? "text-white/25" : "text-gray-300"
                      }`}
                    />
                    <span
                      className={
                        pkg.popular ? "text-white/55" : "text-gray-500"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bonus */}
              {pkg.bonus && (
                <div
                  className={`rounded-xl p-3.5 mb-4 text-xs border border-dashed ${
                    pkg.popular
                      ? "border-white/15 bg-white/5"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <span className={`font-medium ${pkg.popular ? "text-white/60" : "text-gray-700"}`}>
                    BONUS:
                  </span>{" "}
                  <span className={pkg.popular ? "text-white/40" : "text-gray-500"}>
                    {pkg.bonus}
                  </span>
                </div>
              )}

              {/* Value anchor */}
              <div
                className={`rounded-xl p-3.5 mb-5 text-xs ${
                  pkg.popular ? "bg-white/5" : "bg-gray-50"
                }`}
              >
                <p
                  className={`font-medium mb-2 ${
                    pkg.popular ? "text-white/40" : "text-gray-500"
                  }`}
                >
                  What this would cost elsewhere:
                </p>
                {pkg.valueAnchors.map((a) => (
                  <div
                    key={a.item}
                    className={`flex justify-between py-0.5 ${
                      pkg.popular ? "text-white/30" : "text-gray-400"
                    }`}
                  >
                    <span>{a.item}</span>
                    <span className="line-through">{a.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition-all ${
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

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 py-5 rounded-xl card"
        >
          <p className="text-sm text-gray-600">
            Not happy? We revise until you are — or redo it from scratch. No questions asked.
          </p>
        </motion.div>

        {/* Retainer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl card p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                For businesses spending $5k+/mo on ads
              </p>
              <h3 className="font-cal text-2xl text-gray-800">
                Monthly Retainer
              </h3>
            </div>
            <div className="md:text-right">
              <span className="text-3xl font-light tracking-tight text-gray-800">$2,500</span>
              <span className="text-gray-500 text-sm">/month</span>
              <p className="text-xs text-gray-400 mt-0.5">
                Cancel anytime. No lock-in.
              </p>
            </div>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xl">
            Your agency charges this much and gives you 6 static images.
            We deliver 20 video ads per month with strategy, copy, and weekly fresh creative.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
            {retainerFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2.5 text-xs">
                <Check
                  size={12}
                  className="text-gray-300 shrink-0 mt-0.5"
                />
                <span className="text-gray-500">{f}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-navy-light transition-colors"
            >
              <Phone size={14} />
              Book a Strategy Call
            </a>
            <p className="text-xs text-gray-400 self-center">
              First batch delivered within 48 hours of onboarding — or your first month is free.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
