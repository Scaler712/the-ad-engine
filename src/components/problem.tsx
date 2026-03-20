"use client";

import { motion } from "framer-motion";

export function Problem() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cal text-3xl md:text-[2.5rem] text-center leading-[1.1] text-navy mb-16"
        >
          You already know video ads
          <br />
          outperform everything else.
          <br />
          <span className="text-muted-foreground">So why aren&apos;t you running them?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {[
            {
              pain: "Too expensive",
              detail:
                "A single video shoot costs $3,000-$5,000. UGC creators charge $250-500 per video. You need 10-15 variations just to test properly.",
            },
            {
              pain: "Too slow",
              detail:
                "Coordinate talent, schedule shoots, wait for edits, request revisions. By the time creative ships, your competitors have already tested 30 ads.",
            },
            {
              pain: "You don't want to be on camera",
              detail:
                "And honestly, you shouldn't have to be. The ad creative should sell — not your face.",
            },
            {
              pain: "Your agency recycles the same creatives",
              detail:
                "You're paying $3-5k/month. They gave you 6 static images and 2 videos in month one. You're still running them in month four.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <p className="font-cal text-base text-navy mb-1.5">
                {item.pain}
              </p>
              <p className="text-[13px] text-muted leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="gradient-line max-w-[200px] mx-auto mb-6" />
          <p className="text-[15px] text-muted mb-2">
            The result? You keep running static ads that get ignored.
          </p>
          <p className="font-cal text-xl text-navy">
            We built The Ad Engine to fix this.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
