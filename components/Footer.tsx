
import React from 'react';

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

export default Footer;