// Ruta: portal-web/src/components/home/GallerySection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';

// Datos de las imágenes de la galería. Agrega tantas como necesites.
const galleryImages = [
  { id: 1, src: '/gallery-1.jpg', alt: 'Máquina de impresión 1' },
  { id: 2, src: '/gallery-2.jpg', alt: 'Máquina de impresión 2' },
  { id: 3, src: '/gallery-3.jpg', alt: 'Máquina de impresión 3' },
  { id: 4, src: '/gallery-4.jpg', alt: 'Máquina de impresión 4' },
  { id: 5, src: '/gallery-5.jpg', alt: 'Máquina de impresión 5' },
];

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: 'start',
  slidesToScroll: 1,
};

export function GallerySection() {
  const [emblaRef] = useEmblaCarousel(OPTIONS);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        {/* Aquí podrías añadir un título para la sección si lo deseas */}
        {/* <h2 className="text-3xl font-bold text-center mb-8">Nuestra Maquinaria</h2> */}

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {galleryImages.map((img) => (
              // Usamos flex-shrink-0 y definimos el ancho para cada slide
              <div
                className="relative flex-none w-full md:w-1/3 p-2"
                key={img.id}
              >
                <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={img.src} // Asegúrate de tener estas imágenes en /public
                    alt={img.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
