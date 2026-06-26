export default function Availability() {
  return (
    <section id="verfuegbarkeit" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Verfügbarkeit
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Anreise und Abreise jeweils sonntags.
          Freie Termine werden regelmäßig aktualisiert.
        </p>

        <div className="rounded-3xl border-2 border-sky-100 bg-sky-50 p-12 text-center shadow-lg">
          <div className="text-6xl mb-6">📅</div>

          <h3 className="text-2xl font-bold mb-4">
            Live-Kalender folgt
          </h3>

          <p className="text-gray-700 max-w-2xl mx-auto">
            Hier wird dein synchronisierter Belegungskalender eingebunden.
            Gäste sehen sofort, welche Wochen verfügbar sind.
          </p>

          <a
            href="#kontakt"
            className="inline-block mt-8 rounded-full bg-sky-600 px-8 py-4 text-white font-semibold hover:bg-sky-700 transition"
          >
            Verfügbarkeit anfragen
          </a>
        </div>

      </div>
    </section>
  );
}