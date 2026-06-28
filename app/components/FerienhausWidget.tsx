"use client";

import { useEffect } from "react";

export default function FerienhausWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.ferienhausmiete.de/verwalten/widgets/widgets.js?id=4698869&lang=1&months=12&preview=36";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Live-Belegungskalender
        </h2>

        <div id="ferienhausmiete-de-widget4-4698869">
          <a
            href="https://www.ferienhausmiete.de/4698869.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ferienhaus Istrien – Villa Talija
          </a>
        </div>
      </div>
    </section>
  );
}