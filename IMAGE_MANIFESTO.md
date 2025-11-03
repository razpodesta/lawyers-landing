# Manifiesto de Gestión de Imágenes - Litográfica Medici

## 1. Propósito

Este documento establece las directrices y mejores prácticas para el manejo de todos los activos de imagen (fotografías, logos, iconos) dentro del proyecto `portal-web`. El objetivo es garantizar:

-   **Máximo Rendimiento:** Tiempos de carga rápidos para una excelente experiencia de usuario (UX) y SEO.
-   **Consistencia:** Una estructura de archivos y convenciones de nomenclatura predecibles.
-   **Mantenibilidad:** Facilidad para encontrar, actualizar o reemplazar imágenes sin romper el código.
-   **Accesibilidad:** Asegurar que nuestro sitio sea usable por todos, incluyendo personas con discapacidades visuales.

**Seguir estas reglas no es opcional. Es un estándar de calidad para nuestro código base.**

---

## 2. Estructura de Carpetas

Todas las imágenes estáticas deben residir exclusivamente dentro de la carpeta `/portal-web/public/`. Esta carpeta se organiza por el **propósito** de la imagen.
/portal-web/public/
│
├── banners/
│ └── slide-principal-1.webp
│ └── contacto-fondo.webp
│
├── gallery/
│ └── maquina-offset-heidelberg-01.webp
│ └── area-acabados-guillotina.webp
│
├── icons/
│ └── fsc-logo.png
│ └── paper-icon.png
│
├── logos/
│ └── logo-imprenta-blanco.svg
│ └── logo-medici-color.svg
│
└── ui/
└── background-pattern.webp
└── texture-noise.png
code
Code
-   **`/banners`**: Imágenes de gran formato usadas en carruseles, cabeceras de página o secciones "hero".
-   **`/gallery`**: Fotografías de productos, maquinaria, instalaciones o portafolio.
-   **`/icons`**: Iconos pequeños que no son SVGs manejados como componentes (ej. logos de certificaciones).
-   **`/logos`**: Logos de la empresa o de socios comerciales. Siempre que sea posible, deben ser SVG.
-   **`/ui`**: Elementos gráficos para la interfaz, como patrones de fondo, texturas o separadores visuales.

---

## 3. Convenciones de Nomenclatura

Los nombres de archivo deben ser claros, descriptivos y consistentes.

-   **Todo en minúsculas:** `mi-imagen.webp`, no `Mi-Imagen.webp`. Evita problemas de sensibilidad de mayúsculas/minúsculas en servidores.
-   **Usar kebab-case:** Las palabras se separan con guiones (`-`), no con guiones bajos (`_`) ni espacios.
-   **Ser descriptivo:** El nombre debe describir el contenido de la imagen.
    -   **Mal:** `IMG_0012.jpg`, `pic1.webp`, `logo.svg`
    -   **Bien:** `maquina-troqueladora-automatica.webp`, `tarjetas-de-presentacion-laminado-mate.webp`, `logo-medici-footer.svg`

---

## 4. Formatos y Optimización

La optimización es el paso más crítico para el rendimiento web.

### 4.1. Elección del Formato Correcto

-   **WebP (.webp):** **Es el formato preferido para todo.** Ofrece una compresión superior a JPEG y PNG, y soporta transparencia. Debe ser nuestra opción por defecto para todas las imágenes fotográficas y de interfaz.
-   **SVG (.svg):** **Obligatorio para logos e iconos simples.** Son vectores que escalan infinitamente sin perder calidad y tienen un tamaño de archivo mínimo. Si un icono o logo puede ser SVG, DEBE ser SVG.
-   **PNG (.png):** Usar solo como alternativa a WebP cuando se necesite transparencia y el formato original sea PNG.
-   **JPEG (.jpg):** Considerado un formato "legacy". Usar solo si la imagen de origen es un JPEG y no hay una herramienta disponible para convertirla a WebP.

### 4.2. Proceso de Optimización (Checklist)

Antes de añadir cualquier imagen al repositorio, debe pasar por este proceso:

1.  **Redimensionar:** La imagen no debe ser más grande que su tamaño máximo de visualización en la web. No subas una foto de 4000px de ancho si se mostrará a 800px. Usa un editor de imágenes para redimensionarla primero.
2.  **Comprimir:** Usa herramientas para reducir el peso del archivo sin una pérdida de calidad perceptible.
    -   **Online (Recomendado):** [Squoosh.app](https://squoosh.app/) (muy potente), [TinyPNG](https://tinypng.com/) (simple y efectivo).
    -   **Meta:** Una imagen fotográfica de página completa no debería pesar más de **150-250 KB**. Las imágenes más pequeñas, mucho menos.

---

## 5. Implementación en Código (Next.js)

La implementación correcta es tan importante como la optimización.

-   **Usar siempre el componente `<Image>` de Next.js.** Nunca uses la etiqueta `<img>` nativa.

    ```jsx
    import Image from 'next/image';
    ```

-   **Proporcionar `width` y `height`:** Es obligatorio para evitar el "Cumulative Layout Shift" (CLS), un factor clave para el SEO y la UX.

-   **El `alt` text es OBLIGATORIO:** El texto alternativo describe la imagen para los lectores de pantalla y para los motores de búsqueda. Debe ser conciso y descriptivo.
    -   **Decorativa:** Si una imagen es puramente decorativa, usa `alt=""`.
    -   **Informativa:** Describe lo que se ve en la imagen. Ej: `alt="Máquina de impresión offset Heidelberg Speedmaster imprimiendo folletos a color."`

### Ejemplo de Uso

```jsx
import Image from 'next/image';

function MachineryCard() {
  return (
    <div>
      <Image
        src="/gallery/maquina-offset-heidelberg-01.webp"
        alt="Máquina de impresión offset Heidelberg Speedmaster en funcionamiento."
        width={800}
        height={600}
        className="rounded-lg shadow-md"
      />
      <h3>Heidelberg Speedmaster</h3>
    </div>
  );
}
---


