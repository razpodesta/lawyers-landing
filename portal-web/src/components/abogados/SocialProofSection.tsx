// Ruta: portal-web/src/components/abogados/SocialProofSection.tsx
'use client';

// --- Importaciones de Núcleo y Externas ---
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// --- Constantes de Configuración ---
// Datos de ejemplo para los testimonios. La inclusión de avatares realistas
// y detalles como la ciudad es crucial para maximizar la credibilidad.
const testimonials = [
  {
    name: 'Carlos R.',
    city: 'San José',
    avatarUrl: '/avatars/carlos-r.jpg', // Ruta al avatar hiperrealista
    text: 'Después de mi accidente, estaba perdido con las facturas médicas y las llamadas de la aseguradora. El equipo de ABOGADOS & ABOGADOS se encargó de todo. Lucharon por mí y consiguieron un acuerdo que cambió mi vida. No podría estar más agradecido.',
    rating: 5,
  },
  {
    name: 'María F.',
    city: 'Alajuela',
    avatarUrl: '/avatars/maria-f.jpg', // Ruta al avatar hiperrealista
    text: 'La atención personalizada fue increíble. Siempre me sentí escuchada y comprendida, no como un caso más. Su profesionalismo me dio la tranquilidad que necesitaba para enfocarme en mi recuperación. ¡Los recomiendo al 100%!',
    rating: 5,
  },
];

// --- Definición de Tipos ---
interface SocialProofSectionProps {
  /** La ciudad del visitante para una posible personalización futura (ej. filtrar testimonios). */
  city: string | null;
  /** Estado de carga de la geolocalización. */
  isLoading: boolean;
}

/**
 * Componente de Prueba Social de alta conversión.
 * Estratégicamente combina dos elementos psicológicos clave:
 * 1. El "Bloque de Dolor": Articula los problemas del cliente para generar una fuerte empatía.
 * 2. La "Prueba Social": Utiliza testimonios con avatares realistas para construir credibilidad y confianza.
 * Esta versión ha sido refactorizada para resolver errores de ESLint y mejorar la semántica.
 */
export function SocialProofSection({ city, isLoading }: SocialProofSectionProps) {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20 sm:py-24">
      <div className="container mx-auto px-4">

        {/* Parte 1: El Bloque de Dolor - Conectando a través de la Empatía */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Entendemos por lo que está pasando
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Las facturas médicas se acumulan, la aseguradora le ofrece una miseria y usted no puede trabajar. La presión es inmensa. Estamos aquí para quitarle ese peso de encima.
          </p>
        </div>

        {/* Parte 2: La Prueba Social - Construyendo Confianza con Testimonios Reales */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col rounded-lg bg-white dark:bg-gray-700 p-8 shadow-lg h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            >
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Contenedor del testimonio, usando etiquetas semánticas */}
              <blockquote className="mt-4 text-gray-600 dark:text-gray-300 flex-grow italic">
                {/*
                  CORRECCIÓN DE ESLINT: Las comillas dobles literales se reemplazan con
                  entidades HTML (&ldquo; y &rdquo;) para una correcta semántica y para
                  satisfacer la regla 'react/no-unescaped-entities'.
                */}
                <p>&ldquo;{testimonial.text}&rdquo;</p>
              </blockquote>

              {/* Autor del testimonio */}
              <figcaption className="mt-6 flex items-center">
                {/* Avatar realista para máxima credibilidad */}
                <div className="relative h-14 w-14 flex-shrink-0">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={`Foto de perfil de ${testimonial.name}, cliente satisfecho`}
                    layout="fill"
                    className="rounded-full object-cover"
                  />
                </div>

                <div className="ml-4">
                  <cite className="font-semibold text-gray-900 dark:text-white not-italic">{testimonial.name}</cite>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.city}</p>
                </div>
              </figcaption>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
