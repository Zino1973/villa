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
            className="
              max-w-none
              text-slate-800
              leading-8

              [&_h1]:text-4xl
              [&_h1]:font-bold
              [&_h1]:text-slate-900
              [&_h1]:mb-8

              [&_h2]:text-3xl
              [&_h2]:font-bold
              [&_h2]:text-slate-900
              [&_h2]:mt-10
              [&_h2]:mb-4

              [&_h3]:text-2xl
              [&_h3]:font-semibold
              [&_h3]:text-slate-800
              [&_h3]:mt-8
              [&_h3]:mb-3

              [&_p]:text-slate-700
              [&_p]:leading-8
              [&_p]:mb-4

              [&_ul]:list-disc
              [&_ul]:pl-6
              [&_ul]:mb-6

              [&_ol]:list-decimal
              [&_ol]:pl-6
              [&_ol]:mb-6

              [&_li]:text-slate-700
              [&_li]:mb-2

              [&_strong]:text-slate-900
              [&_strong]:font-semibold

              [&_a]:text-blue-600
              [&_a]:underline
              [&_a:hover]:text-blue-800

              [&_table]:w-full
              [&_table]:border-collapse

              [&_td]:border
              [&_td]:border-slate-200
              [&_td]:p-2

              [&_th]:border
              [&_th]:border-slate-200
              [&_th]:bg-slate-100
              [&_th]:p-2
            "
            dangerouslySetInnerHTML={{ __html: privacyHtml }}
          />
        </div>
      </div>
    </main>
  );
}