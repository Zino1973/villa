export default function ExploreMap() {
  const places = [
    {
      icon: "🏡",
      name: "House Villa Talija",
      distance: "Sie sind hier",
      description: "Ihre moderne Ferienvilla mit privatem Pool.",
      link: "https://maps.google.com/?q=House+Villa+Talija+Hreljici",
    },
    {
      icon: "🏖️",
      name: "Duga Uvala",
      distance: "15 Min.",
      description: "Kristallklares Wasser und schöner Familienstrand.",
      link: "https://maps.google.com/?q=Duga+Uvala",
    },
    {
      icon: "🏛️",
      name: "Arena Pula",
      distance: "30 Min.",
      description: "Das berühmte römische Amphitheater.",
      link: "https://maps.google.com/?q=Arena+Pula",
    },
    {
      icon: "🌊",
      name: "Kap Kamenjak",
      distance: "40 Min.",
      description: "Naturpark mit traumhaften Badebuchten.",
      link: "https://maps.google.com/?q=Kap+Kamenjak",
    },
    {
      icon: "🌅",
      name: "Rovinj",
      distance: "40 Min.",
      description: "Romantische Altstadt direkt am Meer.",
      link: "https://maps.google.com/?q=Rovinj",
    },
    {
      icon: "🏝️",
      name: "Rabac",
      distance: "35 Min.",
      description: "Eine der schönsten Promenaden Istriens.",
      link: "https://maps.google.com/?q=Rabac",
    },
    {
      icon: "🍕",
      name: "Konoba Nando",
      distance: "10 Min.",
      description: "Regionale istrische Küche.",
      link: "https://maps.google.com/?q=Konoba+Nando",
    },
    {
      icon: "🛒",
      name: "Lidl Pula",
      distance: "25 Min.",
      description: "Supermarkt für den Urlaubseinkauf.",
      link: "https://maps.google.com/?q=Lidl+Pula",
    },
  ];

  return (
    <section className="mt-24">

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Karte & Ausflugsziele
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Die schönsten Orte rund um die House Villa Talija.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl shadow-2xl mb-14">

        <iframe
          title="House Villa Talija"
          src="https://www.google.com/maps?q=House+Villa+Talija+Hreljici&output=embed"
          width="100%"
          height="550"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {places.map((place) => (
          <a
            key={place.name}
            href={place.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition p-8"
          >
            <div className="text-5xl mb-4">
              {place.icon}
            </div>

            <h3 className="text-2xl font-bold">
              {place.name}
            </h3>

            <p className="text-sky-600 font-semibold mt-2">
              {place.distance}
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              {place.description}
            </p>

            <div className="mt-6 text-sky-700 font-bold">
              Route starten →
            </div>
          </a>
        ))}

      </div>

    </section>
  );
}