const reviews = [
  {
    name: "Familie M.",
    text: "Eine wunderschöne Villa mit tollem Pool. Sehr sauber und perfekt zum Entspannen. Wir kommen wieder!",
  },
  {
    name: "Sandra & Thomas",
    text: "Ruhige Lage, hochwertige Ausstattung und ein traumhafter Außenbereich. Absolut empfehlenswert.",
  },
  {
    name: "Markus",
    text: "Die Villa ist genauso schön wie auf den Bildern. Der Grill- und Poolbereich war unser Highlight.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Das sagen unsere Gäste
        </h2>

        <p className="text-center text-gray-600 mb-14">
          Bewertungen unserer bisherigen Urlaubsgäste
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl bg-gray-50 shadow-lg p-8"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-700 leading-7">
                "{review.text}"
              </p>

              <p className="mt-6 font-bold">
                {review.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}