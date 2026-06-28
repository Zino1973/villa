"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/hero.jpeg",
  "/images/Pool-nacht88.jpeg",
  "/images/Villa.jpeg",
  "/images/garten88.jpeg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-32">

        <div className="max-w-5xl text-center text-white">

          <p className="uppercase tracking-[8px] text-white/80 mb-4">
            Kroatien • Istrien
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight drop-shadow-2xl">
            Villa Talija
          </h1>

          <p className="mt-8 text-xl md:text-3xl leading-relaxed max-w-3xl mx-auto">
            Luxusurlaub mit privatem Pool,
            Außenküche und mediterranem Flair.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-lg">

            <span>🏊 Privater Pool</span>
            <span>👨‍👩‍👧‍👦 Bis 6 Gäste</span>
            <span>📶 WLAN</span>
            <span>🔥 Napoleon Grill</span>
            <span>🏓 Tischtennis</span>
            <span>🎯 Dart</span>

          </div>

          <div className="mt-14">

            <a
              href="https://wa.me/4917635863392?text=Hallo%20Christian,%20ich%20interessiere%20mich%20für%20die%20Villa%20Talija."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-green-600 hover:bg-green-700 transition hover:scale-105 px-12 py-5 text-2xl font-bold shadow-2xl"
            >
              💬 Direkt buchen & Bestpreis sichern
            </a>

            <p className="mt-5 text-green-200 font-semibold">
              Keine Buchungsgebühren • Persönlicher Gastgeber • Schnelle Antwort
            </p>

          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="https://www.ferienhausmiete.de/469886.htm"
              target="_blank"
              className="rounded-full bg-yellow-400 hover:bg-yellow-300 px-8 py-4 font-semibold text-black shadow-xl"
            >
              🏡 Ferienhausmiete
            </a>

            <a
              href="https://www.airbnb.de/rooms/1255119120602857683"
              target="_blank"
              className="rounded-full bg-pink-600 hover:bg-pink-700 px-8 py-4 font-semibold shadow-xl"
            >
              🏠 Airbnb
            </a>

            <a
              href="#belegung"
              className="rounded-full bg-sky-600 hover:bg-sky-700 px-8 py-4 font-semibold shadow-xl"
            >
              📅 Live-Belegung
            </a>

          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            <div className="rounded-3xl bg-black/35 backdrop-blur-xl border border-white/20 shadow-2xl p-6">

              <div className="text-sm uppercase tracking-[3px] text-white/70">
                ☀️ Heute in Hreljići
              </div>

              <div className="mt-3 text-5xl font-black">
                29°C
              </div>

              <div className="mt-2 text-lg">
                Sonnig
              </div>

              <div className="text-white/70">
                Perfektes Poolwetter 🌴
              </div>

            </div>

            <a
              href="https://maps.google.com/?q=House+Villa+Talija+Hreljici"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl bg-black/35 backdrop-blur-xl border border-white/20 shadow-2xl p-6 hover:bg-black/45 transition"
            >

              <div className="text-sm uppercase tracking-[3px] text-white/70">
                📍 Standort
              </div>

              <div className="mt-3 text-3xl font-bold">
                Google Maps
              </div>

              <div className="mt-2 text-white/70">
                Route zur Villa starten
              </div>

            </a>

          </div>

          <div className="mt-12 animate-bounce text-3xl">
            ↓
          </div>

        </div>

      </div>

    </section>
  );
}