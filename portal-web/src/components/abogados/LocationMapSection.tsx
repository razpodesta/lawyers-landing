// Ruta: portal-web/src/components/abogados/LocationMapSection.tsx
'use client';

import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

// --- CONFIGURACIÓN DE LA UBICACIÓN ---
const officeLocation = {
  lat: 9.9333, // Reemplaza con la latitud de tu oficina
  lng: -84.0833, // Reemplaza con la longitud de tu oficina
};
const officeAddress = "Avenida Central, San José, Costa Rica"; // Reemplaza con tu dirección

// --- FIN DE LA CONFIGURACIÓN ---

const encodedAddress = encodeURIComponent(officeAddress);
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.5rem',
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  clickableIcons: false,
  styles: [ // Estilo sutil para eliminar puntos de interés no relevantes
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ]
};

export function LocationMapSection() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  return (
    <section id="ubicacion" className="bg-gray-50 dark:bg-gray-800 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Encuéntrenos y Visítenos
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Estamos convenientemente ubicados para servirle.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Columna Izquierda: Información */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-start">
              <MapPin className="h-10 w-10 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"/>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Nuestra Oficina Principal</h3>
                <p className="mt-1 text-lg text-gray-600 dark:text-gray-300">{officeAddress}</p>
              </div>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              <Navigation size={20} />
              Obtener Direcciones
            </a>
          </motion.div>

          {/* Columna Derecha: El Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-[450px] w-full rounded-lg shadow-xl"
          >
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={officeLocation}
                zoom={15}
                options={mapOptions}
              >
                <MarkerF position={officeLocation} title="Nuestra Oficina" />
              </GoogleMap>
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-500">Cargando Mapa...</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
