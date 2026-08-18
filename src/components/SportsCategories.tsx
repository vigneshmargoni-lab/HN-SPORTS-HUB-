import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SPORTS_CATEGORIES } from '../data/sportsData';

interface SportsCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenEnquiry: (categoryName: string) => void;
}

export const SportsCategories: React.FC<SportsCategoriesProps> = ({
  onSelectCategory,
  onOpenEnquiry,
}) => {
  return (
    <section id="sports" className="py-20 sm:py-28 relative bg-[#09090b]">
      {/* Background accents */}
      <div className="absolute inset-0 bg-sports-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Store Categories</span>
          </div>
          <h2
            id="sports-categories-heading"
            className="font-bebas text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase leading-none mb-4"
          >
            SPORTS FOR EVERY GAME
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            From field-tested cricket gear to indoor strategy boards, jerseys, and championship awards — explore equipment and accessories available in-store.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SPORTS_CATEGORIES.map((category) => (
            <div
              key={category.id}
              id={`category-card-${category.id}`}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-red-950/20"
            >
              {/* Category Image Top */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-zinc-950">
                <img
                  src={category.image}
                  alt={`${category.name} sports equipment and accessories at HN SPORTS HUB`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-90"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=900&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-zinc-700/80 text-[11px] font-bold text-red-400 uppercase tracking-wider">
                  {category.badge}
                </div>

                {/* Available in-store tag */}
                <div className="absolute bottom-3.5 right-3.5 px-2.5 py-0.5 rounded-full bg-red-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                  Available in-store
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase mb-2">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-4 leading-relaxed">
                    {category.shortDescription}
                  </p>

                  {/* Included Items Checklist */}
                  <div className="space-y-2 mb-6">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(category.id)}
                    className="text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View Showcase</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(category.name)}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-red-600 text-zinc-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Categories */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-red-950/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
              Looking for a specific sports accessory or tournament set?
            </div>
            <div className="text-xs sm:text-sm text-zinc-400">
              Ask us about in-store availability, sizes, team jersey sets, and trophy batches in Bhupalpally.
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('General Store Enquiry')}
            className="shrink-0 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-950 transition-all cursor-pointer"
          >
            Ask In-Store Availability
          </button>
        </div>

      </div>
    </section>
  );
};
