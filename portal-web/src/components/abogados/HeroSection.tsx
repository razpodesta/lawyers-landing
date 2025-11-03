// Ruta: portal-web/src/components/abogados/HeroSection.tsx
'use client';

// --- Importaciones de Núcleo y Externas ---
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

// --- Definición de Tipos ---
interface HeroSectionProps {
  /** La ciudad del visitante, obtenida por geolocalización. Puede ser null si no se detecta o hay un error. */
  city: string | null;
  /** Estado de carga para la geolocalización, para manejar la UI mientras se obtiene la ciudad. */
  isLoading: boolean;
}

/**
 * La sección "Hero" es el componente más importante de la primera impresión.
 * Su propósito es captar la atención del visitante en segundos, comunicar la propuesta de valor principal
 * y presentar llamadas a la acción claras y de bajo riesgo.
 * Este componente es dinámico y personaliza su texto según la ubicación del visitante.
 */
export function HeroSection({ city, isLoading }: HeroSectionProps) {
  return (
    <section
      id="inicio" // Ancla para la navegación desde el logo en el Header
      className="relative flex h-[85vh] min-h-[600px] items-center justify-center text-white"
    >
      {/* Capa 1: Imagen de Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/banners/hero-abogados.jpg')" }} // Imagen de alta calidad que evoca profesionalismo
      />
      {/* Capa 2: Superposición Oscura para Legibilidad */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Capa 3: Contenido de Texto y CTAs */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Título Principal (H1): La Gran Promesa */}
        <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Recupere la <span className="text-blue-400">Compensación</span> que Merece.
          <span className="block mt-2 text-3xl md:text-5xl font-semibold">
            Nosotros Nos Encargamos del Resto.
          </span>
        </h1>

        {/* Subtítulo (La Lógica): Combina prueba social, personalización y anulación de riesgo */}
        <p className="mt-4 max-w-3xl text-lg text-gray-200 md:text-xl">
          Nuestro equipo ha recuperado <strong className="font-bold text-white">millones</strong> para víctimas de accidentes {city ? `en ${city}` : 'en su ciudad'}.
          La consulta es <strong className="font-bold text-white">gratuita</strong> y no paga ni un centavo a menos que <strong className="font-bold text-white">ganemos su caso</strong>.
        </p>

        {/* Llamadas a la Acción (CTAs) */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#contacto"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1"
          >
            Obtenga su Consulta Gratuita
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=TU_NUMERO_DE_WHATSAPP" // REEMPLAZAR NÚMERO
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl transform hover:-translate-y-1"
          >
            <MessageSquare size={20} />
            Evalúe su Caso por WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
