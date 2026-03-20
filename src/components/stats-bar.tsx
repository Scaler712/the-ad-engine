"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => { const u = rounded.on("change", (v) => setDisplay(v)); return u; }, [rounded]);
  useEffect(() => {
    if (hasAnimated) return;
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { animate(count, value, { duration: 2, ease: "easeOut" }); setHasAnimated(true); observer.disconnect(); }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, value, hasAnimated]);
  return <span ref={ref} className="tabular-nums">{display}{suffix}</span>;
}

const stats = [
  { value: 2400, suffix: "+", label: "Videos Delivered" },
  { value: 48, suffix: "hrs", label: "First Batch Turnaround" },
  { value: 47, suffix: "%", label: "Higher CTR vs Static" },
];

export function StatsBar() {
  return (
    <section className="py-12 md:py-16 -mt-16 relative z-10">
      <div className="mx-auto max-w-3xl px-6">
        <div className="glass-strong rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-cal text-3xl md:text-4xl text-gradient">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[10px] text-muted mt-1 tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
