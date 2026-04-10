"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const ITERATIONS = [
  {
    id: "a",
    label: "A",
    name: "Bohemian Tropical",
    url: "https://cafe-maruja.vercel.app",
  },
  {
    id: "b",
    label: "B",
    name: "Editorial Minimal",
    url: "https://cafe-maruja-editorial.vercel.app",
  },
  {
    id: "c",
    label: "C",
    name: "Coastal Luxe",
    url: "https://cafe-maruja-coastal.vercel.app",
  },
];

const CURRENT = "b";

export default function IterationSwitcher() {
  const pathname = usePathname() || "/";
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[100] sm:top-4">
      <div
        className="flex items-center gap-1 p-1 shadow-lg"
        style={{
          background: "rgba(26, 26, 26, 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(168, 139, 92, 0.4)",
        }}
      >
        <span
          className="hidden sm:block px-3 text-[9px] tracking-[0.22em] uppercase font-semibold whitespace-nowrap"
          style={{
            fontFamily: "var(--font-body), sans-serif",
            color: "rgba(250, 248, 242, 0.5)",
          }}
        >
          Design Iteration
        </span>
        {ITERATIONS.map((it) => {
          const isCurrent = it.id === CURRENT;
          const isHovered = hovered === it.id;
          return (
            <a
              key={it.id}
              href={isCurrent ? "#" : `${it.url}${pathname}`}
              onMouseEnter={() => setHovered(it.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={(e) => {
                if (isCurrent) e.preventDefault();
              }}
              className={`relative px-3 sm:px-4 py-1.5 text-[10px] tracking-wider uppercase font-semibold transition-all ${
                isCurrent
                  ? "bg-gold text-ink cursor-default"
                  : "text-cream/60 hover:text-cream hover:bg-white/5"
              }`}
              style={{ fontFamily: "var(--font-body), sans-serif" }}
              title={it.name}
            >
              {it.label}
              {isHovered && !isCurrent && (
                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-wider uppercase font-medium bg-ink text-cream px-2.5 py-1 pointer-events-none border border-gold/30">
                  {it.name}
                </span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
