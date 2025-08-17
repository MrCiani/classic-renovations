// app/delinda/page.jsx  (rename the route as you prefer)

import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";
import DelindaCondo from "./delinda-condo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const CANONICAL = `${SITE_URL}/delinda`; // ← adjust to your actual route (e.g. /projects/delinda-team)
const OG_IMAGE = `${SITE_URL}/og/delinda.jpg`; // ← replace with a real OG image

export const metadata = {
  title: "30 Old Mill — Riverhouse Condos | Lobby, Corridor & Amenity Painting | Toronto",
  description:
    "Professional repainting and finishes at Riverhouse Condos (30 Old Mill, Toronto). Lobby, corridors, suites, and amenity spaces refreshed with durable low-VOC coatings and crisp trim.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "30 Old Mill — Riverhouse Condos | Lobby, Corridor & Amenity Painting | Toronto",
    description:
      "See our painting project for the Delinda Team listing at Riverhouse Condos (30 Old Mill): lobby, corridors, suites, and amenities with modern finishes.",
    siteName: "Classic Contracting",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Riverhouse Condos (30 Old Mill) lobby with modern neutral paint and trim",
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
    name: "Riverhouse at the Old Mill (30 Old Mill Road)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    url: CANONICAL,
    image: OG_IMAGE,
    brand: "Classic Contracting",
    description:
      "Painting project at Riverhouse Condos (30 Old Mill, Toronto): lobby, corridors, suites, and amenity spaces refreshed with durable low-VOC finishes.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Delinda_Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* SR-only H1 for SEO clarity */}
        <h1 className="sr-only">
          30 Old Mill — Riverhouse Condos | Lobby, Corridor & Amenity Painting in Toronto
        </h1>

        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <DelindaCondo />
        </SectionBackground>
      </main>

      <SiteFooter />

      <JsonLd />
    </div>
  );
}
