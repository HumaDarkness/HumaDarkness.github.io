
import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
);

const Offer: React.FC = () => {
  const checklistItems = [
    "Acceso Total por 1 Año",
    "Propiedad Completa de la Cuenta (Es 100% tuya)",
    "Control Total para tu Grupo Familiar",
    "Soporte Personalizado en Español"
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Propiedad Total. <span className="text-[#3B82F6]">Sin Trucos.</span></h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 text-center opacity-60">
            <h3 className="text-xl font-bold text-gray-400 mb-2">Precio Oficial</h3>
            <p className="text-5xl font-bold text-gray-500 line-through decoration-red-500 decoration-2">$199.99</p>
            <p className="text-gray-500">/año</p>
          </div>
          
          <div className="bg-[#3B82F6]/10 p-8 rounded-xl border-2 border-[#3B82F6] shadow-2xl shadow-blue-500/20">
            <h3 className="text-xl font-bold text-[#3B82F6] mb-2">Nuestra Oferta</h3>
            <p className="text-5xl font-bold text-white">$20</p>
            <p className="text-gray-300">/pago único</p>
          </div>
        </div>

        <div className="mt-12 text-left max-w-md mx-auto">
          <ul className="space-y-4">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                  <CheckIcon className="h-4 w-4 text-green-400" />
                </div>
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Offer;
