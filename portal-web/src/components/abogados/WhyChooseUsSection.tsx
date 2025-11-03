// Ruta: portal-web/src/components/abogados/WhyChooseUsSection.tsx
'use client';

// --- Importaciones de Núcleo y Externas ---
// No se necesitan importaciones de React ya que Next.js lo maneja.

// --- Componentes Internos ---
// Importamos el componente de tarjeta reutilizable, que se encuentra en la misma carpeta.
import { InfoCard } from './InfoCard';

/**
 * Componente de sección "Por Qué Confiar en Nosotros".
 * Este componente es una parte fundamental del "corazón" de la página, diseñado para
 * construir confianza y validar la credibilidad del despacho.
 * Traduce las características del servicio en beneficios tangibles para el cliente.
 */
export function WhyChooseUsSection() {
  return (
    // La etiqueta 'id' es crucial para que la navegación por anclas desde el Header funcione.
    <section id="quienes-somos" className="py-20 bg-white dark:bg-gray-900 sm:py-24">
      <div className="container mx-auto px-4">

        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                ¿Por Qué Confiar en Nosotros?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Entendemos su situación y luchamos por sus derechos con dedicación y experiencia.
            </p>
        </div>

        {/* Cuadrícula de Tarjetas de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Tarjeta 1: Experiencia */}
          <InfoCard
            imageUrl="/ui/abogados-expertos.jpg"
            imageAlt="Abogados expertos revisando documentos legales con diligencia."
            title="Abogados Expertos y Dedicados"
          >
            Nuestro equipo se especializa exclusivamente en leyes de accidentes. Esta concentración nos permite ofrecerle la representación más informada y estratégica para su caso.
          </InfoCard>

          {/* Tarjeta 2: Trato Humano */}
          <InfoCard
            imageUrl="/ui/atencion-personalizada.jpg"
            imageAlt="Abogada escuchando con empatía a un cliente en una consulta privada."
            title="Atención Personalizada"
          >
            No eres solo un número de caso. Te ofrecemos un trato cercano y te mantenemos informado en cada paso del proceso. Tu tranquilidad es nuestra prioridad.
          </InfoCard>

          {/* Tarjeta 3: Resultados */}
          <InfoCard
            imageUrl="/ui/maxima-compensacion.jpg"
            imageAlt="Símbolo de un futuro restaurado y seguridad financiera tras el acuerdo."
            title="Buscamos la Máxima Compensación"
          >
            Analizamos cada detalle de tu caso para asegurar que recibas una compensación justa que cubra gastos médicos, salarios perdidos, y dolor y sufrimiento.
          </InfoCard>

        </div>
      </div>
    </section>
  );
}
