// Ruta: portal-web/src/app/layout.tsx

import './global.css';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'; // <-- IMPORTAR

export const metadata = {
  title: 'Litográfica Medici - Imprenta y Acabados',
  description:
    'Empresa 100% mexicana con más de 25 años en el ramo litográfico.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton /> {/* <-- AÑADIR AQUÍ */}
      </body>
    </html>
  );
}
