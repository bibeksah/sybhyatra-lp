import Script from "next/script"

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SubhYatra",
    legalName: "Sankat Mochan Sajilo Yatra Pvt. Ltd.",
    url: "https://subhyatra.com",
    logo: "https://subhyatra.com/logo.svg",
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      name: "Nepal",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+977-9855042503",
      contactType: "customer service",
      email: "contact@subhyatranepal.com",
      availableLanguage: ["English", "Nepali"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressRegion: "Nepal",
    },
    sameAs: ["https://www.facebook.com/share/1Pm49zVepf/", "https://x.com/SubhYatraNepal", "https://www.instagram.com/SubhYatraNepal"],
    description:
      "Nepal's first truly local ride-booking app. Built in Nepal for Nepal, featuring AI-powered matching and advanced safety features.",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SubhYatra",
    url: "https://subhyatra.com",
    description:
      "Nepal's local ride-booking app coming soon. Join the waitlist for a truly Nepali transportation experience.",
    inLanguage: ["en", "ne"],
    isAccessibleForFree: true,
    publisher: {
      "@type": "Organization",
      name: "SubhYatra",
    },
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SubhYatra",
    description:
      "Nepal's first truly local ride-booking mobile application with AI-powered matching, dual-mode functionality, and advanced safety features.",
    applicationCategory: "TransportationApplication",
    operatingSystem: ["iOS", "Android"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NPR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "1000",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "SubhYatra",
    },
    datePublished: "2026-01-26",
    softwareVersion: "1.0",
    releaseNotes: "Initial launch of Nepal's local ride-booking app",
  }

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "SubhYatra App Launch",
    description: "The official launch of Nepal's first truly local ride-booking application",
    startDate: "2026-01-26T00:00:00+05:45",
    endDate: "2026-01-26T23:59:59+05:45",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: "https://subhyatra.com",
    },
    organizer: {
      "@type": "Organization",
      name: "SubhYatra",
      url: "https://subhyatra.com",
    },
    offers: {
      "@type": "Offer",
      url: "https://subhyatra.com",
      price: "0",
      priceCurrency: "NPR",
      availability: "https://schema.org/InStock",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://subhyatra.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Waitlist",
        item: "https://subhyatra.com#waitlist-form",
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="software-application-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
