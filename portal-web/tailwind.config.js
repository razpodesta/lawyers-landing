// Ruta: portal-web/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' será nuestra fuente por defecto (Roboto)
        sans: ['var(--font-roboto)', 'sans-serif'],
        // 'heading' será nuestra fuente para títulos (Montserrat)
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
