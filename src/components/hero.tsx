"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useEffect, useRef, useState } from "react";

const PORTFOLIO_BASE =
  "https://nhnnzplvkxqxbvkcjvai.supabase.co/storage/v1/object/public/studio-refs/portfolio";

const heroVideos = [
  { id: "newlithmanuf", src: `${PORTFOLIO_BASE}/newlithmanuf.mp4` },
  { id: "radiotatr", src: `${PORTFOLIO_BASE}/radiotatr.mp4` },
  { id: "heatingemotion", src: `${PORTFOLIO_BASE}/heatingemotion.mp4` },
  { id: "budgetman1", src: `${PORTFOLIO_BASE}/budgetman1.mp4` },
];

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
            <h1 className="font-heading text-[2.5rem] md:text-7xl lg:text-8xl tracking-tight text-[#1a1a1a] leading-[1.05] mb-4 md:mb-6">
              Video ads that get
              <br />
              you clients.
            </h1>
            <p className="text-sm md:text-lg text-gray-500 max-w-md mx-auto mb-4 md:mb-6 leading-relaxed px-4 md:px-0">
              We produce AI video ads for businesses that run paid advertising.
              15 ads, written copy, and a launch guide — delivered in 7 days.
              You never touch a camera.
            </p>
          </>
        }
      >
        <div className="h-full w-full grid grid-cols-4 gap-1.5 p-1.5 md:gap-3 md:p-3 bg-gray-100 overflow-hidden">
          {heroVideos.map((video, i) => (
            <div
              key={video.id}
              className="rounded-lg md:rounded-xl overflow-hidden bg-gray-200"
            >
              <LazyVideo
                src={video.src}
                delay={600 + i * 300}
              />
            </div>
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
}
