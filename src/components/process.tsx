"use client";

import { motion } from "framer-motion";
import { ClipboardList, Film, Package, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Tell Us About Your Business",
    desc: "Fill out a 15-minute questionnaire. Your services, your audience, what makes you different. That's all we need to get started.",
  },
  {
    num: "02",
    icon: Film,
    title: "We Script, Produce & Edit",
    desc: "Our team writes proven direct-response scripts, produces AI video creative, and edits everything to scroll-stopping standards. You never touch a camera.",
  },
  {
    num: "03",
    icon: Package,
    title: "You Get Ad-Ready Videos + Copy",
    desc: "Fully edited videos in every format. Written ad copy — headlines, primary text, descriptions. Campaign setup guide. Everything you need to launch.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch & Watch What Happens",
    desc: "Upload to your ad account, hit publish, and let the creative do its job. Need help? Monthly retainer clients get ongoing strategy and optimization support.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4 text-center"
        >
          The Ad Engine — How It Works
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          From zero content to ads live in under a week
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative p-6 rounded-2xl border border-border bg-background hover:border-accent/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-accent/30 font-mono">
                  {step.num}
                </span>
                <step.icon
                  size={24}
                  className="text-accent group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-accent/40 text-xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
