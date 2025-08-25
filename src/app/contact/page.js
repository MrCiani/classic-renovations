import Navigation from "../components/Nav-Menu/navigation";
import SectionBackground from "../components/Image-Background";

import ContactIntro from "./contactcard";
import ServiceAreaHero from "../components/service-area/ServiceAreasMapRegions";
import ContactMap from "./contactmap";

export const metadata = {
  title: "Contact – Classic Contracting",
  description:
    "Request a fast, accurate painting quote for suites, corridors, and commercial spaces across the GTA.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact – Classic Contracting",
    description:
      "Request a fast, accurate painting quote for suites, corridors, and commercial spaces across the GTA.",
    url: "/contact",
    siteName: "Classic Contracting",
    images: [
      {
        url: "/og/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Classic Contracting – Contact",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen  text-[var(--text-100)]">
      {/* HERO / FORM */}
      <Navigation/>
      <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
      <ContactIntro />
      </SectionBackground>
      {/* Optional: FAQ + Map sections can be added here later */}
      {/* <ContactFAQ /> */}


      {/* <ServiceAreaMap /> */}
      <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
      <ServiceAreaHero/>
      </SectionBackground>
      <ContactMap/>

      {/* JSON-LD for LocalBusiness + ContactPoint */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Classic Contracting",
            url: "https://classiccontracting.ca/contact",
            areaServed: "Greater Toronto Area",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hello@classiccontracting.ca",
                telephone: "+1-000-000-0000",
                availableLanguage: ["English"],
              },
            ],
          }),
        }}
      />
    </main>
  );
}
