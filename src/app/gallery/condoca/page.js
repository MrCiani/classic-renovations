// app/greenlife-golden/page.jsx

import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";
import GreenlifeGolden from "./condoca"; // your gallery component for this project

// JSON-LD helper component
function JsonLd() {
  const complex = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "Greenlife Golden Condos",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Markham",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    url: "https://condos.ca/markham/greenlife-golden-7400-markham-rd",
    image: "https://www.yoursite.com/og/greenlife-golden-hero.jpg", // 🔎 update to your hosted OG image
    brand: "Classic Contracting",
    description:
      "Professional repainting and finishes for suites, corridors, and amenity spaces at Greenlife Golden Condos in Markham.",
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yoursite.com/" },
      { "@type": "ListItem", position: 2, name: "Projects", item: "https://www.yoursite.com/projects" },
      { "@type": "ListItem", position: 3, name: "Greenlife Golden Condos", item: "https://www.yoursite.com/greenlife-golden" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(complex) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}

export default function GreenlifeGoldenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* SEO H1 (screen-reader only if the gallery renders a visible heading) */}
        <h1 className="sr-only">
          Greenlife Golden Condos — Suites, Corridor & Amenity Painting in Markham
        </h1>

        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <GreenlifeGolden />
        </SectionBackground>
      </main>

      <SiteFooter />
      <JsonLd />
    </div>
  );
}
