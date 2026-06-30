export default function AGBPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-pink-600 font-semibold">
            Rechtliches
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-900">
            Allgemeine Geschäftsbedingungen
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            House Villa Talija · Ferienhaus in Hreljići, Istrien
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-10 text-slate-700 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-3">§1 Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche
              Buchungen der Ferienunterkunft <strong>House Villa Talija</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">§2 Buchung</h2>
            <p>
              Mit der schriftlichen Buchungsbestätigung kommt ein verbindlicher
              Mietvertrag zwischen Vermieter und Gast zustande.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">§3 Preise</h2>
            <p>
              Es gelten die zum Zeitpunkt der Buchung vereinbarten Preise.
              Alle angegebenen Preise verstehen sich inklusive der ausdrücklich
              genannten Leistungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">§4 Zahlung</h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>30 % Anzahlung nach Buchungsbestätigung.</li>
              <li>Restzahlung spätestens 30 Tage vor Anreise.</li>
              <li>Bei kurzfristigen Buchungen sofortige Zahlung.</li>
            </ul>

          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">§5 An- und Abreise</h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Check-in ab 16:00 Uhr.</li>
              <li>Check-out bis 10:00 Uhr.</li>
            </ul>

          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">§6 Stornierung</h2>

            <p>
              Es gelten die bei der Buchung vereinbarten
              Stornierungsbedingungen. Der Abschluss einer
              Reiserücktrittsversicherung wird empfohlen.
            </p>

          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">§7 Pflichten des Gastes</h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Sorgfältiger Umgang mit der Unterkunft.</li>
              <li>Schäden sind unverzüglich zu melden.</li>
              <li>Die Hausordnung ist einzuhalten.</li>
              <li>Die maximale Personenzahl darf nicht überschritten werden.</li>
            </ul>

          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">§8 Haftung</h2>

            <p>
              Der Vermieter haftet ausschließlich im Rahmen der gesetzlichen
              Vorschriften. Für persönliche Gegenstände der Gäste wird keine
              Haftung übernommen.
            </p>

          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">§9 Schlussbestimmungen</h2>

            <p>
              Sollten einzelne Bestimmungen unwirksam sein, bleibt die
              Wirksamkeit der übrigen Regelungen unberührt.
            </p>

          </section>

        </div>

      </div>
    </main>
  );
}