import React from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle, Flame } from 'lucide-react';
import { BUSINESS_INFO, INSTAGRAM_POSTS } from '../data/sportsData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-20 sm:py-28 relative bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-rose-950/60 to-purple-950/60 border border-rose-800/60 text-rose-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Instagram className="w-3.5 h-3.5 text-rose-400" />
            <span>Social Community</span>
          </div>
          
          <h2
            id="instagram-heading"
            className="font-bebas text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase leading-none mb-3"
          >
            FOLLOW THE GAME
          </h2>

          <div className="text-lg sm:text-xl font-bold text-red-400 tracking-wide mb-2">
            {BUSINESS_INFO.instagramHandle}
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-8">
            Follow HN SPORTS HUB for sports updates, products and store content.
          </p>

          <a
            id="follow-instagram-btn"
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-950 transition-all hover:scale-105"
          >
            <Instagram className="w-4 h-4 fill-white" />
            <span>FOLLOW ON INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/80" />
          </a>
        </div>

        {/* Instagram Post Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-rose-500/50 transition-all duration-300 shadow-md"
            >
              <img
                src={post.image}
                alt={`${post.title} - ${post.sport} at HN SPORTS HUB Instagram`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=600&q=80';
                }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <Instagram className="w-6 h-6 text-rose-400 mb-1" />
                <div className="text-[11px] font-bold text-white uppercase tracking-wider line-clamp-2">
                  {post.title}
                </div>
                <span className="text-[10px] text-red-400 mt-1 font-semibold">
                  {post.sport}
                </span>
              </div>

              {/* Minimal Tag */}
              <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[9px] font-bold text-zinc-300">
                {post.sport}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
