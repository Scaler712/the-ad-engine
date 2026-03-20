"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Does AI video actually look real?",
    a: "Yes. The AI models we use produce high-quality, natural-looking video that's indistinguishable from traditional filmed content in most ad formats. We combine multiple AI tools and professional editing to ensure every video meets broadcast-quality standards.",
  },
  {
    q: "What if I already have a marketing agency?",
    a: "Great — we're not replacing them. We're their creative supply chain. Most agencies struggle to produce fresh video creative at volume. We give your agency a steady stream of ad-ready video to test.",
  },
  {
    q: "What industries do you work with?",
    a: "Service businesses, SaaS companies, agencies, coaches, med spas, dental practices, law firms, real estate teams, home services (roofing, HVAC, plumbing), financial services, and more. If your business acquires clients through paid advertising, we can produce creative that converts.",
  },
  {
    q: "How fast do I get my videos?",
    a: "One-time packages are delivered within 7-10 business days. Monthly retainer clients get their first batch within 48 hours and receive rolling weekly delivery after that.",
  },
  {
    q: "What if I don't like the result?",
    a: "For one-off packages, we revise any video until you're happy — or redo it from scratch. No questions asked. For monthly retainer clients, you get unlimited revisions.",
  },
  {
    q: "I've never run video ads before. Will this work?",
    a: "Absolutely. Every package includes a campaign setup guide with targeting recommendations, budget suggestions, and launch strategy. Monthly retainer clients also get a strategy call and ongoing guidance.",
  },
  {
    q: "Can I use these on any platform?",
    a: "Yes. Videos are delivered in 9:16 (Stories, Reels, TikTok, Shorts) and 1:1 (Feed) formats. They work on Meta, TikTok, YouTube, LinkedIn, and any platform that supports video ads.",
  },
  {
    q: "Do I need to be on camera?",
    a: "No. That's the whole point. We use AI presenters, motion graphics, and professional editing to create compelling video ads without you ever stepping in front of a camera.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-2xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-4 text-center"
        >
          Questions
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-14 text-navy"
        >
          Everything you&apos;re wondering — answered.
        </motion.h2>

        <div className="space-y-0 divide-y divide-border">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="font-semibold text-[15px] text-navy pr-8 group-hover:text-navy/70 transition-colors">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <Minus size={16} className="shrink-0 text-muted" />
                ) : (
                  <Plus size={16} className="shrink-0 text-muted" />
                )}
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
                    <p className="pb-5 text-sm text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
