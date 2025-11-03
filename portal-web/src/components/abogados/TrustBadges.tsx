// Ruta: portal-web/src/components/abogados/TrustBadges.tsx

import { Award, DollarSign, ShieldCheck } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      text: "Consulta 100% Gratuita y Confidencial",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      text: "No Ganas, No Pagas. Sin Riesgos para Ti.",
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      text: "+15 Años de Experiencia en Casos de Accidentes",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center">
              {badge.icon}
              <p className="mt-2 font-semibold text-gray-700 dark:text-gray-200">
                {badge.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
