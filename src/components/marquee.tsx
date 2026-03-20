"use client";

const industries = [
  "Dental Practices", "SaaS Companies", "Roofing & HVAC", "Real Estate Teams",
  "Law Firms", "Agencies", "Med Spas", "Coaches", "Home Services", "Financial Services",
];

export function Marquee() {
  return (
    <section className="py-8 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {industries.map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="text-[11px] font-medium tracking-[0.15em] text-gray-300 uppercase whitespace-nowrap">
                {item}
              </span>
              {i < industries.length - 1 && (
                <span className="text-gray-200 text-[6px]">&#9679;</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
