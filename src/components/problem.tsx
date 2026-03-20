"use client";

import { motion } from "framer-motion";

const pains = [
  { pain: "Too expensive", detail: "A single video shoot costs $3,000-$5,000. UGC creators charge $250-500 per video. You need 10-15 variations to test properly." },
  { pain: "Too slow", detail: "Coordinate talent, schedule shoots, wait for edits. By the time creative ships, your competitors have already tested 30 ads." },
  { pain: "You don't want to be on camera", detail: "And honestly, you shouldn't have to be. The ad creative should sell — not your face." },
  { pain: "Your agency recycles the same creatives", detail: "You're paying $3-5k/month. They gave you 6 static images and 2 videos in month one. You're still running them in month four." },
];

export function Problem() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cal text-3xl md:text-[2.5rem] text-center leading-[1.1] text-gradient mb-4"
        >
          You already know video ads
          <br />
          outperform everything else.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted text-center text-[15px] mb-16 max-w-md mx-auto opacity-60"
        >
          So why aren&apos;t you running them?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pains.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl p-6 hover:bg-white/60 transition-all"
            >
              <p className="font-cal text-[15px] text-navy mb-2">{item.pain}</p>
              <p className="text-[12px] text-muted leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-cal text-xl text-gradient text-center mt-14"
        >
          We built The Ad Engine to fix this.
        </motion.p>
      </div>
    </section>
  );
}
