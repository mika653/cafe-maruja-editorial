"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-cream pt-20 pb-12 px-6 sm:px-10 overflow-hidden">
      {/* Top meta bar */}
      <div className="max-w-[1600px] mx-auto flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-muted mb-6 sm:mb-10">
        <span>Volume I &middot; A Cafe Field Guide</span>
        <span className="hidden sm:inline">Boracay, Philippines</span>
        <span>Issue No. 01</span>
      </div>

      {/* Hairline */}
      <div className="max-w-[1600px] mx-auto hairline mb-12 sm:mb-16" />

      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text column */}
        <div className="lg:col-span-7 lg:pr-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6"
          >
            Chapter One &middot; The Cafe
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-xl text-[3rem] sm:text-7xl lg:text-[7.5rem] text-ink"
          >
            A quiet hour
            <br />
            <span className="italic text-gold">on White Beach.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 sm:mt-12 max-w-md"
          >
            <p className="text-ink-soft text-base sm:text-lg leading-relaxed font-light">
              Cafe Maruja is a beachfront cafe at Station 3 of Boracay Island.
              We open at sunrise with slow brunch &mdash; and close after the
              fairy lights come on, when the cocktails arrive in coconut shells
              and the ocean turns indigo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-12 flex items-center gap-6"
          >
            <a
              href="#index"
              className="group flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase font-semibold text-ink"
            >
              <span className="border-b border-ink pb-1 group-hover:border-gold group-hover:text-gold transition-colors">
                Begin Reading
              </span>
              <span className="text-base">&rarr;</span>
            </a>
            <a
              href="/menu"
              className="text-[11px] tracking-[0.22em] uppercase font-medium text-muted hover:text-ink transition-colors"
            >
              The Menu
            </a>
          </motion.div>
        </div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/ambiance-1.jpg"
              alt="Cafe Maruja interior"
              fill
              priority
              className="object-cover slow-zoom"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          {/* Caption */}
          <div className="mt-4 flex items-baseline gap-3">
            <span className="page-num">i.</span>
            <p className="text-[11px] tracking-wide text-muted italic font-light">
              The lounge at golden hour. Photographed in residence.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom credits row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-[1600px] mx-auto mt-12 sm:mt-20 pt-8 border-t border-rule grid grid-cols-2 sm:grid-cols-4 gap-6 text-[10px] tracking-[0.18em] uppercase text-muted"
      >
        <div>
          <div className="text-gold font-semibold mb-1">Location</div>
          <div className="text-ink-soft normal-case tracking-normal text-xs">
            Casa Pilar Beach Resort
            <br />
            Station 3, Boracay
          </div>
        </div>
        <div>
          <div className="text-gold font-semibold mb-1">Hours</div>
          <div className="text-ink-soft normal-case tracking-normal text-xs">
            Sunrise to midnight
            <br />
            Seven days a week
          </div>
        </div>
        <div>
          <div className="text-gold font-semibold mb-1">Cuisine</div>
          <div className="text-ink-soft normal-case tracking-normal text-xs">
            All-day brunch
            <br />
            Cocktails &amp; coffee
          </div>
        </div>
        <div>
          <div className="text-gold font-semibold mb-1">Setting</div>
          <div className="text-ink-soft normal-case tracking-normal text-xs">
            Beachfront lounge
            <br />
            Live music &amp; hookah
          </div>
        </div>
      </motion.div>
    </section>
  );
}
