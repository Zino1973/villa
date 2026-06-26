import {
  Waves,
  BedDouble,
  Snowflake,
  Wifi,
  Flame,
  CookingPot,
  Trophy,
  Tv,
  Car,
  Trees,
  Users,
  ShieldCheck,
} from "lucide-react";

const features = [
  { icon: Waves, title: "Privater Pool" },
  { icon: BedDouble, title: "6 Schlafplätze" },
  { icon: Snowflake, title: "Klimaanlage" },
  { icon: Wifi, title: "Kostenloses WLAN" },
  { icon: Flame, title: "Napoleon Gasgrill" },
  { icon: CookingPot, title: "Außenküche" },
  { icon: Trophy, title: "Tischtennis & Dart" },
  { icon: Tv, title: "4 Smart TVs" },
  { icon: Car, title: "Privater Parkplatz" },
  { icon: Trees, title: "Ruhige Lage" },
  { icon: Users, title: "Familienfreundlich" },
  { icon: ShieldCheck, title: "Privates Ferienhaus" },
];

export default function Features() {
  return (
    <section id="ausstattung" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Ausstattung
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <Icon className="mx-auto mb-4 h-12 w-12 text-sky-600" />

              <h3 className="text-lg font-semibold">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}