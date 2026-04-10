"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { VideoModal } from "@/components/video-modal";

const STORAGE_BASE =
  "https://nhnnzplvkxqxbvkcjvai.supabase.co/storage/v1/object/public/Media/showcase";

const PORTFOLIO_BASE =
  "https://nhnnzplvkxqxbvkcjvai.supabase.co/storage/v1/object/public/studio-refs/portfolio";

const portfolioVideos = [
  { id: "portfolio-newlithmanuf", src: `${PORTFOLIO_BASE}/newlithmanuf.mp4` },
  { id: "portfolio-radiotatr", src: `${PORTFOLIO_BASE}/radiotatr-v3.mp4` },
  { id: "portfolio-heatingemotion", src: `${PORTFOLIO_BASE}/heatingemotion.mp4` },
  { id: "portfolio-budgetman1", src: `${PORTFOLIO_BASE}/budgetman1.mp4` },
];

const showcaseVideos = Array.from({ length: 20 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return { id: `showcase-${num}`, src: `${STORAGE_BASE}/showcase-${num}.mp4` };
});

const allVideos = [...portfolioVideos, ...showcaseVideos];

function VideoCard({
  src,
  index,
  onPlay,
}: {
  src: string;
  index: number;
  onPlay: (src: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setIsVisible(e.isIntersecting),
      { threshold: 0.2, rootMargin: "100px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!videoRef.current) return;
    if (isVisible) videoRef.current.play().catch(() => {});
    else videoRef.current.pause();
  }, [isVisible]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.06 }}
      className="video-card card overflow-hidden group cursor-pointer"
      onClick={() => onPlay(src)}
    >
      <div className="aspect-[9/16] relative">
        <video
          ref={videoRef}
          src={isVisible ? src : undefined}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              className="ml-1"
            >
              <path
                d="M17 10L1 19.5V0.5L17 10Z"
                fill="#1a1a1a"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  const [showAll, setShowAll] = useState(false);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const visible = showAll ? allVideos : allVideos.slice(0, 6);

  return (
    <section id="work" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl tracking-tight text-center mb-5 text-[#1a1a1a]"
        >
          See if it's good enough.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center text-base md:text-lg mb-8 md:mb-12 max-w-md mx-auto"
        >
          Every video below was scripted, produced, and edited by our team.
          Judge the quality yourself. Click any video to play with sound.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5">
          {visible.map((video, i) => (
            <VideoCard
              key={video.id}
              src={video.src}
              index={i}
              onPlay={setModalSrc}
            />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#eef0f5] text-sm font-medium text-[#1a1a1a] px-6 py-2.5 rounded-xl hover:bg-[#e4e6ed] transition-all"
            >
              View More
            </button>
          </div>
        )}
      </div>

      <VideoModal src={modalSrc} onClose={() => setModalSrc(null)} />
    </section>
  );
}
