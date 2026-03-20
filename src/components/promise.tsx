"use client";

import { motion } from "framer-motion";

export function Promise() {
  return (
    <section className="py-28 md:py-36 bg-surface">
      <div className="mx-auto max-w-xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cal text-3xl md:text-4xl mb-10 text-navy">
            No risk. Just results.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8">
            <div className="p-5 rounded-xl border border-border bg-white">
              <p className="font-cal text-[13px] text-navy mb-1.5">
                One-off packages
              </p>
              <p className="text-[12px] text-muted leading-relaxed">
                We revise any video until you&apos;re happy — or redo it from
                scratch. No questions asked.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-white">
              <p className="font-cal text-[13px] text-navy mb-1.5">
                Monthly retainer
              </p>
              <p className="text-[12px] text-muted leading-relaxed">
                First batch not delivered within 5 business days? Your first
                month is free. Period.
              </p>
            </div>
          </div>

          <p className="text-[12px] text-muted-foreground">
            No fine print. No runaround. If the work isn&apos;t right, we make
            it right.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
