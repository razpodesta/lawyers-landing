// Ruta: portal-web/src/components/home/InfoCard.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

// Interfaz para definir las propiedades que el componente recibirá.
// Esto asegura que se use correctamente y previene errores.
interface InfoCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  children: React.ReactNode;
}

/**
 * Componente de tarjeta reutilizable para mostrar información con una imagen,
 * un título y un párrafo. Incluye una animación de entrada al hacer scroll.
 */
export function InfoCard({ imageUrl, imageAlt, title, children }: InfoCardProps) {
  return (
    // Se usa 'motion.div' para animar la tarjeta. La directiva 'use client'
    // es necesaria porque Framer Motion se ejecuta en el navegador (cliente).
    <motion.div
      className="flex flex-col items-center text-center"
      // Animación: La tarjeta aparecerá desde abajo y se desvanecerá hacia adentro.
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // La animación se dispara solo la primera vez que la tarjeta es visible en un 30%.
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg shadow-lg">
        {/* Componente de Imagen optimizado de Next.js */}
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          // Efecto de zoom sutil al pasar el cursor sobre la imagen.
          className="transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </motion.div>
  );
}
