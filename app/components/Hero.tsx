"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/Villa-Titel1.jpeg",
  "/images/Pool999.jpeg",
  "/images/Pool-nacht88.jpeg",
  "/images/Nacht-3.jpeg",
  "/images/garten88.jpeg",
  "/images/Villa.jpeg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Hintergrundbilder */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[3000ms] ${
            currentImage === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-[1.02]"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Dunkler Verlauf */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/70" />

      {/* Inhalt */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-32">

        <div className="max-w-6xl text-center text-white">

          <p className="uppercase tracking-[8px] text-white/80 mb-6">
            Kroatien • Istrien
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black drop-shadow-2xl">
            Villa Talija
          </h1>

          <p className="mt-8 text-xl md:text-3xl leading-relaxed max-w-4xl mx-auto text-white/95">
            Luxusurlaub mit privatem Pool,
            Außenküche und mediterranem Flair.
          </p>

          {/* Ausstattung */}

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-lg md:text-xl text-white/90">

            <span>🏊 Privater Pool</span>

            <span>👨‍👩‍👧‍👦 Bis 6 Gäste</span>

            <span>📶 WLAN</span>

            <span>🔥 Napoleon Grill</span>

            <span>🏓 Tischtennis</span>

            <span>🎯 Dart</span>

          </div>

          {/* WhatsApp */}

          <div className="mt-16">

            <a
              href="https://wa.me/4917635863392?text=Hallo%20Christian,%20ich%20interessiere%20mich%20für%20die%20Villa%20Talija."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-600 hover:bg-green-500 hover:scale-105 transition-all duration-300 px-14 py-6 text-2xl font-bold shadow-2xl"
            >
              💬 Direkt buchen & Bestpreis sichern
            </a>

            <p className="mt-5 text-green-200 font-semibold">
              Keine Buchungsgebühren • Persönlicher Gastgeber • Schnelle Antwort
            </p>

          </div>

          {/* Buchungsportale */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="https://www.ferienhausmiete.de/4698869.htm?force_calc=1&adults=2&kid=0&pers=2"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 hover:bg-yellow-300 hover:scale-105 transition-all duration-300 px-8 py-4 font-bold text-black shadow-xl"
            >
              🏡 Ferienhausmiete
            </a>

            <a
              href="https://www.airbnb.de/rooms/1255119120602857683"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-pink-600 hover:bg-pink-500 hover:scale-105 transition-all duration-300 px-8 py-4 font-bold shadow-xl"
            >
              🏠 Airbnb
            </a>

            <a
              href="#belegung"
              className="rounded-full bg-sky-600 hover:bg-sky-500 hover:scale-105 transition-all duration-300 px-8 py-4 font-bold shadow-xl"
            >
              📅 Live-Belegung
            </a>

          </div>

          {/* Infokarten */}

          <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">

              <div className="text-sm uppercase tracking-[4px] text-white/70">
                ☀️ Heute in Hreljići
              </div>

              <div className="mt-4 text-5xl font-black">
                29°C
              </div>

              <div className="mt-2 text-xl">
                Sonnig
              </div>

              <div className="text-white/70 mt-2">
                Perfektes Poolwetter 🌴
              </div>

            </div>

            <a
              href="https://maps.google.com/?q=House+Villa+Talija+Hreljici"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 hover:bg-white/15 transition-all duration-300"
            >

              <div className="text-sm uppercase tracking-[4px] text-white/70">
                📍 Standort
              </div>

              <div className="mt-4 text-3xl font-bold">
                Google Maps
              </div>

              <div className="mt-3 text-white/70">
                Route zur Villa starten
              </div>

            </a>

          </div>

          {/* Scroll-Pfeil */}

          <div className="mt-16 animate-bounce text-5xl text-white/80">
            ↓
          </div>

        </div>

      </div>

    </section>
  );
}