import React from 'react';
import { Phone, MapPin, Trophy, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sportsData';

export const FeaturedVisual: React.FC = () => {
  const sportsTags = [
    'Cricket Bats & Leather Balls',
    'Match Footballs',
    'Volleyballs',
    'Sports Shoes',
    'Team Jerseys',
    'Chess & Carrom Boards',
    'Trophies & Medals',
    'Sports Accessories',
  ];

  return (
    <section id="featured-visual" className="relative py-24 sm:py-32 overflow-hidden bg-black">
      {/* Background Image with Dark Cinematic Athletic Filter */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=1800&auto=format&fit=crop"
          alt="Athletic Stadium and Multi-Sports Gear at HN SPORTS HUB"
          className="w-full h-full object-cover object-center opacity-35 scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1800&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]" />
        <div className="absolute inset-0 bg-sports-grid opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/70 border border-red-700 text-red-300 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
          <Flame className="w-4 h-4 text-red-500" />
          <span>Complete Sports Gear Destination</span>
        </div>

        {/* Central Overlay Headline */}
        <h2
          id="featured-visual-headline"
          className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase leading-[0.88] mb-6 max-w-5xl mx-auto"
        >
          ONE STORE. <span className="text-red-500">MANY SPORTS.</span>
        </h2>

        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Equipping athletes, students, local tournament players, and sports lovers across Bhupalpally with quality gear and accessories.
        </p>

        {/* Dynamic Sports Equipment Tags Marquee / Wrap */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto mb-12">
          {sportsTags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-700/80 text-xs sm:text-sm font-semibold text-zinc-200 backdrop-blur-md shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Quick CTA Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-2xl shadow-red-950 transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call 8074121484</span>
          </a>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold text-sm tracking-wider uppercase rounded-xl border border-zinc-700 transition-all hover:scale-105"
          >
            <MapPin className="w-4 h-4 text-red-400" />
            <span>Visit In Bhupalpally</span>
          </a>
        </div>

      </div>
    </section>
  );
};
