import Navigation from "./components/Nav-Menu/navigation";
import HomeHero from "./components/Home-hero/Home-Hero";
import TrustedBy from "./components/trustedbadges-testimonials/trusted-business";
import PaintingServices from "./components/Services-offered/Services";
import TestimonialsRow from "./components/trustedbadges-testimonials/TestimonialsShowcase";
import WhyChooseUs from "./components/whychooseus/why-choose-us";
import HomeValueProp from "./components/value-props/home-valueprop";
import ProjectsSection from "./components/projects-menu/project-menu";
import ProcessSection from "./components/whychooseus/our-process";
import SiteFooter from "./components/footer/footer";
import SectionBackground from "./components/Image-Background";
import Script from 'next/script';

export default function Home() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Classic Contracting",
    url: "https://classicrenos.ca",
    areaServed: { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
    description:
      "Spec-accurate interior & exterior painting for condos, homes, and commercial spaces in Toronto & the GTA.",
    telephone: "+1-437-555-5555",
    email: "hello@classicrenos.ca",
    sameAs: [
      // add profiles if you have them
      // "https://www.facebook.com/…", "https://www.instagram.com/…"
    ]
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

  return (
    <>
      {/* <header>
        
      </header> */}

      <Navigation />

      <main id="main-content">
        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <HomeHero />              {/* put the ONLY <h1> here */}
          <TrustedBy />            
          <HomeValueProp />         {/* ensure this uses an <h2>, not <h1> */}
        </SectionBackground>

        <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
          <PaintingServices />      {/* id="painting-services" */}
          <TestimonialsRow />
        </SectionBackground>

        <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
          <WhyChooseUs />           {/* id="why-choose-us" */}
        </SectionBackground>

        <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
          <ProjectsSection />       {/* id="project-gallery" */}

        </SectionBackground>
                <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
      
          <ProcessSection />        {/* id="process" */}
        </SectionBackground>
      </main>

      <footer>
        <SiteFooter />
      </footer>

      {/* Site-level JSON-LD */}
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
    </>
  );
}
