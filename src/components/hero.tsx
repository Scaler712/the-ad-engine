"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useEffect, useRef, useState } from "react";

const STORAGE_BASE =
  "https://nhnnzplvkxqxbvkcjvai.supabase.co/storage/v1/object/public/Media/showcase";

const heroVideos = ["showcase-01", "showcase-03", "showcase-07"];

function LazyVideo({ src, delay }: { src: string; delay: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  useEffect(() => {
    if (ready && ref.current) ref.current.play().catch(() => {});
  }, [ready]);
  return (
    <video
      ref={ref}
      src={ready ? src : undefined}
      muted
      loop
      playsInline
      preload="none"
      className="w-full h-full object-cover"
    />
  );
}

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted mb-5">
              AI-Powered Ad Creative Studio
            </p>
            <h1 className="font-cal text-4xl md:text-[5rem] text-navy leading-[1.05] mb-5">
              15 Video Ads. $1,500.
              <br />
              Done In 7 Days.
            </h1>
            <p className="text-[15px] text-muted max-w-lg mx-auto mb-8 leading-relaxed">
              You fill out one questionnaire. We script, produce, and edit
              scroll-stopping AI video ads with written copy for every variation.
              No camera. No actors. No $5k agency retainer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#packages"
                className="bg-navy text-white px-7 py-3 rounded-lg text-[13px] font-medium hover:bg-navy-light transition-all"
              >
                See Packages & Pricing
              </a>
              <a
                href="#work"
                className="border border-border px-7 py-3 rounded-lg text-[13px] font-medium text-navy hover:bg-surface transition-all"
              >
                Watch 20 Examples
              </a>
            </div>
          </>
        }
      >
        {/* 3 videos side by side inside the tablet frame */}
        <div className="h-full w-full grid grid-cols-3 gap-1.5 p-1.5 md:gap-3 md:p-3 bg-gray-100 overflow-hidden">
          {heroVideos.map((id, i) => (
            <div
              key={id}
              className="rounded-lg md:rounded-xl overflow-hidden bg-gray-200"
            >
              <LazyVideo
                src={`${STORAGE_BASE}/${id}.mp4`}
                delay={600 + i * 300}
              />
            </div>
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
}
