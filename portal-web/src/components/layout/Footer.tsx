// Ruta: portal-web/src/components/layout/Footer.tsx

import { Facebook, Twitter, Rss } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Contact Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto text-center text-lg">
          Litográfica Medici · Tels.: 55 5543 0478 y 55 5687 6719 ·
          ariesdigital2010@gmail.com
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto py-8 flex justify-between items-center">
        <div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Litográfica Medici. Todos los
            derechos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Funciona con Mantra & WordPress (Ahora con Next.js y Nx!)
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Rss />
          </a>
        </div>
      </div>
    </footer>
  );
}
