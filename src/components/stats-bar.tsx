"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * value);

      setDisplay(current.toLocaleString());

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 2400, suffix: "+", label: "Videos Delivered" },
  { value: 48, suffix: "hrs", label: "First Batch Turnaround" },
  { value: 47, suffix: "%", label: "Higher CTR vs Static" },
];

export function StatsBar() {
  return (
    <section className="py-6 md:py-8 -mt-16 relative z-10">
      <div className="mx-auto max-w-3xl px-6">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-3xl md:text-4xl tracking-tight text-[#1a1a1a]">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-gray-400 mt-1.5 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
