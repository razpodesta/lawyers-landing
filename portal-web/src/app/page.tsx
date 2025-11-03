// RUTA: portal-web/src/app/page.tsx
'use client';

// --- Importaciones de Núcleo y Externas ---
import { useState, useEffect } from 'react';

// --- Hooks Personalizados ---
import { useGeolocation } from '@/hooks/useGeolocation';

// --- Componentes de la Interfaz ---
import { HeroSection } from '@/components/abogados/HeroSection';
import { TrustBadges } from '@/components/abogados/TrustBadges';
import { WhyChooseUsSection } from '@/components/abogados/WhyChooseUsSection';
import { SocialProofSection } from '@/components/abogados/SocialProofSection';
import { SearchableFAQ } from '@/components/abogados/SearchableFAQ';
import { BlogSection } from '@/components/abogados/BlogSection';
import { LocationMapSection } from '@/components/abogados/LocationMapSection';
import { ClosingSection } from '@/components/abogados/ClosingSection';
import { NewsletterModal } from '@/components/ui/NewsletterModal';

/**
 * Componente principal de la Landing Page.
 * Orquesta el renderizado de todas las secciones y maneja la lógica interactiva.
 */
export default function HomePage() {
  // --- Lógica de Estado ---
  const { city, isLoading: isGeoLoading } = useGeolocation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // --- Lógica de Efectos ---
  useEffect(() => {
    const hasModalBeenShown = sessionStorage.getItem('newsletterModalShown');
    if (!hasModalBeenShown) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem('newsletterModalShown', 'true');
      }, 3000);

      // ✅ CORRECCIÓN: Función de limpieza que soluciona el error ts7030.
      return () => clearTimeout(timer);
    }
    // Si el modal ya se mostró, el efecto no devuelve nada, lo cual es implícitamente `undefined`.
    // TypeScript 7030 se queja de que no todas las rutas de código devuelven un valor.
    // Aunque `undefined` es el valor por defecto, lo hacemos explícito para satisfacer al compilador.
    return undefined;
  }, []);

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      <NewsletterModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <HeroSection city={city} isLoading={isGeoLoading} />
      <TrustBadges />
      <WhyChooseUsSection />
      <SocialProofSection city={city} isLoading={isGeoLoading} />
      <SearchableFAQ />
      <BlogSection />
      <LocationMapSection />
      <ClosingSection />
    </>
  );
}
