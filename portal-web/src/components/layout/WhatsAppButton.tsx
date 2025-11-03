// Ruta: portal-web/src/components/layout/WhatsAppButton.tsx
'use client';

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react'; // O un icono específico de WhatsApp si prefieres

export function WhatsAppButton() {
  const phoneNumber = '5215574010559'; // Tu número de teléfono con código de país
  const message = 'Hola, me gustaría solicitar más información.';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      // Animación de pulso sutil
      whileInView={{
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
        }
      }}
    >
      <MessageSquare size={28} />
      {/* Opcionalmente, puedes añadir texto que aparece en hover */}
      {/* <span className="ml-2 hidden md:inline">¿Cómo puedo ayudarte?</span> */}
    </motion.a>
  );
}
