export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "House Villa Talija",
    url: "https://www.housevillatalija.de",
    image: "https://www.housevillatalija.de/opengraph-image.png",
    telephone: "+4917635863392",
    email: "zinner123@outlook.de",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hreljići",
      addressRegion: "Istrien",
      addressCountry: "HR"
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", "name": "Privater Pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "WLAN", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Napoleon Grill", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Tischtennis", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Dart", "value": true }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}