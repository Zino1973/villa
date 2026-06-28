import Image from "next/image";

const cards = [
  {
    title: "Privater Pool",
    text: "Genieße entspannte Urlaubstage am großen Pool mit Sonnenliegen und viel Privatsphäre.",
    image: "/images/Pool-5.jpeg",
  },
  {
    title: "Moderne Villa",
    text: "Hochwertige Ausstattung, helle Räume und modernes Design für bis zu 6 Gäste.",
    image: "/images/Villa.jpeg",
  },
  {
    title: "Traumhafte Lage",
    text: "Nur wenige Minuten zu den schönsten Stränden Istriens und den Highlights rund um Pula.",
    image: "/images/Sonneauf.jpeg",
  },
];

export default function WhyUs() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-5">
          Warum House Villa Talija?
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Erholung, Komfort und mediterranes Flair – perfekt für Familien,
          Freunde und alle, die Istrien von seiner schönsten Seite erleben
          möchten.
        </p>

        <div className="grid lg:grid-cols-3 gap-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-3xl shadow-xl bg-white hover:shadow-2xl transition"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={900}
                height={600}
                className="w-full h-64 object-cover"
                unoptimized
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}