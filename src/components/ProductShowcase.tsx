import React, { useState } from 'react';
import { Phone, MapPin, Search, Check, Sparkles, Send } from 'lucide-react';
import { PRODUCT_SHOWCASE, ShowcaseProduct, BUSINESS_INFO } from '../data/sportsData';

interface ProductShowcaseProps {
  selectedCategoryFilter: string;
  onFilterChange: (filter: string) => void;
  onOpenEnquiry: (productName: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  selectedCategoryFilter,
  onFilterChange,
  onOpenEnquiry,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterTabs = [
    { id: 'all', label: 'ALL' },
    { id: 'cricket', label: 'CRICKET' },
    { id: 'football', label: 'FOOTBALL' },
    { id: 'volleyball', label: 'VOLLEYBALL' },
    { id: 'indoor', label: 'INDOOR' },
    { id: 'outdoor', label: 'OUTDOOR' },
    { id: 'shoes', label: 'SHOES' },
    { id: 'jerseys', label: 'JERSEYS' },
    { id: 'awards', label: 'AWARDS' },
    { id: 'accessories', label: 'ACCESSORIES' },
  ];

  const filteredProducts = PRODUCT_SHOWCASE.filter((item) => {
    const matchesCategory =
      selectedCategoryFilter === 'all' || item.category === selectedCategoryFilter;
    const matchesSearch =
      searchTerm === '' ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 sm:py-28 relative bg-[#0a0a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/50 border border-red-800/60 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gear Showcase</span>
            </div>
            <h2
              id="product-showcase-heading"
              className="font-bebas text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase leading-none"
            >
              PRODUCT SHOWCASE
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-3">
              Explore our core sports equipment, apparel, footwear, and awards. Visit our Bhupalpally store or call us to check exact availability.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search gear, balls, trophies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Tabs Bar (Horizontal scroll on small screens) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 mb-8 no-scrollbar scroll-smooth">
          {filterTabs.map((tab) => {
            const isActive = selectedCategoryFilter === tab.id;
            return (
              <button
                key={tab.id}
                id={`filter-tab-${tab.id}`}
                type="button"
                onClick={() => onFilterChange(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-lg shadow-red-950/60 border border-red-500/60'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Showcase Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/40 rounded-2xl border border-zinc-800 p-8">
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="text-lg font-bold text-white mb-2">No matching sports gear found</h3>
            <p className="text-sm text-zinc-400 mb-6">
              Try searching with another keyword or resetting the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                onFilterChange('all');
              }}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`showcase-card-${product.id}`}
                className="group rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl"
              >
                {/* Visual */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-zinc-950">
                  <img
                    src={product.image}
                    alt={`${product.name} - ${product.tag} at HN SPORTS HUB Bhupalpally`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-90"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-zinc-700 text-[10px] font-bold text-red-400 uppercase tracking-wider">
                    {product.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bebas text-2xl text-white tracking-wide uppercase mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 mb-5">
                      {product.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                          <Check className="w-3 h-3 text-red-500 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-zinc-800/80 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry(product.name)}
                      className="w-full py-2 px-2 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                      <span>Enquire</span>
                    </button>

                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                    >
                      <MapPin className="w-3 h-3 text-red-400" />
                      <span>Visit Store</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
