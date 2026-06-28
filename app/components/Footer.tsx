export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              House Villa Talija
            </h3>

            <p className="text-gray-300 leading-8">
              Moderne Ferienvilla mit privatem Pool in Hreljići, Istrien.
              Ideal für bis zu 6 Gäste.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Kontakt
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>📍 Hreljići, Istrien, Kroatien</li>
              <li>📞 +49 176 35863392</li>
              <li>🌐 www.housevillatalija.de</li>
              <li>💬 WhatsApp</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-3">
              <li><a href="#">Home</a></li>
              <li><a href="#galerie">Galerie</a></li>
              <li><a href="#ausstattung">Ausstattung</a></li>
              <li><a href="#preise">Preise</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} House Villa Talija · Alle Rechte vorbehalten.
        </div>

      </div>
    </footer>
  );
}