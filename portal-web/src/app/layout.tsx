// Ruta: portal-web/src/app/layout.tsx

import './global.css';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { ThemeProvider } from 'next-themes';
import { Roboto, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

// --- CONFIGURACIÓN DE TIPOGRAFÍAS (OPTIMIZADO CON NEXT/FONT) ---
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto', // Se usará como la fuente 'sans' por defecto
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-montserrat', // Se usará para los títulos como 'font-heading'
  display: 'swap',
});


// --- METADATOS LISTOS PARA PRODUCCIÓN Y SEO ---
export const metadata: Metadata = {
  // Título base y plantilla para el resto de las páginas
  title: {
    default: 'ABOGADOS & ABOGADOS | Expertos en Casos de Accidentes',
    template: `%s | ABOGADOS & ABOGADOS`,
  },
  // Descripción principal para los motores de búsqueda
  description: 'Despacho de abogados especializado en accidentes. Ofrecemos consulta gratuita y solo cobramos si ganamos su caso. Luche por la compensación que merece.',

  // Palabras clave relevantes (reemplaza [Tu Ciudad])
  keywords: ['abogado de accidentes', 'abogado de lesiones personales', '[Tu Ciudad]', 'consulta gratuita abogado', 'no ganas no pagas', 'bufete de abogados'],

  // Autor del sitio web
  authors: [{ name: 'ABOGADOS & ABOGADOS', url: 'https://www.sudominio.com' }], // <-- REEMPLAZA CON TU DOMINIO

  // --- OPEN GRAPH (PARA COMPARTIR EN REDES SOCIALES COMO FACEBOOK, LINKEDIN) ---
  openGraph: {
    title: 'ABOGADOS & ABOGADOS | Expertos en Casos de Accidentes',
    description: '¿Sufriste un accidente? Lucha por la compensación que mereces. Ofrecemos consulta gratuita y no cobramos a menos que ganemos.',
    url: 'https://www.sudominio.com', // <-- REEMPLAZA CON TU DOMINIO FINAL
    siteName: 'ABOGADOS & ABOGADOS',
    // Asegúrate de crear una imagen de 1200x630px y colocarla en /public/
    images: [
      {
        url: 'https://www.sudominio.com/og-image.jpg', // <-- REEMPLAZA CON LA RUTA COMPLETA DE TU IMAGEN
        width: 1200,
        height: 630,
        alt: 'Oficina de ABOGADOS & ABOGADOS',
      },
    ],
    locale: 'es_ES', // Ajusta según tu región (ej. es_MX, es_CO)
    type: 'website',
  },

  // --- TWITTER CARD (PARA COMPARTIR EN TWITTER/X) ---
  twitter: {
    card: 'summary_large_image',
    title: 'ABOGADOS & ABOGADOS | Expertos en Casos de Accidentes',
    description: '¿Sufriste un accidente? Lucha por la compensación que mereces. Ofrecemos consulta gratuita y no cobramos a menos que ganemos.',
    images: ['https://www.sudominio.com/og-image.jpg'], // <-- REEMPLAZA CON LA RUTA COMPLETA DE TU IMAGEN
  },

  // --- METADATOS TÉCNICOS ---
  // Instrucciones para los robots de búsqueda
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Favicon
  icons: {
    icon: '/favicon.ico',
    // Puedes añadir más tamaños si los tienes
    // apple: '/apple-touch-icon.png',
  },
  // Manifiesto para PWA (Progressive Web App), si aplica
  // manifest: '/site.webmanifest',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${roboto.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
