"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ShinyButton from "@/components/ui/shiny-button";

const packages = [
  {
    name: "Starter",
    videos: "15 videos",
    price: "$2,500",
    desc: "One-time delivery.",
    popular: false,
    features: [
      "15 AI video ads (15-45 sec)",
      "3 concepts x 5 hook variations",
      "Multiple AI presenters",
      "Direct-response scripting",
      "Full editing + captions + branding",
      "Ad copy per concept",
      "9:16 + 1:1 formats",
      "Campaign setup guide",
      "7-day delivery",
    ],
    bonus: "30+ static ad creatives",
  },
  {
    name: "Growth",
    videos: "20 videos/month",
    price: "$4,000",
    priceLabel: "/mo",
    desc: "Ongoing creative.",
    popular: true,
    features: [
      "20 AI video ads per month",
      "4 concepts x 5 hook variations",
      "Performance-based scripting",
      "Multiple AI presenters",
      "Complete ad copy packages",
      "Monthly strategy call",
      "Competitor monitoring",
      "First batch in 48hrs",
    ],
    bonus: "30+ static ad creatives",
  },
];


export function Pricing() {
  return (
    <section id="packages" className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl tracking-tight text-center mb-5 text-[#1a1a1a]"
        >

          Simple pricing. No surprises.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center text-base mb-12"
        >
          Pick a package, get your videos, run your ads. Come back when you need more.
        </motion.p>

        {/* iOS-style pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
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
                  {pkg.priceLabel && (
                    <span className="text-sm text-gray-400 ml-0.5">
                      {pkg.priceLabel}
                    </span>
                  )}
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


      </div>
    </section>
  );
}
