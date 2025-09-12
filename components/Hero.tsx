
import React from 'react';

const AiCloudIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#3B82F6] opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    <path d="M14.5 16.5h-5" />
    <path d="M12 19v-5" />
  </svg>
);

interface HeroProps {
  onGetAccessClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetAccessClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#111827] z-0">
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <AiCloudIcon />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-pulse delay-500">
          <AiCloudIcon />
        </div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" 
          alt="Google Logo" 
          className="h-20 w-20 mx-auto mb-8"
          aria-hidden="true"
        />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Desbloquea el Poder de Google AI Premium. <span className="text-[#3B82F6]">Control Total, Precio Único.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Obtén la propiedad completa de una cuenta Google One AI Premium de 2TB por un año. Incluye Gemini Advanced, 2TB de almacenamiento y herramientas de edición profesional por un pago único de $20.
        </p>
        <button
          onClick={onGetAccessClick}
          className="bg-[#3B82F6] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20"
        >
          Obtener Acceso Inmediato
        </button>
      </div>
    </section>
  );
};

export default Hero;
