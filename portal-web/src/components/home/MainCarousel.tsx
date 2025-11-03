// Ruta: portal-web/src/components/home/MainCarousel.tsx
'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
// --- CORRECCIÓN AQUÍ ---
// Importamos los tipos desde la librería principal 'embla-carousel'
import type { EmblaOptionsType } from 'embla-carousel';
// --- FIN DE LA CORRECCIÓN ---
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define la estructura de datos para cada slide
interface SlideData {
  id: number;
  alt: string;
}

// Datos de ejemplo para los slides. Reemplázalos con tus imágenes.
const slidesData: SlideData[] = [
  { id: 1, alt: 'Impresión Offset de alta calidad' },
  { id: 2, alt: 'Acabados profesionales de imprenta' },
  { id: 3, alt: 'Maquinaria de litografía moderna' },
  { id: 4, alt: 'Proyectos de impresión digital' },
];

const OPTIONS: EmblaOptionsType = { loop: true };

export function MainCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Funciones para navegar
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  // Actualizar el índice del slide activo
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect) };
  }, [emblaApi]);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full bg-gray-200">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slidesData.map((slide, index) => (
            <div className="relative flex-none w-full h-[500px]" key={slide.id}>
              {/* Contenedor del contenido superpuesto */}
              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    className="absolute inset-0 z-10 flex flex-col justify-center items-start p-16 text-white bg-black bg-opacity-40"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <motion.div variants={itemVariants} className="w-1/2">
                      <Image src="/logo-imprenta.png" alt="Logo Litografica Medici" width={150} height={150} />
                    </motion.div>

                    <motion.ul variants={itemVariants} className="mt-4 text-3xl font-bold list-disc list-inside space-y-2">
                        <li>OFFSET</li>
                        <li>IMPRESIÓN DIGITAL</li>
                        <li>SUBLIMACIÓN</li>
                        <li>TAMPOGRAFÍA</li>
                        <li>GRAN FORMATO</li>
                        <li>ACABADOS</li>
                        <li>GRABADO LÁSER</li>
                    </motion.ul>

                    <motion.div variants={itemVariants} className="mt-8 flex items-center bg-white text-black p-4 rounded-lg">
                        <Image src="/whatsapp-logo.png" alt="WhatsApp" width={50} height={50} />
                        <div className='ml-4'>
                            <p className='font-semibold'>COMUNÍQUESE AL WHATSAPP</p>
                            <p className='text-3xl font-bold'>55 7401 0559</p>
                        </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

               {/* Placeholder de fondo por ahora */}
               <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                 <span className='text-5xl text-white'>Fondo Slide {slide.id}</span>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de Navegación */}
      <button onClick={scrollPrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full z-20 transition-colors">
        <ChevronLeft className="text-gray-800" />
      </button>
      <button onClick={scrollNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full z-20 transition-colors">
        <ChevronRight className="text-gray-800" />
      </button>

      {/* Puntos de Paginación */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}
