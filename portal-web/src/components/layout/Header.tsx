// Ruta: portal-web/src/components/layout/Header.tsx
'use client';

// --- Importaciones de Núcleo y Externas ---
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Componentes Internos ---
import { ThemeToggle } from './ThemeToggle';

// --- Constantes de Configuración ---
// Se define fuera del componente para evitar su recreación en cada render.
const navLinks = [
  { href: '#quienes-somos', label: 'Quiénes Somos' },
  { href: '#faq', label: 'Preguntas Frecuentes' },
  { href: '#ubicacion', label: 'Ubicación' },
];

/**
 * Componente de encabezado principal del sitio.
 * Es 'sticky', totalmente responsive, y gestiona la navegación móvil.
 * Esta versión ha sido modificada para utilizar un logo en formato JPG.
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efecto para bloquear el scroll del body cuando el menú móvil está abierto.
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Función de limpieza para reestablecer el scroll.
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md transition-colors duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">

        {/* Sección de Logo y Nombre de la Marca */}
        <Link href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
          {/*
            MODIFICACIÓN: El logo ahora apunta a un archivo .jpg.
            - Es CRUCIAL que los atributos `width` y `height` coincidan con las
              dimensiones reales de la imagen JPG para evitar la distorsión y el
              Cumulative Layout Shift (CLS).
            - Se ha añadido `className="rounded-sm"` como un ejemplo para suavizar los bordes
              del recuadro del JPG si tuviera un fondo sólido.
          */}
          <Image
            src="/logos/logo-despacho.jpg" // <-- RUTA MODIFICADA A .JPG
            alt="Logo de ABOGADOS & ABOGADOS"
            width={40} // <-- DEBE SER EL ANCHO REAL DE TU IMAGEN JPG
            height={40} // <-- DEBE SER EL ALTO REAL DE TU IMAGEN JPG
            priority // Prioriza la carga del logo, ya que es un elemento visual clave.
            className="h-10 w-10 object-contain" // object-contain previene la distorsión
          />
          <span className="text-xl font-bold font-heading text-gray-800 dark:text-white sm:text-2xl">
            ABOGADOS & ABOGADOS
          </span>
        </Link>

        {/* Navegación para pantallas de escritorio */}
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-600 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />

          <ThemeToggle />

          <Link href="#contacto" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-px">
            Consulta Gratuita
          </Link>
        </nav>

        {/* Controles para pantallas móviles */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 dark:text-white z-50 relative p-2"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil (Off-canvas) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center justify-center h-full pt-20">
                <ul className="space-y-8 text-center">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={closeMenu} className="text-3xl font-semibold text-gray-800 dark:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="#contacto" onClick={closeMenu} className="mt-12 bg-blue-600 text-white font-bold px-8 py-4 rounded-lg text-2xl">
                  Consulta Gratuita
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
