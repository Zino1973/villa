export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VacationRental",

    name: "House Villa Talija",

    description:
      "Exklusive Ferienvilla mit privatem Pool in Hreljići, Istrien, Kroatien. Bis zu 6 Gäste, WLAN, Außenküche, Napoleon Grill und Direktbuchung.",

    url: "https://www.housevillatalija.de",

    image: [
      "https://www.housevillatalija.de/opengraph-image.png",
      "https://www.housevillatalija.de/Pool887.jpeg",
      "https://www.housevillatalija.de/Villa.jpeg",
      "https://www.housevillatalija.de/Carport.jpeg"
    ],

    telephone: "+4917635863392",

    email: "mailto:zinner123@outlook.de",

    priceRange: "€€",

    petsAllowed: false,

    smokingAllowed: false,

    numberOfRooms: 3,

    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 6,
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
        name: "Außenküche",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Napoleon Gasgrill",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Parkplatz",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Smart TV",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Waschmaschine",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Geschirrspüler",
        value: true,
      }
    ],

    address: {
      "@type": "PostalAddress",
      addressLocality: "Hreljići",
      addressRegion: "Istrien",
      postalCode: "52207",
      addressCountry: "HR",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.010,
      longitude: 14.005,
    },

    containsPlace: {
      "@type": "Accommodation",
      numberOfRooms: 3,
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: 6,
      },
    },

    checkinTime: "16:00",

    checkoutTime: "10:00",

    sameAs: [
      "https://www.instagram.com/villa.talija",
      "https://www.airbnb.de/"
    ],

    author: {
      "@type": "Person",
      name: "Christian Zinner",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}