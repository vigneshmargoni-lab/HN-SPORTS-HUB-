import React from 'react';
import { Phone, MapPin, Instagram, Navigation, Star, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sportsData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'sports', label: 'Sports' },
    { id: 'products', label: 'Products' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Location' },
    { id: 'contact', label: 'Contact' },
  ];

  const sportsList = [
    'Cricket Gear & Accessories',
    'Match Footballs & Training',
    'Volleyballs & Equipment',
    'Chess & Carrom Boards',
    'Sports Shoes & Footwear',
    'Team Jerseys & Sportswear',
    'Trophies & Sports Medals',
    'Sports Accessories',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-black border-t border-zinc-800/80 pt-16 pb-24 sm:pb-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center font-bebas text-2xl text-white tracking-wider shadow-md shadow-red-950">
                HN
              </div>
              <div className="flex flex-col">
                <span className="font-bebas text-2xl tracking-wider text-white leading-tight">
                  HN SPORTS <span className="text-red-500 font-extrabold">HUB</span>
                </span>
                <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                  Sports Shop
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              HN SPORTS HUB is a local sports shop in Bhupalpally, Telangana offering cricket equipment, football, volleyball, indoor games, jerseys, trophies, medals and sports accessories.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={BUSINESS_INFO.phoneHref} className="hover:text-white transition-colors">
                  Phone: <strong className="text-white">{BUSINESS_INFO.phone}</strong>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-rose-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram: <strong className="text-white">{BUSINESS_INFO.instagramHandle}</strong>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bebas text-xl text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-red-400 transition-colors font-medium cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports Categories */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-bebas text-xl text-white uppercase tracking-wider">
              Sports Available In-Store
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
              {sportsList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-red-500" />
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider border border-zinc-800 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-red-400" />
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 <strong className="text-zinc-400">HN SPORTS HUB</strong>. All rights reserved.
          </div>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
