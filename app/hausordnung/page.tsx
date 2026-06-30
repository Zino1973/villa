export default function HausordnungPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-pink-600 font-semibold">
            Für einen angenehmen Aufenthalt
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-900">
            Hausordnung
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            House Villa Talija · Hreljići · Istrien
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-10 text-slate-700 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Herzlich willkommen
            </h2>

            <p>
              Wir freuen uns, Sie in der House Villa Talija begrüßen zu dürfen.
              Bitte behandeln Sie das Haus so sorgfältig, als wäre es Ihr eigenes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              An- und Abreise
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Check-in ab 16:00 Uhr.</li>
              <li>Check-out bis spätestens 10:00 Uhr.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Maximale Belegung
            </h2>

            <p>
              Die Villa ist für maximal 6 Gäste ausgelegt.
              Zusätzliche Personen sind nur nach vorheriger Absprache gestattet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Pool
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Benutzung auf eigene Gefahr.</li>
              <li>Kinder dürfen den Pool nur unter Aufsicht nutzen.</li>
              <li>Keine Glasflaschen im Poolbereich.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Grill & Außenbereich
            </h2>

            <p>
              Bitte reinigen Sie den Napoleon-Gasgrill nach der Benutzung
              und gehen Sie mit Gartenmöbeln sowie Außenküche sorgfältig um.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Ruhezeiten
            </h2>

            <p>
              Bitte nehmen Sie Rücksicht auf die Nachbarschaft und vermeiden
              Sie laute Musik insbesondere zwischen 22:00 Uhr und 07:00 Uhr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Rauchen
            </h2>

            <p>
              Das Rauchen ist innerhalb der Villa nicht gestattet.
              Im Außenbereich ist es erlaubt. Bitte verwenden Sie Aschenbecher.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Haustiere
            </h2>

            <p>
              Haustiere sind nur nach vorheriger Vereinbarung erlaubt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Schäden
            </h2>

            <p>
              Bitte melden Sie entstandene Schäden unverzüglich, damit wir diese
              schnell beheben können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Vielen Dank
            </h2>

            <p>
              Wir wünschen Ihnen einen erholsamen Aufenthalt und eine schöne
              Zeit in der House Villa Talija.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}