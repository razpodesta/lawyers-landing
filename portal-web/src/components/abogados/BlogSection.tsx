// Ruta: portal-web/src/components/abogados/BlogSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Datos de las entradas del blog. En un proyecto real, esto vendría de un CMS.
const blogPosts = [
  {
    id: 1,
    title: '¿Qué Debo Hacer Inmediatamente Después de un Accidente de Auto?',
    slug: '#', // En un blog real, sería '/blog/que-hacer-despues-accidente'
    imageUrl: '/ui/blog-thumbnail-1.jpg',
    excerpt: 'En los momentos posteriores a un accidente, la confusión es normal. Sin embargo, los pasos que tome son cruciales para su seguridad y para la validez de su futuro reclamo legal...',
    category: 'Guía Práctica',
  },
  {
    id: 2,
    title: '¿Necesito un Abogado si la Culpa del Otro Conductor Parece Clara?',
    slug: '#',
    imageUrl: '/ui/blog-thumbnail-2.jpg',
    excerpt: 'Es un error común pensar que una culpa clara garantiza una compensación justa. Las aseguradoras tienen equipos dedicados a minimizar los pagos. Descubra por qué la representación legal es vital...',
    category: 'Consejo Legal',
  },
  {
    id: 3,
    title: '¿Cómo se Calcula el Valor Real de mi Caso de Lesión Personal?',
    slug: '#',
    imageUrl: '/ui/blog-thumbnail-3.jpg',
    excerpt: 'El valor de su caso va mucho más allá de las facturas médicas inmediatas. Incluye salarios perdidos, futuros tratamientos, y el impacto emocional. Le explicamos los factores clave que consideramos...',
    category: 'Análisis Financiero',
  },
];

// Componente de tarjeta individual para mantener el código limpio
function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group flex flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-shadow hover:shadow-2xl h-full"
    >
      <Link href={post.slug}>
        <div className="relative overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={`Miniatura para el artículo: ${post.title}`}
            width={800}
            height={450}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col flex-grow p-6">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{post.category}</p>
          <h3 className="mt-2 text-xl font-bold font-heading text-gray-900 dark:text-white flex-grow">
            {post.title}
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            {post.excerpt}
          </p>
          <div className="mt-6 flex items-center font-semibold text-blue-600 dark:text-blue-400">
            Leer más <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}


export function BlogSection() {
  return (
    <section id="blog" className="bg-white dark:bg-gray-900 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Recursos y Guías Legales
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Información valiosa para guiarlo en momentos difíciles. El conocimiento es el primer paso hacia la justicia.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
