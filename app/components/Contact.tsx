export default function Contact() {
  return (
    <section
      id="kontakt"
      className="bg-gradient-to-br from-sky-700 to-slate-900 text-white py-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Jetzt Urlaub anfragen
        </h2>

        <p className="text-xl text-white/80 mb-12">
          Wir freuen uns auf deine Anfrage und antworten schnellstmöglich.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="https://wa.me/4917635863392"
            target="_blank"
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

        <div className="mt-14 space-y-3 text-lg">

          <p>📍 Hreljići · Istrien · Kroatien</p>

          <p>🌐 www.housevillatalija.de</p>

          <p>📱 +49 176 35863392</p>

        </div>

      </div>
    </section>
  );
}