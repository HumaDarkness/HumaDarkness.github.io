import React from 'react';

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

export default Benefits;