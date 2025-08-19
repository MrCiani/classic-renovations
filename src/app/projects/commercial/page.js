// app/commercial/page.jsx

import CommercialProjectsPage from "./commercial";
import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const CANONICAL = `${SITE_URL}/commercial`;
const OG_IMAGE = `${SITE_URL}/og/commercial.jpg`;

export const metadata = {
  title: "Commercial Painting Projects | Classic Contracting",
  description:
    "See our commercial painting projects across Toronto & the GTA — offices, corridors, retail units, and high-traffic spaces with durable, low-VOC finishes.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Commercial Painting Projects | Classic Contracting",
    description:
      "Professional commercial painting by Classic Contracting: crisp lines, durable coatings, and efficient delivery across the GTA.",
    siteName: "Classic Contracting",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Freshly painted commercial corridor with clean walls and trim",
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
    "@type": "LocalBusiness",
    name: "Commercial Painting Projects",
    url: CANONICAL,
    image: OG_IMAGE,
    brand: "Classic Contracting",
    description:
      "Commercial interior and exterior painting in Toronto & the GTA — offices, retail, and multi-unit common areas.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Toronto Area",
    },
    serviceType: "Commercial Painting",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function CommercialProjectsPageWrapper() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* SR-only H1 for SEO clarity */}
        <h1 className="sr-only">Commercial Painting Projects in Toronto & the GTA</h1>

        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <CommercialProjectsPage />
        </SectionBackground>
      </main>

      <SiteFooter />
      <JsonLd />
    </div>
  );
}
