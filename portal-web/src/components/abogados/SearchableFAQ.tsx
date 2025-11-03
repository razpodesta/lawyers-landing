// Ruta: portal-web/src/components/abogados/SearchableFAQ.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';

// Datos de las preguntas. En un proyecto real, esto vendría de un CMS.
const faqData = [
  {
    id: 1,
    question: '¿Cuánto cuesta contratar a un abogado de accidentes?',
    answer: 'Absolutamente nada por adelantado. Trabajamos bajo un modelo de honorarios de contingencia, lo que significa que solo nos paga si ganamos su caso. Nuestra tarifa es un porcentaje del acuerdo o veredicto que obtenemos para usted. Sin recuperación, no hay honorarios. Cero riesgo para usted.',
  },
  {
    id: 2,
    question: '¿Cuánto tiempo tengo para presentar una demanda?',
    answer: 'El tiempo varía según el estado y se conoce como "estatuto de limitaciones". Es crucial actuar rápidamente, ya que esperar demasiado puede impedirle reclamar una compensación. Una consulta gratuita nos permitirá evaluar los plazos específicos de su caso.',
  },
  {
    id: 3,
    question: '¿Qué tipo de compensación puedo recibir?',
    answer: 'Puede tener derecho a una compensación por gastos médicos (pasados y futuros), salarios perdidos, pérdida de capacidad de ganancia, dolor y sufrimiento, y angustia emocional. Nuestro objetivo es maximizar cada una de estas áreas para asegurar su bienestar financiero.',
  },
  {
    id: 4,
    question: '¿Debo hablar con la compañía de seguros del otro conductor?',
    answer: 'Le recomendamos encarecidamente que no lo haga. Las aseguradoras a menudo intentan que usted haga declaraciones que puedan perjudicar su caso o que acepte una oferta muy por debajo de lo que merece. Permítanos manejar toda la comunicación con las aseguradoras por usted.',
  },
];

export function SearchableFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqData.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white dark:bg-gray-900 py-20 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Respuestas claras a sus dudas más importantes.
          </p>
        </div>

        {/* Barra de búsqueda de élite */}
        <div className="relative mt-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Busque una pregunta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-3 pl-12 pr-4 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Lista de FAQs */}
        <div className="mt-8 space-y-4">
          {filteredFaqs.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-shadow hover:shadow-md">
              <button
                onClick={() => toggleFAQ(item.id)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-800 dark:text-white">{item.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === item.id && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
