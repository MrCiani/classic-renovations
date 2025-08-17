// app/beausoleil/page.jsx

import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";
import BeauSoleil from "./beau-soleil";

// JSON-LD helper component
function JsonLd() {
  const apartment = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "BeauSoleil Condos",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Burlington",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    url: "https://www.yoursite.com/beausoleil", // 🔎 update to real URL
    image: "https://www.yoursite.com/og/beausoleil-hero.jpg", // 🔎 update
    brand: "Classic Renovations",
    description:
      "Professional repainting and finishes for lobby, corridors, suites, and amenity spaces at BeauSoleil Condos in Burlington.",
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yoursite.com/" },
      { "@type": "ListItem", position: 2, name: "Projects", item: "https://www.yoursite.com/projects" },
      { "@type": "ListItem", position: 3, name: "BeauSoleil Condos", item: "https://www.yoursite.com/beausoleil" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(apartment) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}

export default function BeausoleilPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumbs */}
      {/* <nav aria-label="Breadcrumb" className="px-4 sm:px-6 lg:px-8 mt-4 text-sm">
        <ol className="flex flex-wrap gap-2 text-[var(--text-200)]">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li aria-hidden="true">/</li>
          <li><a href="/projects" className="hover:underline">Projects</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-[var(--text-100)] font-medium">
            BeauSoleil Condos
          </li>
        </ol>
      </nav> */}

      {/* Main content */}
      <main className="flex-1">
        {/* SEO H1 (screen-reader only if BeauSoleil already renders a visible heading) */}
        <h1 className="sr-only">
          BeauSoleil Condos — Lobby, Corridor & Amenity Painting in Burlington
        </h1>

        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <BeauSoleil />
        </SectionBackground>
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* JSON-LD for SEO */}
      <JsonLd />
    </div>
  );
}
