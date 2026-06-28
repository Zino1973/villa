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
    <section id="galerie" className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className="group cursor-pointer overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-80">

              <Image
                src={src}
                alt={`Villa Talija ${i + 1}`}
                fill
                unoptimized
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
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