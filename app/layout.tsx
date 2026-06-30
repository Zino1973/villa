import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import Schema from "./schema";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.housevillatalija.de"),

  verification: {
    google: "6V_cupEDPfQ0LysAcWvhjx7wmIs6UFlzmnA_YQUY88o",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },

  title: {
    default: "House Villa Talija | Ferienhaus mit Pool in Istrien",
    template: "%s | House Villa Talija",
  },

  description:
    "Exklusive Ferienvilla mit privatem Pool in Hreljići, Istrien (Kroatien). Bis zu 6 Gäste, WLAN, Außenküche, Napoleon Grill und Direktbuchung ohne Vermittlungsgebühren.",

  keywords: [
    "House Villa Talija",
    "Villa Talija",
    "Ferienhaus Kroatien",
    "Ferienhaus Istrien",
    "Ferienhaus Hreljići",
    "Ferienhaus Pula",
    "Ferienhaus Rovinj",
    "Villa Kroatien",
    "Villa Istrien",
    "Villa mit Pool Kroatien",
    "Ferienvilla Kroatien",
    "Luxusvilla Kroatien",
    "Poolvilla Kroatien",
    "Ferienhaus mit privatem Pool",
    "Ferienhaus privat",
    "Direktbuchung Ferienhaus",
    "Urlaub Istrien",
    "Urlaub Kroatien",
    "Ferienunterkunft Istrien",
    "Familienurlaub Kroatien",
    "Villa für 6 Personen",
    "Napoleon Grill",
    "Außenküche",
    "Privater Pool",
    "WLAN",
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
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "House Villa Talija",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "House Villa Talija",
    description: "Ferienvilla mit privatem Pool in Istrien.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <Script
          id="ccm19"
          src="https://cloud.ccm19.de/app.js?apiKey=cb954cac4f31c4113538686110829884f148253a6c3af44a&domain=6a4421518689c8517b03b604"
          strategy="beforeInteractive"
          referrerPolicy="origin"
        />
      </head>

      <body>
        <GoogleAnalytics />
        <Schema />
        {children}
      </body>
    </html>
  );
}