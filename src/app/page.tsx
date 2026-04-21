"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  const heroScrollRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroScrollRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const heroTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.78],
    [1, 1, 0.2]
  );
  const overlapY = useTransform(
    scrollYProgress,
    [0, 0.06, 0.48],
    ["100%", "62%", "0%"]
  );
  const heroContainerVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.12,
      },
    },
  };
  const heroItemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
  const sectionReveal = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
  const imageReveal = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };
  const itemReveal = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const handleScrollToCollections = () => {
    const headerOffset = 84;
    const hero = heroScrollRef.current;
    if (!hero) return;

    const heroTop = hero.getBoundingClientRect().top + window.scrollY;
    const nextTop = heroTop + window.innerHeight - headerOffset;
    window.scrollTo({ top: nextTop, behavior: "smooth" });
  };

  return (
    <main className="bg-black text-white">
      <Navbar />

      <section ref={heroScrollRef} className="relative h-[168vh] overflow-hidden">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
            <Image
              src="/hero.jpg"
              alt="Diamond luxury texture background"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.82)_70%)]" />

          <motion.div
            style={{ y: heroTextY, opacity: heroTextOpacity }}
            className="relative z-20 flex h-full items-center justify-center px-6 pt-16 text-center"
          >
            <motion.div
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.p
                variants={heroItemVariants}
                className="mb-4 text-[10px] uppercase tracking-[0.38em] text-amber-200/80 md:text-xs"
              >
                Fine Jewelry · Ethical Gemstones
              </motion.p>
              <motion.h1
                variants={heroItemVariants}
                className="font-display text-6xl leading-[0.9] text-white md:text-8xl"
              >
                Shangrila
              </motion.h1>
              <motion.h2
                variants={heroItemVariants}
                className="font-display text-5xl italic leading-[0.9] text-amber-300 md:text-7xl"
              >
                Gems
              </motion.h2>
              <motion.p
                variants={heroItemVariants}
                className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-200/85 md:text-base"
              >
                Where timeless beauty meets ethical craftsmanship. Every piece
                tells a story of rare earth treasures.
              </motion.p>
              <motion.button
                variants={heroItemVariants}
                type="button"
                onClick={handleScrollToCollections}
                className="group mt-8 inline-block bg-transparent text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-200/95 transition-all duration-300 hover:tracking-[0.26em] hover:text-amber-100"
              >
                <span className="relative inline-block">
                  Explore Collection
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-amber-200/90 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.section
          id="collections"
          style={{ y: overlapY }}
          className="absolute inset-x-0 top-0 z-30 min-h-[168vh] bg-[#f8f7f4] px-6 pb-24 pt-16 text-slate-900 md:px-10 md:pt-20"
        >
          <div className="mx-auto max-w-7xl space-y-12">
            <motion.div
              id="featured-collections"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="max-w-3xl"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-amber-700">
                Featured Collections
              </p>
              <h3 className="mt-3 font-display text-4xl leading-tight text-slate-900 md:text-5xl">
                Rare stones selected for brilliance and character
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
                Discover curated diamonds and gemstones tailored for luxury
                jewelry lines, private collectors, and bespoke commissions.
              </p>
            </motion.div>

            <motion.section
              id="gemstones"
              className="grid gap-8 rounded-3xl bg-[#f8f7f4] p-4 md:grid-cols-2 md:p-6"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                variants={imageReveal}
                className="relative min-h-[340px] overflow-hidden rounded-2xl md:min-h-[420px]"
              >
                <Image
                  src="/img3.jpg"
                  alt="Luxury diamond collection closeup"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </motion.div>
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
                  Signature Selection
                </p>
                <h4 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-4xl">
                  White diamonds with exceptional clarity
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  Our hand-curated stones are selected for brilliance, ideal
                  proportions, and strict quality standards for premium jewelry
                  houses.
                </p>
              </div>
            </motion.section>

            <motion.section
              id="bespoke"
              className="grid gap-8 rounded-3xl bg-[#f8f7f4] p-4 md:grid-cols-2 md:p-6"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="order-2 flex flex-col justify-center md:order-1">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
                  Bespoke Sourcing
                </p>
                <h4 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-4xl">
                  Rare gemstones tailored to your demand
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  From vivid fancy colors to unique cuts, we source ethically
                  and deliver certified pieces that align with your design and
                  investment requirements.
                </p>
                <Link
                  href="/contact"
                  className="group mt-7 inline-block bg-transparent text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700 transition-all duration-300 hover:tracking-[0.26em] hover:text-amber-800"
                >
                  <span className="relative inline-block">
                    Contact Now
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-amber-700/90 transition-all duration-300 group-hover:bg-amber-800 group-hover:shadow-[0_0_10px_rgba(180,83,9,0.35)]" />
                  </span>
                </Link>
              </div>
              <motion.div
                variants={imageReveal}
                className="relative order-1 min-h-[460px] overflow-hidden rounded-2xl md:order-2 md:min-h-[560px]"
              >
                <Image
                  src="/img2.png"
                  alt="Premium gemstone assortment"
                  fill
                  className="object-contain object-center scale-140 transition duration-700 md:scale-160"
                />
              </motion.div>
            </motion.section>

          </div>
        </motion.section>
      </section>

      <div className="-mt-16 md:-mt-20">
        <StatsSection />
      </div>

      <section
        id="about"
        className="bg-[#f8f7f4] px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid items-center gap-10 md:grid-cols-2 md:gap-12"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
                About Company
              </p>
              <h3 className="mt-3 font-display text-4xl leading-tight text-slate-900 md:text-5xl">
                Shangrila Trade Concern brings heritage and precision to modern
                gemstone trading
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
                We combine trusted sourcing partnerships, strict quality
                verification, and personalized service to help brands and
                private clients secure exceptional stones with confidence.
              </p>
              <a
                href="/about"
                className="group mt-7 inline-block bg-transparent text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700 transition-all duration-300 hover:tracking-[0.26em] hover:text-amber-800"
              >
                <span className="relative inline-block">
                  Explore About Page
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-amber-700/90 transition-all duration-300 group-hover:bg-amber-800 group-hover:shadow-[0_0_10px_rgba(180,83,9,0.35)]" />
                </span>
              </a>
            </div>

            <motion.div
              variants={imageReveal}
              className="relative min-h-[320px] overflow-hidden rounded-2xl md:min-h-[380px]"
            >
              <Image
                src="/img5.jpg"
                alt="Shangrila Trade Concern about section image"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f8f7f4] px-6 pb-40 pt-20 md:px-10 md:pb-44 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
            Gallery
          </p>
          <h4 className="mt-2 font-display text-3xl text-slate-900 md:text-4xl">
            Craft, clarity and timeless brilliance
          </h4>

          <motion.div
            className="mt-12 grid auto-rows-[220px] gap-4 md:hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={itemReveal}
              className="relative overflow-hidden rounded-xl border-2 border-white bg-white shadow-md"
            >
              <Image src="/img4.jpg" alt="Gallery image one" fill className="object-cover" />
            </motion.div>
            <motion.div
              variants={itemReveal}
              className="relative overflow-hidden rounded-xl border-2 border-white bg-white shadow-md"
            >
              <Image src="/img7.jpg" alt="Gallery image two" fill className="object-cover" />
            </motion.div>
            <motion.div
              variants={itemReveal}
              className="relative overflow-hidden rounded-xl border-2 border-white bg-white shadow-md"
            >
              <Image src="/img8.jpg" alt="Gallery image three" fill className="object-cover" />
            </motion.div>
            <motion.div
              variants={itemReveal}
              className="relative overflow-hidden rounded-xl border-2 border-white bg-white shadow-md"
            >
              <Image src="/img6.jpg" alt="Gallery image four" fill className="object-cover" />
            </motion.div>
            <motion.div
              variants={itemReveal}
              className="relative overflow-hidden rounded-xl border-2 border-white bg-white shadow-md"
            >
              <Image src="/img9.jpg" alt="Gallery image five" fill className="object-cover" />
            </motion.div>
            <motion.div
              variants={itemReveal}
              className="relative overflow-hidden rounded-xl border-2 border-white bg-white shadow-md"
            >
              <Image
                src="/img11.jpg"
                alt="Gallery image six"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto mt-14 hidden h-[720px] w-[1080px] md:block"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={itemReveal}
              className="absolute left-0 top-12 h-[220px] w-[350px] overflow-hidden rounded-md border-4 border-white bg-white shadow-lg"
            >
              <Image src="/img4.jpg" alt="Collage image one" fill className="object-cover" />
            </motion.div>
            <motion.div
              variants={itemReveal}
              className="absolute left-[290px] top-0 h-[210px] w-[320px] overflow-hidden rounded-md border-4 border-white bg-white shadow-lg"
            >
              <Image src="/img7.jpg" alt="Collage image two" fill className="object-cover" />
            </motion.div>
            <motion.div
              variants={itemReveal}
              className="absolute left-[600px] top-[90px] h-[250px] w-[390px] overflow-hidden rounded-md border-4 border-white bg-white shadow-lg"
            >
              <Image src="/img6.jpg" alt="Collage image three" fill className="object-cover" />
            </motion.div>
            <motion.div
              variants={itemReveal}
              className="absolute left-[150px] top-[260px] h-[280px] w-[460px] overflow-hidden rounded-md border-4 border-white bg-white shadow-lg"
            >
              <Image src="/img8.jpg" alt="Collage image four" fill className="object-cover" />
            </motion.div>
            <motion.div
              variants={itemReveal}
              className="absolute left-[650px] top-[330px] h-[240px] w-[320px] overflow-hidden rounded-md border-4 border-white bg-white shadow-lg"
            >
              <Image src="/img9.jpg" alt="Collage image five" fill className="object-cover" />
            </motion.div>
            <motion.div
              variants={itemReveal}
              className="absolute left-[410px] top-[530px] h-[190px] w-[250px] overflow-hidden rounded-md border-4 border-white bg-white shadow-lg"
            >
              <Image
                src="/img11.jpg"
                alt="Collage image six"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
