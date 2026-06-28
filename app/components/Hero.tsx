"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/hero.jpeg",
  "/images/Pool-nacht88.jpeg",
  "/images/Villa.jpeg",
  "/images/garten88.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        <p className="uppercase tracking-[8px] text-white/80 mb-4">
          Kroatien • Istrien
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-xl">
          Villa Talija
        </h1>

        <p className="mt-6 text-xl md:text-3xl text-white max-w-4xl">
          Exklusive Ferienvilla mit privatem Pool,
          Außenküche und mediterranem Flair.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-5 text-white">

          <span>🏊 Privater Pool</span>
          <span>👨‍👩‍👧‍👦 Bis 6 Gäste</span>
          <span>📶 WLAN</span>
          <span>🔥 Napoleon Grill</span>

        </div>

        <div className="mt-12 flex flex-col items-center gap-6">

          <a
            href="https://wa.me/4917635863392?text=Hallo%20Christian,%20ich%20interessiere%20mich%20für%20die%20Villa%20Talija."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-600 hover:bg-green-700 transition px-12 py-5 text-white text-2xl font-bold shadow-2xl"
          >
            💬 Bestpreis direkt per WhatsApp
          </a>

          <p className="text-green-200 text-lg font-semibold">
            ✓ Direkt buchen • Persönlicher Kontakt • Garantiert bester Preis
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://www.ferienhausmiete.de/4698869.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-500 hover:bg-yellow-400 transition px-8 py-4 text-black font-semibold shadow-lg"
            >
              🏡 Ferienhausmiete.de
            </a>

            <a
              href="https://www.airbnb.de/rooms/1255119120602857683"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-pink-600 hover:bg-pink-700 transition px-8 py-4 text-white font-semibold shadow-lg"
            >
              🏠 Airbnb
            </a>

            <a
              href="#belegung"
              className="rounded-full bg-sky-600 hover:bg-sky-700 transition px-8 py-4 text-white font-semibold shadow-lg"
            >
              📅 Live-Belegung
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}