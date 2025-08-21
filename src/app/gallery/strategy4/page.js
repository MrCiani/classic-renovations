// app/projects/interior/page.jsx

import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";
import InteriorPaintingGallery from "./strategy4";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const CANONICAL = `${SITE_URL}/projects/interior`;
const OG_IMAGE = `${SITE_URL}/og/interior-painting.jpg`; // ← set a real image

// --- SEO Meta ---
export const metadata = {
  title: "Interior Painting — Offices, Clinics & Retail | Classic Contracting",
  description:
    "Professional interior painting for offices, clinics, and retail: walls, ceilings, doors & trim, corridors, and reception areas. Durable low-VOC coatings and clean finishes.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Interior Painting — Offices, Clinics & Retail | Classic Contracting",
    description:
      "Explore our interior painting projects: reception areas, corridors, suites, and amenity spaces with crisp lines and durable finishes.",
    siteName: "Classic Contracting",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Interior painting—reception and corridor with fresh neutral walls and clean trim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Painting — Offices, Clinics & Retail | Classic Contracting",
    description:
      "Walls, ceilings, doors & trim, corridors, and reception areas—professional interior repainting with low-VOC coatings.",
    images: [OG_IMAGE],
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

// --- JSON-LD ---
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Interior Painting — Offices, Clinics & Retail",
    url: CANONICAL,
    image: OG_IMAGE,
    description:
      "Gallery of interior painting projects including reception areas, corridors, boardrooms, suites, and amenity spaces.",
    about: {
      "@type": "Service",
      name: "Interior Painting",
      provider: {
        "@type": "Organization",
        name: "Classic Contracting",
      },
      areaServed: {
        "@type": "Place",
        name: "Greater Toronto Area",
      },
      serviceType: "Interior Painting",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function InteriorProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* sr-only H1 for SEO clarity */}
        <h1 className="sr-only">
          Interior Painting — Offices, Clinics & Retail
        </h1>

        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <InteriorPaintingGallery />
        </SectionBackground>
      </main>

      <SiteFooter />

      {/* JSON-LD */}
      <JsonLd />
    </div>
  );
}
