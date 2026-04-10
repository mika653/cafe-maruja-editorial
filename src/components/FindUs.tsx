"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Monday — Thursday", time: "8:00 AM — 10:00 PM" },
  { day: "Friday — Saturday", time: "8:00 AM — 12:00 AM" },
  { day: "Sunday", time: "8:00 AM — 10:00 PM" },
];

export default function FindUs() {
  return (
    <section
      id="find-us"
      className="bg-cream-warm py-24 sm:py-36 px-6 sm:px-10"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16 sm:mb-24">
          <div className="md:col-span-3">
            <p className="eyebrow mb-3">§ Chapter Five</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted">
              How to Find
              <br />
              the Cafe
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-9"
          >
            <h2 className="display-lg text-4xl sm:text-6xl lg:text-7xl text-ink">
              Visit, then
              <br />
              <span className="italic text-gold">stay awhile.</span>
            </h2>
          </motion.div>
        </div>

        <div className="hairline mb-16 sm:mb-20" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-12"
          >
            {/* Address */}
            <div>
              <p className="eyebrow mb-3">i. Address</p>
              <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-ink leading-snug font-light italic mb-4">
                Casa Pilar Beach Resort,
                <br />
                Station 3, Boracay Island
              </p>
              <a
                href="https://maps.google.com/?q=Cafe+Maruja+Casa+Pilar+Beach+Resort+Boracay"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase font-semibold text-ink"
              >
                <span className="border-b border-ink pb-1 group-hover:border-gold group-hover:text-gold transition-colors">
                  Open in Maps
                </span>
                <span>&rarr;</span>
              </a>
            </div>

            <div className="hairline-rule" />

            {/* Hours */}
            <div>
              <p className="eyebrow mb-4">ii. Opening Hours</p>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-baseline gap-4 pb-3 border-b border-rule"
                  >
                    <span className="text-ink-soft text-sm font-light">
                      {h.day}
                    </span>
                    <span className="font-[family-name:var(--font-heading)] italic text-base text-ink">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hairline-rule" />

            {/* Reservations */}
            <div>
              <p className="eyebrow mb-3">iii. Reservations</p>
              <p className="text-ink-soft text-sm leading-relaxed font-light mb-5">
                Walk-ins always welcome. For larger groups or sundown
                reservations, message us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/639260844793"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.2em] uppercase font-semibold text-cream bg-ink px-5 py-3 hover:bg-gold hover:text-ink transition-all text-center"
                >
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/boracay.cafemaruja/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.2em] uppercase font-semibold text-ink border border-ink px-5 py-3 hover:bg-ink hover:text-cream transition-all text-center"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[600px] overflow-hidden border border-rule">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.123!2d121.9234!3d11.9654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCafe%20Maruja%20Boracay!5e0!3m2!1sen!2sph!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cafe Maruja location"
                className="absolute inset-0"
              />
            </div>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="page-num">vii.</span>
              <p className="text-[11px] tracking-wide text-muted italic font-light">
                Station 3, the quiet end of White Beach.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
