export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Villa */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              House Villa Talija
            </h3>

            <p className="text-gray-300 leading-8">
              Moderne Ferienvilla mit privatem Pool in Hreljići, Istrien.
              Ideal für bis zu 6 Gäste.
            </p>

            <p className="mt-4 text-gray-400">
              Privater Pool • WLAN • Außenküche • Napoleon Grill
            </p>

            <div className="mt-6">
              <a
                href="https://www.instagram.com/villa.talija"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition"
              >
                📷 @villa.talija
              </a>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Kontakt
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>📍 Hreljići, Istrien, Kroatien</li>

              <li>
                📞{" "}
                <a
                  href="tel:+4917635863392"
                  className="hover:text-sky-400 transition"
                >
                  +49 176 35863392
                </a>
              </li>

              <li>
                ✉️{" "}
                <a
                  href="mailto:zinner123@outlook.de"
                  className="hover:text-sky-400 transition"
                >
                  zinner123@outlook.de
                </a>
              </li>

              <li>
                🌐{" "}
                <a
                  href="https://www.housevillatalija.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition"
                >
                  www.housevillatalija.de
                </a>
              </li>

              <li>
                💬{" "}
                <a
                  href="https://wa.me/4917635863392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  WhatsApp
                </a>
              </li>

            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li><a href="#" className="hover:text-sky-400 transition">Home</a></li>

              <li><a href="#galerie" className="hover:text-sky-400 transition">Galerie</a></li>

              <li><a href="#ausstattung" className="hover:text-sky-400 transition">Ausstattung</a></li>

              <li><a href="#preise" className="hover:text-sky-400 transition">Preise</a></li>

              <li><a href="#kontakt" className="hover:text-sky-400 transition">Kontakt</a></li>

              <li><a href="/impressum" className="hover:text-sky-400 transition">Impressum</a></li>

              <li><a href="/datenschutz" className="hover:text-sky-400 transition">Datenschutz</a></li>

              <li><a href="/agb" className="hover:text-sky-400 transition">AGB</a></li>

              <li><a href="/widerruf" className="hover:text-sky-400 transition">Widerruf</a></li>

              <li><a href="/hausordnung" className="hover:text-sky-400 transition">Hausordnung</a></li>

            </ul>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400">

          <p>
            © {new Date().getFullYear()} <strong>House Villa Talija</strong> · Alle Rechte vorbehalten.
          </p>

          <p className="mt-2 text-sm">
            Private Ferienhausvermietung · Christian Zinner · Hreljići · Istrien · Kroatien
          </p>

          <p className="mt-4 text-xs text-gray-500">
            Mit der Nutzung dieser Website akzeptieren Sie unsere Datenschutzbestimmungen und AGB.
          </p>

        </div>

      </div>
    </footer>
  );
}