// Ruta: portal-web/src/components/home/HeroBanner.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroBanner() {
  return (
    // Se usa 'motion.section' para animar la aparición del componente.
    // La directiva 'use client' es necesaria porque Framer Motion
    // se ejecuta en el navegador (cliente) y no en el servidor.
    <motion.section
      className="bg-[#009A4E] py-4"
      initial={{ opacity: 0, y: -20 }} // Estado inicial: invisible y ligeramente arriba
      animate={{ opacity: 1, y: 0 }}   // Estado final: visible y en su posición
      transition={{ duration: 0.5 }}   // Duración de la animación
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo FSC a la izquierda */}
        <div className="w-1/5">
          {/* Asegúrate de tener la imagen 'fsc-logo.png' en la carpeta /public */}
          <Image
            src="/fsc-logo.png"
            alt="Logo de Forest Stewardship Council"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Texto central */}
        <div className="w-3/5 text-center">
          <h2 className="text-white text-2xl font-semibold tracking-wide">
            TODOS NUESTROS TRABAJOS ESTÁN REALIZADOS CON PAPELES PROVENIENTES DE BOSQUES SUSTENTABLES
          </h2>
        </div>

        {/* Imagen derecha */}
        <div className="w-1/5 flex justify-end">
          {/* Asegúrate de tener la imagen 'paper-icon.png' en la carpeta /public */}
          <Image
            src="/paper-icon.png"
            alt="Icono de papeles sustentables"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </motion.section>
  );
}
