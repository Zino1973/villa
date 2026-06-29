"use client";

import Script from "next/script";

export default function Cookiebot() {
  return (
    <Script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid="c2c248d5-6251-4921-82db-2c7e924df109"
      data-blockingmode="auto"
      strategy="afterInteractive"
    />
  );
}