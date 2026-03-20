"use client";

import { motion } from "framer-motion";

/* ── Visual artifact: Fake invoice ── */
function InvoiceArtifact() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)] text-left w-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
          Invoice #2847
        </span>
        <span className="text-[10px] text-red-400 font-medium">Overdue</span>
      </div>
      <div className="space-y-2.5">
        {[
          { item: "Video Production (1 day shoot)", cost: "$4,500" },
          { item: "UGC Creator x 3 videos", cost: "$750" },
          { item: "Professional editing", cost: "$1,200" },
          { item: "Script copywriting", cost: "$600" },
        ].map((row) => (
          <div
            key={row.item}
            className="flex items-center justify-between py-1.5 border-b border-dashed border-gray-100"
          >
            <span className="text-[11px] text-gray-500">{row.item}</span>
            <span className="text-[11px] font-medium text-[#1a1a1a]">
              {row.cost}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
        <span className="text-xs font-semibold text-[#1a1a1a]">Total</span>
        <span className="text-sm font-semibold text-[#1a1a1a]">$7,050</span>
      </div>
    </div>
  );
}

/* ── Visual artifact: Fake timeline ── */
function TimelineArtifact() {
  const weeks = [
    { label: "Brief", status: "done" },
    { label: "Casting", status: "done" },
    { label: "Shoot", status: "delayed" },
    { label: "Edit v1", status: "waiting" },
    { label: "Revisions", status: "waiting" },
    { label: "Delivery", status: "waiting" },
  ];
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)] w-full">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
          Project Timeline
        </span>
        <span className="text-[10px] text-amber-500 font-medium bg-amber-50 px-1.5 py-0.5 rounded">
          3 weeks behind
        </span>
      </div>
      <div className="space-y-2">
        {weeks.map((w) => (
          <div key={w.label} className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full shrink-0 ${
                w.status === "done"
                  ? "bg-green-400"
                  : w.status === "delayed"
                  ? "bg-amber-400"
                  : "bg-gray-200"
              }`}
            />
            <div
              className={`h-2 rounded-full flex-1 ${
                w.status === "done"
                  ? "bg-green-100"
                  : w.status === "delayed"
                  ? "bg-amber-100"
                  : "bg-gray-100"
              }`}
              style={{
                width:
                  w.status === "done"
                    ? "100%"
                    : w.status === "delayed"
                    ? "60%"
                    : "0%",
              }}
            />
            <span className="text-[10px] text-gray-400 w-16 text-right shrink-0">
              {w.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Visual artifact: No camera ── */
function NoCameraArtifact() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)] w-full flex flex-col items-center justify-center">
      <div className="relative mb-3">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          className="text-gray-300"
        >
          <rect
            x="4"
            y="16"
            width="40"
            height="32"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M44 28l16-8v24l-16-8V28z" stroke="currentColor" strokeWidth="2" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            <line
              x1="12"
              y1="12"
              x2="60"
              y2="60"
              stroke="#ef4444"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl px-4 py-2 mt-1">
        <span className="text-[11px] text-gray-400 font-medium">
          Camera not required
        </span>
      </div>
    </div>
  );
}

/* ── Visual artifact: Recycled creatives ── */
function RecycledArtifact() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)] w-full">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
          Your agency&apos;s creative library
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center"
          >
            <span className="text-[9px] text-gray-300 font-medium">
              Same ad
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 text-center">
        <span className="text-[10px] text-gray-300">
          Month 1 ... Month 4 ... still running these
        </span>
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl tracking-tight text-left leading-[1.1] text-[#1a1a1a] mb-4"
        >
          You&apos;re not running video ads.
          <br />
          It&apos;s costing you clients.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-left text-base md:text-lg mb-8 md:mb-12 max-w-lg"
        >
          Every business owner knows video outperforms static. Here&apos;s why most still aren&apos;t doing it.
        </motion.p>

        {/* Bento grid: 2 rows, unequal cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Row 1: Left ~7col, Right ~5col */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-5 md:p-10 md:col-span-7"
          >
            <div className="mb-6 overflow-hidden max-h-[280px]">
              <InvoiceArtifact />
            </div>
            <h3 className="font-semibold text-xl text-[#1a1a1a] mb-2">
              Production is expensive
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              A video shoot runs $3,000-$5,000. UGC creators charge $250-500 per clip.
              Testing 10 variations means $2,500-$5,000 before you find a winner.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="card p-5 md:p-10 md:col-span-5"
          >
            <div className="mb-6 overflow-hidden max-h-[280px]">
              <TimelineArtifact />
            </div>
            <h3 className="font-semibold text-xl text-[#1a1a1a] mb-2">
              Takes weeks, not days
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Coordinate talent, schedule shoots, wait for edits, request revisions.
              By the time creative ships, your competitors have tested 30 ads.
            </p>
          </motion.div>

          {/* Row 2: Left ~5col, Right ~7col */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="card p-5 md:p-10 md:col-span-5"
          >
            <div className="mb-6 overflow-hidden max-h-[280px]">
              <NoCameraArtifact />
            </div>
            <h3 className="font-semibold text-xl text-[#1a1a1a] mb-2">
              You don&apos;t want to be on camera
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              And honestly, you shouldn&apos;t have to be. The ad creative
              should sell, not your face.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="card p-5 md:p-10 md:col-span-7"
          >
            <div className="mb-6 overflow-hidden max-h-[280px]">
              <RecycledArtifact />
            </div>
            <h3 className="font-semibold text-xl text-[#1a1a1a] mb-2">
              Your agency ran out of ideas in month one
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              You&apos;re paying $3-5k/month. They gave you 6 static images and
              2 videos on day one. Four months later, you&apos;re still running them.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-2xl tracking-tight text-[#1a1a1a] text-center mt-16"
        >
          We built Angle Ads so you don&apos;t have to choose between great ads and a reasonable budget.
        </motion.p>
      </div>
    </section>
  );
}
