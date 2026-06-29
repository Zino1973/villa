"use client";

export default function GoogleReviews() {
  const googleUrl =
    "https://www.google.com/maps/place/House+Villa+Talija/@45.0153613,13.9909577,17z/data=!3m1!4b1!4m6!3m5!1s0x476335c0d157a945:0xef904c3b5f1d42d9!8m2!3d45.0153576!4d13.9958286!16s%2Fg%2F11f7r5m8z1";

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-slate-900">
            ⭐ Unsere Gäste sind begeistert
          </h2>

          <p className="mt-4 text-xl text-slate-600">
            Vielen Dank für die großartigen Bewertungen auf Google.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Bewertung */}
          <div className="rounded-3xl bg-white shadow-xl p-8">

            <div className="text-yellow-400 text-3xl mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            <h3 className="text-2xl font-bold mb-3">
              5,0 von 5 Sternen
            </h3>

            <p className="text-slate-600">
              Basierend auf
              <strong> 5 Google-Bewertungen.</strong>
            </p>

            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              Alle Bewertungen ansehen
            </a>

          </div>

          {/* Bewertung 1 */}
          <div className="rounded-3xl bg-white shadow-xl p-8">

            <div className="text-yellow-400 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="italic text-slate-600 leading-7">
              „Ein wunderschönes Ferienhaus mit tollem Pool,
              moderner Ausstattung und sehr freundlichen Gastgebern.
              Wir kommen gerne wieder.“
            </p>

            <div className="mt-6 font-semibold">
              Google-Gast
            </div>

          </div>

          {/* Bewertung 2 */}
          <div className="rounded-3xl bg-white shadow-xl p-8">

            <div className="text-yellow-400 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="italic text-slate-600 leading-7">
              „Perfekte Lage, absolute Ruhe,
              wunderschöner Garten und ein traumhafter Pool.
              Sehr zu empfehlen.“
            </p>

            <div className="mt-6 font-semibold">
              Google-Gast
            </div>

          </div>

        </div>

        <div className="text-center mt-14">

          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100 transition"
          >
            ✍️ Jetzt selbst eine Google-Bewertung schreiben
          </a>

        </div>

      </div>
    </section>
  );
}