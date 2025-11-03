// Ruta: portal-web/src/components/ui/NewsletterModal.tsx
'use client';

// --- Importaciones de Núcleo y Externas ---
import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// --- Definición de Tipos ---
interface NewsletterModalProps {
  /** Controla si el modal está visible o no. */
  isOpen: boolean;
  /** Función callback que se ejecuta cuando el usuario intenta cerrar el modal. */
  onClose: () => void;
}

/**
 * Componente de Modal Inteligente para Captación de Leads.
 * Su propósito es ofrecer un "Lead Magnet" (como una guía gratuita) a los visitantes
 * que aún no están listos para una consulta, capturando su email de forma proactiva.
 * Está diseñado para ser elegante, no intrusivo y accesible.
 */
export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {

  // Efecto secundario para añadir y quitar un event listener para la tecla 'Escape'.
  // Esto es una mejora de accesibilidad y UX que permite cerrar el modal fácilmente.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Solo se añade el listener si el modal está abierto.
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    // Función de limpieza: se asegura de que el listener se elimine cuando el modal se cierra
    // o el componente se desmonta, para evitar fugas de memoria.
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        // Capa 1: Fondo superpuesto con desenfoque y animación de aparición
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onClose} // Permite cerrar el modal haciendo clic en el fondo
        >
          {/* Capa 2: Contenedor del modal con animación de entrada */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()} // Evita que el clic dentro del modal lo cierre
          >
            <div className="grid md:grid-cols-2">

              {/* Columna Izquierda: Imagen Visualmente Atractiva */}
              <div className="relative h-64 md:h-full hidden md:block">
                <Image
                  src="/ui/modal-image-abogados.jpg"
                  alt="Abogado profesional ofreciendo ayuda y tranquilidad"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Columna Derecha: Contenido y Formulario */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X size={24} />
                </button>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  No cometa errores costosos.
                </h2>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Tras un accidente, cada paso cuenta. Suscríbase y reciba nuestra guía gratuita: <strong className="text-blue-600 dark:text-blue-400">
                    {/*
                      CORRECCIÓN DE ESLINT: Las comillas dobles literales se reemplazan con
                      entidades HTML (&ldquo; y &rdquo;) para una correcta semántica y para
                      satisfacer la regla 'react/no-unescaped-entities'.
                    */}
                    &ldquo;Los 5 Errores a Evitar que Pueden Arruinar su Caso&rdquo;
                  </strong>.
                </p>

                <form className="mt-6">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Su correo electrónico"
                      required
                      aria-label="Correo electrónico para recibir la guía"
                      className="flex-grow w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white"
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-px"
                    >
                      Recibir Guía
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Respetamos su privacidad. Cero spam.</p>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
