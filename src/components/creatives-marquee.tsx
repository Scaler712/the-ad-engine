const CREATIVES_BASE =
  "https://nhnnzplvkxqxbvkcjvai.supabase.co/storage/v1/object/public/studio-refs/creatives";

// English creatives first, then Latvian/other
const englishIds = [
  1, 2, 4, 5, 6, 7, 8, 10, 11, 17, 18, 19, 20, 24, 25, 26, 29, 31, 38, 39,
  40, 41, 44, 46, 51, 52, 53, 57, 58, 59, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
  96,
];

const otherIds = [
  3, 9, 12, 13, 14, 15, 16, 21, 22, 23, 27, 28, 30, 32, 33, 34, 35, 36, 37,
  42, 43, 45, 47, 48, 49, 50, 54, 55, 56, 60, 61, 80, 81, 82, 83, 84, 85,
];

const allIds = [...englishIds, ...otherIds];

// Split into two rows
const row1 = allIds.filter((_, i) => i % 2 === 0);
const row2 = allIds.filter((_, i) => i % 2 === 1);

function MarqueeRow({
  ids,
  direction,
  duration,
}: {
  ids: number[];
  direction: "left" | "right";
  duration: number;
}) {
  const items = ids.map((id) => (
    <img
      key={id}
      src={`${CREATIVES_BASE}/c${id}.jpg`}
      alt=""
      loading="lazy"
      decoding="async"
      className="h-[200px] md:h-[260px] w-auto rounded-xl object-cover flex-shrink-0"
    />
  ));

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 z-10 bg-gradient-to-r from-[#f7f8fb] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 z-10 bg-gradient-to-l from-[#f7f8fb] to-transparent" />

      <div
        className="flex gap-3 md:gap-4"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {items}
        {/* Duplicate for seamless loop */}
        {items}
      </div>
    </div>
  );
}

export function CreativesMarquee() {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-5xl tracking-tight text-center text-[#1a1a1a] mb-4">
          Static creatives included. Every package.
        </h2>
        <p className="text-gray-500 text-center text-base md:text-lg max-w-lg mx-auto">
          30+ scroll-stopping ad creatives delivered alongside your videos.
          Ready to run on Meta, Google, and LinkedIn.
        </p>
      </div>

      <div className="space-y-3 md:space-y-4">
        <MarqueeRow ids={row1} direction="right" duration={120} />
        <MarqueeRow ids={row2} direction="left" duration={130} />
      </div>
    </section>
  );
}
