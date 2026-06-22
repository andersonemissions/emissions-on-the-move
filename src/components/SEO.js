import React from "react";

const SITE_URL = "https://www.emissionsonthemove.com";
const SOCIAL_IMAGE = `${SITE_URL}/eotm_with_car_and_employees.jpeg`;

export const routeMetadata = {
  "/": {
    title: "Mobile Emissions Testing in Utah County | Emissions on the Move",
    description:
      "Skip the lines. Emissions on the Move brings certified mobile emissions testing to your home or work anywhere in Utah County. Book online or call (385) 392-6701.",
  },
  "/pricing/": {
    title: "Emissions Testing Prices from $60 | Emissions on the Move",
    description:
      "Affordable mobile emissions testing in Utah County. Flexible 2-hour window for $60, exact appointment time for $70, additional vehicles $40 each. No hidden fees.",
  },
  "/faq/": {
    title: "Emissions Testing FAQ | Emissions on the Move",
    description:
      "Answers to common questions about mobile emissions testing in Utah County: service area, whether you need to be present, failed tests, fleet services, and more.",
  },
  "/book-now/": {
    title: "Book Mobile Emissions Testing in Utah County | Emissions on the Move",
    description:
      "Book your mobile emissions test online. Choose an exact appointment time or a flexible 2-hour window and we'll come to you anywhere in Utah County.",
  },
  "/contact/": {
    title: "Contact Us | Emissions on the Move",
    description:
      "Contact Emissions on the Move for mobile emissions testing in Utah County. Call or text (385) 392-6701, email andersonemissions@gmail.com, or send us a message.",
  },
};

const normalizePath = (path) => {
  if (!path || path === "/") return "/";
  return `${path.replace(/\/+$/, "")}/`;
};

const businessSchema = {
  "@type": "AutomotiveBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Emissions on the Move",
  description:
    "Mobile vehicle emissions testing serving all of Utah County, Utah. We come to your home or work.",
  url: `${SITE_URL}/`,
  telephone: "+1-385-392-6701",
  email: "andersonemissions@gmail.com",
  image: SOCIAL_IMAGE,
  logo: `${SITE_URL}/logo.png`,
  priceRange: "$$",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Utah County, Utah",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Provo",
    addressRegion: "UT",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.2338,
    longitude: -111.6585,
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 40.2338,
      longitude: -111.6585,
    },
    geoRadius: 40000,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://instagram.com/emissionsonthemove",
    "https://www.facebook.com/profile.php?id=61590274666347",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile emissions testing appointments",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Flexible Window Mobile Emissions Test",
        priceCurrency: "USD",
        price: "60",
      },
      {
        "@type": "Offer",
        name: "Exact Time Mobile Emissions Test",
        priceCurrency: "USD",
        price: "70",
      },
    ],
  },
};

const SEO = ({ path, structuredData }) => {
  const canonicalPath = normalizePath(path);
  const metadata = routeMetadata[canonicalPath] || routeMetadata["/"];
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const graph = [
    businessSchema,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Emissions on the Move",
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: metadata.title,
      description: metadata.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en-US",
    },
    ...(structuredData ? [structuredData] : []),
  ];

  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Emissions on the Move" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={SOCIAL_IMAGE} />
      <meta property="og:image:width" content="2048" />
      <meta property="og:image:height" content="1536" />
      <meta property="og:image:alt" content="Emissions on the Move mobile testing team and service vehicle" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={SOCIAL_IMAGE} />
      <meta name="twitter:image:alt" content="Emissions on the Move mobile testing team and service vehicle" />

      <script type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}
      </script>
    </>
  );
};

export default SEO;
