import React from 'react';
import { MapPin, Star, Trophy, Activity, Award } from 'lucide-react';
import { QUICK_STATS } from '../data/sportsData';

export const QuickStats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-red-500" />;
      case 'Star':
        return <Star className="w-5 h-5 text-amber-400 fill-amber-400" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-red-500" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-red-500" />;
      case 'Medal':
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <Trophy className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section id="quick-stats-strip" className="relative z-20 -mt-4 sm:-mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-zinc-900/95 border border-zinc-800 backdrop-blur-md p-4 sm:p-6 shadow-2xl shadow-black/80">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 divide-zinc-800/60">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              id={`stat-item-${stat.id}`}
              className={`flex items-center gap-3.5 ${
                idx > 0 ? 'pt-3 sm:pt-0' : ''
              } ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <div className="w-11 h-11 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center shrink-0 shadow-inner">
                {getIcon(stat.icon)}
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-400 font-medium truncate">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
