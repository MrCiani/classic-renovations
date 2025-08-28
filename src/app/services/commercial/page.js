// app/services/commercial/page.jsx

import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";
import CommercialFAQSection from "./faq-exterior";
import CommercialServicesMenu from "./commercial-services";
import CommercialTrustSection from "./commercial-trust";
import HeroCommercial from "./commercial-hero";
import CommercialWhatToExpectCC from "./commercial-whattoexpect";
import CommercialProjectHighlights from "./view-projects";
// import CommercialBeforeAfter from "./beforeafter";

// --- SEO Setup ---
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const CANONICAL = `${SITE_URL}/services/commercial`;
const OG_IMAGE = `${SITE_URL}/og/commercial-painting.jpg`;

export const metadata = {
  title: "Commercial Painting — Offices, Retail, Multi-Unit | Classic Contracting",
  description:
    "Professional commercial painting for offices, retail, multi-unit, healthcare and industrial facilities across the GTA. Dust-controlled prep, low-VOC coatings, and on-schedule delivery.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Commercial Painting — Offices, Retail, Multi-Unit | Classic Contracting",
    description:
      "Serving property and facility managers across the GTA with clean, compliant, and schedule-friendly commercial painting services.",
    siteName: "Classic Contracting",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Commercial painting hero — office and retail building repaint",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Painting — Offices, Retail, Multi-Unit",
    description:
      "Durable finishes and minimal disruption for commercial and multi-unit projects across the GTA.",
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
    name: "Commercial Painting",
    areaServed: { "@type": "Place", name: "Greater Toronto Area" },
    provider: { "@type": "Organization", name: "Classic Contracting", url: SITE_URL },
    serviceType: "Commercial Painting",
    description:
      "Interior and exterior commercial painting for offices, retail, healthcare, industrial and multi-unit facilities. Low-odor, dust-controlled systems with minimal disruption.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Painting Scopes",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office & Tenant Improvements" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retail & Corporate Exteriors" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Unit & Facility Corridors" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse & Parkades" } },
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
        name: "Can you work after-hours or on weekends to avoid disruption?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We schedule night/weekend shifts and phase areas floor-by-floor to minimize impact on tenants and operations.",
        },
      },
      {
        "@type": "Question",
        name: "How do you control dust and odor in occupied spaces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use dust containment, HEPA sanding, and low/zero-VOC coatings. Ventilation and negative-air protocols are applied as needed.",
        },
      },
      {
        "@type": "Question",
        name: "What coatings are best for high-traffic areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specify scuff-resistant acrylics for corridors, urethane enamels for doors/frames, and epoxy/urethane for warehouses and parkades.",
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
export default function CommercialServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* sr-only H1 for SEO/semantics */}
        <h1 className="sr-only">
          Commercial Painting Services — Offices, Retail, Multi-Unit & Facilities in the GTA
        </h1>

        {/* HERO + TRUST */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <HeroCommercial />
          <CommercialTrustSection />
        </SectionBackground>

        {/* SERVICES */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <CommercialServicesMenu />
        </SectionBackground>

        {/* PROCESS + PROJECTS */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <CommercialWhatToExpectCC />
        </SectionBackground>
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <CommercialProjectHighlights />
    
        </SectionBackground>

        {/* FAQ */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={0.6}>
          <CommercialFAQSection />
        </SectionBackground>
      </main>

      <SiteFooter />
      <JsonLd />
    </div>
  );
}
