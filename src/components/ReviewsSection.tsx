import React from 'react';
import { Star, ShieldCheck, ExternalLink, ThumbsUp, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sportsData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 relative bg-[#09090b]">
      {/* Subtle red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Google Reviews & Trust</span>
          </div>
          <h2
            id="reviews-heading"
            className="font-bebas text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase leading-none mb-4"
          >
            CUSTOMER RATING
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Honest local feedback from sports enthusiasts and customers in Bhupalpally.
          </p>
        </div>

        {/* Main Google Rating Hero Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Google colors indicator accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-red-500 via-amber-400 to-emerald-500" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Big 5.0 Score & Stars */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-zinc-800 pb-6 md:pb-0 md:pr-8">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Google Business Profile</span>
              </div>

              <div className="font-bebas text-7xl sm:text-8xl font-black text-white leading-none tracking-tight my-1">
                5.0
              </div>

              <div className="flex items-center gap-1.5 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="text-base font-bold text-white mt-1">
                Rated 5.0/5 on Google
              </div>
              <div className="text-sm text-zinc-400">
                5 customer reviews
              </div>

              {/* View on Google CTA */}
              <a
                id="view-on-google-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider transition-all border border-zinc-700 hover:scale-105"
              >
                <span>VIEW ON GOOGLE</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-300" />
              </a>
            </div>

            {/* Rating Breakdown & Verified Feedback Highlights */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-400">
                <span>5 Star Rating Distribution</span>
                <span className="text-emerald-400 font-bold">100% 5-Star Reviews</span>
              </div>

              {/* Rating Bars */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 text-zinc-300 font-medium">5 Stars</span>
                  <div className="flex-1 h-3 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full w-full" />
                  </div>
                  <span className="w-8 text-right font-bold text-white">5 (100%)</span>
                </div>
                <div className="flex items-center gap-3 text-xs opacity-40">
                  <span className="w-12 text-zinc-400">4 Stars</span>
                  <div className="flex-1 h-2 rounded-full bg-zinc-800" />
                  <span className="w-8 text-right text-zinc-500">0</span>
                </div>
                <div className="flex items-center gap-3 text-xs opacity-40">
                  <span className="w-12 text-zinc-400">3 Stars</span>
                  <div className="flex-1 h-2 rounded-full bg-zinc-800" />
                  <span className="w-8 text-right text-zinc-500">0</span>
                </div>
              </div>

              {/* Verified Trust Points (Strictly factual without fake quotes) */}
              <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Verified Location</div>
                    <div className="text-[11px] text-zinc-400">Manjoor Nagar, Bhupalpally</div>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <ThumbsUp className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Sports Gear Variety</div>
                    <div className="text-[11px] text-zinc-400">Outdoor, Indoor & Awards</div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-zinc-400 pt-2 italic">
                * Based on public ratings verified on Google Maps for HN SPORTS HUB.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
