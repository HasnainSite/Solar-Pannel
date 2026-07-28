import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Phone, ShieldCheck, ChevronRight, Calculator } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'calculator', 'about', 'services', 'products', 'net-metering', 'process', 'projects', 'testimonials', 'faqs', 'blog', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Calculator', href: '#calculator', id: 'calculator' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Net Metering', href: '#net-metering', id: 'net-metering' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'FAQs', href: '#faqs', id: 'faqs' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-xl'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md'
          : darkMode
          ? 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/50'
          : 'bg-slate-50/80 backdrop-blur-sm border-b border-slate-200/50'
      }`}
    >
      {/* Top Banner Info Bar */}
      <div className={`hidden md:flex justify-between items-center text-xs px-6 py-1.5 border-b ${
        darkMode ? 'bg-slate-950/90 border-slate-800 text-slate-400' : 'bg-slate-100/90 border-slate-200 text-slate-600'
      }`}>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#2E8B57] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Licensed & NABCEP Certified Engineers
          </span>
          <span>📍 100 Clean Energy Blvd, San Jose, CA</span>
          <span>⚡ 25-Year Power Guarantee</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:18005557652" className="flex items-center gap-1 hover:text-[#0A4D9B] font-semibold transition-colors">
            <Phone className="w-3 h-3 text-[#0A4D9B]" />
            +1 (800) 555-SOLAR
          </a>
          <span className="opacity-40">|</span>
          <span className="text-emerald-500 font-medium">● 24/7 Support Online</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#0A4D9B] rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
            <Sun className="w-6 h-6 text-[#FFC107] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg sm:text-xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-[#0A4D9B]'}`}>
              SOLARTECH <span className="text-[#2E8B57]">ENERGY</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 -mt-1">
              Clean Solar Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#0A4D9B] text-white shadow-md shadow-blue-900/20'
                    : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'text-slate-600 hover:text-[#0A4D9B] hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Calculator Trigger Link */}
          <a
            href="#calculator"
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
              darkMode ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-amber-50 text-[#0A4D9B] border border-amber-200 hover:bg-amber-100'
            }`}
          >
            <Calculator className="w-4 h-4 text-amber-500" />
            <span>ROI Calculator</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 sm:p-2.5 rounded-xl transition-colors ${
              darkMode ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
            aria-label="Toggle Dark/Light Mode"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>

          {/* Get Free Quote CTA */}
          <button
            onClick={onOpenQuoteModal}
            className="hidden md:inline-flex items-center gap-2 bg-[#0A4D9B] hover:bg-[#083a75] text-white px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>Get Free Quote</span>
            <ChevronRight className="w-4 h-4 text-[#FFC107]" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              darkMode ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-800'
            }`}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 py-6 space-y-3 ${
          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
        }`}>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#0A4D9B] text-white'
                    : darkMode
                    ? 'bg-slate-800 text-slate-200'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/20 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#0A4D9B] hover:bg-[#083a75] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
            >
              <span>Get Free Solar Quote</span>
              <ChevronRight className="w-4 h-4 text-[#FFC107]" />
            </button>
            <a
              href="tel:18005557652"
              className="w-full border-2 border-[#2E8B57] text-[#2E8B57] py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: +1 (800) 555-SOLAR</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
