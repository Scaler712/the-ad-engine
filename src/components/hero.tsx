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
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">
              AI-Powered Ad Creative Studio
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-800 leading-[1.08] mb-6">
              15 Video Ads. $1,500.
              <br />
              Done In 7 Days.
            </h1>
            <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
              You fill out one questionnaire. We script, produce, and edit
              scroll-stopping AI video ads with written copy for every variation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#packages"
                className="bg-blue-500 text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-blue-600 transition-all shadow-sm"
              >
                See Packages & Pricing
              </a>
              <a
                href="#work"
                className="text-gray-500 text-sm hover:text-gray-700 transition-colors underline underline-offset-4"
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
