// Ruta: portal-web/src/app/page.tsx

import { HeroBanner } from '@/components/home/HeroBanner';
import { MainCarousel } from '@/components/home/MainCarousel';
import { InfoSection } from '@/components/home/InfoSection';
import { GallerySection } from '@/components/home/GallerySection';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <MainCarousel />
      <InfoSection />
      <GallerySection />
    </>
  );
}
