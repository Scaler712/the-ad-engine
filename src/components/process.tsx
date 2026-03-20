"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Business",
    desc: "Fill out a 15-minute questionnaire. Your services, your audience, what makes you different. That's all we need to get started.",
  },
  {
    num: "02",
    title: "We Script, Produce & Edit",
    desc: "Our team writes proven direct-response scripts, produces AI video creative, and edits everything to scroll-stopping standards. You never touch a camera.",
  },
  {
    num: "03",
    title: "You Get Ad-Ready Videos + Copy",
    desc: "Fully edited videos in every format. Written ad copy — headlines, primary text, descriptions. Campaign setup guide. Everything you need to launch.",
  },
  {
    num: "04",
    title: "Launch & Watch What Happens",
    desc: "Upload to your ad account, hit publish, and let the creative do its job. Monthly retainer clients get ongoing strategy and optimization support.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-4 text-center"
        >
          The Ad Engine — How It Works
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-20 text-navy"
        >
          From zero content to ads live
          <br className="hidden md:block" /> in under a week
        </motion.h2>

        {/* Vertical timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative flex gap-8 items-start"
              >
                {/* Circle with number */}
                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy flex items-center justify-center shrink-0 shadow-lg shadow-navy/10">
                  <span className="text-white text-sm font-bold font-display">
                    {step.num}
                  </span>
                </div>

                <div className="pt-2 pb-2">
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
