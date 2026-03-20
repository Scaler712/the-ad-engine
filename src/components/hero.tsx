"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const STORAGE_BASE =
  "https://nhnnzplvkxqxbvkcjvai.supabase.co/storage/v1/object/public/Media/showcase";

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="text-xs uppercase tracking-[0.25em] text-muted font-medium mb-5">
              AI-Powered Ad Creative Studio
            </p>
            <h1 className="font-cal text-4xl md:text-[5.5rem] text-navy leading-none mb-6">
              Video Ads That
              <br />
              Actually Get Clients
            </h1>
            <p className="text-base md:text-lg text-muted max-w-lg mx-auto mb-8 leading-relaxed font-normal">
              We produce scroll-stopping video ads using AI — delivered in days,
              not weeks. No camera needed. Just ads that work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#packages"
                className="bg-navy text-white px-7 py-3 rounded-lg text-sm font-medium hover:bg-navy-light transition-all"
              >
                See Packages
              </a>
              <a
                href="#work"
                className="text-navy border border-border px-7 py-3 rounded-lg text-sm font-medium hover:bg-surface transition-all"
              >
                Watch Examples
              </a>
            </div>
          </>
        }
      >
        {/* Video grid inside the scroll card */}
        <div className="h-full w-full grid grid-cols-3 gap-2 p-2 overflow-hidden">
          {["showcase-01", "showcase-03", "showcase-07"].map((id) => (
            <video
              key={id}
              src={`${STORAGE_BASE}/${id}.mp4`}
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover rounded-lg"
            />
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
}
