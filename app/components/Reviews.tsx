export default function Reviews() {
  const reviews = [
    {
      name: "★★★★★",
      title: "Wunderschöne Villa",
      text:
        "Ein traumhaftes Ferienhaus mit großem Pool, moderner Ausstattung und viel Privatsphäre. Wir kommen gerne wieder!",
    },
    {
      name: "★★★★★",
      title: "Perfekter Familienurlaub",
      text:
        "Sehr gepflegt, tolle Außenküche und alles vorhanden, was man für einen entspannten Urlaub braucht.",
    },
    {
      name: "★★★★★",
      title: "Top Gastgeber",
      text:
        "Schnelle Kommunikation, unkomplizierte Anreise und eine wunderschöne Villa in ruhiger Lage.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Das sagen unsere Gäste
          </h2>

          <p className="mt-4 text-xl text-slate-500">
            Erholung, Komfort und unvergessliche Urlaubstage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {review.title}
              </h3>

              <p className="text-slate-600 leading-8">
                {review.text}
              </p>

              <div className="mt-6 font-semibold text-slate-800">
                {review.name}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}