export default function WhyBookUs() {
  const items = [
    {
      icon: "💶",
      title: "Bestpreis bei Direktbuchung",
      text: "Keine zusätzlichen Vermittlungsgebühren – Sie buchen direkt beim Vermieter.",
    },
    {
      icon: "💬",
      title: "Persönlicher Kontakt",
      text: "Schnelle Antworten per WhatsApp, Telefon oder E-Mail – direkt vom Eigentümer.",
    },
    {
      icon: "🏊",
      title: "Privater Pool",
      text: "Genießen Sie den Pool exklusiv mit Ihrer Familie oder Ihren Freunden.",
    },
    {
      icon: "🏡",
      title: "Komfort für bis zu 6 Gäste",
      text: "Modern ausgestattete Villa mit Außenküche, Grill und mediterranem Garten.",
    },
    {
      icon: "📍",
      title: "Top-Lage in Istrien",
      text: "Nur wenige Minuten von traumhaften Stränden, Pula und Rovinj entfernt.",
    },
    {
      icon: "⭐",
      title: "Mit Liebe gepflegt",
      text: "Als private Vermieter legen wir großen Wert auf Sauberkeit, Komfort und persönlichen Service.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-slate-900">
            Warum direkt bei uns buchen?
          </h2>

          <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
            Genießen Sie einen entspannten Urlaub in unserer Villa Talija –
            ohne Vermittlungsgebühren und mit persönlichem Service.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}