"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function Promise() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
            <Shield size={20} className="text-navy" />
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-4">
            Our Promise
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-navy">
            No risk. Just results.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
            <div className="p-6 rounded-xl border border-border bg-white">
              <p className="font-semibold text-navy text-sm mb-2">
                One-off packages:
              </p>
              <p className="text-xs text-muted leading-relaxed">
                Not happy with the quality? We revise any video until you are —
                or we redo it from scratch. No questions asked.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-white">
              <p className="font-semibold text-navy text-sm mb-2">
                Monthly retainer:
              </p>
              <p className="text-xs text-muted leading-relaxed">
                If we don&apos;t deliver your first batch within 5 business days
                of onboarding, your first month is free. Period.
              </p>
            </div>
          </div>

          <p className="text-muted text-xs leading-relaxed max-w-md mx-auto">
            We don&apos;t do fine print. We don&apos;t do runaround. If the work
            isn&apos;t right, we make it right. Simple.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
