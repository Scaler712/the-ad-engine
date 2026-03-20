"use client";

import { InfiniteSlider } from "./infinite-slider";

const industries = [
  "DENTAL PRACTICES", "SAAS COMPANIES", "ROOFING & HVAC", "REAL ESTATE TEAMS",
  "LAW FIRMS", "AGENCIES", "MED SPAS", "COACHES", "HOME SERVICES", "FINANCIAL SERVICES",
];

export function Marquee() {
  return (
    <section className="py-4">
      <InfiniteSlider gap={0} duration={35}>
        {industries.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-[10px] font-medium tracking-[0.2em] text-gray-300 px-6 whitespace-nowrap">
              {item}
            </span>
            <span className="text-gray-200 text-[6px]">&#9679;</span>
          </span>
        ))}
      </InfiniteSlider>
    </section>
  );
}
