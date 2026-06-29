import Image from "next/image";
import {
  Umbrella,
  UtensilsCrossed,
  Bike,
  Landmark,
} from "lucide-react";

const highlights = [
  {
    title: "Traumstrände",
    text: "Duga Uvala, Kalavojna Beach und viele weitere traumhafte Buchten sind in wenigen Minuten erreichbar.",
    image: "/images/Traumstrand.jpeg",
    icon: Umbrella,
  },
  {
    title: "Kulinarik",
    text: "Traditionelle Konobas, frischer Fisch, Grillrestaurants und ausgezeichnete Weine machen Istrien zu einem Paradies für Genießer.",
    image: "/images/Kulinar.jpeg",
    icon: UtensilsCrossed,
  },
  {
    title: "Aktivurlaub",
    text: "Radfahren, Wandern, Bootsausflüge, Schnorcheln und Wassersport bieten unvergessliche Erlebnisse für die ganze Familie.",
    image: "/images/Aktivurlaub.jpeg",
    icon: Bike,
  },
  {
    title: "Sehenswürdigkeiten",
    text: "Entdecke die Arena Pula, Rovinj, Kap Kamenjak, die Brijuni-Inseln und viele weitere Highlights.",
    image: "/images/Sehens.jpeg",
    icon: Landmark,
  },
];

export default function Highlights() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900">
            Entdecke Istrien
          </h2>

          <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
            Rund um die House Villa Talija erwarten dich traumhafte Strände,
            kulinarische Highlights, abwechslungsreiche Aktivitäten und
            weltberühmte Sehenswürdigkeiten.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

                </div>

                <div className="p-7">

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {item.text}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}