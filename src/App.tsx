import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SolarCalculator } from './components/Calculator';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { ProductsPage } from './components/ProductsPage';
import { Dashboard } from './components/Dashboard';
import { NetMetering } from './components/NetMetering';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Brands } from './components/Brands';
import { FaqSection } from './components/Faq';
import { BlogSection } from './components/Blog';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LiveChatWidget } from './components/LiveChatWidget';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TermsModal } from './components/TermsModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'dashboard' | 'products'>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePrefilledDetails, setQuotePrefilledDetails] = useState('');
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenQuoteWithDetails = (details: string) => {
    setQuotePrefilledDetails(details);
    setQuoteModalOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Sticky Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentView={currentView}
        onViewChange={setCurrentView}
        onOpenQuoteModal={() => {
          setQuotePrefilledDetails('');
          setQuoteModalOpen(true);
        }}
      />

      {/* Main Content Area */}
      <main className="space-y-4">
        {currentView === 'dashboard' && (
          <Dashboard
            darkMode={darkMode}
            onNavigateToQuote={handleOpenQuoteWithDetails}
          />
        )}

        {currentView === 'products' && (
          <ProductsPage
            darkMode={darkMode}
            onOpenQuoteWithProduct={(productName) => handleOpenQuoteWithDetails(`Hardware Quote Request: ${productName}`)}
          />
        )}

        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              darkMode={darkMode}
              onOpenQuoteModal={() => {
                setQuotePrefilledDetails('');
                setQuoteModalOpen(true);
              }}
            />

            {/* Interactive Solar ROI Calculator */}
            <SolarCalculator
              darkMode={darkMode}
              onOpenQuoteWithDetails={handleOpenQuoteWithDetails}
            />

            {/* Services */}
            <Services
              darkMode={darkMode}
              onOpenQuoteWithService={(serviceTitle) => handleOpenQuoteWithDetails(`Service Inquiry: ${serviceTitle}`)}
            />

            {/* Products Catalog Preview */}
            <Products
              darkMode={darkMode}
              onOpenQuoteWithProduct={(productName) => handleOpenQuoteWithDetails(`Hardware Quote Request: ${productName}`)}
              onViewAllProducts={() => setCurrentView('products')}
            />

            {/* Installation Process */}
            <Process
              darkMode={darkMode}
              onOpenQuoteModal={() => {
                setQuotePrefilledDetails('');
                setQuoteModalOpen(true);
              }}
            />

            {/* Project Gallery */}
            <Projects
              darkMode={darkMode}
              onOpenQuoteModal={() => {
                setQuotePrefilledDetails('');
                setQuoteModalOpen(true);
              }}
            />

            {/* Customer Testimonials */}
            <Testimonials darkMode={darkMode} />

            {/* FAQ Accordion */}
            <FaqSection darkMode={darkMode} />

            {/* Contact Form & Location */}
            <Contact
              darkMode={darkMode}
              prefilledDetails={quotePrefilledDetails}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onOpenTermsModal={() => setTermsModalOpen(true)}
      />

      {/* Floating Actions */}
      <WhatsAppButton />
      <LiveChatWidget />

      {/* Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefilledNotes={quotePrefilledDetails}
      />
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />
    </div>
  );
}
