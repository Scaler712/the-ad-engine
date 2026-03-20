"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STORAGE_BASE =
  "https://nhnnzplvkxqxbvkcjvai.supabase.co/storage/v1/object/public/Media/showcase";

const heroVideos = ["showcase-01", "showcase-03", "showcase-07"];

const allVideos = Array.from({ length: 20 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    id: `showcase-${num}`,
    src: `${STORAGE_BASE}/showcase-${num}.mp4`,
    isHero: heroVideos.includes(`showcase-${num}`),
  };
});

function VideoCard({
  src,
  isHero,
  index,
}: {
  src: string;
  isHero: boolean;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isVisible) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isVisible]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`video-card rounded-2xl overflow-hidden bg-surface border border-border group cursor-pointer ${
        isHero ? "md:col-span-1 md:row-span-1" : ""
      }`}
    >
      <div className="aspect-[9/16] relative">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-300" />
      </div>
    </motion.div>
  );
}

export function Work() {
  const [showAll, setShowAll] = useState(false);
  const visibleVideos = showAll ? allVideos : allVideos.slice(0, 8);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-4 text-center"
        >
          See The Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-navy"
        >
          Real ads. Real results.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted text-center text-base mb-14 max-w-md mx-auto"
        >
          Every video below was produced by our team using AI — scripted,
          edited, and delivered ad-ready.
        </motion.p>

        {/* Video grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {visibleVideos.map((video, i) => (
            <VideoCard
              key={video.id}
              src={video.src}
              isHero={video.isHero}
              index={i}
            />
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="border border-border px-8 py-3 rounded-full text-sm font-semibold text-navy hover:bg-surface transition-colors"
            >
              View All 20 Videos
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
