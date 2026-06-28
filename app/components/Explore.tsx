import Image from "next/image";
import ExploreMap from "./ExploreMap";

const places = [
  {
    title: "Arena Pula",
    text: "Das beeindruckende römische Amphitheater gehört zu den Wahrzeichen Istriens.",
    image: "/images/pula-arena.jpg",
  },
  {
    title: "Kap Kamenjak",
    text: "Kristallklares Wasser, Felsküsten und traumhafte Buchten.",
    image: "/images/kamenjak.jpg",
  },
  {
    title: "Duga Uvala",
    text: "Einer der schönsten Strände in der Nähe der House Villa Talija.",
    image: "/images/duga-uvala.jpg",
  },
];

export default function Explore() {
  return (
    <section id="explore" className="bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Entdecke Istrien
          </h2>

          <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
            Rund um die House Villa Talija warten traumhafte Strände,
            historische Städte und unvergessliche Ausflugsziele.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {places.map((place) => (
            <div
              key={place.title}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
            >
              <Image
                src={place.image}
                alt={place.title}
                width={900}
                height={600}
                className="w-full h-64 object-cover"
                unoptimized
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {place.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {place.text}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* Interaktive Karte */}

        <ExploreMap />

      </div>
    </section>
  );
}