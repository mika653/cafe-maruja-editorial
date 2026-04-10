"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/ambiance-1.jpg", caption: "The lounge, evening", num: "iii", aspect: "aspect-[4/5]" },
  { src: "/images/food-1.jpg", caption: "Avocado rose toast", num: "iv", aspect: "aspect-[3/4]" },
  { src: "/images/drinks-1.jpg", caption: "The Maruja Sunset", num: "v", aspect: "aspect-square" },
  { src: "/images/food-2.jpg", caption: "Brunch plate", num: "vi", aspect: "aspect-[4/5]" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 sm:py-36 px-6 sm:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-6 mb-16 sm:mb-20">
          <div className="md:col-span-3">
            <p className="eyebrow mb-3">§ Chapter Four</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted">
              Plates &amp; Places
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-lg text-4xl sm:text-6xl lg:text-7xl text-ink">
              An album,
              <br />
              <span className="italic text-gold">in residence.</span>
            </h2>
          </div>
        </div>

        <div className="hairline mb-12 sm:mb-16" />

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 sm:gap-6">
          {images.map((img, i) => {
            // Spans for asymmetric layout
            const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];
            return (
              <motion.figure
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`col-span-2 ${spans[i]}`}
              >
                <div className={`relative ${img.aspect} overflow-hidden`}>
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-cover hover:scale-[1.03] transition-transform duration-[1500ms] ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline gap-3">
                  <span className="page-num">{img.num}.</span>
                  <span className="text-[11px] tracking-wide text-muted italic font-light">
                    {img.caption}
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 pt-10 border-t border-rule text-center"
        >
          <p className="font-[family-name:var(--font-heading)] italic text-lg text-muted">
            More on Instagram &mdash;{" "}
            <a
              href="https://www.instagram.com/boracay.cafemaruja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-gold transition-colors border-b border-ink hover:border-gold"
            >
              @cafemaruja
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
