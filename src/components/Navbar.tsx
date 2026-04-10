"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Index", href: "/#index" },
  { label: "The Menu", href: "/menu" },
  { label: "Notes", href: "/#about" },
  { label: "Visit", href: "/#find-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-xl border-b border-rule py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3 group">
          <span className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl text-ink font-medium italic tracking-tight">
            Maruja
          </span>
          <span className="hidden sm:inline text-[10px] tracking-[0.25em] uppercase text-muted group-hover:text-gold transition-colors">
            Est. Boracay
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-soft text-[13px] tracking-wider uppercase font-medium hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/639260844793"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.2em] uppercase font-semibold text-cream bg-ink px-5 py-2.5 hover:bg-gold hover:text-ink transition-all"
          >
            Reserve
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1px] bg-ink origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-[1px] bg-ink"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1px] bg-ink origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-0 bg-cream z-40 flex flex-col items-center justify-center gap-8 px-8"
          >
            <span className="eyebrow absolute top-7 left-7">Index</span>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-ink hover:text-gold transition-colors italic"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="https://wa.me/639260844793"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[11px] tracking-[0.25em] uppercase font-semibold text-cream bg-ink px-7 py-3 mt-4"
            >
              Reserve a Table
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
