"use client";

import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import ShinyButton from "@/components/ui/shiny-button";

const packages = [
  {
    name: "Starter",
    videos: "5 videos",
    price: "$750",
    perVideo: "$150/video",
    desc: "Test the waters.",
    popular: false,
    features: [
      "5 AI video ads (15-45 sec)",
      "1 concept x 5 hook variations",
      "Direct-response scripting",
      "Editing + captions + music",
      "Ad copy per video",
      "9:16 + 1:1 formats",
      "Campaign setup guide",
      "7-day delivery",
    ],
    bonus: "30+ static ad creatives",
  },
  {
    name: "Growth",
    videos: "15 videos",
    price: "$1,500",
    perVideo: "$100/video",
    desc: "Find your winning ads.",
    popular: true,
    features: [
      "15 AI video ads",
      "3 concepts x 5 hook variations",
      "Multiple AI presenters",
      "Direct-response scripting",
      "Full editing + captions + branding",
      "Ad copy package per concept",
      "Campaign setup + targeting",
      "7-day delivery",
    ],
    bonus: "30+ static ad creatives",
  },
  {
    name: "Scale",
    videos: "30 videos",
    price: "$3,000",
    perVideo: "$100/video",
    desc: "Dominate your market.",
    popular: false,
    features: [
      "30 AI video ads",
      "5 concepts x 6 hook variations",
      "Full format mix",
      "Multiple AI presenters",
      "Complete ad copy packages",
      "Competitor ad audit",
      "30-min strategy call",
      "10-day delivery + revisions",
    ],
    bonus: "30+ static ad creatives",
  },
];

const retainerFeatures = [
  "20 video ads per month",
  "4 concepts x 5 variations",
  "Performance-based scripting",
  "Complete ad copy",
  "Monthly strategy brief",
  "Competitor monitoring",
  "Campaign guidance",
  "First batch in 48hrs",
  "Unlimited revisions",
  "Monthly strategy call",
];

export function Pricing() {
  return (
    <section id="packages" className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl tracking-tight text-center mb-5 text-[#1a1a1a]"
        >
          Pick a package. Get your ads.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center text-base mb-12"
        >
          One-time purchase. No contracts.
        </motion.p>

        {/* iOS-style pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.04)] ${
                pkg.popular ? "ring-2 ring-[#4a7dff]" : ""
              }`}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                {pkg.popular && (
                  <span className="inline-block text-[10px] font-medium bg-[#4a7dff] text-white px-2 py-0.5 rounded mb-3">
                    POPULAR
                  </span>
                )}
                <p className="text-xs text-gray-400 mb-1">{pkg.videos}</p>
                <h3 className="font-cal text-lg text-[#1a1a1a]">{pkg.name}</h3>
                <div className="mt-2">
                  <span className="font-heading text-3xl text-[#1a1a1a]">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-gray-400 ml-1.5">
                    {pkg.perVideo}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">{pkg.desc}</p>
              </div>

              {/* Divider */}
              <div className="mx-6 border-t border-gray-100" />

              {/* Features */}
              <div className="p-6 pt-4">
                <ul className="space-y-2">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[13px]"
                    >
                      <Check size={14} className="text-gray-300 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Bonus */}
                <div className="mt-4 pt-3 border-t border-gray-50">
                  <p className="text-[11px] text-gray-400">
                    <span className="font-medium text-[#1a1a1a]">Bonus:</span>{" "}
                    {pkg.bonus}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                {pkg.popular ? (
                  <ShinyButton href="#contact" className="w-full">
                    Get Started
                  </ShinyButton>
                ) : (
                  <a
                    href="#contact"
                    className="block text-center py-2.5 rounded-xl text-sm font-medium transition-all bg-[#f5f5f7] text-[#1a1a1a] hover:bg-[#eee]"
                  >
                    Get Started
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Not happy? We revise until you are — or redo it from scratch.
        </p>

        {/* Retainer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-white rounded-2xl p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.04)]"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs text-gray-400 mb-1">For serious growth</p>
              <h3 className="font-cal text-xl text-[#1a1a1a]">
                Monthly Retainer
              </h3>
            </div>
            <div className="md:text-right">
              <span className="font-heading text-3xl text-[#1a1a1a]">
                $2,500
              </span>
              <span className="text-sm text-gray-400">/mo</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {retainerFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2 text-[13px]">
                <Check size={14} className="text-gray-300 shrink-0 mt-0.5" />
                <span className="text-gray-600">{f}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-[#333] transition-colors"
          >
            <Phone size={14} />
            Book a Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
