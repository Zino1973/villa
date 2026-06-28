import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.housevillatalija.de"),

  title: {
    default: "House Villa Talija | Ferienhaus mit Pool in Istrien",
    template: "%s | House Villa Talija",
  },

  description:
    "Exklusive Ferienvilla mit privatem Pool in Hreljići, Istrien (Kroatien). Bis zu 6 Gäste, WLAN, Außenküche, Napoleon Grill und Direktbuchung ohne Vermittlungsgebühren.",

  keywords: [
    "Ferienhaus Kroatien",
    "Ferienhaus Istrien",
    "Villa Istrien",
    "Villa mit Pool",
    "Ferienvilla Kroatien",
    "Hreljići",
    "Pula",
    "Rovinj",
    "Urlaub Kroatien",
    "Direktbuchung",
    "House Villa Talija",
  ],

  authors: [
    {
      name: "Christian Zinner",
    },
  ],

  creator: "Christian Zinner",

  publisher: "House Villa Talija",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.housevillatalija.de",
    siteName: "House Villa Talija",

    title: "House Villa Talija | Ferienhaus mit Pool in Istrien",

    description:
      "Moderne Ferienvilla mit privatem Pool in Hreljići, Istrien. Ideal für bis zu 6 Gäste.",

    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "House Villa Talija",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "House Villa Talija",

    description:
      "Ferienvilla mit privatem Pool in Istrien.",

    images: ["/images/hero.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}