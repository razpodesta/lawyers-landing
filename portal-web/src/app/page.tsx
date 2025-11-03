// Ruta: portal-web/src/app/page.tsx
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
 * Componente principal de la página de inicio (Landing Page).
 * Este componente es el punto de entrada de la aplicación y es responsable de:
 * 1. Orquestar el renderizado de todas las secciones de la página en el orden correcto.
 * 2. Gestionar el estado y la lógica para funcionalidades interactivas a nivel de página,
 *    como el modal de newsletter.
 * 3. Iniciar la detección de la geolocalización del usuario para personalizar el contenido.
 */
export default function HomePage() {
  // --- Lógica de Estado ---

  /**
   * Hook personalizado que obtiene la ciudad del visitante a través de una API de geolocalización por IP.
   * `city` contendrá el nombre de la ciudad o `null`.
   * `isGeoLoading` nos permite saber si la detección está en progreso.
   */
  const { city, isLoading: isGeoLoading } = useGeolocation();

  /**
   * Estado para controlar la visibilidad del modal de suscripción.
   * Por defecto, el modal está cerrado.
   */
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // --- Lógica de Efectos (Ciclo de Vida del Componente) ---

  /**
   * `useEffect` para gestionar la aparición del modal de newsletter.
   * Esta lógica se ejecuta una sola vez cuando el componente se monta por primera vez.
   */
  useEffect(() => {
    // Se verifica en el `sessionStorage` del navegador si el modal ya fue mostrado
    // durante la sesión actual del usuario. Esto evita molestar al usuario repetidamente.
    const hasModalBeenShown = sessionStorage.getItem('newsletterModalShown');

    if (!hasModalBeenShown) {
      // Si el modal no se ha mostrado, se inicia un temporizador.
      const timer = setTimeout(() => {
        // Después de 3 segundos, se abre el modal.
        setIsModalOpen(true);
        // Se establece una bandera en `sessionStorage` para recordar que ya se mostró.
        sessionStorage.setItem('newsletterModalShown', 'true');
      }, 3000); // 3000 milisegundos = 3 segundos

      // Función de limpieza: Si el usuario navega a otra página o cierra la pestaña
      // antes de los 3 segundos, el temporizador se cancela para evitar errores.
      return () => clearTimeout(timer);
    }
  }, []); // El array de dependencias vacío `[]` asegura que este efecto se ejecute solo una vez.

  /**
   * Función para cerrar el modal. Se pasa como prop al componente NewsletterModal.
   */
  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  // --- Renderizado del Componente ---
  return (
    <>
      {/*
        El Modal se renderiza aquí, pero solo es visible cuando `isModalOpen` es `true`.
        Es el primer elemento para que su `z-index` lo coloque por encima de todo lo demás.
      */}
      <NewsletterModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* A continuación, se renderizan todas las secciones de la landing page en un orden estratégico
          para guiar al usuario a través de un embudo de conversión. */}

      {/* 1. Captación de Atención y Promesa Principal (con personalización geográfica) */}
      <HeroSection city={city} isLoading={isGeoLoading} />

      {/* 2. Generación de Confianza Inmediata */}
      <TrustBadges />

      {/* 3. Explicación de Propuesta de Valor y Beneficios */}
      <WhyChooseUsSection />

      {/* 4. Validación a través de Prueba Social y Empatía */}
      <SocialProofSection city={city} isLoading={isGeoLoading} />

      {/* 5. Educación y Resolución de Dudas Comunes */}
      <SearchableFAQ />

      {/* 6. Construcción de Autoridad a través de Contenido de Valor */}
      <BlogSection />

      {/* 7. Establecimiento de Presencia Física y Local */}
      <LocationMapSection />

      {/* 8. Cierre de la Venta: Resumen de la oferta y Llamada a la Acción Final */}
      <ClosingSection />
    </>
  );
}
