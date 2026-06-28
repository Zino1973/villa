"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const images = [
  "/images/hero.jpeg",
  "/images/herox.jpeg",
  "/images/Pool-1.jpeg",
  "/images/Pool-3.jpeg",
  "/images/Pool-4.jpeg",
  "/images/Pool-5.jpeg",
  "/images/Pool-66.jpeg",
  "/images/Pool-nacht88.jpeg",
  "/images/Pool865.jpeg",
  "/images/Pool887.jpeg",
  "/images/Pool999.jpeg",
  "/images/garten88.jpeg",
  "/images/Carport.jpeg",
  "/images/Küche-1.jpeg",
  "/images/Küche-2.jpeg",
  "/images/Küche444.jpeg",
  "/images/Essbereich-1.jpeg",
  "/images/Nacht-1.jpeg",
  "/images/Nacht-2.jpeg",
  "/images/Nacht-3.jpeg",
  "/images/Schlafen-1.jpeg",
  "/images/Schlafen-2.jpeg",
  "/images/Zimmer-klein.jpeg",
  "/images/Zimmer-klein-2.jpeg",
  "/images/Villa.jpeg",
  "/images/TT.jpeg",
  "/images/Sonneauf.jpeg",
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section
      id="galerie"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-14">

        <span className="uppercase tracking-[8px] text-sky-600 font-semibold">
          Villa Talija
        </span>

        <h2 className="mt-3 text-5xl font-black text-slate-900">
          Bildergalerie
        </h2>

        <p className="mt-5 text-xl text-slate-500 max-w-3xl mx-auto">
          Entdecken Sie unsere exklusive Ferienvilla in Istrien.
        </p>

      </div>

      {/* Großes Titelbild */}

      <div
        className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer mb-10 group"
        onClick={() => setIndex(0)}
      >
        <Image
          src={images[0]}
          alt="Villa Talija"
          fill
          priority
          unoptimized
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute bottom-8 left-8 text-white">

          <h3 className="text-4xl font-bold">
            Willkommen in der Villa Talija
          </h3>

          <p className="text-xl mt-2">
            Luxus • Pool • Istrien • Bis 6 Gäste
          </p>

        </div>

      </div>

      {/* Galerie */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {images.slice(1).map((src, i) => (

          <div
            key={i}
            onClick={() => setIndex(i + 1)}
            className="group cursor-pointer overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition duration-500"
          >

            <div className="relative h-80">

              <Image
                src={src}
                alt={`Villa Talija ${i + 2}`}
                fill
                unoptimized
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

            </div>

          </div>

        ))}

      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
        plugins={[Zoom, Fullscreen, Thumbnails]}
        carousel={{ finite: false }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
      />

    </section>
  );
}