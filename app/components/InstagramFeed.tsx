"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function InstagramFeed() {
  useEffect(() => {
    if ((window as any).ElfSightApps?.init) {
      (window as any).ElfSightApps.init();
    }
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="uppercase tracking-[6px] text-pink-600 font-semibold">
            Instagram
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Aktuelles aus der Villa Talija
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Folgen Sie uns auf Instagram und entdecken Sie aktuelle Eindrücke,
            Sonnenuntergänge und Urlaubsmomente aus Istrien.
          </p>

        </div>

        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />

        <div
          className="elfsight-app-21fd4161-e347-4eb9-805f-200ade23214f"
          data-elfsight-app-lazy
        />

      </div>
    </section>
  );
}