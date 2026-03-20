"use client";

import { motion } from "framer-motion";
import { ClipboardList, Film, Package, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Fill Out The Brief",
    desc: "Answer a short questionnaire about your business, your audience, and what makes you different. Upload your logo and brand colors. That's it.",
    time: "15 min",
  },
  {
    num: "02",
    icon: Film,
    title: "We Script & Produce",
    desc: "Our team writes direct-response scripts, produces AI video creative with multiple presenters, and edits everything to scroll-stopping standards.",
    time: "5-7 days",
  },
  {
    num: "03",
    icon: Package,
    title: "Get Ad-Ready Videos",
    desc: "Fully edited videos in 9:16 and 1:1 formats. Written ad copy for every concept. A campaign setup guide with targeting and budget recommendations.",
    time: "Delivered",
  },
  {
    num: "04",
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
    <section id="process" className="py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl tracking-tight text-center mb-5 text-gray-800"
        >
          Your ads in 4 steps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center text-lg mb-20 max-w-sm mx-auto"
        >
          From zero content to ads live in under a week
        </motion.p>

        {/* 4 columns with arrows */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-6 items-start">
          {steps.map((step, i) => (
            <>
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon card */}
                <div className="card w-full aspect-[4/3] flex items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center">
                    <step.icon size={24} className="text-gray-400" />
                  </div>
                </div>

                {/* Step info */}
                <span className="text-4xl font-light text-gray-200 mb-2">{step.num}</span>
                <h3 className="text-lg font-medium text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[240px]">{step.desc}</p>
                <span className="inline-block mt-4 text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">{step.time}</span>
              </motion.div>
              {i < steps.length - 1 && <Arrow key={`arrow-${i}`} />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
