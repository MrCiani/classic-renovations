import Navigation from "./components/Nav-Menu/navigation";
import HomeHero from "./components/Home-hero/Home-Hero";
import TrustedBy from "./components/trustedbadges-testimonials/trusted-business";
import PaintingServices from "./components/Services-offered/Services";
import TestimonialsRow from "./components/trustedbadges-testimonials/TestimonialsShowcase";
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
      </SectionBackground>
      <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.2}>
          <PaintingServices/>
          <TestimonialsRow />
      </SectionBackground>
      

      <SiteFooter/>
  
</div>

  );
}
