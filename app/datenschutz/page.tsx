export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-pink-600 font-semibold">
            Rechtliches
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-900">
            Datenschutzerklärung
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            House Villa Talija · Hreljići · Istrien
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-10 text-slate-700 leading-8">

          <section>
            <h2 className="text-2xl font-bold mb-3">
              1. Verantwortlicher
            </h2>

            <p>
              Christian Zinner<br />
              Kirchberg 17<br />
              85276 Pfaffenhofen an der Ilm<br />
              Deutschland
            </p>

            <p className="mt-4">
              E-Mail: zinner123@outlook.de<br />
              Telefon: +49 176 35863392
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              2. Allgemeines
            </h2>

            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig.
              Wir verarbeiten personenbezogene Daten ausschließlich im
              Rahmen der geltenden Datenschutzgesetze, insbesondere der DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              3. Server-Logfiles
            </h2>

            <p>
              Beim Besuch dieser Website werden automatisch technische Daten
              (z. B. Browsertyp, Betriebssystem, Uhrzeit des Zugriffs,
              IP-Adresse) verarbeitet, soweit dies für den Betrieb der Website
              erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              4. Cookies
            </h2>

            <p>
              Diese Website verwendet Cookies. Nicht technisch notwendige
              Cookies werden nur nach Ihrer Einwilligung gesetzt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              5. Google Analytics
            </h2>

            <p>
              Soweit Sie eingewilligt haben, verwenden wir Google Analytics
              zur Analyse der Nutzung unserer Website. Die Verarbeitung erfolgt
              auf Grundlage Ihrer Einwilligung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              6. Instagram
            </h2>

            <p>
              Auf unserer Website ist ein Instagram-Feed eingebunden.
              Beim Laden des Feeds können Daten an Instagram bzw. Meta
              übermittelt werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              7. WhatsApp
            </h2>

            <p>
              Bei Nutzung unseres WhatsApp-Links gelten zusätzlich die
              Datenschutzbestimmungen von WhatsApp Ireland Limited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              8. Wetterdienst
            </h2>

            <p>
              Für die Wettervorhersage werden Daten von Open-Meteo geladen.
              Dabei können technische Verbindungsdaten verarbeitet werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              9. Ihre Rechte
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Auskunft</li>
              <li>Berichtigung</li>
              <li>Löschung</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch</li>
              <li>Widerruf einer Einwilligung</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              10. Kontakt
            </h2>

            <p>
              Bei Fragen zum Datenschutz wenden Sie sich bitte an:
            </p>

            <p className="mt-4">
              Christian Zinner<br />
              E-Mail: zinner123@outlook.de
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}