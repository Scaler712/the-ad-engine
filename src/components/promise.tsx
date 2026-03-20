"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function Promise() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Shield size={40} className="text-accent mx-auto mb-6" />

          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4">
            Our Promise
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            No risk. Just results.
          </h2>

          <div className="space-y-6 text-left max-w-xl mx-auto">
            <div className="p-6 rounded-xl border border-border bg-card">
              <p className="font-semibold mb-2">For one-off packages:</p>
              <p className="text-sm text-muted leading-relaxed">
                Not happy with the quality? We revise any video until you are —
                or we redo it from scratch. No questions asked.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <p className="font-semibold mb-2">For monthly retainer:</p>
              <p className="text-sm text-muted leading-relaxed">
                If we don&apos;t deliver your first batch within 5 business days
                of onboarding, your first month is free. Period.
              </p>
            </div>
          </div>

          <p className="text-muted text-sm mt-8 max-w-lg mx-auto leading-relaxed">
            We don&apos;t do fine print. We don&apos;t do runaround. If the work
            isn&apos;t right, we make it right. Simple.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
