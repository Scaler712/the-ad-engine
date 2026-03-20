"use client";

import React from "react";
import { motion } from "framer-motion";

const STORAGE_BASE =
  "https://nhnnzplvkxqxbvkcjvai.supabase.co/storage/v1/object/public/Media/showcase";

/* ── Visual: Fake brief form ── */
function BriefFormVisual() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-[0_1px_4px_rgba(0,0,0,0.06)] w-full">
      <div className="space-y-2">
        <div className="h-7 bg-gray-50 rounded border border-gray-100 px-2.5 flex items-center">
          <span className="text-[10px] text-gray-400">Acme Dental Group</span>
        </div>
        <div className="h-7 bg-gray-50 rounded border border-gray-100 px-2.5 flex items-center">
          <span className="text-[10px] text-gray-400">Adults 30-55</span>
        </div>
        <div className="h-7 bg-gray-50 rounded border border-gray-100 px-2.5 flex items-center">
          <span className="text-[10px] text-gray-400">Same-day implants...</span>
        </div>
        <div className="bg-[#4a7dff] rounded py-1.5 text-center">
          <span className="text-[10px] text-white font-medium">Submit Brief</span>
        </div>
      </div>
    </div>
  );
}

/* ── Visual: Video thumbnails stack ── */
function VideoStackVisual() {
  return (
    <div className="w-full flex flex-col gap-2">
      {["showcase-01", "showcase-05", "showcase-09"].map((id, i) => (
        <div
          key={id}
          className="bg-white rounded-xl overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.06)] flex items-center gap-3 p-2"
        >
          <div className="w-12 h-16 rounded-lg bg-gray-100 overflow-hidden shrink-0">
            <img
              src={`${STORAGE_BASE}/${id}.mp4`}
              className="w-full h-full object-cover opacity-0"
              alt=""
            />
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 -mt-16 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-gray-300"
              >
                <path
                  d="M5 3l8 5-8 5V3z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-medium text-[#1a1a1a] truncate">
              {["Hook A - Pain Point", "Hook B - Social Proof", "Hook C - Question"][i]}
            </div>
            <div className="text-[9px] text-gray-400 mt-0.5">
              {["0:28 - 9:16", "0:32 - 9:16", "0:25 - 9:16"][i]}
            </div>
          </div>
          <span className="text-[9px] text-green-500 font-medium bg-green-50 px-1.5 py-0.5 rounded shrink-0">
            {["Scripted", "In edit", "Ready"][i]}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Visual: Phone frame with real video ── */
function PhoneVisual() {
  return (
    <div className="mx-auto w-[120px]">
      <div className="bg-[#1a1a1a] rounded-[16px] p-1.5 shadow-xl">
        <div className="rounded-[12px] aspect-[9/16] overflow-hidden">
          <video
            src={`${STORAGE_BASE}/showcase-01.mp4`}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

/* ── Visual: Fake ads dashboard ── */
function DashboardVisual() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_1px_4px_rgba(0,0,0,0.06)] w-full">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
          Campaign Performance
        </span>
        <span className="text-[9px] text-green-500 font-medium">Live</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "CTR", value: "3.2%" },
          { label: "CPL", value: "$18" },
          { label: "ROAS", value: "4.7x" },
        ].map((m) => (
          <div
            key={m.label}
            className="bg-gray-50 rounded-lg p-2 text-center"
          >
            <span className="text-[10px] text-gray-400 block">{m.label}</span>
            <span className="text-sm font-semibold text-[#1a1a1a]">
              {m.value}
            </span>
          </div>
        ))}
      </div>
      {/* Mini chart bars */}
      <div className="flex items-end gap-1 h-10">
        {[40, 55, 35, 65, 80, 60, 75, 90, 70, 85].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-[#4a7dff]/20 rounded-sm"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Curved arrow SVG ── */
function CurvedArrow() {
  return (
    <div className="hidden md:flex items-center justify-center px-2">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="text-gray-300"
      >
        <path
          d="M6 28c8-16 20-16 28-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M30 20l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

const steps = [
  {
    num: "1",
    title: "Fill Out The Brief",
    desc: "Answer a short questionnaire about your business, audience, and what makes you different. Upload your logo and brand colors. That's it.",
    time: "15 min",
    visual: <BriefFormVisual />,
  },
  {
    num: "2",
    title: "We Script & Produce",
    desc: "Our team writes direct-response scripts, produces AI video creative with multiple presenters, and edits everything to scroll-stopping standards.",
    time: "5-7 days",
    visual: <VideoStackVisual />,
  },
  {
    num: "3",
    title: "Get Ad-Ready Videos",
    desc: "Fully edited videos in 9:16 and 1:1 formats. Written ad copy for every concept. A campaign setup guide with targeting and budget recommendations.",
    time: "Delivered",
    visual: <PhoneVisual />,
  },
  {
    num: "4",
    title: "Launch & Watch Results",
    desc: "Upload to your ad account, hit publish, and let the creative do its job. Monthly clients get ongoing strategy and fresh creative every week.",
    time: "Launch day",
    visual: <DashboardVisual />,
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl tracking-tight text-center mb-5 text-[#1a1a1a]"
        >
          Your ads in 4 steps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center text-lg mb-16 max-w-sm mx-auto"
        >
          From zero content to ads live in under a week
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-8 items-start">
          {steps.map((step, i) => (
            <React.Fragment key={step.num}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Card with visual */}
                <div className="card w-full aspect-[4/5] flex items-center justify-center p-4 mb-6 overflow-hidden">
                  {step.visual}
                </div>

                {/* Step info */}
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-sm font-semibold text-[#1a1a1a]">
                    {step.num}
                  </span>
                  <h3 className="font-semibold text-base text-[#1a1a1a]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
                <span className="inline-block mt-4 text-xs text-gray-400 bg-[#eef0f5] px-3 py-1 rounded-full">
                  {step.time}
                </span>
              </motion.div>
              {i < steps.length - 1 && <CurvedArrow />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
