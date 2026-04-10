"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-cream-warm py-24 sm:py-36 px-6 sm:px-10">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16 sm:mb-24">
          <div className="md:col-span-3">
            <p className="eyebrow mb-3">§ Chapter Three</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted">
              An Origin Note
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
              We didn&apos;t open
              <br />
              <span className="italic text-gold">a restaurant.</span>
              <br />
              We opened a feeling.
            </h2>
          </motion.div>
        </div>

        {/* Hairline */}
        <div className="hairline mb-16 sm:mb-20" />

        {/* Two column body */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="md:col-span-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/ambiance-1.jpg"
                alt="Cafe Maruja interior, an evening view"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="page-num">ii.</span>
              <p className="text-[11px] tracking-wide text-muted italic font-light">
                The lounge after sundown.
              </p>
            </div>
          </motion.div>

          {/* Right: prose */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="md:col-span-6 md:pt-8"
          >
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-ink leading-snug font-light italic">
              &ldquo;Tucked into Station 3 of Boracay, Cafe Maruja is what
              happens when you stop trying to be every cafe and start trying to
              be one.&rdquo;
            </p>

            <div className="mt-10 hairline-rule" />

            <div className="mt-10 space-y-5 text-ink-soft text-base sm:text-[17px] leading-relaxed font-light">
              <p>
                Mornings here are unhurried. Sourdough comes out of the oven
                before the sun is fully up, the espresso machine warms while
                the first guests arrive in flip-flops, and the kitchen plates
                avocado roses with the patience of people who know nothing
                here is supposed to be in a hurry.
              </p>
              <p>
                By night the cafe softens. Fairy lights come on, drinks arrive
                in coconut shells, hookah smoke drifts toward the ceiling fans,
                and the playlist gets a little slower. We stay open until the
                last guest decides it&apos;s time to walk barefoot back to
                their hotel.
              </p>
            </div>

            {/* Tags row */}
            <div className="mt-10 pt-10 border-t border-rule grid grid-cols-2 gap-4 text-[10px] tracking-[0.2em] uppercase">
              <div>
                <div className="text-gold font-semibold mb-1">In the Day</div>
                <p className="text-ink-soft text-xs normal-case tracking-normal italic font-[family-name:var(--font-heading)]">
                  Sourdough, slow coffee, sun on your shoulders.
                </p>
              </div>
              <div>
                <div className="text-gold font-semibold mb-1">At Night</div>
                <p className="text-ink-soft text-xs normal-case tracking-normal italic font-[family-name:var(--font-heading)]">
                  Cocktails, candlelight, the ocean very close.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
