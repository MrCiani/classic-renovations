// app/services/exterior/page.jsx

import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";
import ExteriorFAQSection from "./faq-exterior";               // ← exterior FAQ
import ExteriorServicesMenu from "./exterior-services";     // ← exterior services grid/accordion
import ExteriorTrustSection from "./exterior-trust";
import ExteriorBentoHero from "./exterior-hero";            // ← exterior hero
import ExteriorWhatToExpectCC from "./exterior-whattoexpect";
import ExteriorBeforeAfter from "./beforeafter";
import ExteriorProjectHighlights from "./view-projects";       // ← exterior projects carousel

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const CANONICAL = `${SITE_URL}/services/exterior`;
const OG_IMAGE = `${SITE_URL}/og/exterior-painting.jpg`; // replace with your real OG image

// --- SEO Meta ---
export const metadata = {
  title: "Exterior Painting — Siding, Stucco, Brick & Trim | Classic Contracting",
  description:
    "Durable exterior painting for homes, condos, and multi-unit properties. Clean prep, weather-rated coatings for siding, stucco, brick, trim, doors, decks & fences.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Exterior Painting — Siding, Stucco, Brick & Trim | Classic Contracting",
    description:
      "Weather-rated systems, crisp lines, and clean sites across the GTA. See our exterior painting scopes and recent project work.",
    siteName: "Classic Contracting",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Exterior painting hero — siding and trim with crisp lines and clean prep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Painting — Siding, Stucco, Brick & Trim",
    description:
      "Clean prep, durable finishes, and schedule-friendly delivery for exterior surfaces.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, maxSnippet: -1, maxImagePreview: "large", maxVideoPreview: -1 },
  },
};

// --- JSON-LD ---
function JsonLd() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Exterior Painting",
    areaServed: { "@type": "Place", name: "Greater Toronto Area" },
    provider: { "@type": "Organization", name: "Classic Contracting", url: SITE_URL },
    serviceType: "Exterior Painting",
    description:
      "Exterior prep and coatings for siding, stucco, brick, trim, doors, decks and fences using weather-rated systems.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Exterior Painting Scopes",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Siding & Trim" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stucco, Brick & Masonry" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Decks, Fences & Railings" } },
      ],
    },
    url: CANONICAL,
    image: OG_IMAGE,
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do you prepare exterior surfaces?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We wash as appropriate, scrape and sand failing paint, spot-prime bare areas, caulk gaps, and mask windows, brick, landscaping, and fixtures for a clean site.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work around weather and seasonal conditions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We schedule within manufacturer temperature ranges and monitor rain and wind. If conditions change, we pause and return so coatings cure properly.",
        },
      },
      {
        "@type": "Question",
        name: "What exterior coatings do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We specify premium exterior acrylic/urethane systems matched to substrate—wood, fiber-cement, stucco, brick, and metal. Low/zero-VOC and elastomeric options are available.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

export default function ExteriorServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* sr-only H1 for semantic clarity */}
        <h1 className="sr-only">Exterior Painting Services — Siding, Stucco, Brick & Trim</h1>

        {/* HERO + TRUST */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <ExteriorBentoHero />

          <ExteriorTrustSection/>

          
        </SectionBackground>

        {/* SERVICES */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <ExteriorServicesMenu />
        </SectionBackground>

        {/* PROCESS + AREAS + PROJECTS */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <ExteriorWhatToExpectCC />
          </SectionBackground>
          <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <ExteriorProjectHighlights />
         <ExteriorBeforeAfter/> 
         </SectionBackground>
        

        {/* FAQ */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <ExteriorFAQSection />
        </SectionBackground>
      </main>

      <SiteFooter />
      <JsonLd />
    </div>
  );
}
