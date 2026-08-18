import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { AboutSection } from './components/AboutSection';
import { SportsCategories } from './components/SportsCategories';
import { ProductShowcase } from './components/ProductShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FeaturedVisual } from './components/FeaturedVisual';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryItemName, setEnquiryItemName] = useState('');

  // Active section spy using IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'sports', 'products', 'why-us', 'reviews', 'location', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-80px 0px -40% 0px',
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromGrid = (categoryId: string) => {
    setSelectedCategoryFilter(categoryId);
    handleNavigate('products');
  };

  const handleOpenEnquiry = (itemName: string) => {
    setEnquiryItemName(itemName);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans antialiased selection:bg-red-600 selection:text-white flex flex-col relative overflow-x-hidden">
      {/* Top Sticky Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onExploreSports={() => handleNavigate('sports')} />

        {/* 2. Quick Business Stats Strip */}
        <QuickStats />

        {/* 3. About HN SPORTS HUB */}
        <AboutSection />

        {/* 4. Sports Categories */}
        <SportsCategories
          onSelectCategory={handleSelectCategoryFromGrid}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 5. Product Showcase & Interactive Category Filter */}
        <ProductShowcase
          selectedCategoryFilter={selectedCategoryFilter}
          onFilterChange={setSelectedCategoryFilter}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 6. Why Choose HN SPORTS HUB */}
        <WhyChooseUs />

        {/* 7. Featured Sports Visual (ONE STORE. MANY SPORTS.) */}
        <FeaturedVisual />

        {/* 8. Verified Google Reviews (5.0 Stars, 5 Reviews) */}
        <ReviewsSection />

        {/* 9. Instagram Section (@hn_sports_hub30) */}
        <InstagramSection />

        {/* 10. Location Section (Manjoor Nagar, Bhupalpally) */}
        <LocationSection />

        {/* 11. Final Contact CTA */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* In-Store Item Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={handleCloseEnquiry}
        itemName={enquiryItemName}
      />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar />
    </div>
  );
}
