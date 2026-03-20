"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, Film, Package, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Fill Out The Brief",
    subtitle: "15 minutes of your time",
    desc: "Answer a short questionnaire about your business, your audience, and what makes you different. Upload your logo and brand colors. That's it — that's all we need from you. Ever.",
    details: ["Your services & pricing", "Target audience & geography", "What makes you different", "Brand assets (logo, colors)"],
    time: "15 min",
  },
  {
    num: "02",
    icon: Film,
    title: "We Script, Produce & Edit",
    subtitle: "You do nothing",
    desc: "Our team writes direct-response scripts proven to convert, produces AI video creative with multiple presenters, and edits everything to scroll-stopping standards. Captions, branding, music — all handled.",
    details: ["Direct-response scripting", "AI video production", "Professional editing", "Multiple hook variations"],
    time: "5-7 days",
  },
  {
    num: "03",
    icon: Package,
    title: "You Get Ad-Ready Videos + Copy",
    subtitle: "Everything you need to launch",
    desc: "Fully edited videos in 9:16 and 1:1 formats. Written ad copy for every concept — headlines, primary text, descriptions. A campaign setup guide with targeting and budget recommendations.",
    details: ["Videos in all formats", "Written ad copy per concept", "Campaign setup guide", "Targeting recommendations"],
    time: "Delivered",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch & Watch Results",
    subtitle: "Your ads are live",
    desc: "Upload to your ad account, hit publish, and let the creative do its job. Monthly retainer clients get ongoing strategy calls, performance tracking, and fresh creative every week.",
    details: ["Upload to any platform", "Hit publish", "Track performance", "Order more when ready"],
    time: "Launch day",
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cal text-3xl md:text-4xl text-center mb-4 text-gradient"
        >
          How it works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted text-center text-[14px] mb-14 max-w-sm mx-auto"
        >
          From zero content to ads live in under a week
        </motion.p>

        {/* Stepper artifact */}
        <div className="glass-strong rounded-2xl overflow-hidden">
          {/* Top nav — step tabs */}
          <div className="flex border-b border-black/[0.04]">
            {steps.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActive(i)}
                className={`flex-1 py-4 px-3 text-center transition-all relative ${
                  i === active
                    ? "bg-white/40"
                    : "hover:bg-white/20"
                } ${i > 0 ? "border-l border-black/[0.04]" : ""}`}
              >
                <span
                  className={`text-[10px] uppercase tracking-[0.15em] block mb-0.5 ${
                    i === active ? "text-navy" : "text-muted-foreground"
                  }`}
                >
                  Step {s.num}
                </span>
                <span
                  className={`text-[12px] font-medium hidden sm:block ${
                    i === active ? "text-navy" : "text-muted"
                  }`}
                >
                  {s.title.split(" ").slice(0, 2).join(" ")}
                </span>
                {i === active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-navy"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left — text */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center">
                      <step.icon size={18} className="text-navy" />
                    </div>
                    <div>
                      <p className="font-cal text-lg text-navy">{step.title}</p>
                      <p className="text-[11px] text-muted">{step.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-[13px] text-muted leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground bg-surface rounded-lg px-3 py-2 w-fit">
                    <span className="text-navy font-medium">{step.time}</span>
                  </div>
                </div>

                {/* Right — details checklist */}
                <div className="flex flex-col justify-center">
                  <div className="space-y-3">
                    {step.details.map((d, i) => (
                      <motion.div
                        key={d}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/40"
                      >
                        <div className="w-6 h-6 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-medium text-navy">
                            {i + 1}
                          </span>
                        </div>
                        <span className="text-[13px] text-navy">{d}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-8 flex gap-1.5">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full flex-1 transition-colors duration-300 ${
                      i <= active ? "bg-navy" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
