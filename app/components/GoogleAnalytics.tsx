"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        id="gtag-src"
        src="https://www.googletagmanager.com/gtag/js?id=G-JEJ2VL3WLM"
        strategy="afterInteractive"
        data-cookieconsent="statistics"
      />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        data-cookieconsent="statistics"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-JEJ2VL3WLM', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}