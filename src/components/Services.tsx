import React, { useState } from 'react';
import { SERVICES } from '../data/solarData';
import { ServiceItem } from '../types';
import { Home, Building2, Factory, Zap, Wrench, FileText, Sparkles, BatteryCharging, ArrowRight, Check, X, ShieldCheck } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
  onOpenQuoteWithService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ darkMode, onOpenQuoteWithService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6 text-[#0A4D9B]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#0A4D9B]" />;
      case 'Factory': return <Factory className="w-6 h-6 text-[#0A4D9B]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#FFC107]" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#2E8B57]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#0A4D9B]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#FFC107]" />;
      case 'BatteryCharging': return <BatteryCharging className="w-6 h-6 text-[#2E8B57]" />;
      default: return <Zap className="w-6 h-6 text-[#0A4D9B]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#0A4D9B]/10 text-[#0A4D9B] dark:bg-blue-500/10 dark:text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Zap className="w-4 h-4 text-[#FFC107]" />
          <span>Turnkey Clean Energy Services</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Comprehensive Solar & Power Solutions
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          From residential rooftop arrays to multi-megawatt industrial microgrids, our end-to-end services ensure maximum clean power efficiency and financial return.
        </p>
      </div>

      {/* Services Grid - Bento Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              {/* Card Header Image */}
              <div className="h-44 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                {service.badge && (
                  <span className="absolute top-3 right-3 bg-[#FFC107] text-slate-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md">
                    {service.badge}
                  </span>
                )}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-2xl bg-white text-slate-900 flex items-center justify-center shadow-lg">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold tracking-tight line-clamp-1 group-hover:text-[#0A4D9B] dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {service.shortDesc}
                </p>

                {/* Quick Feature bullets */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 truncate">
                      <Check className="w-3.5 h-3.5 text-[#2E8B57] flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-5 pt-0 flex items-center gap-2">
              <button
                onClick={() => setSelectedService(service)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200"
              >
                Learn Details
              </button>
              <button
                onClick={() => onOpenQuoteWithService(service.title)}
                className="bg-[#0A4D9B] hover:bg-[#083a75] text-white p-2.5 rounded-xl transition-transform hover:scale-105"
                title="Book Service"
              >
                <ArrowRight className="w-4 h-4 text-[#FFC107]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className={`max-w-2xl w-full rounded-3xl border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="relative h-56 sm:h-64">
              <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-[#2E8B57] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Service Overview
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Service Standards & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-xs sm:text-sm font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#2E8B57] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-xl border text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenQuoteWithService(title);
                  }}
                  className="bg-[#0A4D9B] hover:bg-[#083a75] text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2"
                >
                  <span>Book This Service Now</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
