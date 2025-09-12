
import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage, ConversationTree } from '../types';

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

export default Chatbot;