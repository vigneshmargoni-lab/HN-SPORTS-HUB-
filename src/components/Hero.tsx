import React from 'react';
import { Phone, Navigation, ArrowRight, ShieldCheck, Flame, Star, Trophy } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sportsData';

interface HeroProps {
  onExploreSports: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSports }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-28 overflow-hidden bg-[#09090b]"
    >
      {/* Dynamic Sports Arena & Stadium Background Visual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1920&auto=format&fit=crop"
          alt="Sports Stadium and Athletic Match Arena"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 md:opacity-35 scale-105 filter brightness-90 contrast-110"
        />
        {/* Layered Gradient Overlays to keep text high contrast and readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/75 to-transparent" />
        <div className="absolute inset-0 bg-sports-grid opacity-40" />
      </div>

      {/* Atmospheric Red Athletic Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-rose-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/90 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Top Store Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-zinc-200 text-xs sm:text-sm font-semibold tracking-wide mb-5 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-red-400 font-bold uppercase tracking-wider">SPORTS SHOP</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-300">Bhupalpally, Telangana</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-headline"
              className="font-bebas text-5xl sm:text-7xl md:text-8xl xl:text-[5.5rem] tracking-tight leading-[0.9] text-white uppercase mb-4"
            >
              {BUSINESS_INFO.heroHeadline}
            </h1>

            {/* Subheading */}
            <h2
              id="hero-subheading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 uppercase mb-5 flex items-center gap-2"
            >
              <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 shrink-0 inline" />
              <span>{BUSINESS_INFO.heroSubheading}</span>
            </h2>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal mb-8"
            >
              {BUSINESS_INFO.heroSupportingText}
            </p>

            {/* CTA Buttons */}
            <div id="hero-cta-group" className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              {/* Primary: CALL NOW */}
              <a
                id="hero-primary-call-btn"
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-black tracking-wider uppercase rounded-xl bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-950/60 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-red-400/30 red-glow"
                aria-label="Call HN SPORTS HUB at 8074121484"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>CALL NOW</span>
              </a>

              {/* Secondary: GET DIRECTIONS */}
              <a
                id="hero-secondary-directions-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold tracking-wider uppercase rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-100 hover:text-white border border-zinc-700/80 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                aria-label="Get directions to HN SPORTS HUB on Google Maps"
              >
                <Navigation className="w-5 h-5 text-red-400" />
                <span>GET DIRECTIONS</span>
              </a>

              {/* Explore Gear Link */}
              <button
                id="hero-explore-gear-btn"
                type="button"
                onClick={onExploreSports}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Explore Sports</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </button>
            </div>

            {/* Hero Trust Micro-Badges */}
            <div className="w-full pt-4 border-t border-zinc-800/80 grid grid-cols-3 gap-3 text-zinc-300">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-zinc-800/80 text-red-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">5.0 Star Rating</div>
                  <div className="text-[11px] text-zinc-400">Google Verified</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-zinc-800/80 text-red-400">
                  <Trophy className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Full Gear Range</div>
                  <div className="text-[11px] text-zinc-400">Indoor & Outdoor</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-zinc-800/80 text-red-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Bhupalpally</div>
                  <div className="text-[11px] text-zinc-400">Local Sports Store</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Athletic Collage & Sports Equipment Visual */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Athletic Visual Card Frame */}
            <div
              id="hero-visual-container"
              className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-2.5 shadow-2xl shadow-black/80"
            >
              {/* Main Featured Action Visual */}
              <div className="relative h-80 sm:h-96 md:h-[420px] rounded-xl overflow-hidden group bg-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
                  alt="Multi-Sports Stadium and Equipment at HN SPORTS HUB Bhupalpally"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop';
                  }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-transparent to-transparent" />

                {/* Floating Top Category Pill */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-zinc-700 shadow-lg text-xs font-bold text-white uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  Cricket • Football • Volleyball • Indoor
                </div>

                {/* Equipment Highlights Mini Bento overlay */}
                <div className="absolute bottom-4 inset-x-4 grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-lg bg-black/85 backdrop-blur-md border border-zinc-800 flex items-center gap-2.5">
                    <span className="text-xl">🏏</span>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Cricket Bats & Balls</div>
                      <div className="text-[10px] text-zinc-400">Match & Practice</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/85 backdrop-blur-md border border-zinc-800 flex items-center gap-2.5">
                    <span className="text-xl">🏆</span>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Trophies & Medals</div>
                      <div className="text-[10px] text-zinc-400">Event Awards</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Equipment Strip */}
              <div className="mt-2.5 grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800/80">
                  <div className="text-base mb-0.5">⚽</div>
                  <div className="text-[11px] font-bold text-zinc-200">Football</div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800/80">
                  <div className="text-base mb-0.5">🏐</div>
                  <div className="text-[11px] font-bold text-zinc-200">Volleyball</div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800/80">
                  <div className="text-base mb-0.5">♟️</div>
                  <div className="text-[11px] font-bold text-zinc-200">Chess & Carrom</div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800/80">
                  <div className="text-base mb-0.5">👕</div>
                  <div className="text-[11px] font-bold text-zinc-200">Jerseys</div>
                </div>
              </div>
            </div>

            {/* Ambient Red Edge Highlight */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-rose-600/10 rounded-3xl blur-lg -z-10 opacity-70" />
          </div>

        </div>
      </div>
    </section>
  );
};
