// Ruta: portal-web/src/components/home/InfoSection.tsx
'use client'; 
import { InfoCard } from './InfoCard';

/**
 * Componente de sección que muestra una cuadrícula de tres InfoCards.
 * Debe ser un 'Client Component' porque renderiza InfoCard, que es 'use client'.
 */
export function InfoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <InfoCard
            imageUrl="/info-empresa.jpg"
            imageAlt="Instalaciones de la litográfica"
            title="Somos una Empresa 100% Mexicana"
          >
            Con más de 25 años en el ramo litográfico, nos hemos especializado en
            impresión a todo color, orientados principalmente a trabajos
            publicitarios como Volantes, Catálogos, Afiches, Carpetas y todo
            tipo de Material Gráfico Impreso.
          </InfoCard>

          <InfoCard
            imageUrl="/info-barniz.jpg"
            imageAlt="Máquina de barniz UV"
            title="Barniz U.V. a Registro"
          >
            Ideal para revistas, portadas, catálogos, empaques y etiquetas. La
            ventaja de este proceso es que se puede dar un terminado mate y/o
            brillante logrando así una calidad visual de primer nivel.
          </InfoCard>

          <InfoCard
            imageUrl="/info-atencion.jpg"
            imageAlt="Atención al cliente personalizada"
            title="Atención Personalizada"
          >
            Nos ponemos a sus ordenes para proporcionarle un servicio integral y
            personalizado. ¡Juntos podremos sacar su proyecto adelante,
            Contáctenos!
          </InfoCard>

        </div>
      </div>
    </section>
  );
}
