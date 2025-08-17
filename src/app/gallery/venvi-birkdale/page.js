// app/condos-and-apartments/page.jsx

import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";
import VenviBirkdaleGallery from "./venvi-birkdale";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const CANONICAL = `${SITE_URL}/condos-and-apartments`;
const OG_IMAGE = `${SITE_URL}/og/venvi-birkdale.jpg`; // 🔎 replace with a real OG image

// --- SEO Meta ---
export const metadata = {
  title: "Venvi Birkdale Place — Lobby, Corridor & Amenity Painting | Milton",
  description:
    "Professional repainting and finishes at Venvi Birkdale Place in Milton, ON. Lobby, corridors, suites, and amenity spaces refreshed with durable low-VOC coatings and crisp trim work.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Venvi Birkdale Place — Lobby, Corridor & Amenity Painting | Milton",
    description:
      "Explore our painting project at Venvi Birkdale Place in Milton: lobbies, corridors, suites, and amenity spaces with modern finishes.",
    siteName: "Classic Contracting",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Venvi Birkdale Place lobby with modern paint and finishes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venvi Birkdale Place — Lobby, Corridor & Amenity Painting | Milton",
    description:
      "Painting and finishing project at Venvi Birkdale Place in Milton: suites, corridors, and amenity spaces.",
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
    "@type": "ApartmentComplex",
    name: "Venvi Birkdale Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Milton",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    url: CANONICAL,
    image: OG_IMAGE,
    brand: "Classic Contracting",
    description:
      "Painting project at Venvi Birkdale Place in Milton: lobby, corridors, suites, and amenity spaces refreshed with durable low-VOC finishes.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function CondosAndApartments() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* sr-only H1 for SEO clarity */}
        <h1 className="sr-only">
          Venvi Birkdale Place — Lobby, Corridor & Amenity Painting in Milton
        </h1>

        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <VenviBirkdaleGallery />
        </SectionBackground>
      </main>

      <SiteFooter />

      {/* JSON-LD */}
      <JsonLd />
    </div>
  );
}
