export default function Schema() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "VacationRental",

      name: "House Villa Talija",

      description:
        "Exklusive Ferienvilla mit privatem Pool in Hreljići, Istrien, Kroatien. Für bis zu 6 Gäste.",

      url: "https://www.housevillatalija.de",

      image: [
        "https://www.housevillatalija.de/opengraph-image.png",
        "https://www.housevillatalija.de/Pool887.jpeg",
        "https://www.housevillatalija.de/Villa.jpeg",
        "https://www.housevillatalija.de/Carport.jpeg"
      ],

      telephone: "+4917635863392",

      email: "zinner123@outlook.de",

      priceRange: "€€",

      petsAllowed: false,

      smokingAllowed: false,

      checkinTime: "16:00",

      checkoutTime: "10:00",

      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: 6,
      },

      address: {
        "@type": "PostalAddress",
        addressLocality: "Hreljići",
        postalCode: "52207",
        addressRegion: "Istria",
        addressCountry: "HR",
      },

      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Privater Pool",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "WLAN",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Klimaanlage",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Napoleon Gasgrill",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Außenküche",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Parkplatz",
          value: true,
        },
      ],

      sameAs: [
        "https://www.instagram.com/villa.talija",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startseite",
          item: "https://www.housevillatalija.de",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",
          name: "Wie viele Personen können in der House Villa Talija übernachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Die Villa bietet Platz für bis zu 6 Gäste.",
          },
        },
        {
          "@type": "Question",
          name: "Hat die Villa einen privaten Pool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, die Villa verfügt über einen großen privaten Pool.",
          },
        },
        {
          "@type": "Question",
          name: "Gibt es kostenloses WLAN?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, im gesamten Haus steht kostenloses WLAN zur Verfügung.",
          },
        },
        {
          "@type": "Question",
          name: "Ist ein Grill vorhanden?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, ein hochwertiger Napoleon Gasgrill steht den Gästen zur Verfügung.",
          },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}