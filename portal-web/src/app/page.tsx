// Ruta: portal-web/src/app/page.tsx

// =================================================================================
// CORRECCIÓN CRUCIAL: LA DIRECTIVA 'use client'
// Esta línea DEBE ser la primera en el archivo. Le dice a Next.js que este componente
// es un "Client Component", lo cual es OBLIGATORIO porque usamos hooks como `useState`
// y `useEffect` para la interactividad. Sin esto, el componente no puede tener estado
// y el compilador puede arrojar el error TS7030.
// =================================================================================
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
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  // =================================================================================
  // CORRECCIÓN ESTRUCTURAL: EL 'RETURN' ÚNICO Y FINAL
  // Toda la lógica de hooks y funciones debe estar ANTES de esta declaración.
  // El `return (...)` debe ser la última instrucción de la función del componente,
  // garantizando que, sin importar las condiciones, siempre se devuelva un elemento JSX.
  // Esto resuelve directamente el error "Not all code paths return a value".
  // =================================================================================
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
