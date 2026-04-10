"use client";

import { motion } from "framer-motion";

const items = [
  "Station 3 Beachfront",
  "All-Day Brunch",
  "Cocktails in Coconuts",
  "Live Music",
  "Sunrise to Midnight",
  "Bohemian Lounge",
  "Slow Coffee",
];

export default function SocialProof() {
  const loop = [...items, ...items];

  return (
    <section className="relative bg-ink py-5 sm:py-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]"
      >
        <motion.div
          className="flex gap-12 sm:gap-16 pr-12 sm:pr-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="flex items-center gap-12 sm:gap-16 text-cream/80"
            >
              <span className="font-[family-name:var(--font-heading)] italic text-base sm:text-lg font-light tracking-wide">
                {item}
              </span>
              <span className="text-gold text-sm" aria-hidden>
                /
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
