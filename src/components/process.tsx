"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Film, Package, Rocket } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: ClipboardList,
    title: "Fill Out The Brief",
    desc: "Answer a short questionnaire about your business, your audience, and what makes you different. Upload your logo and brand colors. That's it.",
    time: "15 min",
  },
  {
    num: "2",
    icon: Film,
    title: "We Script & Produce",
    desc: "Our team writes direct-response scripts, produces AI video creative with multiple presenters, and edits everything to scroll-stopping standards.",
    time: "5-7 days",
  },
  {
    num: "3",
    icon: Package,
    title: "Get Ad-Ready Videos",
    desc: "Fully edited videos in 9:16 and 1:1 formats. Written ad copy for every concept. A campaign setup guide with targeting and budget recommendations.",
    time: "Delivered",
  },
  {
    num: "4",
    icon: Rocket,
    title: "Launch & Watch Results",
    desc: "Upload to your ad account, hit publish, and let the creative do its job. Monthly clients get ongoing strategy and fresh creative every week.",
    time: "Launch day",
  },
];

function Arrow() {
  return (
    <div className="hidden md:flex items-center justify-center -mx-3 z-10">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gray-300">
        <path d="M8 20h24M24 12l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl tracking-tight text-center mb-5 text-[#1a1a1a]"
        >
          Your ads in 4 steps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center text-lg mb-16 max-w-sm mx-auto"
        >
          From zero content to ads live in under a week
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-6 items-start">
          {steps.map((step, i) => (
            <React.Fragment key={step.num}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon card */}
                <div className="bg-[#f5f5f7] rounded-2xl w-full aspect-[4/3] flex items-center justify-center mb-6">
                  <step.icon size={28} className="text-gray-400" />
                </div>

                {/* Step info */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-[#1a1a1a]">{step.num}</span>
                  <h3 className="font-semibold text-base text-[#1a1a1a]">{step.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[240px]">{step.desc}</p>
                <span className="inline-block mt-4 text-xs text-gray-400 bg-[#f5f5f7] px-3 py-1 rounded-full">{step.time}</span>
              </motion.div>
              {i < steps.length - 1 && <Arrow />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
