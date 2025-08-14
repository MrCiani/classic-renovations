import Navigation from "./components/Nav-Menu/navigation";
import HomeHero from "./components/Home-hero/Home-Hero";
import TrustedBy from "./components/trustedbadges-testimonials/trusted-business";
import PaintingServices from "./components/Services-offered/Services";
import TestimonialsRow from "./components/trustedbadges-testimonials/TestimonialsShowcase";
import WhyChooseUs from "./components/whychooseus/why-choose-us";
import HomeValueProp from "./components/value-props/home-valueprop";
import ProjectsSection from "./components/projects/project-menu";
import ProcessSection from "./components/whychooseus/our-process";
import SiteFooter from "./components/footer/footer";
import SectionBackground from "./components/Image-Background";



export const metadata = {
  title: 'Classic Renovations | Expert Painting & Finishing',
  description:
    'Classic Renovations specializes in professional painting and wall finishes, delivering flawless interiors and exteriors with a focus on quality, detail, and long-lasting results.',
}



export default function Home() {
  return (
<div>
  <Navigation/>
      <SectionBackground image="/Background-Images/bgimage1.jpg"  >
      <HomeHero />
      <TrustedBy/>
      <HomeValueProp/>
      </SectionBackground>
      <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
      <PaintingServices/>
      <TestimonialsRow />
      </SectionBackground>
      <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
      <WhyChooseUs/>
      </SectionBackground>
      <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
      <ProjectsSection/>
      <ProcessSection/>
      </SectionBackground>
      

      <SiteFooter/>
  
</div>

  );
}
