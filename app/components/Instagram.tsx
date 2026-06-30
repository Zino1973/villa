"use client";

import Script from "next/script";

export default function Instagram() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-pink-600 font-semibold">
            Instagram
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
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