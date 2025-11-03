⚖️ Landing Page - Despacho de Abogados de Accidentes
Una landing page de alta conversión construida con Next.js, Tailwind CSS y un enfoque estratégico en SEO Local. Este proyecto transforma una base de código moderna en una herramienta de captación de clientes para un despacho de abogados, priorizando la confianza, la accesibilidad y la acción del usuario.

✨ Características Principales
Este no es solo un sitio web, es un embudo de conversión diseñado para guiar a potenciales clientes desde la incertidumbre hasta el contacto.

🧠 Embudo de Conversión Psicológico: La estructura de la página está diseñada para generar empatía, construir autoridad, educar al usuario y facilitar el contacto, respondiendo a las necesidades emocionales de una persona que ha sufrido un accidente.
🗺️ Ultra Foco en SEO Local: Implementado para dominar los resultados de búsqueda locales.
Schema Markup (JSON-LD): Esquemas Attorney y LocalBusiness para que Google entienda perfectamente el servicio y la ubicación.
Contenido Optimizado: Textos y metadatos enfocados en palabras clave geolocalizadas.
Consistencia NAP: Nombre, Dirección y Teléfono (Name, Address, Phone) consistentes para fortalecer la presencia local.
🔍 FAQ con Búsqueda en Tiempo Real: Un componente de Preguntas Frecuentes interactivo y de diseño superior. Los usuarios pueden filtrar preguntas al instante, encontrando respuestas de forma rápida y eficiente, todo animado suavemente con Framer Motion.
📍 Integración con Google Maps: Muestra las ubicaciones de las oficinas en un mapa interactivo, utilizando la API de @react-google-maps/api para generar confianza y facilitar la visita física.
📱 Múltiples Puntos de Contacto Inmediato: Optimizados para la conversión:
Formulario de Contacto claro y sencillo.
Botón de Llamada Directa (Click-to-Call) para comunicación instantánea desde móviles.
Botón Flotante de WhatsApp para consultas rápidas y convenientes.
🌗 Tema Claro / Oscuro: Interfaz moderna que se adapta a las preferencias del usuario, implementada con el sistema de variantes dark: de Tailwind CSS para una experiencia visual cómoda a cualquier hora.
💻📱 Diseño 100% Responsive: Experiencia de usuario impecable garantizada en cualquier dispositivo, desde teléfonos móviles hasta monitores de escritorio de gran tamaño.
✨ Animaciones Modernas y Sutiles: Transiciones y micro-interacciones fluidas gracias a Framer Motion, que mejoran la experiencia de usuario sin sacrificar el rendimiento.

🛠️ Stack Tecnológico y Bibliotecas
Este proyecto se apoya en un stack de tecnologías moderno, escalable y centrado en el rendimiento.
Categoría	Tecnología / Biblioteca	Icono
Framework	Next.js (con App Router)	⚛️
Estilos	Tailwind CSS	🎨
Animaciones	Framer Motion	✨
Mapas	@react-google-maps/api	🗺️
Monorepo	Nx	🛠️
Linting/Formato	ESLint & Prettier	🧹
Pruebas	Jest & Playwright	🧪
🚀 Cómo Empezar

Sigue estos pasos para levantar el proyecto en tu entorno local.

Prerrequisitos
Node.js (v18 o superior)
pnpm como gestor de paquetes (recomendado)
Instalación
Clona el repositorio:

git clone https://github.com/tu-usuario/tu-repositorio.git
Navega al directorio del proyecto:

cd tu-repositorio

Instala las dependencias:
pnpm install
Configura las variables de entorno:
Crea un archivo .env.local en la raíz del proyecto (/).

Añade tu clave de API de Google Maps:

Env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=TU_API_KEY_AQUI
Ejecución
Para iniciar el servidor de desarrollo:
code
Bash
pnpm dev

```    La aplicación estará disponible en `http://localhost:3000`.

📜 Scripts Disponibles
pnpm dev: Inicia la aplicación en modo desarrollo.
pnpm build: Compila la aplicación para producción.
pnpm start: Inicia el servidor de producción (después de un build).
pnpm lint: Analiza el código en busca de errores y problemas de estilo.
pnpm test: Ejecuta las pruebas unitarias.
pnpm e2e: Ejecuta las pruebas end-to-end con Playwright.
