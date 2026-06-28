import Image from "next/image";

const highlights = [
  {
    title: "Traumstrände",
    text: "Duga Uvala, Kalavojna Beach und viele weitere Buchten sind in wenigen Minuten erreichbar.",
    image: "/images/Pool-4.jpeg",
  },
  {
    title: "Kulinarik",
    text: "Konobas, Grillrestaurants und frischer Fisch aus Istrien – ein Paradies für Genießer.",
    image: "/images/Essbereich-1.jpeg",
  },
  {
    title: "Aktivurlaub",
    text: "Radfahren, Wandern, Bootsausflüge, Schnorcheln und Wassersport direkt in der Umgebung.",
    image: "/images/garten88.jpeg",
  },
  {
    title: "Sehenswürdigkeiten",
    text: "Arena Pula, Rovinj, Kap Kamenjak, Brijuni und viele weitere Highlights warten auf dich.",
    image: "/images/Villa.jpeg",
  },
];

export default function Highlights() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Entdecke Istrien
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {highlights.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >

              <div className="relative h-60">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  unoptimized
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}