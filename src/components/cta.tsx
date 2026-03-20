"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import ShinyButton from "@/components/ui/shiny-button";

export function CTA() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-[#eaecf3]">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl tracking-tight leading-[1.1] mb-6">
            <span className="font-semibold text-[#1a1a1a]">
              Your competitors are running video ads right now.
            </span>
            <br />
            <span className="font-heading text-[#4a7dff]">
              Every week you wait is another week they win.
            </span>
          </h2>

          <p className="text-gray-500 text-base mb-10 max-w-md leading-relaxed">
            Pick a package and get your first batch of ads within 7 days, or book a call to discuss the monthly retainer.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
            <ShinyButton href="#packages">
              Choose Your Package
              <ArrowRight size={14} />
            </ShinyButton>
            <a
              href="#contact"
              className="bg-white text-[#1a1a1a] px-8 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <Phone size={14} />
              Book a Strategy Call
            </a>
          </div>

          <p className="text-xs text-gray-400">
            No contracts. No commitments. Not happy? We revise or redo. No questions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
