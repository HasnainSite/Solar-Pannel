import React, { useState } from 'react';
import { Sun, Phone, Mail, MapPin, ArrowUp, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenPrivacyModal, onOpenTermsModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className={`border-t transition-colors ${
      darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      {/* Newsletter Subscription Bar */}
      <div className="border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-xl font-extrabold text-white">Subscribe to Solar Energy Market Insights</h3>
            <p className="text-xs text-slate-400">Get monthly updates on 30% tax credits, net metering policy changes, and battery technology.</p>
          </div>

          {newsletterSubscribed ? (
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs bg-emerald-500/10 px-4 py-3 rounded-xl border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4" />
              <span>Thank you! You are subscribed to SolarTech insights.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex w-full lg:w-auto items-center gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full sm:w-80 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#6D28D9]"
              />
              <button
                type="submit"
                className="bg-[#2E8B57] hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl text-xs whitespace-nowrap transition-transform hover:scale-105 shadow-md"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-xs">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-[#6D28D9] rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/30">
              <Sun className="w-6 h-6 text-[#FFC107]" />
            </div>
            <span className="text-xl font-black text-white tracking-tight">
              SOLARTECH <span className="text-[#2E8B57]">ENERGY</span>
            </span>
          </a>
          <p className="text-slate-400 leading-relaxed text-xs">
            SolarTech Energy is a premier turnkey solar photovoltaics and microgrid contractor. Licensed, insured, and committed to powering homes and businesses with clean, zero-emission energy.
          </p>
          <div className="pt-2 flex items-center gap-2 text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#2E8B57]" />
            <span>Licensed C-10 Electrical Contractor #1084291</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#calculator" className="hover:text-white transition-colors">ROI Calculator</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Company</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
            <li><a href="#products" className="hover:text-white transition-colors">Products Catalog</a></li>
            <li><a href="#net-metering" className="hover:text-white transition-colors">Net Metering</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects Gallery</a></li>
            <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#blog" className="hover:text-white transition-colors">Solar Insights</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Col 3: Services & Products */}
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Services & Hardware</h4>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-white transition-colors">Residential Solar</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Commercial Solar</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Lithium Battery Backup</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Net Metering Setup</a></li>
            <li><a href="#products" className="hover:text-white transition-colors">N-Type TOPCon Panels</a></li>
            <li><a href="#products" className="hover:text-white transition-colors">Hybrid Inverters</a></li>
            <li><a href="#products" className="hover:text-white transition-colors">Solar Water Pumps</a></li>
          </ul>
        </div>

        {/* Col 4: Contact & Hours */}
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Headquarters</h4>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#6D28D9] flex-shrink-0 mt-0.5" />
              <span>100 Clean Energy Blvd, San Jose, CA 95112</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#2E8B57] flex-shrink-0" />
              <a href="tel:18005557652" className="hover:text-white font-bold">+1 (800) 555-SOLAR</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <a href="mailto:contact@solartech-energy.com" className="hover:text-white">contact@solartech-energy.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>
          © 2026 SolarTech Energy Inc. All Rights Reserved. Clean Energy Solutions.
        </div>

        <div className="flex items-center gap-6">
          <button onClick={onOpenPrivacyModal} className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </button>
          <span>•</span>
          <button onClick={onOpenTermsModal} className="hover:text-slate-300 transition-colors">
            Terms & Conditions
          </button>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amber-400 font-bold hover:text-amber-300 transition-colors"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
