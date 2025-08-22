// app/services/interior/page.jsx

import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";
import FAQSection from "./faq-interior";
import InteriorServices from "./interior-services";
import TrustSection from "@/app/components/whychooseus/TrustSection";
import HeroInterior from "./interior-hero";
import WhatToExpectCC from "@/app/components/whychooseus/whattoexpect";
import ProjectHighlights from "./view-projects";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const CANONICAL = `${SITE_URL}/services/interior`;
const OG_IMAGE = `${SITE_URL}/og/interior-painting.jpg`; // replace with a real OG image

// --- SEO Meta ---
export const metadata = {
  title: "Interior Painting — Walls, Ceilings & Trim | Classic Contracting",
  description:
    "Professional interior painting for offices, clinics, retail, and multi-unit spaces. Crisp edges, durable low-VOC coatings, doors/frames/trim, corridors and reception areas.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Interior Painting — Walls, Ceilings & Trim | Classic Contracting",
    description:
      "Clean lines and durable interior finishes delivered on your schedule. See our interior painting service details and project work.",
    siteName: "Classic Contracting",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Interior painting hero—neutral walls, crisp trim, clean ceiling lines" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Painting — Walls, Ceilings & Trim",
    description:
      "Low-VOC coatings, dust-controlled prep, doors/frames/trim, corridors & reception areas.",
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
    name: "Interior Painting",
    areaServed: { "@type": "Place", name: "Greater Toronto Area" },
    provider: { "@type": "Organization", name: "Classic Contracting", url: SITE_URL },
    serviceType: "Interior Painting",
    description:
      "Interior repainting for commercial and multi-unit spaces: walls, ceilings, doors & trim, corridors and reception areas using low-VOC coatings.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior Painting Scopes",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Walls & Ceilings" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Doors, Frames & Trim" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corridors & Reception" } },
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
        name: "Do you use low-VOC paints?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. We recommend low- or zero-VOC systems with fast cure times to reduce odour and downtime." },
      },
      {
        "@type": "Question",
        name: "Can you work nights or weekends?",
        acceptedAnswer: { "@type": "Answer", text: "Absolutely. We schedule off-hours work for minimal disruption to staff and customers." },
      },
      {
        "@type": "Question",
        name: "What surfaces do you paint?",
        acceptedAnswer: { "@type": "Answer", text: "Walls, ceilings, doors, frames, trim, accent walls, drywall repairs and patching as needed." },
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

export default function InteriorServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* sr-only H1 for semantic clarity */}
        <h1 className="sr-only">Interior Painting Services — Walls, Ceilings & Trim</h1>

        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={.6}>
          <HeroInterior />
<TrustSection
  variant="compact"
  title="Trusted for Interior Painting Across the GTA"
  subtitle="Clean lines, dust-controlled prep, and professional finishes for suites, offices, and common areas."
  logos={[
    { src: '/trusted-badges/experiencebadge.png', alt: '25+ Years Interior Painting Experience' },
    { src: '/trusted-badges/wsib4.svg', alt: 'WSIB Ontario – Approved Providers' },
  ]}
  testimonials={[
    {
      headline: 'Flawless condo repaint',
      quote:
        'Our suite repaint was handled quickly and with care. The walls and trim look brand new, and the crew kept the unit spotless throughout.',
      name: 'Martinez D.',
      role: 'Condo Owner',
      avatar: 'martinez.jpg',
      rating: 5,
    },
    {
      headline: 'Minimal disruption to staff',
      quote:
        'Classic Contracting repainted our office while keeping operations running. Clean edges, no dust, and professional scheduling every step of the way.',
      name: 'Johnny S.',
      role: 'Office Manager',
      avatar: 'johnny.jpg',
      rating: 5,
    },
    {
      headline: 'Consistent quality across units',
      quote:
        'We had multiple rental units turned over with fresh paint. Every space was consistent, crisp, and completed on schedule — zero delays.',
      name: 'Karen L.',
      role: 'Property Manager',
      avatar: 'karen.jpg',
      rating: 5,
    },
  ]}
/>


          </SectionBackground>
          <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={.6}>
          <InteriorServices/>
          </SectionBackground>
          <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={.6}>
          <WhatToExpectCC/>
        </SectionBackground>
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={.6}>
        
        <FAQSection/>
        
        </SectionBackground>
        <SectionBackground image="/Background-Images/bgimage1.jpg" imageOpacity={.6}>
        <ProjectHighlights/>
        </SectionBackground>
        
      </main>

      <SiteFooter />
      <JsonLd />
    </div>
  );
}
