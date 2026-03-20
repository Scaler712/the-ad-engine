"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  useEffect(() => {
    if (hasAnimated) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, value, { duration: 2, ease: "easeOut" });
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, value, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
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
    <section className="border-y border-border">
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <p className="font-display text-5xl md:text-6xl font-bold text-navy mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-muted uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
