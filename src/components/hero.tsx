"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STORAGE_BASE =
  "https://nhnnzplvkxqxbvkcjvai.supabase.co/storage/v1/object/public/Media/showcase";

const heroVideos = ["showcase-01", "showcase-03", "showcase-07"];

export function Hero() {
  return (
    <section className="pt-24 pb-4 md:pt-32 md:pb-8">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top section: copy + video preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted mb-4">
              AI-Powered Ad Creative
            </p>
            <h1 className="font-cal text-[clamp(2.2rem,5vw,3.5rem)] text-navy leading-[1.08] mb-5">
              15 Scroll-Stopping
              <br />
              Video Ads. $1,500.
              <br />
              Done In 7 Days.
            </h1>
            <p className="text-[15px] text-muted leading-relaxed mb-8 max-w-md">
              You fill out one questionnaire. We script, produce, and edit
              AI video ads with written copy for every variation.
              No camera. No actors. No $5k agency retainer.
              Just ads that get clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#packages"
                className="bg-navy text-white px-7 py-3 rounded-lg text-[13px] font-medium hover:bg-navy-light transition-all text-center"
              >
                See Packages & Pricing
              </a>
              <a
                href="#work"
                className="border border-border px-7 py-3 rounded-lg text-[13px] font-medium text-navy hover:bg-surface transition-all text-center"
              >
                Watch 20 Examples
              </a>
            </div>
          </motion.div>

          {/* Right — 3 video cards stacked */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-2.5"
          >
            {heroVideos.map((id, i) => (
              <HeroVideo
                key={id}
                src={`${STORAGE_BASE}/${id}.mp4`}
                delay={i * 0.15}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVideo({ src, delay }: { src: string; delay: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), delay * 1000 + 500);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (loaded && ref.current) {
      ref.current.play().catch(() => {});
    }
  }, [loaded]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 0.3 }}
      className="aspect-[9/16] rounded-xl overflow-hidden bg-surface border border-border shadow-sm"
    >
      {loaded && (
        <video
          ref={ref}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      )}
    </motion.div>
  );
}
