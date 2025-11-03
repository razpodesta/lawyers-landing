// Ruta: portal-web/src/components/abogados/ClosingSection.tsx
'use client';

import { CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function ClosingSection() {
  return (
    <section
      id="contacto"
      className="relative bg-gray-800 dark:bg-black py-20 sm:py-24"
    >
      {/* Fondo sutil para un toque premium */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/ui/background-pattern.webp')" }}
      />
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">

          {/* Lado Izquierdo: La Oferta Irresistible */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Listo para dar el primer paso hacia su justicia?
            </h2>

            {/* Resumen de la Oferta */}
            <div className="mt-8 space-y-4 text-lg text-gray-300">
              <p className="font-semibold text-white">Su consulta gratuita incluye:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Un análisis completo de su caso por un abogado senior.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Una estimación honesta de su posible compensación.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Un plan de acción claro, sin costo ni compromiso alguno.</span>
                </li>
              </ul>
            </div>

            {/* Anulación del Riesgo */}
            <div className="mt-10 flex items-center rounded-lg border border-yellow-400/50 bg-yellow-400/10 p-4">
              <ShieldCheck className="h-10 w-10 text-yellow-400 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="font-bold text-white">Garantía de Cero Honorarios</h3>
                <p className="text-yellow-200">No paga absolutamente nada a menos que ganemos su caso. Sin costos ocultos. Sin sorpresas.</p>
              </div>
            </div>
          </motion.div>

          {/* Lado Derecho: Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-2xl"
          >
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Nombre Completo
                </label>
                <div className="mt-1">
                  <input type="text" name="name" id="name" required className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white" />
                </div>
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email o Teléfono
                </label>
                <div className="mt-1">
                  <input type="text" name="contact" id="contact" required className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Breve descripción de su caso
                </label>
                <div className="mt-1">
                  <textarea rows={4} name="message" id="message" required className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white" />
                </div>
              </div>
              <div>
                {/* CTA Final */}
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform hover:scale-105">
                  Reclame mi Consulta Gratuita Ahora
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
