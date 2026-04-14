"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "Years in Trade", value: 15, suffix: "+" },
  { label: "Certified Stones Delivered", value: 2800, suffix: "+" },
  { label: "Private Clients Served", value: 600, suffix: "+" },
];

function CountUp({
  end,
  shouldStart,
  suffix = "",
}: {
  end: number;
  shouldStart: boolean;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTimestamp: number | null = null;
    const duration = 1400;

    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, shouldStart]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section ref={ref} className="bg-[#f8f7f4] px-6 pb-20 pt-16 md:px-10 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-7xl px-0 py-0">
        <div className="mb-10 mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
            Trusted Performance
          </p>
          <h3 className="mt-3 font-display text-4xl text-slate-900 md:text-5xl">
            Numbers that reflect reliability
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl py-4 text-center">
              <p className="font-display text-4xl text-slate-900 md:text-5xl">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  shouldStart={inView}
                />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-600">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
