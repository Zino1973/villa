import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="bg-white text-gray-900">

  <Navbar />

  {/* Hero */}

  {/* Hero */}

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">

        <img
          src="/images/hero.jpeg"
          alt="Villa Talija"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

          <h1 className="text-5xl md:text-7xl font-bold text-white">
            House Villa Talija
          </h1>

          <p className="mt-6 text-xl md:text-3xl text-white">
            Luxusurlaub in Istrien
            <br />
            Pool • Ruhe • Entspannung
          </p>

          <div className="mt-10 flex gap-5 flex-wrap justify-center">

            <a
              href="#galerie"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black hover:scale-105 transition"
            >
              Galerie ansehen
            </a>

            <a
              href="#kontakt"
              className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-black transition"
            >
              Jetzt anfragen
            </a>

          </div>

        </div>

      </section>

      {/* Willkommen */}

      <section className="max-w-6xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-bold text-center">
          Willkommen in der Villa Talija
        </h2>

        <p className="text-center text-gray-600 mt-6 text-lg max-w-3xl mx-auto leading-8">

          Genieße unvergessliche Urlaubstage in unserer modernen Villa
          mit privatem Pool, großer Außenküche, Tischtennis,
          ruhiger Lage und viel Platz für die ganze Familie.

        </p>

      </section>

    </main>
  );
}