export default function WiderrufPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-pink-600 font-semibold">
            Rechtliches
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-900">
            Widerrufsbelehrung
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            House Villa Talija · Ferienhaus in Hreljići, Istrien
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-10 text-slate-700 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Widerrufsrecht
            </h2>

            <p>
              Verbrauchern steht grundsätzlich ein gesetzliches Widerrufsrecht
              zu. Für Verträge über die Vermietung von Ferienunterkünften gelten
              jedoch besondere gesetzliche Regelungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Ausschluss des Widerrufsrechts
            </h2>

            <p>
              Gemäß § 312g Abs. 2 Nr. 9 BGB besteht bei Verträgen zur Erbringung
              von Dienstleistungen im Zusammenhang mit Freizeitbetätigungen,
              wenn der Vertrag für die Erbringung einen spezifischen Termin oder
              Zeitraum vorsieht, kein gesetzliches Widerrufsrecht.
            </p>

            <p className="mt-4">
              Dies betrifft insbesondere die Buchung einer Ferienunterkunft für
              einen bestimmten Reisezeitraum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Stornierung
            </h2>

            <p>
              Eine Stornierung ist entsprechend den bei der Buchung vereinbarten
              Stornobedingungen möglich. Maßgeblich sind die Angaben in der
              Buchungsbestätigung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Empfehlung
            </h2>

            <p>
              Wir empfehlen den Abschluss einer
              Reiserücktrittskostenversicherung, um sich gegen unvorhersehbare
              Ereignisse abzusichern.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}