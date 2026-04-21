"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
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

const valueCards = [
  {
    title: "Our Vision",
    text: "To become the preferred sourcing and trading partner for responsibly selected diamonds and rare gemstones.",
  },
  {
    title: "Our Approach",
    text: "Every lot is reviewed for certification, traceability, and value alignment before reaching our clients.",
  },
  {
    title: "Our Promise",
    text: "Transparent communication, dependable timelines, and premium quality standards at every step.",
  },
];

const timeline = [
  {
    year: "1990",
    title: "Company Established",
    text: "Shangrila Trade Concern began operations in 1990 with a focused mission: honest gemstone trading built on long-term trust.",
  },
  {
    year: "2003",
    title: "International Buyer Network",
    text: "We expanded our sourcing and client base across key regional and international jewelry markets.",
  },
  {
    year: "2015",
    title: "Stronger Certification Standards",
    text: "Internal verification workflows were upgraded to align with stricter quality checks and traceability expectations.",
  },
  {
    year: "Today",
    title: "Modern Luxury Supply Partner",
    text: "We serve jewelers, retailers, and private collectors with consistent quality, transparent pricing, and responsive support.",
  },
];

const capabilityPoints = [
  "Certified natural diamonds and premium gemstones",
  "Ethical sourcing through vetted supplier relationships",
  "Custom lot curation based on size, grade, and budget",
  "Reliable export coordination and documentation support",
];

const complianceItems = [
  {
    title: "Certification First",
    text: "All key stones are supplied with recognized grading and documentation standards for clear quality assurance.",
  },
  {
    title: "Ethical Sourcing Controls",
    text: "We work with screened partners and maintain strict procurement checks to support responsible trade practices.",
  },
  {
    title: "Transparent Transaction Flow",
    text: "Clients receive clear lot specifications, commercial terms, and shipment records for dependable decision-making.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <section className="relative min-h-[82vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Shangrila Trade Concern luxury background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.86)_72%)]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          className="relative z-10 mx-auto flex min-h-[82vh] w-full max-w-7xl items-center px-6 pb-16 pt-36 md:px-10"
        >
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-amber-200/90">
              About Shangrila Trade Concern
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-white md:text-7xl">
              Heritage, trust and brilliance in every stone
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-200/90 md:text-base">
              Established in 1990, we partner with ethical suppliers and expert
              graders to deliver certified diamonds and premium gemstones for
              jewelers, retailers, and private buyers across global markets.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#f8f7f4] px-6 py-16 text-slate-900 md:px-10 md:py-20">
        <motion.div
          className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {valueCards.map((item) => (
            <motion.article
              key={item.title}
              variants={itemReveal}
              className="p-2"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-amber-700">
                {item.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                {item.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="bg-[#f8f7f4] px-6 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto w-full max-w-7xl rounded-3xl bg-[#e9dccb] p-7 text-slate-900 md:p-10">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-3xl"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-amber-800">
              Company Journey
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-slate-900 md:text-5xl">
              Built on relationships since 1990
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-700 md:text-base">
              Over three decades of market experience have shaped how we source,
              evaluate, and deliver stones with confidence and consistency.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {timeline.map((item) => (
              <motion.article
                key={item.year + item.title}
                variants={itemReveal}
                className="rounded-2xl border border-amber-900/10 bg-white/70 p-6"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-amber-800">
                  {item.year}
                </p>
                <h3 className="mt-2 font-display text-2xl text-slate-900 md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f8f7f4] px-6 pb-20 md:px-10 md:pb-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
              Why Clients Work With Us
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-slate-900 md:text-5xl">
              A trusted bridge between rare supply and refined demand
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
              From white diamonds to vivid gemstones, we combine market insight
              with technical quality checks to help clients buy confidently and
              build long-term value.
            </p>
            <motion.ul
              className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600 md:text-base"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {capabilityPoints.map((point) => (
                <motion.li
                  key={point}
                  variants={itemReveal}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-700" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
            <Link
              href="/contact"
              className="group mt-7 inline-block bg-transparent text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700 transition-all duration-300 hover:tracking-[0.26em] hover:text-amber-800"
            >
              <span className="relative inline-block">
                Speak With Our Team
                <span className="absolute -bottom-1 left-0 h-px w-full bg-amber-700/90 transition-all duration-300 group-hover:bg-amber-800 group-hover:shadow-[0_0_10px_rgba(180,83,9,0.35)]" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative min-h-[380px] overflow-hidden rounded-2xl"
          >
            <Image
              src="/img5.jpg"
              alt="Shangrila Trade Concern team and gemstones"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f8f7f4] px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto w-full max-w-7xl rounded-3xl border border-slate-200 bg-white p-7 md:p-10">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
              Certifications And Compliance
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-slate-900 md:text-5xl">
              Quality governance at every stage
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
              Beyond sourcing, our operating model is built around verification,
              accountability, and complete clarity from selection to delivery.
            </p>
          </motion.div>

          <motion.div
            className="mt-9 grid gap-5 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {complianceItems.map((item) => (
              <motion.article
                key={item.title}
                variants={itemReveal}
                className="rounded-2xl border border-slate-200 bg-[#fcfcfb] p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-amber-700">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f8f7f4] px-6 pb-24 md:px-10 md:pb-28">
        <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2 md:items-center md:gap-10">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
              Company Location
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-slate-900 md:text-5xl">
              Visit us in Jhochhen, Kathmandu
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
              Our office is located in Jhochhen, Kathmandu. Reach out to
              schedule a meeting and explore our latest diamond and gemstone
              selections.
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-amber-800">
              Jhochhen, Kathmandu
            </p>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="overflow-hidden rounded-2xl border border-slate-300 bg-slate-100"
          >
            <iframe
              title="Shangrila Trade Concern location map"
              src="https://maps.google.com/maps?q=Jhochhen%2C%20Kathmandu&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-[320px] w-full md:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
