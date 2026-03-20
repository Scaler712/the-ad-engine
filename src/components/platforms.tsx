"use client";

import { motion } from "framer-motion";

function MetaLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor">
      <path d="M412.7 163.3c-38.5-45.8-84.6-71.3-130-71.3-64.1 0-98.8 40.3-131.6 88.5l-9.8 14.4c-28.2 41.5-52.2 70.6-90 70.6-25.5 0-43.7-20.5-43.7-51.8 0-63.6 48.5-134.7 143.6-134.7 38.3 0 71.7 11.5 99.5 31.5l22.3-36.8C237.2 48.6 195.4 32 147.2 32 53.7 32 0 116.2 0 213.7c0 56.4 33 98.3 87.7 98.3 53.4 0 85.3-38.2 118-86.2l9.8-14.4c25.4-37.4 49.4-67.4 86.2-67.4 33.3 0 63.2 21.7 63.2 63.2 0 70.4-62.6 151.8-168.2 151.8-37.5 0-69.8-11.8-96-32.8l-22.3 36.8c31.8 25.2 72.6 40 118.3 40C318.7 403 460 297 460 213.7c0-1.7 0-3.4-.1-5.1 33.4-26.3 52.1-56.8 52.1-89.3 0-34.4-20.4-62-52.1-62-18.5 0-35.2 11.2-47.2 32z" />
    </svg>
  );
}
function TikTokLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor">
      <path d="M448 209.9a210.1 210.1 0 01-122.8-39.3v178.8A162.6 162.6 0 11185 188.3v89.9a74.6 74.6 0 1052.2 71.2V0h88a121 121 0 00122.8 122.7z" />
    </svg>
  );
}
function YouTubeLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 576 512" fill="currentColor">
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6C14.9 167 14.9 256 14.9 256s0 89 11.4 131.9c6.3 23.7 24.8 42.3 48.3 48.6C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.9 48.3-48.6 11.4-42.9 11.4-131.9 11.4-131.9s0-89-11.4-131.9zM232.2 337.6V174.4L374.9 256z" />
    </svg>
  );
}
function InstagramLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}
function LinkedInLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor">
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  );
}

const platforms = [
  { name: "Meta", logo: MetaLogo },
  { name: "TikTok", logo: TikTokLogo },
  { name: "YouTube", logo: YouTubeLogo },
  { name: "Instagram", logo: InstagramLogo },
  { name: "LinkedIn", logo: LinkedInLogo },
];

export function Platforms() {
  return (
    <section className="py-4">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-center text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-5">
          Ads built for these platforms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="text-gray-300 hover:text-gray-500 transition-colors duration-300"
              title={p.name}
            >
              <p.logo className="h-5 md:h-5 w-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
