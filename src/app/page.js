'use client';

import Navigation from "./components/Nav-Menu/navigation";
import HomeHero from "./components/Home-hero/Home-Hero";
import TrustedBy from "./components/trustedbadges-testimonials/trusted-business";
import PaintingServices from "./components/Services-offered/Services";
import TestimonialsRow from "./components/trustedbadges-testimonials/TestimonialsShowcase";
import WhyChooseUs from "./components/whychooseus/why-choose-us";
import HomeValueProp from "./components/value-props/home-valueprop";
import ProjectsSection from "./components/projects-menu/project-menu";
import ServiceAreaHero from "./components/service-area/ServiceAreasMapRegions";
import ProcessSection from "./components/whychooseus/our-process";
import SiteFooter from "./components/footer/footer";
import SectionBackground from "./components/Image-Background";
import Script from 'next/script';

export default function Home() {
  // --- JSON-LD: Organization / Service ---
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Classic Contracting",
    url: "https://classicrenos.ca",
    areaServed: { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
    description:
      "Spec-accurate interior & exterior painting for condos, apartments, multi-residential and commercial spaces in Toronto & the GTA. Dust-controlled prep, low/zero-VOC options, and WSIB-covered crews.",
    telephone: "+1-437-555-5555",
    email: "hello@classicrenos.ca",
    sameAs: []
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Classic Contracting",
    url: "https://classic-contracting.ca",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://classicrenos.ca/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // --- JSON-LD: Reviews + AggregateRating (from testimonials) ---
  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Classic Contracting — Reviews",
    mainEntity: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "300",
      bestRating: "5",
      worstRating: "1"
    }
  };

  // --- JSON-LD: Services offered (helps LLMs and search) ---
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior & Exterior Painting",
    serviceType: "Commercial, Multi-Residential, Condo & Apartment Painting",
    areaServed: "Toronto, Greater Toronto Area",
    provider: { "@type": "ProfessionalService", name: "Classic Contracting" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting (walls, ceilings, trim)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial & Office Repaints" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Unit / Corridor Programs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cabinet Refinishing" } }
      ]
    }
  };

  // --- JSON-LD: Breadcrumbs (simple, helps site understanding) ---
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://classicrenos.ca" },
      { "@type": "ListItem", position: 2, name: "Painting Services", item: "https://classicrenos.ca/painting" }
    ]
  };

  // Content for compact Trust block (logos + 2–3 short testimonials)
  const trustLogos = [
    { src: '/trusted-badges/experiencebadge.png', alt: '25+ Years Experience' },
    { src: '/trusted-badges/wsib4.svg', alt: 'WSIB Ontario – Approved Providers' },
  ];

  const trustTestimonials = [
    { quote: 'Professional prep and low-VOC systems kept our clinic open during work.', name: 'Dr. A. Singh', role: 'Clinic Owner', avatar: 'singh.jpg', rating: 5 },
    { quote: 'Corridors operational during repaint—clean edges, zero mess, on schedule.', name: 'Johnny W.', role: 'Project Manager, GC', avatar: 'johnny.jpg', rating: 5 },
    { quote: 'Fast turnovers and consistent colour standards across units.', name: 'L. Martinez', role: 'Property Manager', avatar: 'martinez.jpg', rating: 5 },
  ];

  return (
    <>
      <Navigation />

      <main id="main-content">
        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <HomeHero />               {/* h1 lives here */}
          <TrustedBy />
          <HomeValueProp />          {/* ensure this renders an h2 */}
        </SectionBackground>

        <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
          <PaintingServices />
          <TestimonialsRow />
        </SectionBackground>

        {/* Why Choose Us first… */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
          <WhyChooseUs />
        </SectionBackground>

        {/* …then compact Trust + Testimonials (logos + short social proof)
        <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
          <TrustSection
            variant="compact"
            title="Trusted by property managers, builders & operators"
            subtitle="WSIB-covered crews • Clean sites • Spec-accurate finishes across the GTA"
            logos={trustLogos}
            testimonials={trustTestimonials}
            className="pt-8"
          />
        </SectionBackground> */}

        {/* Visual proof next */}
        <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
          <ProjectsSection />
          <ServiceAreaHero/>
        </SectionBackground>

        <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
          <ProcessSection />
        </SectionBackground>
      </main>

      <footer>
        <SiteFooter />
      </footer>

      {/* JSON-LD blocks to help SEO & Generative Engines understand your business */}
      <Script id="org-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Script id="website-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
      <Script id="reviews-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }} />
      <Script id="services-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <Script id="breadcrumbs-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
    </>
  );
}
