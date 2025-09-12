
import React from 'react';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 shadow-lg flex flex-col h-full">
        <p className="text-gray-300 flex-grow">"{quote}"</p>
        <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="font-bold text-white">{author}</p>
            <p className="text-sm text-[#3B82F6]">{role}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 sm:py-24 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10">Lo que dicen nuestros clientes.</h2>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <TestimonialCard
                        quote="El proceso fue increíblemente rápido y seguro. En menos de 5 minutos ya era dueño de la cuenta y mi familia estaba disfrutando los beneficios. ¡Recomendadísimo!"
                        author="Juan P."
                        role="Emprendedor Digital"
                    />
                    <TestimonialCard
                        quote="Como fotógrafa aficionada, el Editor Mágico ha cambiado mi vida. Y tener 2TB de espacio me da una tranquilidad enorme. El precio es una locura."
                        author="María G."
                        role="Creativa"
                    />
                    <TestimonialCard
                        quote="Dudaba por el precio, pero el soporte fue excelente y me explicaron todo. Es 100% legítimo. Gemini Advanced en mis documentos es un antes y un después en mi trabajo."
                        author="Carlos R."
                        role="Consultor"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
