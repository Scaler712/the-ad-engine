"use client";

import { InfiniteSlider } from "./infinite-slider";

const industries = [
  "DENTAL PRACTICES",
  "SAAS COMPANIES",
  "ROOFING & HVAC",
  "REAL ESTATE TEAMS",
  "LAW FIRMS",
  "AGENCIES",
  "MED SPAS",
  "COACHES",
  "HOME SERVICES",
  "FINANCIAL SERVICES",
];

export function Marquee() {
  return (
    <section className="py-5 border-y border-border/50 bg-surface/50">
      <InfiniteSlider gap={0} duration={35}>
        {industries.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground/50 px-6 whitespace-nowrap">
              {item}
            </span>
            <span className="text-muted-foreground/20 text-[6px]">●</span>
          </span>
        ))}
      </InfiniteSlider>
    </section>
  );
}
