"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STORAGE_BASE =
  "https://nhnnzplvkxqxbvkcjvai.supabase.co/storage/v1/object/public/Media/showcase";

const allVideos = Array.from({ length: 20 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return { id: `showcase-${num}`, src: `${STORAGE_BASE}/showcase-${num}.mp4` };
});

function VideoCard({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setIsVisible(e.isIntersecting), { threshold: 0.2, rootMargin: "100px" });
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
      className="video-card bg-[#f5f5f7] rounded-2xl overflow-hidden group cursor-pointer"
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
      </div>
    </motion.div>
  );
}

export function Work() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? allVideos : allVideos.slice(0, 6);

  return (
    <section id="work" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl tracking-tight text-center mb-5 text-[#1a1a1a]"
        >
          Real ads. Real results.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center text-lg mb-12 max-w-sm mx-auto"
        >
          Every video was produced by our team — scripted, edited, delivered ad-ready.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {visible.map((video, i) => (
            <VideoCard key={video.id} src={video.src} index={i} />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#f5f5f7] text-sm font-medium text-[#1a1a1a] px-6 py-2.5 rounded-xl hover:bg-gray-200 transition-all"
            >
              View All 20 Videos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
