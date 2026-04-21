"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
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

const contactItems = [
  { label: "Phone (Nepal)", value: "+977 9803955047", href: "tel:+9779803955047" },
  { label: "Phone (Thailand)", value: "+66 834461166", href: "tel:+66834461166" },
  { label: "Email", value: "bagnbags70@gmail.com", href: "mailto:bagnbags70@gmail.com" },
  { label: "Location", value: "Jhochhen, Kathmandu" },
];

const mapQuery = "Jhochhen, Kathmandu";
const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const mapSrc = mapsApiKey
  ? `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${encodeURIComponent(
      mapQuery
    )}&zoom=16`
  : `https://maps.google.com/maps?q=${encodeURIComponent(
      mapQuery
    )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusError, setStatusError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("");
    setStatusError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error || "Failed to send message.");
      }

      form.reset();
      setStatusMessage("Message sent successfully. We will contact you soon.");
    } catch (error) {
      setStatusError(true);
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send message right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-black text-white">
      <Navbar />

      <section className="relative min-h-[82vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Shangrila Trade Concern contact hero background"
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
              Contact Shangrila Trade Concern
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-white md:text-7xl">
              Let us source your next exceptional stone
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-200/90 md:text-base">
              Share your requirements and our team will respond with curated
              options, grading details, and commercial terms.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#f8f7f4] py-16 text-slate-900 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-start gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-10">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
              Contact Details
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-slate-900 md:text-5xl">
              Speak with our gemstone specialists
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
              We support jewelers, retailers, and private clients with verified
              stones, tailored sourcing, and clear turnaround timelines.
            </p>

            <motion.div
              className="mt-8 space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemReveal}
                  className="border-b border-slate-300 pb-3"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-amber-700">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-slate-700 md:text-base">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="relative inline-block transition-colors hover:text-amber-700 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-amber-700 after:transition-transform after:duration-300 hover:after:scale-x-100"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="h-fit self-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <motion.p
              variants={itemReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-[11px] uppercase tracking-[0.2em] text-amber-700"
            >
              Send Inquiry
            </motion.p>
            <motion.div
              className="mt-5 grid gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.input
                variants={itemReveal}
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="h-11 rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-amber-600"
              />
              <motion.input
                variants={itemReveal}
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="h-11 rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-amber-600"
              />
              <motion.textarea
                variants={itemReveal}
                name="message"
                required
                placeholder="Tell us what type of stones you are looking for"
                rows={5}
                className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-amber-600"
              />
              <motion.button
                variants={itemReveal}
                type="submit"
                disabled={isSubmitting}
                className="mt-3 inline-flex h-11 items-center justify-center rounded-md border border-amber-700/35 bg-[#efe3d2] px-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-800 transition-colors duration-300 hover:border-slate-300 hover:bg-white hover:text-slate-900"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </motion.button>
              {statusMessage ? (
                <p
                  className={`text-xs normal-case tracking-normal ${
                    statusError ? "text-red-600" : "text-emerald-700"
                  }`}
                >
                  {statusMessage}
                </p>
              ) : null}
            </motion.div>
          </motion.form>
        </div>
      </section>

      <section className="bg-[#f8f7f4] pb-24 md:pb-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="pb-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
              Visit Our Office
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-slate-900 md:text-5xl">
              Jhochhen, Kathmandu
            </h2>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative h-[380px] overflow-hidden rounded-2xl border border-slate-300 bg-slate-100 md:h-[480px]"
          >
            <iframe
              title="Shangrila Trade Concern office map"
              src={mapSrc}
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
