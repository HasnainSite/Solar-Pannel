import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/18005557652?text=Hi%20SolarTech%20Energy!%20I%20would%20like%20a%20free%20solar%20quote."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 font-bold text-xs transition-transform hover:scale-110 group"
      title="Chat with Us on WhatsApp"
    >
      <MessageSquare className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline font-extrabold pr-1">WhatsApp Solar Support</span>
    </a>
  );
};
