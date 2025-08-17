// app/strata/page.jsx  (rename the route to match your structure)

import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";
import StrataGreenLife from "./strata-greenlife";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const CANONICAL = `${SITE_URL}/strata`; // e.g., /projects/strata-greenlife
const OG_IMAGE = `${SITE_URL}/og/strata.jpg`;

export const metadata = {
  title: "Strata — Greenlife Golden Condos (7400 Markham Rd) | Lobby, Corridor & Suite Painting | Markham",
  description:
    "Professional repainting and finishes at Strata — Greenlife Golden Condos in Markham. Lobby, corridors, suites, and amenity spaces refreshed with durable low-VOC coatings and crisp trim.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title:
      "Strata — Greenlife Golden Condos (7400 Markham Rd) | Lobby, Corridor & Suite Painting | Markham",
    description:
      "See our painting work at Strata: lobby, corridors, suites, and amenities with modern finishes.",
    siteName: "Classic Contracting",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Strata — Greenlife Golden Condos lobby with modern neutral paint and trim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "Strata — Greenlife Golden Condos (7400 Markham Rd)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Markham",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    url: CANONICAL,
    image: OG_IMAGE,
    brand: "Classic Contracting",
    description:
      "Painting project at Strata — Greenlife Golden Condos in Markham: lobby, corridors, suites, and amenity spaces refreshed with durable low-VOC finishes.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function StrataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* SR-only H1 for clarity */}
        <h1 className="sr-only">
          Strata — Greenlife Golden Condos (7400 Markham Rd) | Lobby, Corridor & Suite Painting in Markham
        </h1>

        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <StrataGreenLife />
        </SectionBackground>
      </main>

      <SiteFooter />

      <JsonLd />
    </div>
  );
}
