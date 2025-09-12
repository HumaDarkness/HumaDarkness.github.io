
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// --- START OF types.ts ---
export interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
  options?: ChatOption[];
  isOption?: boolean;
}

export interface ChatOption {
  text: string;
  nextNode: string;
  link?: string;
}

export interface ChatNode {
  text: string;
  options?: ChatOption[];
}

export type ConversationTree = {
  [key: string]: ChatNode;
};
// --- END OF types.ts ---

// --- START OF components/Hero.tsx ---
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
// --- END OF components/Hero.tsx ---

// --- START OF components/Benefits.tsx ---
const Benefits: React.FC = () => {
    return (
        <section className="py-20 sm:py-24 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">No es solo almacenamiento. <span className="text-[#3B82F6]">Es una ventaja competitiva.</span></h2>
                    <p className="text-lg text-gray-400">Tus 3 Superpoderes Digitales</p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 shadow-lg hover:border-[#3B82F6]/50 hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                        <div className="w-full rounded-lg mb-4 aspect-video overflow-hidden">
                            <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/kc_aLQdbrS4?si=8eXT2O4yaz4ZOs7O&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=kc_aLQdbrS4" 
                                title="Demostración de almacenamiento en la nube de Google" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                aria-label="Demostración de almacenamiento en la nube de Google"
                            ></iframe>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Paz Mental Absoluta</h3>
                        <p className="text-gray-300">Con 2TB, respalda toda tu vida digital. Fotos, videos, documentos... todo seguro en un solo lugar. Olvídate del 'almacenamiento lleno' para siempre.</p>
                    </div>
                     <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 shadow-lg hover:border-[#3B82F6]/50 hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                        <div className="w-full rounded-lg mb-4 aspect-video overflow-hidden">
                            <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/Bqn3SNyjsSE?si=NPhDO0LKSqThRMtp&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=Bqn3SNyjsSE" 
                                title="Demostración de Gemini en Google Workspace" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                aria-label="Demostración de Gemini en Google Workspace"
                            ></iframe>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Productividad x10</h3>
                        <p className="text-gray-300">Integra Gemini Advanced, la IA más potente de Google, en tu Gmail y Docs. Resume, redacta e investiga en segundos, no en horas.</p>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 shadow-lg hover:border-[#3B82F6]/50 hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            src="https://storage.googleapis.com/gweb-mobius-cdn/photos/uploads/c2003b84fc0f391f5f29192796279087077a4808.compressed.mp4"
                            className="w-full rounded-lg mb-4 aspect-video object-cover"
                            aria-label="Demostración del Editor Mágico de Google Fotos"
                        >
                            Tu navegador no soporta el tag de video.
                        </video>
                        <h3 className="text-xl font-bold mb-2">Creatividad sin Límites</h3>
                        <p className="text-gray-300">Usa el Editor Mágico para transformar tus fotos. Borra objetos, mueve personas y crea imágenes de nivel profesional sin ser un experto.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
// --- END OF components/Benefits.tsx ---

// --- START OF components/DetailedBenefits.tsx ---
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
// --- END OF components/DetailedBenefits.tsx ---

// --- START OF components/Offer.tsx ---
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
// --- END OF components/Offer.tsx ---

// --- START OF components/Testimonials.tsx ---
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
// --- END OF components/Testimonials.tsx ---

// --- START OF components/Faq.tsx ---
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
// --- END OF components/Faq.tsx ---

// --- START OF components/Footer.tsx ---
const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900/50 border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Google AI Premium Access. Todos los derechos reservados.</p>
                <p className="mt-2 text-sm">Soporte y Ventas: <a href="https://wa.me/573242415055" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:underline">Contacto por WhatsApp</a></p>
            </div>
        </footer>
    );
};
// --- END OF components/Footer.tsx ---

// --- START OF components/Chatbot.tsx ---
const conversationTree: ConversationTree = {
  start: {
    text: "¡Hola! Soy Alex, tu asesor de IA. Estoy aquí para ayudarte a entender esta oferta increíble. ¿Qué te gustaría saber primero?",
    options: [
      { text: "¿Cómo funciona la oferta?", nextNode: 'how_it_works' },
      { text: "¿Es 100% seguro?", nextNode: 'is_it_safe' },
      { text: "Quiero comprar ahora.", nextNode: 'buy_now' },
    ],
  },
  how_it_works: {
    text: "¡Excelente pregunta! Es simple: compramos cuentas de Google One AI Premium al por mayor, lo que nos permite obtener un precio mucho más bajo. Luego, te transferimos la propiedad completa de una de estas cuentas. Es 100% tuya por un año, sin mensualidades. ¿Quieres saber sobre la seguridad del proceso o los beneficios que incluye?",
    options: [
      { text: "Háblame de la seguridad.", nextNode: 'is_it_safe' },
      { text: "¿Qué beneficios incluye?", nextNode: 'benefits' },
      { text: "Volver al inicio.", nextNode: 'start' },
    ],
  },
  is_it_safe: {
    text: "Totalmente seguro. Una vez completado el pago, iniciamos la transferencia de propiedad de la cuenta a tu nombre. Recibirás un correo de Google para que establezcas tu propia contraseña y métodos de recuperación. Desde ese momento, solo tú tienes el control. Nadie más puede acceder. ¿Te gustaría saber cómo es el proceso de entrega o tienes otra duda?",
    options: [
      { text: "¿Cómo es la entrega?", nextNode: 'delivery_process' },
      { text: "¿Y si tengo problemas?", nextNode: 'support' },
      { text: "Entendido, quiero comprar.", nextNode: 'buy_now' },
    ],
  },
  benefits: {
      text: "Con esta cuenta obtienes 3 superpoderes: 1) 2TB de almacenamiento para que nunca te quedes sin espacio. 2) Gemini Advanced integrado en Gmail y Docs para máxima productividad. 3) El Editor Mágico para fotos espectaculares. ¿Algo más que quieras saber?",
      options: [
          { text: "Suena genial, quiero comprar", nextNode: 'buy_now'},
          { text: "Háblame del soporte", nextNode: 'support'},
          { text: "Volver", nextNode: 'start'},
      ]
  },
  delivery_process: {
      text: "El proceso es muy rápido. 1) Realizas el pago. 2) Nos proporcionas un email de recuperación. 3) En menos de 10 minutos, te enviamos las credenciales de tu nueva cuenta y las instrucciones para que tomes control total y cambies la contraseña. ¡Así de fácil! ¿Listo para empezar?",
      options: [
        { text: "Sí, quiero comprar.", nextNode: 'buy_now' },
        { text: "¿Qué pasa si necesito ayuda?", nextNode: 'support' },
      ]
  },
  support: {
      text: "Ofrecemos soporte personalizado en español durante todo el año de tu suscripción. Si tienes cualquier duda o problema, solo tienes que contactarnos por el mismo WhatsApp donde realizaste la compra y te ayudaremos de inmediato. Tu tranquilidad es nuestra prioridad. ¿Algo más en lo que pueda ayudarte?",
      options: [
          { text: "No, gracias. Quiero comprar.", nextNode: 'buy_now' },
          { text: "Volver al inicio.", nextNode: 'start' },
      ]
  },
  buy_now: {
    text: "¡Perfecto! Estás a un paso de potenciar tu vida digital. Para completar la compra de forma segura y personalizada, por favor haz clic en el siguiente botón para hablar con un agente por WhatsApp. Te guiaremos en el proceso final.",
    options: [
      { text: "Comprar por WhatsApp", nextNode: 'start', link: 'https://wa.me/573242415055' },
      { text: "Tengo una última pregunta.", nextNode: 'start' },
    ],
  },
};

const ChatBubbleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const initialNode = conversationTree.start;
            setMessages([{ sender: 'bot', text: initialNode.text, options: initialNode.options }]);
        }
    }, [isOpen, messages.length]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleOptionClick = (option: { text: string; nextNode: string; link?: string }) => {
        if (option.link) {
            window.open(option.link, '_blank');
        }

        const userMessage: ChatMessage = { sender: 'user', text: option.text, isOption: true };
        const nextNode = conversationTree[option.nextNode];
        const botMessage: ChatMessage = { sender: 'bot', text: nextNode.text, options: nextNode.options };

        setMessages(prevMessages => {
            const updatedMessages = prevMessages.map(msg => ({ ...msg, options: undefined }));
            return [...updatedMessages, userMessage, botMessage];
        });
    };

    return (
        <>
            <div className={`fixed bottom-5 right-5 z-50 transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}>
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-[#3B82F6] text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-800"
                    aria-label="Open chat"
                >
                    <ChatBubbleIcon className="w-8 h-8" />
                </button>
            </div>
            
            <div className={`fixed bottom-0 right-0 sm:bottom-5 sm:right-5 z-50 w-full h-full sm:w-[380px] sm:h-[600px] bg-gray-900/80 backdrop-blur-sm shadow-2xl sm:rounded-2xl flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full sm:translate-y-8'}`} style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
                <header className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-900 sm:rounded-t-2xl">
                    <h3 className="text-lg font-bold text-white">Asesor IA - Alex</h3>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white" aria-label="Close chat">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </header>
                
                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                                <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${msg.sender === 'bot' ? 'bg-gray-700 text-white rounded-bl-lg' : 'bg-[#3B82F6] text-white rounded-br-lg'}`}>
                                    <p>{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                </div>

                {messages[messages.length - 1]?.options && (
                    <div className="p-4 border-t border-gray-700 space-y-2 bg-gray-900 sm:rounded-b-2xl">
                        {messages[messages.length - 1].options?.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="w-full text-left bg-gray-800/80 hover:bg-[#3B82F6]/50 text-white font-semibold py-2 px-4 border border-gray-700 rounded-lg shadow transition-colors duration-200"
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
// --- END OF components/Chatbot.tsx ---

// --- START OF App.tsx ---
const App: React.FC = () => {
  const offerSectionRef = useRef<HTMLDivElement>(null);

  const scrollToOffer = () => {
    offerSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#111827] text-[#F9FAFB] font-sans antialiased overflow-x-hidden">
      <main>
        <Hero onGetAccessClick={scrollToOffer} />
        <Benefits />
        <DetailedBenefits />
        <div ref={offerSectionRef}>
          <Offer />
        </div>
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};
// --- END OF App.tsx ---

// --- Final Render Call ---
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
