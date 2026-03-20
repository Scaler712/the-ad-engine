"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Does AI video actually look real?", a: "Yes. We combine multiple AI tools and professional editing to ensure every video meets broadcast-quality standards. The scroll-stopping hook matters more than whether a human or AI pressed record." },
  { q: "What if I already have a marketing agency?", a: "We're their creative supply chain. Most agencies struggle to produce fresh video creative at volume. We give your agency a steady stream of ad-ready video to test." },
  { q: "What industries do you work with?", a: "Service businesses, SaaS, agencies, coaches, med spas, dental practices, law firms, real estate, home services, financial services, and more. If you acquire clients through paid ads, we can help." },
  { q: "How fast do I get my videos?", a: "One-time packages: 7-10 business days. Monthly retainer: first batch within 48 hours, then rolling weekly delivery." },
  { q: "What if I don't like the result?", a: "We revise any video until you're happy — or redo it from scratch. Monthly retainer clients get unlimited revisions. No questions asked." },
  { q: "I've never run video ads before. Will this work?", a: "Every package includes a campaign setup guide with targeting, budget, and launch strategy. Monthly clients also get a strategy call and ongoing guidance." },
  { q: "Can I use these on any platform?", a: "Yes. Delivered in 9:16 and 1:1. Works on Meta, TikTok, YouTube, LinkedIn, and any platform that supports video ads." },
  { q: "Do I need to be on camera?", a: "No. That's the whole point. AI presenters, motion graphics, professional editing — no camera required." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 md:py-40">
      <div className="mx-auto max-w-2xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-light tracking-tight text-center mb-16 text-gray-800"
        >
          Questions & answers
        </motion.h2>

        <div className="divide-y divide-gray-200/60">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-base font-medium text-gray-800 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
