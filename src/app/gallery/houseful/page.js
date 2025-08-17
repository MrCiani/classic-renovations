// app/houseful-homes/page.jsx


import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";
import HousefulGallery from "./houseful";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const CANONICAL = `${SITE_URL}/houseful-homes`;
const OG_IMAGE = `${SITE_URL}/og/houseful-homes.jpg`;

export const metadata = {
  title: "Houseful Homes — Residential Painting Gallery | Classic Contracting",
  description:
    "Houseful Homes: a curated gallery of residential interiors and exteriors—fresh walls, doors, and trim—finished with durable low-VOC coatings.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Houseful Homes — Residential Painting Gallery",
    description:
      "See recent Houseful Homes projects: living rooms, kitchens, bedrooms, hallways, and exteriors with crisp paint and clean trim.",
    siteName: "Classic Contracting",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Houseful Homes — freshly painted living room with crisp white trim",
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
    "@type": "WebPage",
    name: "Houseful Homes — Residential Painting Gallery",
    url: CANONICAL,
    image: OG_IMAGE,
    description:
      "Gallery of Houseful Homes residential painting by Classic Contracting: interiors, exteriors, walls, doors, and trim.",
    publisher: {
      "@type": "Organization",
      name: "Classic Contracting",
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HousefulHomesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* SR-only H1 keeps the visual clean but gives search engines a clear topic */}
        <h1 className="sr-only">Houseful Homes — Residential Painting Gallery</h1>

        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <HousefulGallery />
        </SectionBackground>
      </main>

      <SiteFooter />
      <JsonLd />
    </div>
  );
}
