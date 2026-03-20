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
    <section className="py-6 border-y border-border bg-surface">
      <InfiniteSlider gap={0} duration={35} className="py-2">
        {industries.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-navy/40 px-8 whitespace-nowrap">
              {item}
            </span>
            <span className="text-navy/20 text-[8px]">◆</span>
          </span>
        ))}
      </InfiniteSlider>
    </section>
  );
}
