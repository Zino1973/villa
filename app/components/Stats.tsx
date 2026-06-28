"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 6, label: "Gäste", icon: "🏡" },
  { value: 32, label: "m² Pool", icon: "🏊" },
  { value: 300, suffix: "+", label: "Sonnentage", icon: "☀️" },
  { value: 5.0, decimals: 1, label: "Bewertung", icon: "⭐" },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-14">
          Villa Talija in Zahlen
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center transition hover:scale-105 hover:border-amber-400"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <div className="text-5xl font-bold text-amber-400">
                {inView && (
                  <CountUp
                    end={item.value}
                    duration={2.5}
                    decimals={item.decimals ?? 0}
                    suffix={item.suffix ?? ""}
                  />
                )}
              </div>

              <div className="mt-3 text-neutral-300">
                {item.label}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}