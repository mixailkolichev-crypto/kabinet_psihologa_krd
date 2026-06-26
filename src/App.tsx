import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesGrid } from './components/ServicesGrid';
import { BookingSection } from './components/BookingSection';
import { Reviews } from './components/Reviews';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);

  const handleBookClick = (serviceId?: string) => {
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForBooking(service);
    handleBookClick(service.id);
  };

  const handleScrollToServices = () => {
    const srvElem = document.getElementById('services');
    if (srvElem) {
      srvElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-stone-200 flex flex-col font-sans relative selection:bg-[#E5A93C]/30 selection:text-white">
      
      {/* Atmospheric / Immersive Media Background Gradients */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 75% 20%, rgba(229, 169, 60, 0.08) 0%, transparent 55%),
            radial-gradient(circle at 15% 75%, rgba(30, 30, 36, 0.9) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(18, 18, 18, 1) 0%, #0d0d0d 100%)
          `
        }}
      />

      <Header onBookClick={handleBookClick} />

      <main className="flex-1 flex flex-col relative z-10">
        <Hero 
          onBookClick={() => handleBookClick()} 
          onServicesClick={handleScrollToServices} 
        />
        
        <About />
        
        <ServicesGrid onSelectService={handleSelectService} />
        
        <BookingSection preselectedService={selectedServiceForBooking} />
        
        <Reviews />

        <FaqSection />
      </main>

      <Footer />

    </div>
  );
}
