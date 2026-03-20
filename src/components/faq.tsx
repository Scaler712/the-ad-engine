"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Does AI video actually look real?",
    a: "Yes. The AI models we use produce high-quality, natural-looking video that's indistinguishable from traditional filmed content in most ad formats. We combine multiple AI tools and professional editing to ensure every video meets broadcast-quality standards. The scroll-stopping hook matters more than whether a human or AI pressed record.",
  },
  {
    q: "What if I already have a marketing agency?",
    a: "Great — we're not replacing them. We're their creative supply chain. Most agencies struggle to produce fresh video creative at volume. We give your agency (or your internal team) a steady stream of ad-ready video to test, so they can focus on strategy and optimization instead of content production.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with service businesses, SaaS companies, agencies, coaches, med spas, dental practices, law firms, real estate teams, home services (roofing, HVAC, plumbing), financial services, and more. If your business acquires clients through paid advertising, we can produce creative that converts.",
  },
  {
    q: "How fast do I get my videos?",
    a: "One-time packages are delivered within 7-10 business days. Monthly retainer clients get their first batch within 48 hours and receive rolling weekly delivery after that.",
  },
  {
    q: "What if I don't like the result?",
    a: "For one-off packages, we revise any video until you're happy — or redo it from scratch. No questions asked. For monthly retainer clients, you get unlimited revisions. We don't move on until you're satisfied.",
  },
  {
    q: "I've never run video ads before. Will this work?",
    a: "Absolutely. Every package includes a campaign setup guide with targeting recommendations, budget suggestions, and launch strategy. Monthly retainer clients also get a strategy call and ongoing guidance. You don't need experience — we give you everything you need to launch.",
  },
  {
    q: "Can I use these on any platform?",
    a: "Yes. Videos are delivered in 9:16 (Stories, Reels, TikTok, Shorts) and 1:1 (Feed) formats. They work on Meta (Facebook + Instagram), TikTok, YouTube, LinkedIn, and any other platform that supports video ads.",
  },
  {
    q: "Do I need to be on camera?",
    a: "No. That's the whole point. We use AI presenters, motion graphics, and professional editing to create compelling video ads — without you ever stepping in front of a camera.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4 text-center"
        >
          Questions
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Everything you&apos;re wondering — answered.
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-card/50 transition-colors"
              >
                <span className="font-semibold text-[15px] pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted transition-transform ${
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
                    <p className="px-5 pb-5 text-sm text-muted leading-relaxed">
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
