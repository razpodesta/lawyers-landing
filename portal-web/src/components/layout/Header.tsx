// Ruta: portal-web/src/components/layout/Header.tsx

import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/trabajos', label: 'Trabajos' },
    { href: '/grabado-laser', label: 'Grabado Láser' },
    { href: '/recetarios-medicos', label: 'Recetarios Médicos' },
    { href: '/nosotros', label: 'Nosotros' },
  ];

  return (
    <header className="shadow-md">
      {/* Top Bar */}
      <div className="bg-[#5a4a3b] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            {/* Aquí puedes poner el logo */}
            <h1 className="text-2xl font-bold">LITOGRÁFICA MEDICI</h1>
            <p className="text-sm">IMPRENTA & ACABADOS</p>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <span>ariesdigital2010@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <span>55 7401 0559</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gray-100">
        <div className="container mx-auto flex justify-center items-center p-2">
          <ul className="flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-gray-700 font-semibold border border-gray-300 bg-white rounded-sm hover:bg-gray-200 transition-colors duration-300"
                >
                  {link.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
