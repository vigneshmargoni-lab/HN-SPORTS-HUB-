import React from 'react';
import { MapPin, Navigation, Phone, ExternalLink, Compass, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sportsData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store Location</span>
          </div>
          <h2
            id="location-heading"
            className="font-bebas text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase leading-none mb-4"
          >
            FIND HN SPORTS HUB
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Located in Manjoor Nagar, Bhupalpally. Visit us directly or get GPS navigation via Google Maps.
          </p>
        </div>

        {/* Location Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Store Info Card */}
          <div className="lg:col-span-5 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                Official Address
              </div>
              <h3 className="font-bebas text-3xl text-white uppercase tracking-wide mb-4">
                HN SPORTS HUB
              </h3>

              {/* Exact Address Block */}
              <div className="space-y-3 p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white leading-snug">
                      Manjoor Nagar, Manju Nagar
                    </div>
                    <div className="text-sm text-zinc-300">
                      Bhupalpally, Telangana 506169
                    </div>
                    <div className="text-xs text-zinc-500 mt-1 font-medium">
                      India
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone & Contact Summary */}
              <div className="space-y-3 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 mb-6">
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <Phone className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Phone: <strong className="text-white">8074121484</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Google Verified Location</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-zinc-800">
              <a
                id="location-get-directions-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-lg shadow-red-950 transition-all hover:scale-[1.02]"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS (GOOGLE MAPS)</span>
              </a>

              <a
                id="location-call-now-btn"
                href={BUSINESS_INFO.phoneHref}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-bold text-xs tracking-wider uppercase rounded-xl border border-zinc-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span>CALL NOW: 8074121484</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Representation */}
          <div className="lg:col-span-7 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[380px]">
            
            {/* Map Header */}
            <div className="flex items-center justify-between mb-4 z-10 relative">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Bhupalpally Store Pinpoint
                </span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-red-400 hover:text-red-300 inline-flex items-center gap-1"
              >
                <span>Open in App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Stylized Interactive Map Frame */}
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col items-center justify-center text-center p-6 group">
              {/* Stylized Map Backdrop Graphic */}
              <div className="absolute inset-0 bg-sports-grid opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/70 to-transparent" />
              
              {/* Center Map Pin with pulse rings */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-3">
                  <div className="absolute -inset-4 bg-red-600/30 rounded-full blur-md animate-ping" />
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white flex items-center justify-center shadow-xl shadow-red-950 relative border-2 border-white/20">
                    <MapPin className="w-7 h-7 fill-white" />
                  </div>
                </div>

                <div className="font-bebas text-2xl sm:text-3xl text-white uppercase tracking-wider">
                  HN SPORTS HUB
                </div>
                <div className="text-xs sm:text-sm text-zinc-300 max-w-sm mt-1 mb-4">
                  Manjoor Nagar, Manju Nagar, Bhupalpally, Telangana 506169
                </div>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg hover:scale-105"
                >
                  <Navigation className="w-4 h-4 text-red-600" />
                  <span>Launch Google Navigation</span>
                </a>
              </div>

              {/* Map Corner Tag */}
              <div className="absolute bottom-3 left-3 text-[10px] text-zinc-500 font-mono">
                Bhupalpally • 506169
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
