"use client";

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
  const items = [...industries, ...industries];

  return (
    <section className="py-8 border-y border-border overflow-hidden bg-card/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground px-6">
              {item}
            </span>
            <span className="text-accent text-xs">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
