export default function Prices() {
  return (
    <section id="preise" className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Preise 2027
        </h2>

        <p className="text-center text-slate-300 mb-12">
          Anreise und Abreise jeweils sonntags · Wochenvermietung
        </p>

        <div className="overflow-x-auto">
          <table className="w-full rounded-2xl overflow-hidden">

            <thead className="bg-sky-600">
              <tr>
                <th className="p-4 text-left">Zeitraum</th>
                <th className="p-4 text-center">Preis / Woche</th>
              </tr>
            </thead>

            <tbody className="bg-slate-800">

              <tr className="border-b border-slate-700">
                <td className="p-4">Mai</td>
                <td className="p-4 text-center">auf Anfrage</td>
              </tr>

              <tr className="border-b border-slate-700">
                <td className="p-4">Juni</td>
                <td className="p-4 text-center">auf Anfrage</td>
              </tr>

              <tr className="border-b border-slate-700">
                <td className="p-4">Juli</td>
                <td className="p-4 text-center">auf Anfrage</td>
              </tr>

              <tr className="border-b border-slate-700">
                <td className="p-4">August</td>
                <td className="p-4 text-center">auf Anfrage</td>
              </tr>

              <tr className="border-b border-slate-700">
                <td className="p-4">September</td>
                <td className="p-4 text-center">auf Anfrage</td>
              </tr>

              <tr className="border-b border-slate-700">
                <td className="p-4">Oktober</td>
                <td className="p-4 text-center">auf Anfrage</td>
              </tr>

              <tr>
                <td className="p-4">Dezember</td>
                <td className="p-4 text-center">auf Anfrage</td>
              </tr>

            </tbody>

          </table>
        </div>

        <p className="text-center text-slate-400 mt-8">
          ✔ Endreinigung inklusive · ✔ WLAN inklusive · ✔ Privater Pool
        </p>

      </div>
    </section>
  );
}