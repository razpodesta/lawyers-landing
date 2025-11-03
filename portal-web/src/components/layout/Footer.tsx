// Ruta: portal-web/src/components/layout/Footer.tsx

import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-black text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Columna 1: Nombre y Disclaimer */}
          <div>
            <h3 className="font-heading font-bold text-xl">ABOGADOS & ABOGADOS</h3>
            <p className="mt-2 text-sm text-gray-400">
              El contenido de este sitio web es solo para fines informativos y no constituye asesoramiento legal. La contratación de un abogado es una decisión importante que no debe basarse únicamente en anuncios.
            </p>
          </div>
          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="font-heading font-bold text-xl">Navegación</h3>
            <ul className="mt-2 space-y-1">
              <li><Link href="#inicio" className="text-gray-300 hover:text-blue-400 transition-colors">Inicio</Link></li>
              <li><Link href="#quienes-somos" className="text-gray-300 hover:text-blue-400 transition-colors">Quiénes Somos</Link></li>
              <li><Link href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link href="#contacto" className="text-gray-300 hover:text-blue-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>
          {/* Columna 3: Redes Sociales */}
          <div>
            <h3 className="font-heading font-bold text-xl">Síganos</h3>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ABOGADOS & ABOGADOS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
