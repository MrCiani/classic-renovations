// app/services/multi-unit/page.jsx

import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";

// PM-specific sections (you already created these)
import MultiUnitPMFAQSection from "./faq-multi";           // <- create or point to your PM FAQ
import MultiUnitPmServicesMenu from "./multi-services";       // export default matches earlier code
import MultiUnitPMTrustSection from "./multi-trust";
import HeroMultiUnitPM from "./multi-hero";
import MultiUnitPMWhatToExpectCC from "./multi-whattoexpect";
import MultiUnitPMProjectHighlights from "./view-projects";
import MultiUnitPMBeforeAfter from "./beforeafter";

// --- SEO Setup ---
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const CANONICAL = `${SITE_URL}/services/multi-unit`; // <- PM URL
const OG_IMAGE = `${SITE_URL}/og/multiunit-painting.jpg`;

export const metadata = {
  title: "Multi-Unit / Property Management Painting | Classic Contracting",
  description:
    "Suite turnovers, corridors, stairwells, and amenity spaces. Tenant-friendly scheduling, dust-controlled prep, and standardized colors across units—serving condos, rentals, and senior living across the GTA.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Multi-Unit / PM Painting | Classic Contracting",
    description:
      "Reliable, tenant-friendly repainting for property managers and condo boards: turnovers, corridors, stairwells, and amenity spaces.",
    siteName: "Classic Contracting",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Multi-unit corridor repaint — scuff-resistant finish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Unit / PM Painting — Turnovers • Corridors • Amenity Spaces",
    description:
      "Low-odor systems, dust-controlled prep, and on-schedule delivery for property managers across the GTA.",
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
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Multi-Unit / Property Management Painting",
    areaServed: { "@type": "Place", name: "Greater Toronto Area" },
    provider: { "@type": "Organization", name: "Classic Contracting", url: SITE_URL },
    serviceType: "Multi-Unit / Property Management Painting",
    description:
      "Tenant-friendly interior painting for condos, rentals, and senior living: suite turnovers, corridors, stairwells, and amenity spaces. Low/zero-VOC systems, dust containment, and standardized color programs.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Multi-Unit / PM Scopes",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Suite Turnovers & Touch-Ups" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corridors, Lobbies & Amenity Spaces" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stairwells & Service Areas" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Doors, Frames & Railings" } },
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
        name: "Can you handle suite turnovers between tenants on short timelines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We standardize colors, use fast-cure, low-odor systems, and schedule night/weekend windows to meet move-in deadlines.",
        },
      },
      {
        "@type": "Question",
        name: "How do you minimize disruption for residents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use dust containment, HEPA sanding, and low/zero-VOC coatings. We phase floors/sections, maintain signage, and provide daily updates.",
        },
      },
      {
        "@type": "Question",
        name: "Can you provide COI and WSIB documentation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We carry WSIB, $2M liability, and can provide a Certificate of Insurance on request for every project.",
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

// --- Page ---
export default function MultiUnitServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* sr-only H1 for SEO/semantics */}
        <h1 className="sr-only">
          Multi-Unit / Property Management Painting — Suite Turnovers, Corridors, Stairwells & Amenity Spaces in the GTA
        </h1>

        {/* HERO + TRUST */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <HeroMultiUnitPM />
          <MultiUnitPMTrustSection />
        </SectionBackground>

        {/* SERVICES */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <MultiUnitPmServicesMenu />
        </SectionBackground>

        {/* PROCESS + PROJECTS */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <MultiUnitPMWhatToExpectCC />
        </SectionBackground>
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <MultiUnitPMProjectHighlights />
       
        </SectionBackground>

        {/* FAQ */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <MultiUnitPMFAQSection />
        </SectionBackground>
      </main>

      <SiteFooter />
      <JsonLd />
    </div>
  );
}
