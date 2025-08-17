// app/lasalle/page.jsx  (rename the route to match your structure)

import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";
import LaSalleGallery from "./la-salle";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const CANONICAL = `${SITE_URL}/lasalle`; // e.g., /projects/lasalle-park-retirement
const OG_IMAGE = `${SITE_URL}/og/lasalle.jpg`;

export const metadata = {
  title: "LaSalle Park Retirement — Lobby, Corridor & Amenity Painting | Burlington",
  description:
    "Professional repainting and finishes at LaSalle Park Retirement in Burlington. Lobby, corridors, suites, and amenity spaces refreshed with durable low-VOC coatings and crisp trim.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "LaSalle Park Retirement — Lobby, Corridor & Amenity Painting | Burlington",
    description:
      "See our painting work at LaSalle Park Retirement: lobby, corridors, suites, and amenities with modern finishes.",
    siteName: "Classic Contracting",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "LaSalle Park Retirement lobby with modern neutral paint and trim",
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
    name: "LaSalle Park Retirement",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Burlington",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    url: CANONICAL,
    image: OG_IMAGE,
    brand: "Classic Contracting",
    description:
      "Painting project at LaSalle Park Retirement in Burlington: lobby, corridors, suites, and amenity spaces refreshed with durable low-VOC finishes.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function LaSallePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* SR-only H1 for SEO clarity */}
        <h1 className="sr-only">
          LaSalle Park Retirement — Lobby, Corridor & Amenity Painting in Burlington
        </h1>

        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <LaSalleGallery />
        </SectionBackground>
      </main>

      <SiteFooter />

      <JsonLd />
    </div>
  );
}
