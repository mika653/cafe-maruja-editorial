"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  {
    num: "01",
    name: "Avocado Rose Toast",
    description:
      "Sourdough, smashed avocado fanned into a rose, poached egg, cherry tomatoes, radish, seeds.",
    price: "₱380",
    image: "/images/food-1.jpg",
    tag: "House Favorite",
  },
  {
    num: "02",
    name: "The Maruja Sunset",
    description:
      "Rum, mango purée, passion fruit, lime — served in a hollowed gold pineapple with a paper straw.",
    price: "₱280",
    image: "/images/drinks-1.jpg",
    tag: "Signature Cocktail",
  },
  {
    num: "03",
    name: "Artisan Brunch Plate",
    description:
      "Poached egg, smoked salmon, cucumber ribbons, microgreens, sourdough, cultured butter.",
    price: "₱420",
    image: "/images/food-2.jpg",
    tag: "Chef's Selection",
  },
];

export default function Highlights() {
  return (
    <section id="index" className="bg-cream py-20 sm:py-32 px-6 sm:px-10">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-6 mb-16 sm:mb-24"
        >
          <div className="md:col-span-3">
            <p className="eyebrow mb-3">§ Chapter Two</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted">
              Three Things
              <br />
              Worth Ordering
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-lg text-4xl sm:text-6xl lg:text-7xl text-ink">
              The kitchen is{" "}
              <span className="italic text-gold">small,</span>
              <br />
              the menu is{" "}
              <span className="italic text-gold">considered.</span>
            </h2>
            <p className="mt-6 max-w-xl text-ink-soft text-base sm:text-lg leading-relaxed font-light">
              Everything is made by hand and plated to be remembered. Here are
              three things travelers tell us about long after their flight
              home.
            </p>
          </div>
        </motion.div>

        {/* Hairline */}
        <div className="hairline mb-16 sm:mb-20" />

        {/* Editorial cards */}
        <div className="space-y-20 sm:space-y-32">
          {highlights.map((item, i) => (
            <motion.article
              key={item.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="md:col-span-7">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover hover:scale-[1.03] transition-transform duration-[2000ms] ease-out"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="page-num">{item.num.toLowerCase()}.</span>
                  <p className="text-[11px] tracking-wide text-muted italic font-light">
                    {item.tag}
                  </p>
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-5">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-[family-name:var(--font-heading)] text-7xl text-gold/30 font-light italic leading-none">
                    {item.num}
                  </span>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-gold">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-ink leading-tight tracking-tight">
                  {item.name}
                </h3>
                <div className="mt-6 hairline-rule" />
                <p className="mt-6 text-ink-soft text-base leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-heading)] italic text-3xl text-ink">
                    {item.price}
                  </span>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-muted">
                    Available All Day
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Read more CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 sm:mt-28 pt-16 border-t border-rule text-center"
        >
          <a
            href="/menu"
            className="group inline-flex items-baseline gap-4 text-[11px] tracking-[0.22em] uppercase font-semibold text-ink"
          >
            <span className="font-[family-name:var(--font-heading)] text-2xl italic text-gold normal-case tracking-normal">
              continue
            </span>
            <span className="border-b border-ink pb-1 group-hover:border-gold group-hover:text-gold transition-colors">
              Read the Full Menu
            </span>
            <span>&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
