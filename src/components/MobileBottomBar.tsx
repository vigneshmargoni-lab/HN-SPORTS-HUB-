import React from 'react';
import { Phone, Navigation, MessageCircle, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sportsData';

export const MobileBottomBar: React.FC = () => {
  return (
    <div
      id="mobile-sticky-bar"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#09090b]/95 backdrop-blur-lg border-t border-zinc-800 p-2.5 sm:hidden shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          id="mobile-bottom-call"
          href={BUSINESS_INFO.phoneHref}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-red-600 active:bg-red-500 text-white font-bold shadow-md shadow-red-950"
          aria-label="Call HN SPORTS HUB"
        >
          <Phone className="w-4 h-4 fill-white mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase leading-none font-black">Call Now</span>
        </a>

        {/* Directions */}
        <a
          id="mobile-bottom-directions"
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-800 active:bg-zinc-700 text-zinc-200"
          aria-label="Get Directions on Google Maps"
        >
          <Navigation className="w-4 h-4 text-red-400 mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase leading-none font-bold">Directions</span>
        </a>

        {/* WhatsApp/Instagram */}
        <a
          id="mobile-bottom-whatsapp"
          href={BUSINESS_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-900 border border-zinc-700/80 active:bg-zinc-800 text-emerald-400"
          aria-label="WhatsApp Enquiry"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase leading-none font-bold">Enquire</span>
        </a>
      </div>
    </div>
  );
};
