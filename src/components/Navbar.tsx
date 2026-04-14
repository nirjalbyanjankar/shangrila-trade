 "use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsLightMode(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isLightMode
          ? "bg-white/92 shadow-md shadow-black/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2 md:px-10 md:py-2.5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Shangrila Trade Concern logo"
            width={130}
            height={42}
            priority
            className="h-auto w-[84px] object-contain md:w-[100px]"
          />
          <div className="leading-tight">
            <p
              className={`font-display text-sm transition-colors md:text-base ${
                isLightMode ? "text-amber-700" : "text-amber-200"
              }`}
            >
              Shangrila Trade
            </p>
            <p
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${
                isLightMode ? "text-slate-700/90" : "text-slate-200/85"
              }`}
            >
              Concern
            </p>
          </div>
        </Link>

        <nav className="hidden md:block">
          <ul
            className={`flex items-center gap-6 text-[11px] uppercase tracking-[0.18em] transition-colors ${
              isLightMode ? "text-slate-800" : "text-slate-100/90"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`relative pb-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-amber-500 after:transition-transform after:duration-300 hover:text-amber-500 hover:after:scale-x-100 ${
                    isLightMode ? "text-slate-800" : "text-slate-100/90"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
