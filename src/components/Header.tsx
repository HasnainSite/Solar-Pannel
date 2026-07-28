import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Phone, ShieldCheck, ChevronRight, Calculator, Home, Info, Wrench, Package, Zap, FolderCheck, HelpCircle, BookOpen, Mail, LayoutDashboard, Activity } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenQuoteModal: () => void;
  currentView: 'home' | 'dashboard' | 'products';
  onViewChange: (view: 'home' | 'dashboard' | 'products') => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, onOpenQuoteModal, currentView, onViewChange }) => {
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

  const handleNavClick = (view: 'home' | 'dashboard' | 'products', href?: string) => {
    onViewChange(view);
    setMobileMenuOpen(false);
    if (view === 'home' && href) {
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navLinks = [
    { label: 'Home', view: 'home' as const, href: '#home', id: 'home', icon: Home },
    { label: 'Calculator', view: 'home' as const, href: '#calculator', id: 'calculator', icon: Calculator },
    { label: 'About', view: 'home' as const, href: '#about', id: 'about', icon: Info },
    { label: 'Services', view: 'home' as const, href: '#services', id: 'services', icon: Wrench },
    { label: 'Products', view: 'products' as const, href: '#products', id: 'products', icon: Package },
    { label: 'Dashboard', view: 'dashboard' as const, href: '#dashboard', id: 'dashboard', icon: LayoutDashboard },
    { label: 'Net Metering', view: 'home' as const, href: '#net-metering', id: 'net-metering', icon: Zap },
    { label: 'Projects', view: 'home' as const, href: '#projects', id: 'projects', icon: FolderCheck },
    { label: 'FAQs', view: 'home' as const, href: '#faqs', id: 'faqs', icon: HelpCircle },
    { label: 'Blog', view: 'home' as const, href: '#blog', id: 'blog', icon: BookOpen },
    { label: 'Contact', view: 'home' as const, href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md'
          : darkMode
          ? 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/50'
          : 'bg-slate-50/90 backdrop-blur-sm border-b border-slate-200/50'
      }`}
    >
      {/* Top Banner Info Bar - Desktop Only */}
      <div className={`hidden xl:flex justify-between items-center text-xs px-6 py-1.5 border-b ${
        darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-100 border-slate-200/80 text-slate-600'
      }`}>
        <div className="flex items-center gap-6 whitespace-nowrap">
          <span className="flex items-center gap-1.5 text-[#2E8B57] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
            Licensed & NABCEP Certified Engineers
          </span>
          <span className="text-slate-400 dark:text-slate-500">📍 100 Clean Energy Blvd, San Jose, CA</span>
          <span className="text-amber-500 font-medium">⚡ 25-Year Power Guarantee</span>
        </div>
        <div className="flex items-center gap-4 whitespace-nowrap">
          <a href="tel:18005557652" className="flex items-center gap-1.5 hover:text-[#0A4D9B] font-semibold transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#0A4D9B]" />
            +1 (800) 555-SOLAR
          </a>
          <span className="opacity-30">|</span>
          <span className="text-emerald-500 font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            24/7 Support Online
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <button onClick={() => handleNavClick('home', '#home')} className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0 text-left">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0A4D9B] rounded-xl flex items-center justify-center shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform flex-shrink-0">
            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFC107] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className={`text-base sm:text-lg xl:text-xl font-black tracking-tight whitespace-nowrap ${darkMode ? 'text-white' : 'text-[#0A4D9B]'}`}>
              SOLARTECH <span className="text-[#2E8B57]">ENERGY</span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-slate-500 -mt-1 whitespace-nowrap hidden sm:inline">
              Clean Solar Solutions
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links - Shown on XL screens */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
          {navLinks.map((link) => {
            const isSelectedView = currentView === link.view && (link.view !== 'home' || activeSection === link.id);
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.view, link.href)}
                className={`px-2.5 py-1.5 text-xs 2xl:text-sm font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isSelectedView
                    ? 'bg-[#0A4D9B] text-white shadow-md shadow-blue-900/20'
                    : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'text-slate-700 hover:text-[#0A4D9B] hover:bg-slate-100'
                }`}
              >
                {link.view === 'dashboard' && <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />}
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          {/* Quick Dashboard Shortcut Button */}
          <button
            onClick={() => onViewChange('dashboard')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all shadow-sm flex-shrink-0 ${
              currentView === 'dashboard'
                ? 'bg-[#2E8B57] text-white shadow-emerald-900/20 ring-2 ring-emerald-400/50'
                : darkMode
                ? 'bg-slate-800 text-emerald-400 hover:bg-slate-700 border border-slate-700'
                : 'bg-emerald-50 text-[#2E8B57] border border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span className="hidden sm:inline">Dashboard</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </button>

          {/* Quick Products Catalog Button */}
          <button
            onClick={() => onViewChange('products')}
            className={`hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all flex-shrink-0 ${
              currentView === 'products'
                ? 'bg-[#0A4D9B] text-white shadow-md'
                : darkMode
                ? 'bg-slate-800 text-amber-400 hover:bg-slate-700 border border-slate-700'
                : 'bg-amber-50 text-[#0A4D9B] border border-amber-200/80 hover:bg-amber-100'
            }`}
          >
            <Package className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>Products</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 sm:p-2.5 rounded-xl transition-colors flex-shrink-0 ${
              darkMode ? 'bg-slate-800 text-amber-400 hover:bg-slate-700 border border-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
            aria-label="Toggle Dark/Light Mode"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>

          {/* Get Free Quote CTA */}
          <button
            onClick={onOpenQuoteModal}
            className="bg-[#0A4D9B] hover:bg-[#083a75] text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Get Free Quote</span>
            <ChevronRight className="w-4 h-4 text-[#FFC107] flex-shrink-0" />
          </button>

          {/* Mobile/Tablet Hamburger Toggle (Shown on screens smaller than XL) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden p-2 sm:p-2.5 rounded-xl transition-colors flex-shrink-0 border ${
              darkMode ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className={`xl:hidden border-b shadow-2xl transition-all animate-fadeIn max-h-[85vh] overflow-y-auto ${
          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b dark:border-slate-800 border-slate-100 text-xs text-slate-500 font-bold uppercase tracking-wider">
              <span>Navigation Menu</span>
              <span className="text-[#2E8B57]">● 24/7 Solar Support</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isSelectedView = currentView === link.view && (link.view !== 'home' || activeSection === link.id);
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.view, link.href)}
                    className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-colors text-left ${
                      isSelectedView
                        ? 'bg-[#0A4D9B] text-white shadow-md'
                        : darkMode
                        ? 'bg-slate-800/80 hover:bg-slate-800 text-slate-200'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 flex-shrink-0 ${isSelectedView ? 'text-[#FFC107]' : 'text-[#0A4D9B]'}`} />
                    <span className="truncate">{link.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t dark:border-slate-800 border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#0A4D9B] hover:bg-[#083a75] text-white py-3 px-4 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Get Free Solar Quote</span>
                <ChevronRight className="w-4 h-4 text-[#FFC107]" />
              </button>

              <a
                href="tel:18005557652"
                className="w-full border-2 border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57]/10 py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 text-xs sm:text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us: +1 (800) 555-SOLAR</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

