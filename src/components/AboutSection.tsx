import React from 'react';
import { Phone, MapPin, CheckCircle2, Shield, Flame, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sportsData';

export const AboutSection: React.FC = () => {
  const storeHighlights = [
    'Outdoor sports gear including cricket, football, and volleyball',
    'Indoor board games including chess and carrom',
    'Jerseys and sports apparel',
    'Trophies and sports awards for events and tournaments',
    'Comprehensive sports accessories and training essentials',
    'Local store located in Bhupalpally, Telangana',
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#0a0a0c] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Athletic Focus */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/80 p-2 shadow-2xl">
              <div className="relative h-96 sm:h-[440px] rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop"
                  alt="Cricket and Multi-Sports Equipment at HN SPORTS HUB Bhupalpally"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Floating Store Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider mb-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>HN SPORTS HUB • BHUPALPALLY</span>
                  </div>
                  <p className="text-xs text-zinc-300">
                    A dedicated sports shop for outdoor games, indoor games, jerseys, and tournament awards.
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Badge Overlay */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 z-20 hidden sm:flex items-center gap-3 bg-zinc-900 border border-zinc-700 p-4 rounded-xl shadow-2xl">
              <div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Full Sports Range</div>
                <div className="text-xs text-zinc-400">Available In-Store</div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/50 border border-red-800/60 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>About Our Store</span>
            </div>

            <h2
              id="about-headline"
              className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-[0.95] mb-6"
            >
              {BUSINESS_INFO.aboutHeadline}
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-4">
              <strong className="text-white font-bold">HN SPORTS HUB</strong> is a sports shop in Bhupalpally offering equipment, accessories and sports essentials for different kinds of games.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
              From cricket and football to volleyball, indoor games, jerseys, trophies and medals, customers can explore a variety of sports-related products in one place. Whether you are gearing up for a local weekend match, outfitting a team, preparing for athletic training, or organizing a tournament, our store provides a wide selection of sports essentials.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {storeHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                id="about-call-btn"
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-wider uppercase rounded-xl bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-950 transition-all duration-200"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Store: 8074121484</span>
              </a>

              <a
                id="about-directions-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold tracking-wider uppercase rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-colors"
              >
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
