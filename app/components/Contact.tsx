export default function Contact() {
  return (
    <section
      id="kontakt"
      className="bg-gradient-to-br from-sky-700 to-slate-900 text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-5xl font-bold">
            Jetzt Urlaub anfragen
          </h2>

          <p className="mt-4 text-xl text-white/80">
            Wir freuen uns auf deine Anfrage und antworten schnellstmöglich.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Linke Seite */}

          <div className="space-y-6">

            <div className="flex flex-wrap gap-4">

              <a
                href="https://wa.me/4917635863392"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 transition rounded-full px-10 py-5 text-xl font-bold"
              >
                💬 WhatsApp
              </a>

              <a
                href="tel:+4917635863392"
                className="bg-white text-black hover:bg-gray-200 transition rounded-full px-10 py-5 text-xl font-bold"
              >
                📞 Anrufen
              </a>

            </div>

            <div className="space-y-4 text-lg">

              <p>📍 Hreljići · Istrien · Kroatien</p>

              <p>
                🌐{" "}
                <a
                  href="https://www.housevillatalija.de"
                  className="hover:text-sky-300"
                >
                  www.housevillatalija.de
                </a>
              </p>

              <p>
                📧{" "}
                <a
                  href="mailto:zinner123@outlook.de"
                  className="hover:text-sky-300"
                >
                  zinner123@outlook.de
                </a>
              </p>

              <p>
                📱{" "}
                <a
                  href="tel:+4917635863392"
                  className="hover:text-sky-300"
                >
                  +49 176 35863392
                </a>
              </p>

            </div>

          </div>

          {/* Rechte Seite */}

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <iframe
              title="House Villa Talija"
              src="https://www.google.com/maps?q=House+Villa+Talija+Hreljici&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            />

          </div>

        </div>

      </div>
    </section>
  );
}