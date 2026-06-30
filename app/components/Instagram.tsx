import Image from "next/image";

const posts = [
  {
    image: "/images/Pool999.jpeg",
    alt: "Pool Villa Talija",
  },
  {
    image: "/images/Nacht-3.jpeg",
    alt: "Villa bei Nacht",
  },
  {
    image: "/images/garten88.jpeg",
    alt: "Garten",
  },
  {
    image: "/images/Villa.jpeg",
    alt: "Villa Talija",
  },
  {
    image: "/images/Villa-Titel1.jpeg",
    alt: "Terrasse",
  },
  {
    image: "/images/Pool-nacht88.jpeg",
    alt: "Pool am Abend",
  },
];

export default function Instagram() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-pink-600 font-semibold">
            Instagram
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Momente aus der Villa Talija
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Folgen Sie uns auf Instagram und entdecken Sie aktuelle Eindrücke
            aus unserer Ferienvilla in Istrien.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {posts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/villa.talija"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-3xl shadow-xl"
            >
              <Image
                src={post.image}
                alt={post.alt}
                width={800}
                height={800}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </a>
          ))}

        </div>

        <div className="mt-16 text-center">

          <a
            href="https://www.instagram.com/villa.talija"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-10 py-5 text-xl font-bold text-white shadow-2xl hover:scale-105 transition"
          >
            📷 @villa.talija folgen
          </a>

          <p className="mt-5 text-slate-500">
            Tägliche Eindrücke • Pool • Strände • Sonnenuntergänge • Urlaub in Istrien
          </p>

        </div>

      </div>
    </section>
  );
}