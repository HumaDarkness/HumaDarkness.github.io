
import React, { useState } from 'react';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
);

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-700/50">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-5 px-2"
            >
                <span className="text-lg font-bold text-white">{question}</span>
                <ChevronDownIcon className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-gray-300 pb-5 px-2">{answer}</p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "¿Por qué es tan barato? ¿Cuál es el truco?",
            answer: "No hay truco. Compramos estas cuentas en grandes volúmenes y en regiones con precios más accesibles, lo que nos permite transferirte los ahorros. Te damos la propiedad completa de una cuenta 100% legítima de Google por un año."
        },
        {
            question: "¿Es seguro? ¿Cómo sé que no perderé el acceso?",
            answer: "Es 100% seguro. Una vez te entregamos la cuenta, tú estableces tu propia contraseña, número de teléfono y correos de recuperación. La cuenta es completamente tuya y solo tú tienes el control. Garantizamos tu acceso durante todo el año."
        },
        {
            question: "¿Cómo es el proceso de compra y entrega?",
            answer: "Es muy simple: 1) Realizas el pago a través de nuestro chat de WhatsApp. 2) Nos proporcionas un email de recuperación. 3) En menos de 10 minutos, te enviamos los datos de acceso de tu nueva cuenta para que tomes control total. ¡Listo para disfrutar!"
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 sm:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10">¿Tienes dudas? <span className="text-[#3B82F6]">Tenemos respuestas.</span></h2>
                </div>
                <div className="mt-8">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
