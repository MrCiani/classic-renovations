// app/home/page.jsx

import HomeProjectsPage from "./homes"; 
import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const CANONICAL = `${SITE_URL}/home`;
const OG_IMAGE = `${SITE_URL}/og/home.jpg`;

export const metadata = {
  title: "Home Painting Projects | Classic Contracting",
  description:
    "Explore our home painting projects across Toronto & the GTA. Interior and exterior painting, trim, walls, and finishes — with detailed project galleries.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Home Painting Projects | Classic Contracting",
    description:
      "See professional home painting projects by Classic Contracting. Crisp finishes, neutral palettes, and durable coatings across Toronto & the GTA.",
    siteName: "Classic Contracting",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Freshly painted living room walls and trim in a modern Toronto home",
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
    "@type": "Residence",
    name: "Home Painting Projects",
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
      "Interior and exterior home painting projects in Toronto & the GTA by Classic Contracting. Durable finishes with professional results.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomeProjects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* SR-only H1 for SEO clarity */}
        <h1 className="sr-only">Home Painting Projects in Toronto & the GTA</h1>

        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <HomeProjectsPage />
        </SectionBackground>
      </main>

      <SiteFooter />

      <JsonLd />
    </div>
  );
}
