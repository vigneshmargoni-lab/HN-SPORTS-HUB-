import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, Instagram, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sportsData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'sports', label: 'Sports' },
    { id: 'products', label: 'Products' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Location' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-[#09090b]/95 via-[#09090b]/80 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            id="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1"
            aria-label="HN SPORTS HUB Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center font-bebas text-xl sm:text-2xl text-white tracking-wider shadow-md shadow-red-950 group-hover:scale-105 transition-transform duration-200">
              HN
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-xl sm:text-2xl tracking-wider text-white leading-tight flex items-center gap-1.5">
                HN SPORTS <span className="text-red-500 font-extrabold">HUB</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-zinc-400 uppercase -mt-0.5">
                Bhupalpally • Sports Shop
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 rounded-md relative cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-red-500 rounded-full animate-in fade-in duration-200" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call Now Button & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold tracking-wider uppercase rounded-lg bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-red-500/50"
              aria-label="Call HN SPORTS HUB at 8074121484"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-header-call"
              href={BUSINESS_INFO.phoneHref}
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-lg bg-red-600 text-white shadow-md shadow-red-950"
              aria-label="Call HN SPORTS HUB"
            >
              <Phone className="w-4 h-4 fill-white" />
            </a>

            <button
              id="mobile-menu-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-backdrop"
          className="fixed inset-0 top-[60px] bg-black/80 backdrop-blur-md z-40 lg:hidden flex flex-col justify-between p-6 animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="space-y-2 py-4" onClick={(e) => e.stopPropagation()}>
            <div className="text-xs font-bold uppercase tracking-wider text-red-400 px-3 pb-2 border-b border-zinc-800">
              Navigate Store
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-red-950/40 text-red-400 border border-red-800/40'
                      : 'text-zinc-200 hover:bg-zinc-800/50 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-500" />
                </button>
              );
            })}
          </div>

          {/* Quick contact drawer footer */}
          <div className="pt-4 border-t border-zinc-800/80 space-y-3" onClick={(e) => e.stopPropagation()}>
            <a
              id="mobile-drawer-call-btn"
              href={BUSINESS_INFO.phoneHref}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg tracking-wider uppercase text-sm shadow-lg shadow-red-950"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>CALL NOW: 8074121484</span>
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                id="mobile-drawer-map-btn"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-semibold"
              >
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Directions</span>
              </a>
              <a
                id="mobile-drawer-ig-btn"
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-semibold"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
