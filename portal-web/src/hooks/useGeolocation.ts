// Ruta: portal-web/src/hooks/useGeolocation.ts
'use client';

import { useState, useEffect } from 'react';

export function useGeolocation() {
  const [city, setCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Usamos una API gratuita de geolocalización por IP.
    // En un entorno de producción de alto tráfico, considera una API de pago más robusta.
    fetch('https://get.geojs.io/v1/ip/geo.json')
      .then(response => response.json())
      .then(data => {
        if (data.city) {
          setCity(data.city);
        }
      })
      .catch(error => {
        console.error("Error fetching geolocation:", error);
        setCity(null); // En caso de error, no mostramos ciudad.
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // El array vacío asegura que esto se ejecute solo una vez.

  return { city, isLoading };
}
