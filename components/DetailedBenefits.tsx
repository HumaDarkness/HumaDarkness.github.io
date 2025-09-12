
import React, { useState } from 'react';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
);

const benefitsData = [
    {
        category: "Almacenamiento y Compartir",
        features: [
            "2 TB de almacenamiento para usar en Google Fotos, Drive y Gmail.",
            "Posibilidad de compartir el plan con hasta 5 personas más."
        ]
    },
    {
        category: "App de Gemini",
        features: [
            "Crea clips de video de alta calidad con Veo 3.",
            "Acceso ampliado a las funciones de Gemini, incluyendo Deep Research.",
            "Sube hasta 1,500 páginas de archivos para análisis con una ventana de contexto de 1 millón de tokens.",
            "Aprovecha los modelos de IA más potentes para razonamiento, análisis y programación."
        ],
        videoUrl: "https://www.youtube.com/embed/ecTqFLS-9mg?si=U4JO6oNszUe828nE&autoplay=1&mute=1&loop=1&controls=0&playlist=ecTqFLS-9mg"
    },
    {
        category: "Herramientas Creativas (Flow & Whisk)",
        features: [
            "Calidad cinematográfica con Flow, la herramienta de creación de video con IA.",
            "Coherencia en tus resultados, generando elementos y haciéndoles referencia de forma consistente.",
            "Flujos de trabajo sin interrupciones para escribir instrucciones y crear narrativas.",
            "Límites más altos para crear videos a partir de imágenes con Veo 2 en Whisk.",
            "1,000 créditos de IA mensuales para generar videos en Flow y Whisk."
        ],
        videoUrl: "https://www.youtube.com/embed/A0VttaLy4sU?si=_h3HmuG2KlacmQh-&autoplay=1&mute=1&loop=1&controls=0&playlist=A0VttaLy4sU"
    },
    {
        category: "NotebookLM",
        features: [
            "5 veces más resúmenes de audio, cuadernos y fuentes.",
            "Personaliza el estilo y tono de tus cuadernos y controla la longitud de las respuestas.",
            "Colabora y comparte cuadernos con otras personas."
        ],
        videoUrl: "https://www.youtube.com/embed/KA_pExdDSUo?si=CDn4sYjfe06x0e4q&autoplay=1&mute=1&loop=1&controls=0&playlist=KA_pExdDSUo"
    },
    {
        category: "Gemini en Gmail, Docs, Vids y más",
        features: [
            "Ayuda para escribir en Gmail y Documentos: redacta desde invitaciones hasta currículums.",
            "Crea imágenes originales y relevantes en Presentaciones con solo unas palabras.",
            "Mejora la calidad de video en Meet: reduce ruido, aumenta nitidez y corrige iluminación.",
            "Crea un video interesante en Vids, generando clips o un borrador completo con una instrucción."
        ]
    },
    {
        category: "Beneficios Adicionales",
        features: [
            "10% de devolución en Google Store en compras de dispositivos.",
            "Más funciones de Google Meet, como videollamadas grupales más largas.",
            "Más funciones de Calendario de Google, como una agenda de citas mejorada."
        ]
    }
];

interface BenefitItemProps {
    category: string;
    features: string[];
    videoUrl?: string;
    isOpen: boolean;
    onClick: () => void;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ category, features, videoUrl, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-700/50 last:border-b-0">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-5 px-4"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-bold text-white">{category}</span>
                <ChevronDownIcon className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <div className="pb-5 px-6">
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {features.map((feature, index) => <li key={index}>{feature}</li>)}
                    </ul>
                    {videoUrl && (
                        <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                            <iframe
                                className="w-full h-full"
                                src={videoUrl}
                                title={`Video demonstration for ${category}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                aria-label={`Demostración en video de ${category}`}
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const DetailedBenefits: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold">Un Universo de Herramientas a tu Disposición</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">El plan Google AI Premium va mucho más allá del almacenamiento. Aquí tienes un desglose de todo lo que desbloqueas.</p>
                </div>
                <div className="bg-gray-800/30 rounded-xl border border-gray-700/50">
                    {benefitsData.map((benefit, index) => (
                        <BenefitItem
                            key={index}
                            category={benefit.category}
                            features={benefit.features}
                            videoUrl={benefit.videoUrl}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DetailedBenefits;
