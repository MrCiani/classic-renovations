// app/condos-apartments/page.jsx

import CondosApartmentsPage from "./condos-apartments"; 
import Navigation from "@/app/components/Nav-Menu/navigation";
import SiteFooter from "@/app/components/footer/footer";
import SectionBackground from "@/app/components/Image-Background";

export const metadata = {
  title: "Condos & Apartments | Classic Contracting",
  description:
    "All condo and apartment painting projects by Classic Contracting in Toronto & the GTA. See scope, location, and view photo galleries.",
};

export default function CondosAndApartments() {
  return (
    <>
      <header>
        

        <Navigation />
      </header>

      <main id="main-content">
        {/* Optional background wrapper to match Home */}

        <SectionBackground image="/Background-Images/bgimage1.jpg">
          <CondosApartmentsPage />
        </SectionBackground>
      
      </main>

      <footer>
        <SiteFooter />
      </footer>
    </>
  );
}
