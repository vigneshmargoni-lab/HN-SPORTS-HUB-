import React from 'react';
import { Phone, Navigation, Instagram, Flame, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sportsData';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#09090b] overflow-hidden">
      {/* Dynamic Red Energy Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[24rem] bg-red-600/15 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Box */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-black border border-zinc-800 p-8 sm:p-14 text-center shadow-2xl">
          <div className="absolute inset-0 bg-sports-grid opacity-30 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/70 border border-red-700/80 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Flame className="w-3.5 h-3.5" />
              <span>Get Your Gear Today</span>
            </div>

            {/* Headline */}
            <h2
              id="contact-cta-headline"
              className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase leading-none mb-4"
            >
              READY TO PLAY?
            </h2>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-zinc-300 max-w-xl mx-auto mb-10 leading-relaxed">
              Visit HN SPORTS HUB and find the gear for your game.
            </p>

            {/* 3 Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Call button */}
              <a
                id="contact-call-btn"
                href={BUSINESS_INFO.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black text-sm tracking-wider uppercase rounded-xl shadow-xl shadow-red-950/70 transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>CALL 8074121484</span>
              </a>

              {/* Get Directions button */}
              <a
                id="contact-directions-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm tracking-wider uppercase rounded-xl border border-zinc-700 transition-all hover:scale-105"
              >
                <Navigation className="w-4 h-4 text-red-400" />
                <span>GET DIRECTIONS</span>
              </a>

              {/* Instagram button */}
              <a
                id="contact-instagram-btn"
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-rose-300 hover:text-white font-bold text-sm tracking-wider uppercase rounded-xl border border-zinc-800 transition-all hover:scale-105"
              >
                <Instagram className="w-4 h-4 text-rose-400" />
                <span>INSTAGRAM</span>
              </a>
            </div>

            {/* Address Reminder */}
            <div className="mt-10 pt-8 border-t border-zinc-800/80 text-xs sm:text-sm text-zinc-400">
              📍 <span className="text-zinc-200 font-semibold">{BUSINESS_INFO.address}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
