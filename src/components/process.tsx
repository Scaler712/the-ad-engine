"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Business",
    desc: "Fill out a 15-minute questionnaire. Your services, your audience, what makes you different. That's all we need.",
  },
  {
    num: "02",
    title: "We Script, Produce & Edit",
    desc: "We write proven direct-response scripts, produce AI video creative, and edit everything to scroll-stopping standards. You never touch a camera.",
  },
  {
    num: "03",
    title: "You Get Ad-Ready Videos + Copy",
    desc: "Fully edited videos in every format. Written ad copy — headlines, primary text, descriptions. Campaign setup guide. Everything to launch.",
  },
  {
    num: "04",
    title: "Launch & Watch What Happens",
    desc: "Upload to your ad account, hit publish, let the creative work. Monthly retainer clients get ongoing strategy and optimization.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 md:py-36 bg-navy text-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cal text-3xl md:text-4xl text-center mb-4"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 text-center text-[15px] mb-20 max-w-sm mx-auto"
        >
          From zero content to ads live in under a week
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 md:p-8"
            >
              {/* Top line connector */}
              {i > 0 && (
                <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-white/10 -translate-x-1/2" />
              )}

              <span className="font-cal text-5xl text-white/[0.06] block mb-4">
                {step.num}
              </span>
              <h3 className="font-cal text-base text-white mb-3">
                {step.title}
              </h3>
              <p className="text-[13px] text-white/40 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
