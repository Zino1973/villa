import privacyHtml from "./privacy";

export const metadata = {
  title: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-pink-600 font-semibold">
            Rechtliches
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-900">
            Datenschutzerklärung
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            House Villa Talija · Hreljići · Istrien
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10">
          <div
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: privacyHtml }}
          />
        </div>
      </div>
    </main>
  );
}