import React from 'react';
import { LayoutGrid, Compass, Sparkles, Shirt, Award, MapPin, Zap } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/sportsData';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-red-500" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-red-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-red-500" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-red-500" />;
      case 'Award':
        return <Award className="w-6 h-6 text-red-500" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-red-500" />;
      default:
        return <Zap className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 relative bg-[#09090b]">
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Store Advantages</span>
          </div>
          <h2
            id="why-choose-heading"
            className="font-bebas text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase leading-none mb-4"
          >
            WHY HN SPORTS HUB?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Your dedicated local sporting goods destination in Bhupalpally for all outdoor games, indoor games, tournament awards, and sportswear.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="group p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-red-600/40 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 group-hover:border-red-500/50 group-hover:bg-red-950/30 flex items-center justify-center mb-6 transition-colors shadow-inner">
                  {getFeatureIcon(item.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-bebas text-2xl text-white tracking-wide uppercase mb-3 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Accent marker */}
              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-semibold tracking-wider uppercase">
                <span>0{index + 1}</span>
                <span className="text-red-500/80">•</span>
                <span>HN SPORTS</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
