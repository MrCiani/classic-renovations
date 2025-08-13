import Navigation from "./components/Nav-Menu/navigation";
import HomeHero from "./components/Home-hero/Home-Hero";
import PaintingServices from "./components/Services-offered/Services";
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
      <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.3} >
        <HomeHero />
   
      </SectionBackground>
      <SectionBackground image="/Background-Images/bgimage1.jpg" opacity={0.3}>
          <PaintingServices/>
      </SectionBackground>
      
  
</div>

  );
}
